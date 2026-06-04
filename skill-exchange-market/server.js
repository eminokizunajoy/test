const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_FILE = path.join(__dirname, 'db.json');

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname)); // Serve static files of the app

// Heuristic matching dummy users
const DUMMY_USERS = [];

// Helper functions for Database
function readDB() {
    try {
        if (!fs.existsSync(DB_FILE)) {
            const initialData = {
                users: DUMMY_USERS,
                matches: [],
                messages: [],
                reviews: [],
                schedules: [],
                notifications: [],
                questions: [],
                flashRequests: []
            };
            fs.writeFileSync(DB_FILE, JSON.stringify(initialData, null, 2), 'utf8');
            return initialData;
        }
        const data = fs.readFileSync(DB_FILE, 'utf8');
        const db = JSON.parse(data);
        // Ensure all required fields exist
        if (!db.users) db.users = [];
        if (!db.matches) db.matches = [];
        if (!db.messages) db.messages = [];
        if (!db.reviews) db.reviews = [];
        if (!db.schedules) db.schedules = [];
        if (!db.notifications) db.notifications = [];
        if (!db.questions) db.questions = [];
        if (!db.flashRequests) db.flashRequests = [];
        return db;
    } catch (error) {
        console.error("Error reading database file:", error);
        return { users: [], matches: [], messages: [], reviews: [], schedules: [], notifications: [], questions: [], flashRequests: [] };
    }
}

function writeDB(data) {
    try {
        fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
        console.error("Error writing to database file:", error);
    }
}

// User online/offline calculation on server side to avoid client clock drift
function mapUsersOnlineStatus(users) {
    const now = new Date();
    return users.map(u => {
        const lastActive = u.lastActive ? new Date(u.lastActive) : null;
        const isOnline = lastActive ? (now - lastActive < 15000) : false; // 15 seconds threshold
        return { ...u, isOnline };
    });
}

// XP Gamification Helpers
function awardXP(db, userId, amount) {
    const user = db.users.find(u => u.id === userId);
    if (!user) return;
    user.xp = (user.xp || 0) + amount;
    user.level = Math.floor(user.xp / 300) + 1; // 300 XP per level
    user.badges = user.badges || [];
    
    if (user.level >= 3 && !user.badges.includes("Scholar")) {
        user.badges.push("Scholar");
        addNotification(db, userId, "badge", "Selamat! Anda mendapatkan gelar 'Scholar' karena telah mencapai Level 3.");
    }
    if (user.level >= 6 && !user.badges.includes("Grandmaster")) {
        user.badges.push("Grandmaster");
        addNotification(db, userId, "badge", "Luar biasa! Anda telah mencapai Level 6 dan dianugerahi gelar 'Grandmaster'!");
    }
    
    // Check Language badge
    const langSkillsCount = (user.teachSkills || []).filter(s => s.category === "Language").length;
    if (langSkillsCount >= 3 && !user.badges.includes("Bahasa Is My Jam")) {
        user.badges.push("Bahasa Is My Jam");
        addNotification(db, userId, "badge", "Selamat! Anda mendapatkan lencana 'Bahasa Is My Jam' karena memiliki 3+ skill bahasa.");
    }

    // Check IT/Programming badge
    const itSkillsCount = (user.teachSkills || []).filter(s => s.category === "IT").length;
    if (itSkillsCount >= 3 && !user.badges.includes("Bug Hunter")) {
        user.badges.push("Bug Hunter");
        addNotification(db, userId, "badge", "Selamat! Anda mendapatkan lencana 'Bug Hunter' karena memiliki 3+ skill IT/Programming.");
    }
}

function addNotification(db, userId, type, content) {
    db.notifications = db.notifications || [];
    db.notifications.push({
        id: "not_" + Date.now() + "_" + Math.random().toString(36).substr(2, 5),
        userId,
        type,
        content,
        read: false,
        createdAt: new Date().toISOString()
    });
}

// Matching Heuristics Score
function calculateMatchScore(userA, userB) {
    if (!userA || !userB) return 0;
    
    let aTeachesB = userA.teachSkills.some(skill => 
        userB.learning.some(need => need.name.toLowerCase() === skill.name.toLowerCase())
    );

    let bTeachesA = userB.teachSkills.some(skill => 
        userA.learning.some(need => need.name.toLowerCase() === skill.name.toLowerCase())
    );

    if (aTeachesB && bTeachesA) return 100;
    if (aTeachesB || bTeachesA) return 65;

    let sharedCats = 0;
    userA.learning.forEach(need => {
        if (userB.learning.some(n => n.category === need.category)) {
            sharedCats++;
        }
    });

    if (sharedCats > 0) return 30;
    return 10;
}

