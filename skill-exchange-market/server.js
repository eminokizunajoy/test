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
const DUMMY_USERS = [
    {
        id: "user_dika",
        username: "dika_pratama",
        email: "dika@kampus.ac.id",
        passwordHash: "pass123",
        displayName: "Dika Pratama",
        department: "Teknik Informatika",
        grade: "2023",
        bio: "Suka programming backend, terutama Python dan Node.js. Ingin belajar desain antarmuka pengguna agar web buatan sendiri terlihat lebih rapi.",
        avatarSeed: "Felix",
        teachSkills: [
            { name: "Python", category: "IT" },
            { name: "JavaScript", category: "IT" },
            { name: "Database MySQL", category: "IT" }
        ],
        learning: [
            { name: "UI/UX Design", category: "Design" },
            { name: "Figma", category: "Design" }
        ]
    },
    {
        id: "user_risa",
        username: "risa_putri",
        email: "risa@kampus.ac.id",
        passwordHash: "pass123",
        displayName: "Risa Putri",
        department: "Desain Komunikasi Visual",
        grade: "2023",
        bio: "Saya desainer grafis lepas yang biasa menggunakan Figma dan Illustrator. Sedang mencari teman untuk belajar dasar-dasar pemrograman Python.",
        avatarSeed: "Aneka",
        teachSkills: [
            { name: "UI/UX Design", category: "Design" },
            { name: "Figma", category: "Design" },
            { name: "Adobe Illustrator", category: "Design" }
        ],
        learning: [
            { name: "Python", category: "IT" },
            { name: "Dasar Logika Coding", category: "IT" }
        ]
    },
    {
        id: "user_kevin",
        username: "kevin_anggara",
        email: "kevin@kampus.ac.id",
        passwordHash: "pass123",
        displayName: "Kevin Anggara",
        department: "Manajemen Bisnis",
        grade: "2022",
        bio: "Fokus belajar di bidang kewirausahaan dan pitching ide bisnis. Ingin belajar Photoshop untuk membuat poster promo produk digital.",
        avatarSeed: "Milo",
        teachSkills: [
            { name: "Pitching Ide Bisnis", category: "Business" },
            { name: "Akuntansi Dasar", category: "Business" }
        ],
        learning: [
            { name: "Adobe Photoshop", category: "Design" },
            { name: "Bahasa Inggris Bisnis", category: "Language" }
        ]
    },
    {
        id: "user_sarah",
        username: "sarah_tan",
        email: "sarah@kampus.ac.id",
        passwordHash: "pass123",
        displayName: "Sarah Tan",
        department: "Sastra Inggris",
        grade: "2024",
        bio: "Native speaker level English. Menawarkan sesi conversation practice. Sangat ingin belajar JavaScript dasar untuk proyek hobi.",
        avatarSeed: "Aneka",
        teachSkills: [
            { name: "English Conversation", category: "Language" },
            { name: "Grammar & TOEFL", category: "Language" }
        ],
        learning: [
            { name: "JavaScript", category: "IT" }
        ]
    }
];

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

// Sync Endpoint (for polling)
app.get('/api/sync', (req, res) => {
    const db = readDB();
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
        // Cek jika partner adalah dummy user dan kecocokan tinggi (>= 65%), buat auto-match
        const user = db.users.find(u => u.id === userId);
        const score = calculateMatchScore(user, partner);
        
        const isPartnerDummy = partnerId.startsWith("user_dika") || partnerId.startsWith("user_risa") || partnerId.startsWith("user_kevin") || partnerId.startsWith("user_sarah");

        if (isPartnerDummy && score >= 65) {
            const newMatch = {
                id: "match_" + Date.now(),
                userAId: userId,
                userBId: partnerId,
                status: "ACTIVE",
                createdAt: new Date().toISOString()
            };
            db.matches.push(newMatch);
            writeDB(db);
            return res.json({ isMatch: true, partner, matches: db.matches });
        } else {
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

    // Simulasi respons otomatis dari dummy user
    const isReceiverDummy = receiverId.startsWith("user_dika") || receiverId.startsWith("user_risa") || receiverId.startsWith("user_kevin") || receiverId.startsWith("user_sarah");

    if (isReceiverDummy) {
        let reply = "";
        const lowerMsg = body.toLowerCase();

        if (lowerMsg.includes("halo") || lowerMsg.includes("hai") || lowerMsg.includes("pagi") || lowerMsg.includes("siang")) {
            reply = "Halo juga! Salam kenal ya. Makasih sudah kirim match, senang bisa terhubung dengan kamu di Skill Exchange Market!";
        } else if (lowerMsg.includes("kapan") || lowerMsg.includes("waktu") || lowerMsg.includes("luang") || lowerMsg.includes("belajar")) {
            reply = "Saya biasanya luang sore hari di weekdays atau pagi hari di hari Sabtu. Kamu lebih luang kapan? Nanti kita bisa bikin sesi belajar bareng via Zoom/Meet.";
        } else if (lowerMsg.includes("makasih") || lowerMsg.includes("terima kasih") || lowerMsg.includes("thank")) {
            reply = "Sama-sama! Semoga sesi tukar skill kita berjalan lancar ya.";
        } else {
            reply = "Menarik sekali! Saya sangat tertarik mendiskusikan itu lebih lanjut. Nanti kita coba bahas detail keahlian kita masing-masing saat belajar bareng ya.";
        }

        const newReply = {
            id: "msg_" + (Date.now() + 1000), // Selisih 1 detik agar tersusun setelah pesan user
            senderId: receiverId,
            receiverId: senderId,
            body: reply,
            createdAt: new Date(Date.now() + 1000).toISOString()
        };
        db.messages.push(newReply);
    }

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
