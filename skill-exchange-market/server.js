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
                messages: []
            };
            fs.writeFileSync(DB_FILE, JSON.stringify(initialData, null, 2), 'utf8');
            return initialData;
        }
        const data = fs.readFileSync(DB_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading database file:", error);
        return { users: DUMMY_USERS, matches: [], messages: [] };
    }
}

function writeDB(data) {
    try {
        fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
        console.error("Error writing to database file:", error);
    }
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
            writeDB(db);
        }
    }
    res.json({
        users: db.users,
        matches: db.matches,
        messages: db.messages
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
        learning: []
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
    const { userId, displayName, bio, department, grade, avatarSeed, avatarUrl } = req.body;
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

    writeDB(db);
    res.json({ user, users: db.users });
});

app.post('/api/profile/skills', (req, res) => {
    const { userId, type, skill } = req.body; // type: 'teach' atau 'learn', skill: { name, category }
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
            category: skill.category || "Other"
        });
        writeDB(db);
    }

    res.json({ user, users: db.users });
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
    res.json({ user, users: db.users });
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

    writeDB(db);
    res.json({ message: newMsg, messages: db.messages });
});

// Fallback to index.html for Single Page Routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