// ================= API ENDPOINTS =================

// Sync Endpoint (for polling & heartbeat)
app.get('/api/sync', (req, res) => {
    const { userId } = req.query;
    const db = readDB();
    if (userId) {
        const userIndex = db.users.findIndex(u => u.id === userId);
        if (userIndex !== -1) {
            db.users[userIndex].lastActive = new Date().toISOString();
            
            // Backward compatibility update
            const user = db.users[userIndex];
            if (user.xp === undefined) user.xp = 0;
            if (user.level === undefined) user.level = 1;
            if (user.badges === undefined) user.badges = [];
            if (user.studyMethod === undefined) user.studyMethod = "Both";
            if (user.availability === undefined) user.availability = "Both";
            
            writeDB(db);
        }
    }
    res.json({
        users: mapUsersOnlineStatus(db.users),
        matches: db.matches,
        messages: db.messages,
        reviews: db.reviews || [],
        schedules: db.schedules || [],
        notifications: db.notifications || [],
        questions: db.questions || [],
        flashRequests: db.flashRequests || []
    });
});

// Authentication
app.post('/api/auth/register', (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ error: "Kolom pendaftaran tidak lengkap" });
    }

    const db = readDB();
    const emailExists = db.users.some(u => u.email.toLowerCase() === email.toLowerCase());
    const usernameExists = db.users.some(u => u.username.toLowerCase() === username.toLowerCase());

    if (emailExists || usernameExists) {
        return res.status(400).json({ error: "Username atau Email sudah terdaftar" });
    }

    const newUser = {
        id: "user_" + Date.now(),
        username: username.toLowerCase(),
        email: email.toLowerCase(),
        passwordHash: password,
        displayName: username.split("_").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
        department: "Fakultas Belum Diisi",
        grade: "2026",
        bio: "Mahasiswa baru di Skill Exchange Market.",
        avatarSeed: "Felix",
        teachSkills: [],
        learning: [],
        xp: 0,
        level: 1,
        badges: [],
        studyMethod: "Both",
        availability: "Both"
    };

    db.users.push(newUser);
    writeDB(db);

    res.json({ user: newUser, ...db });
});

app.post('/api/auth/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: "Email dan password wajib diisi" });
    }

    const db = readDB();
    const user = db.users.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (!user || user.passwordHash !== password) {
        return res.status(401).json({ error: "Email atau password salah!" });
    }

    res.json({ user, ...db });
});

// Swiping API
app.post('/api/swipe', (req, res) => {
    const { userId, partnerId, action } = req.body; // action: 'like' atau 'pass'
    if (!userId || !partnerId || !action) {
        return res.status(400).json({ error: "Parameter swipe tidak lengkap" });
    }

    const db = readDB();
    const partner = db.users.find(u => u.id === partnerId);
    if (!partner) {
        return res.status(404).json({ error: "Partner tidak ditemukan" });
    }

    if (action === 'pass') {
        const newMatch = {
            id: "match_" + Date.now(),
            userAId: userId,
            userBId: partnerId,
            status: "PASSED",
            createdAt: new Date().toISOString()
        };
        db.matches.push(newMatch);
        writeDB(db);
        return res.json({ isMatch: false, matches: db.matches });
    }

    // Aksi: LIKE
    // Cari apakah ada PENDING dari partner ke kita
    const incomingIndex = db.matches.findIndex(m => m.userAId === partnerId && m.userBId === userId && m.status === "PENDING");

    if (incomingIndex !== -1) {
        // Terjadi Match Aktif
        db.matches[incomingIndex].status = "ACTIVE";
        writeDB(db);
        return res.json({ isMatch: true, partner, matches: db.matches });
    }

    // Cek apakah relasi sudah ada
    const relationExists = db.matches.some(m => 
        (m.userAId === userId && m.userBId === partnerId) ||
        (m.userAId === partnerId && m.userBId === userId)
    );

    if (!relationExists) {
        const newMatch = {
            id: "match_" + Date.now(),
            userAId: userId,
            userBId: partnerId,
            status: "PENDING",
            createdAt: new Date().toISOString()
        };
        db.matches.push(newMatch);
        writeDB(db);
        return res.json({ isMatch: false, matches: db.matches });
    }

    res.json({ isMatch: false, matches: db.matches });
});

// Profile Management
app.post('/api/profile/update', (req, res) => {
    const { userId, displayName, bio, department, grade, avatarSeed, avatarUrl, studyMethod, availability } = req.body;
    if (!userId) {
        return res.status(400).json({ error: "User ID wajib disertakan" });
    }

    const db = readDB();
    const userIndex = db.users.findIndex(u => u.id === userId);
    if (userIndex === -1) {
        return res.status(404).json({ error: "User tidak ditemukan" });
    }

    // Update fields
    const user = db.users[userIndex];
    if (displayName) user.displayName = displayName;
    if (bio !== undefined) user.bio = bio;
    if (department) user.department = department;
    if (grade) user.grade = grade;
    if (avatarSeed) user.avatarSeed = avatarSeed;
    if (avatarUrl !== undefined) user.avatarUrl = avatarUrl;
    if (studyMethod) user.studyMethod = studyMethod;
    if (availability) user.availability = availability;

    writeDB(db);
    res.json({ user, users: mapUsersOnlineStatus(db.users) });
});

app.post('/api/profile/skills', (req, res) => {
    const { userId, type, skill } = req.body; // type: 'teach' atau 'learn', skill: { name, category, level }
    if (!userId || !type || !skill || !skill.name) {
        return res.status(400).json({ error: "Parameter penambahan skill tidak lengkap" });
    }

    const db = readDB();
    const user = db.users.find(u => u.id === userId);
    if (!user) {
        return res.status(404).json({ error: "User tidak ditemukan" });
    }

    const targetArray = type === 'teach' ? 'teachSkills' : 'learning';
    
    // Cek duplikasi
    const exists = user[targetArray].some(s => s.name.toLowerCase() === skill.name.toLowerCase());
    if (!exists) {
        user[targetArray].push({
            name: skill.name.trim(),
            category: skill.category || "Other",
            level: skill.level || "Intermediate"
        });
        
        // Award XP
        awardXP(db, userId, 50);
        writeDB(db);
    }

    res.json({ user, users: mapUsersOnlineStatus(db.users) });
});

app.post('/api/profile/skills/delete', (req, res) => {
    const { userId, type, skillName } = req.body;
    if (!userId || !type || !skillName) {
        return res.status(400).json({ error: "Parameter penghapusan skill tidak lengkap" });
    }

    const db = readDB();
    const user = db.users.find(u => u.id === userId);
    if (!user) {
        return res.status(404).json({ error: "User tidak ditemukan" });
    }

    const targetArray = type === 'teach' ? 'teachSkills' : 'learning';
    user[targetArray] = user[targetArray].filter(s => s.name.toLowerCase() !== skillName.toLowerCase());

    writeDB(db);
    res.json({ user, users: mapUsersOnlineStatus(db.users) });
});

// Match Acceptance / Rejection API
app.post('/api/matches/accept', (req, res) => {
    const { matchId } = req.body;
    if (!matchId) {
        return res.status(400).json({ error: "Match ID is required" });
    }

    const db = readDB();
    const matchIndex = db.matches.findIndex(m => m.id === matchId);
    if (matchIndex === -1) {
        return res.status(404).json({ error: "Match not found" });
    }

    db.matches[matchIndex].status = "ACTIVE";
    const match = db.matches[matchIndex];
    
    // Award XP to both
    awardXP(db, match.userAId, 100);
    awardXP(db, match.userBId, 100);

    // Notifications
    const userA = db.users.find(u => u.id === match.userAId);
    const userB = db.users.find(u => u.id === match.userBId);
    if (userA && userB) {
        addNotification(db, match.userAId, "match", `Kecocokan terjalin! Anda sekarang terhubung dengan ${userB.displayName}.`);
        addNotification(db, match.userBId, "match", `Kecocokan terjalin! Anda sekarang terhubung dengan ${userA.displayName}.`);
    }

    writeDB(db);
    res.json({ matches: db.matches });
});

app.post('/api/matches/reject', (req, res) => {
    const { matchId } = req.body;
    if (!matchId) {
        return res.status(400).json({ error: "Match ID is required" });
    }

    const db = readDB();
    db.matches = db.matches.filter(m => m.id !== matchId);
    writeDB(db);
    res.json({ matches: db.matches });
});

// Chat Messages API
app.post('/api/messages', (req, res) => {
    const { senderId, receiverId, body } = req.body;
    if (!senderId || !receiverId || !body) {
        return res.status(400).json({ error: "Pesan tidak lengkap" });
    }

    const db = readDB();
    const newMsg = {
        id: "msg_" + Date.now(),
        senderId,
        receiverId,
        body: body.trim(),
        createdAt: new Date().toISOString()
    };
    db.messages.push(newMsg);

    // Award XP
    awardXP(db, senderId, 10);

    writeDB(db);
    res.json({ message: newMsg, messages: db.messages });
});

// ================= PHASE 2 ENDPOINTS =================

// Leaderboard Endpoint
app.get('/api/leaderboard', (req, res) => {
    const db = readDB();
    const topUsers = [...db.users]
        .sort((a, b) => (b.xp || 0) - (a.xp || 0))
        .slice(0, 10)
        .map(u => ({
            id: u.id,
            displayName: u.displayName,
            department: u.department,
            grade: u.grade,
            xp: u.xp || 0,
            level: u.level || 1,
            badges: u.badges || []
        }));
    res.json({ leaderboard: topUsers });
});

// Reviews Endpoints
app.post('/api/reviews', (req, res) => {
    const { reviewerId, revieweeId, rating, comment } = req.body;
    if (!reviewerId || !revieweeId || !rating) {
        return res.status(400).json({ error: "Kolom ulasan tidak lengkap" });
    }

    const db = readDB();
    const newReview = {
        id: "rev_" + Date.now(),
        reviewerId,
        revieweeId,
        rating: Number(rating),
        comment: (comment || "").trim(),
        createdAt: new Date().toISOString()
    };
    db.reviews = db.reviews || [];
    db.reviews.push(newReview);

    // Award XP
    awardXP(db, reviewerId, 50);  // Reviewer gets 50 XP
    awardXP(db, revieweeId, 150); // Reviewee gets 150 XP

    // Notify reviewee
    const reviewer = db.users.find(u => u.id === reviewerId);
    if (reviewer) {
        addNotification(db, revieweeId, "review", `${reviewer.displayName} memberikan rating ⭐ ${rating} untuk Anda!`);
    }

    writeDB(db);
    res.json({ review: newReview, reviews: db.reviews });
});

// Schedules Endpoints
app.post('/api/schedules', (req, res) => {
    const { matchId, title, date, time, link, createdById } = req.body;
    if (!matchId || !title || !date || !time || !createdById) {
        return res.status(400).json({ error: "Kolom jadwal tidak lengkap" });
    }

    const db = readDB();
    const newSchedule = {
        id: "sch_" + Date.now(),
        matchId,
        title: title.trim(),
        date,
        time,
        link: (link || "").trim(),
        createdById,
        createdAt: new Date().toISOString()
    };
    db.schedules = db.schedules || [];
    db.schedules.push(newSchedule);

    // Night Owl Badge check
    const hour = parseInt(time.split(":")[0]);
    if (hour >= 21 || hour < 6) {
        const creator = db.users.find(u => u.id === createdById);
        if (creator && !creator.badges.includes("Night Owl")) {
            creator.badges = creator.badges || [];
            creator.badges.push("Night Owl");
            addNotification(db, createdById, "badge", "Selamat! Anda mendapatkan lencana 'Night Owl' karena menjadwalkan sesi belajar larat malam.");
        }
    }

    // Award XP
    awardXP(db, createdById, 50);

    // Find partner to notify
    const match = db.matches.find(m => m.id === matchId);
    if (match) {
        const partnerId = match.userAId === createdById ? match.userBId : match.userAId;
        const creator = db.users.find(u => u.id === createdById);
        if (creator) {
            addNotification(db, partnerId, "schedule", `${creator.displayName} mengundang Anda ke sesi belajar: ${title} pada ${date} pukul ${time}.`);
        }
    }

    writeDB(db);
    res.json({ schedule: newSchedule, schedules: db.schedules });
});

// Notifications Read
app.post('/api/notifications/read', (req, res) => {
    const { userId } = req.body;
    if (!userId) {
        return res.status(400).json({ error: "User ID is required" });
    }

    const db = readDB();
    db.notifications = db.notifications || [];
    db.notifications.forEach(n => {
        if (n.userId === userId) {
            n.read = true;
        }
    });

    writeDB(db);
    res.json({ notifications: db.notifications });
});

// Q&A Forum Endpoints
app.post('/api/forum/ask', (req, res) => {
    const { userId, title, body, category } = req.body;
    if (!userId || !title || !body) {
        return res.status(400).json({ error: "Kolom pertanyaan tidak lengkap" });
    }

    const db = readDB();
    const newQuestion = {
        id: "q_" + Date.now(),
        userId,
        title: title.trim(),
        body: body.trim(),
        category: category || "Other",
        answers: [],
        createdAt: new Date().toISOString()
    };
    db.questions = db.questions || [];
    db.questions.push(newQuestion);

    // Award XP
    awardXP(db, userId, 50);

    writeDB(db);
    res.json({ question: newQuestion, questions: db.questions });
});

app.post('/api/forum/answer', (req, res) => {
    const { questionId, userId, body } = req.body;
    if (!questionId || !userId || !body) {
        return res.status(400).json({ error: "Kolom jawaban tidak lengkap" });
    }

    const db = readDB();
    db.questions = db.questions || [];
    const qIndex = db.questions.findIndex(q => q.id === questionId);
    if (qIndex === -1) {
        return res.status(404).json({ error: "Pertanyaan tidak ditemukan" });
    }

    const newAnswer = {
        id: "ans_" + Date.now(),
        userId,
        body: body.trim(),
        votes: 0,
        createdAt: new Date().toISOString()
    };
    db.questions[qIndex].answers.push(newAnswer);

    // Award XP
    awardXP(db, userId, 100);

    // Notify asker
    const askerId = db.questions[qIndex].userId;
    const replier = db.users.find(u => u.id === userId);
    if (replier && askerId !== userId) {
        addNotification(db, askerId, "forum", `${replier.displayName} menjawab pertanyaan Anda: "${db.questions[qIndex].title.substring(0, 20)}..."`);
    }

    writeDB(db);
    res.json({ question: db.questions[qIndex], questions: db.questions });
});

// Flash Match Endpoints
app.post('/api/flash-requests/create', (req, res) => {
    const { userId, title, rewardDescription, category } = req.body;
    if (!userId || !title || !rewardDescription) {
        return res.status(400).json({ error: "Kolom request darurat tidak lengkap" });
    }

    const db = readDB();
    const newRequest = {
        id: "flash_" + Date.now(),
        userId,
        title: title.trim(),
        rewardDescription: rewardDescription.trim(),
        category: category || "Other",
        status: 'OPEN',
        takenBy: null,
        createdAt: new Date().toISOString()
    };
    db.flashRequests = db.flashRequests || [];
    db.flashRequests.push(newRequest);

    // Award XP
    awardXP(db, userId, 50);

    writeDB(db);
    res.json({ request: newRequest, flashRequests: db.flashRequests });
});

app.post('/api/flash-requests/take', (req, res) => {
    const { requestId, userId } = req.body;
    if (!requestId || !userId) {
        return res.status(400).json({ error: "Parameter bid tidak lengkap" });
    }

    const db = readDB();
    db.flashRequests = db.flashRequests || [];
    const reqIndex = db.flashRequests.findIndex(r => r.id === requestId);
    if (reqIndex === -1) {
        return res.status(404).json({ error: "Request tidak ditemukan" });
    }

    const request = db.flashRequests[reqIndex];
    if (request.status !== 'OPEN') {
        return res.status(400).json({ error: "Request ini sudah diambil oleh pengguna lain" });
    }

    if (request.userId === userId) {
        return res.status(400).json({ error: "Anda tidak bisa mengambil request Anda sendiri" });
    }

    // Set taken
    request.status = 'TAKEN';
    request.takenBy = userId;

    // Create match instantly
    db.matches = db.matches || [];
    const newMatch = {
        id: "match_" + Date.now(),
        userAId: request.userId,
        userBId: userId,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
    };
    db.matches.push(newMatch);

    // Award XP to both
    awardXP(db, request.userId, 100);
    awardXP(db, userId, 100);

    // Create notifications for both
    const requester = db.users.find(u => u.id === request.userId);
    const taker = db.users.find(u => u.id === userId);
    if (requester && taker) {
        addNotification(db, request.userId, "match", `Flash Match! ${taker.displayName} telah mengambil request darurat Anda: "${request.title}".`);
        addNotification(db, userId, "match", `Flash Match! Anda berhasil mengambil request darurat dari ${requester.displayName}: "${request.title}".`);
    }

    writeDB(db);
    res.json({ request, flashRequests: db.flashRequests, matches: db.matches });
});

// Fallback to index.html for Single Page Routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
