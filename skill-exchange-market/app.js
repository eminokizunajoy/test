// ================= STATE & DATA INITIALIZATION =================
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

// Load data dari localStorage atau initialize jika kosong
let users = JSON.parse(localStorage.getItem("sem_users"));
if (!users || users.length === 0) {
    users = DUMMY_USERS;
    localStorage.setItem("sem_users", JSON.stringify(users));
}

let matches = JSON.parse(localStorage.getItem("sem_matches")) || [];
let messages = JSON.parse(localStorage.getItem("sem_messages")) || [];
let currentUser = JSON.parse(localStorage.getItem("sem_current_user")) || null;

// Temporary active chat state
let activeChatPartnerId = null;

// ================= DOM ELEMENTS =================
const elAuthContainer = document.getElementById("auth-container");
const elAppContainer = document.getElementById("app-container");
const elLoginCard = document.getElementById("login-card");
const elRegisterCard = document.getElementById("register-card");
const elLoginForm = document.getElementById("login-form");
const elRegisterForm = document.getElementById("register-form");
const elToRegister = document.getElementById("to-register");
const elToLogin = document.getElementById("to-login");
const elBtnLogout = document.getElementById("btn-logout");

// Sidebar DOM
const elUserDisplayName = document.getElementById("user-display-name");
const elUserDisplayDept = document.getElementById("user-display-dept");
const elUserAvatar = document.getElementById("user-avatar");
const elChatBadge = document.getElementById("chat-badge");

// Views
const elViews = document.querySelectorAll(".app-view");
const elMenuItems = document.querySelectorAll(".menu-item");

// Dashboard DOM
const elStatTeach = document.getElementById("stat-teach-count");
const elStatLearn = document.getElementById("stat-learn-count");
const elStatMatch = document.getElementById("stat-match-count");
const elRecommendedList = document.getElementById("recommended-list");
const elPreviewAvatar = document.getElementById("preview-avatar");
const elPreviewName = document.getElementById("preview-name");
const elPreviewDeptGrade = document.getElementById("preview-dept-grade");
const elPreviewTeachSkills = document.getElementById("preview-teach-skills");
const elPreviewLearnNeeds = document.getElementById("preview-learn-needs");

// Search DOM
const elSearchInput = document.getElementById("search-input");
const elFilterCategory = document.getElementById("filter-category");
const elSearchResultsGrid = document.getElementById("search-results-grid");

// Matches DOM
const elIncomingMatchesList = document.getElementById("incoming-matches-list");
const elActiveMatchesList = document.getElementById("active-matches-list");

// Chat DOM
const elChatUsersList = document.getElementById("chat-users-list");
const elChatNoSelection = document.getElementById("chat-no-selection");
const elChatActive = document.getElementById("chat-active");
const elChatPartnerAvatar = document.getElementById("chat-partner-avatar");
const elChatPartnerName = document.getElementById("chat-partner-name");
const elChatMessagesContainer = document.getElementById("chat-messages-container");
const elChatSendForm = document.getElementById("chat-send-form");
const elChatInput = document.getElementById("chat-input");

// Profile DOM
const elProfileForm = document.getElementById("profile-form");
const elProfileName = document.getElementById("profile-name");
const elProfileAvatarSeed = document.getElementById("profile-avatar-seed");
const elProfileDept = document.getElementById("profile-dept");
const elProfileGrade = document.getElementById("profile-grade");
const elProfileBio = document.getElementById("profile-bio");

const elInputTeachSkill = document.getElementById("input-teach-skill");
const elSelectTeachCat = document.getElementById("select-teach-cat");
const elBtnAddTeach = document.getElementById("btn-add-teach");
const elManageTeachList = document.getElementById("manage-teach-list");

const elInputLearnSkill = document.getElementById("input-learn-skill");
const elSelectLearnCat = document.getElementById("select-learn-cat");
const elBtnAddLearn = document.getElementById("btn-add-learn");
const elManageLearnList = document.getElementById("manage-learn-list");

// ================= TOAST NOTIFICATION =================
function showToast(message, type = "success") {
    const elToast = document.getElementById("toast");
    elToast.innerText = message;
    elToast.className = `toast ${type}`;
    elToast.classList.remove("hidden");
    
    setTimeout(() => {
        elToast.classList.add("hidden");
    }, 3000);
}

// ================= ROUTING & MENU SWITCHING =================
elMenuItems.forEach(item => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = item.getAttribute("data-target");
        
        elMenuItems.forEach(mi => mi.classList.remove("active"));
        item.classList.add("active");
        
        elViews.forEach(view => {
            if (view.id === targetId) {
                view.classList.remove("hidden");
            } else {
                view.classList.add("hidden");
            }
        });

        // Trigger updates on switching views
        if (targetId === "view-dashboard") {
            renderDashboard();
        } else if (targetId === "view-search") {
            renderSearch();
        } else if (targetId === "view-matches") {
            renderMatches();
        } else if (targetId === "view-chat") {
            renderChat();
        } else if (targetId === "view-profile") {
            loadProfileFields();
        }
    });
});

// ================= AUTH LOGIC =================
elToRegister.addEventListener("click", (e) => {
    e.preventDefault();
    elLoginCard.classList.add("hidden");
    elRegisterCard.classList.remove("hidden");
});

elToLogin.addEventListener("click", (e) => {
    e.preventDefault();
    elRegisterCard.classList.add("hidden");
    elLoginCard.classList.remove("hidden");
});

elLoginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = elLoginEmail.value.trim();
    const password = elLoginPassword.value;

    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!user || user.passwordHash !== password) {
        showToast("Email atau password Anda salah!", "danger");
        return;
    }

    currentUser = user;
    localStorage.setItem("sem_current_user", JSON.stringify(currentUser));
    showToast(`Selamat datang, ${user.displayName || user.username}!`);
    loginSuccess();
});

elRegisterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("reg-username").value.trim().toLowerCase();
    const email = document.getElementById("reg-email").value.trim().toLowerCase();
    const password = document.getElementById("reg-password").value;

    if (password.length < 6) {
        showToast("Password minimal harus 6 karakter!", "danger");
        return;
    }

    const emailExists = users.some(u => u.email === email);
    const userExists = users.some(u => u.username === username);

    if (emailExists || userExists) {
        showToast("Username atau Email sudah terdaftar!", "danger");
        return;
    }

    const newUser = {
        id: "user_" + Date.now(),
        username,
        email,
        passwordHash: password,
        displayName: username.split("_").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
        department: "Fakultas Belum Diisi",
        grade: "2026",
        bio: "Mahasiswa baru di Skill Exchange Market.",
        avatarSeed: "Felix",
        teachSkills: [],
        learning: []
    };

    users.push(newUser);
    localStorage.setItem("sem_users", JSON.stringify(users));

    currentUser = newUser;
    localStorage.setItem("sem_current_user", JSON.stringify(currentUser));
    showToast("Pendaftaran berhasil!");
    loginSuccess();
});

elBtnLogout.addEventListener("click", () => {
    currentUser = null;
    localStorage.removeItem("sem_current_user");
    showToast("Berhasil keluar dari akun.", "success");
    logoutSuccess();
});

function loginSuccess() {
    elAuthContainer.classList.add("hidden");
    elAppContainer.classList.remove("hidden");
    
    // Set Sidebar User Info
    elUserDisplayName.innerText = currentUser.displayName || currentUser.username;
    elUserDisplayDept.innerText = `${currentUser.department || 'Jurusan'} (${currentUser.grade || 'Angkatan'})`;
    elUserAvatar.src = `https://api.dicebear.com/7.x/bottts/svg?seed=${currentUser.avatarSeed || 'default'}`;

    // Reset forms
    elLoginForm.reset();
    elRegisterForm.reset();

    // Default to dashboard
    document.querySelector('[data-target="view-dashboard"]').click();
    updateChatBadge();
}

function logoutSuccess() {
    elAppContainer.classList.add("hidden");
    elAuthContainer.classList.remove("hidden");
    elLoginCard.classList.remove("hidden");
    elRegisterCard.classList.add("hidden");
}

// Check session on start
const elLoginEmail = document.getElementById("login-email");
const elLoginPassword = document.getElementById("login-password");

if (currentUser) {
    loginSuccess();
}

// ================= MATCHING ENGINE (HEURISTIC) =================
function calculateMatchScore(userA, userB) {
    if (!userA || !userB) return 0;
    
    // Heuristic 1: Mutual Exchange
    // User A teaches what User B wants to learn AND User B teaches what User A wants to learn
    let aTeachesB = userA.teachSkills.some(skill => 
        userB.learning.some(need => need.name.toLowerCase() === skill.name.toLowerCase())
    );

    let bTeachesA = userB.teachSkills.some(skill => 
        userA.learning.some(need => need.name.toLowerCase() === skill.name.toLowerCase())
    );

    if (aTeachesB && bTeachesA) {
        return 100; // Perfect Mutual Match
    }

    // Heuristic 2: One-way Match
    if (aTeachesB || bTeachesA) {
        return 65; // Good Exchange Option
    }

    // Heuristic 3: Shared Interest categories
    let sharedCats = 0;
    userA.learning.forEach(need => {
        if (userB.learning.some(n => n.category === need.category)) {
            sharedCats++;
        }
    });

    if (sharedCats > 0) {
        return 30; // Category Interest overlap
    }

    return 10; // Low correlation
}

function getRecommendedMatches() {
    if (!currentUser) return [];

    let recommendations = [];

    users.forEach(otherUser => {
        if (otherUser.id === currentUser.id) return;

        const score = calculateMatchScore(currentUser, otherUser);
        
        // Cek status relasi match jika ada
        const relationship = matches.find(m => 
            (m.userAId === currentUser.id && m.userBId === otherUser.id) ||
            (m.userAId === otherUser.id && m.userBId === currentUser.id)
        );

        recommendations.push({
            user: otherUser,
            score: score,
            relationshipStatus: relationship ? relationship.status : "NONE"
        });
    });

    // Urutkan berdasarkan score tertinggi
    return recommendations.sort((a, b) => b.score - a.score);
}

// ================= DASHBOARD RENDER =================
function renderDashboard() {
    if (!currentUser) return;

    // 1. Stats Counter
    elStatTeach.innerText = currentUser.teachSkills.length;
    elStatLearn.innerText = currentUser.learning.length;

    const activeMatchesCount = matches.filter(m => 
        (m.userAId === currentUser.id || m.userBId === currentUser.id) && m.status === "ACTIVE"
    ).length;
    elStatMatch.innerText = activeMatchesCount;

    // 2. Profile Preview Card
    elPreviewAvatar.src = `https://api.dicebear.com/7.x/bottts/svg?seed=${currentUser.avatarSeed || 'default'}`;
    elPreviewName.innerText = currentUser.displayName || currentUser.username;
    elPreviewDeptGrade.innerText = `${currentUser.department || 'Jurusan'} - Angkatan ${currentUser.grade || '-'}`;

    // Render Teach Skills Chips
    elPreviewTeachSkills.innerHTML = "";
    if (currentUser.teachSkills.length === 0) {
        elPreviewTeachSkills.innerHTML = `<span class="subtitle">Belum ada skill diajarkan</span>`;
    } else {
        currentUser.teachSkills.forEach(s => {
            const catClass = getCategoryClass(s.category);
            elPreviewTeachSkills.innerHTML += `<span class="skill-chip ${catClass}">${s.name}</span>`;
        });
    }

    // Render Learn Skills Chips
    elPreviewLearnNeeds.innerHTML = "";
    if (currentUser.learning.length === 0) {
        elPreviewLearnNeeds.innerHTML = `<span class="subtitle">Belum ada kebutuhan belajar</span>`;
    } else {
        currentUser.learning.forEach(s => {
            const catClass = getCategoryClass(s.category);
            elPreviewLearnNeeds.innerHTML += `<span class="skill-chip ${catClass}">${s.name}</span>`;
        });
    }

    // 3. Recommended List
    const recs = getRecommendedMatches();
    elRecommendedList.innerHTML = "";

    // Tampilkan hanya top 3 dengan score >= 30% yang belum berteman/pending
    const filteredRecs = recs.filter(r => r.relationshipStatus === "NONE" && r.score >= 30).slice(0, 3);

    if (filteredRecs.length === 0) {
        elRecommendedList.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-wand-magic-sparkles"></i>
                <p>Tidak ada rekomendasi baru yang cocok. Coba tambahkan keahlian atau kebutuhan belajar baru di tab Edit Profil!</p>
            </div>
        `;
    } else {
        filteredRecs.forEach(r => {
            const teachList = r.user.teachSkills.map(s => s.name).join(", ") || "Tidak ada";
            
            elRecommendedList.innerHTML += `
                <div class="user-match-card">
                    <div class="user-match-info">
                        <img src="https://api.dicebear.com/7.x/bottts/svg?seed=${r.user.avatarSeed}" alt="Avatar" class="avatar-small">
                        <div class="user-match-details">
                            <h4>${r.user.displayName} <span class="match-percentage">${r.score}% Match</span></h4>
                            <p>${r.user.department} (${r.user.grade})</p>
                            <p class="subtitle" style="margin-bottom:0; font-size:0.75rem;">Mengajar: <strong>${teachList}</strong></p>
                        </div>
                    </div>
                    <button class="btn btn-primary" onclick="sendMatchRequest('${r.user.id}')">Kirim Match</button>
                </div>
            `;
        });
    }
}

function getCategoryClass(cat) {
    switch (cat) {
        case "IT": return "chip-it";
        case "Design": return "chip-design";
        case "Business": return "chip-business";
        case "Language": return "chip-language";
        default: return "chip-other";
    }
}

// ================= SEARCH PARTNERS RENDER =================
function renderSearch() {
    const keyword = elSearchInput.value.trim().toLowerCase();
    const category = elFilterCategory.value;

    elSearchResultsGrid.innerHTML = "";

    const otherUsers = users.filter(u => u.id !== currentUser.id);
    let resultsCount = 0;

    otherUsers.forEach(otherUser => {
        // Filter keyword (nama, bio, atau nama keahlian)
        const nameMatch = otherUser.displayName.toLowerCase().includes(keyword);
        const bioMatch = otherUser.bio.toLowerCase().includes(keyword);
        const skillMatch = otherUser.teachSkills.some(s => s.name.toLowerCase().includes(keyword));
        const matchesKeyword = nameMatch || bioMatch || skillMatch;

        // Filter category
        let matchesCategory = true;
        if (category !== "all") {
            matchesCategory = otherUser.teachSkills.some(s => s.category === category);
        }

        if (matchesKeyword && matchesCategory) {
            resultsCount++;
            
            // Cek status match
            const relationship = matches.find(m => 
                (m.userAId === currentUser.id && m.userBId === otherUser.id) ||
                (m.userAId === otherUser.id && m.userBId === currentUser.id)
            );

            let actionBtnHtml = "";
            if (!relationship) {
                actionBtnHtml = `<button class="btn btn-primary btn-block margin-top" onclick="sendMatchRequest('${otherUser.id}')"><i class="fa-solid fa-handshake"></i> Kirim Match</button>`;
            } else if (relationship.status === "PENDING") {
                if (relationship.userAId === currentUser.id) {
                    actionBtnHtml = `<button class="btn btn-secondary btn-block margin-top" disabled><i class="fa-regular fa-paper-plane"></i> Menunggu Konfirmasi</button>`;
                } else {
                    actionBtnHtml = `<button class="btn btn-primary btn-block margin-top" onclick="acceptMatchRequest('${relationship.id}')"><i class="fa-solid fa-check"></i> Terima Match</button>`;
                }
            } else if (relationship.status === "ACTIVE") {
                actionBtnHtml = `<button class="btn btn-secondary btn-block margin-top" onclick="openChatWindow('${otherUser.id}')"><i class="fa-regular fa-comments"></i> Mulai Chat</button>`;
            }

            const matchScore = calculateMatchScore(currentUser, otherUser);

            const teachChips = otherUser.teachSkills.map(s => 
                `<span class="skill-chip ${getCategoryClass(s.category)}">${s.name}</span>`
            ).join("") || `<span class="subtitle">Belum ada skill diajarkan</span>`;

            elSearchResultsGrid.innerHTML += `
                <div class="partner-card">
                    <div class="partner-header">
                        <img src="https://api.dicebear.com/7.x/bottts/svg?seed=${otherUser.avatarSeed}" alt="Avatar" class="avatar-small">
                        <div>
                            <h4>${otherUser.displayName} <span class="match-percentage">${matchScore}%</span></h4>
                            <p>${otherUser.department} (${otherUser.grade})</p>
                        </div>
                    </div>
                    <p class="partner-bio">${otherUser.bio}</p>
                    <div class="partner-skills">
                        <h5>Mengajar:</h5>
                        <div class="skills-wrapper">${teachChips}</div>
                    </div>
                    ${actionBtnHtml}
                </div>
            `;
        }
    });

    if (resultsCount === 0) {
        elSearchResultsGrid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <i class="fa-solid fa-users-slash"></i>
                <p>Tidak menemukan partner yang cocok dengan pencarian Anda.</p>
            </div>
        `;
    }
}

elSearchInput.addEventListener("input", renderSearch);
elFilterCategory.addEventListener("change", renderSearch);

// ================= MATCH ACTIONS & REQUESTS =================
window.sendMatchRequest = function(partnerId) {
    // Hindari duplikasi
    const exists = matches.some(m => 
        (m.userAId === currentUser.id && m.userBId === partnerId) ||
        (m.userAId === partnerId && m.userBId === currentUser.id)
    );

    if (exists) return;

    const newMatch = {
        id: "match_" + Date.now(),
        userAId: currentUser.id,
        userBId: partnerId,
        status: "PENDING",
        createdAt: new Date().toISOString()
    };

    matches.push(newMatch);
    localStorage.setItem("sem_matches", JSON.stringify(matches));
    showToast("Permintaan match berhasil dikirim!");
    
    // Refresh views
    renderDashboard();
    renderSearch();
};

window.acceptMatchRequest = function(matchId) {
    const match = matches.find(m => m.id === matchId);
    if (!match) return;

    match.status = "ACTIVE";
    localStorage.setItem("sem_matches", JSON.stringify(matches));
    showToast("Match berhasil diterima! Obrolan sekarang terbuka.");

    // Refresh views
    renderMatches();
    renderDashboard();
};

window.rejectMatchRequest = function(matchId) {
    matches = matches.filter(m => m.id !== matchId);
    localStorage.setItem("sem_matches", JSON.stringify(matches));
    showToast("Permintaan match ditolak.", "danger");

    // Refresh views
    renderMatches();
    renderDashboard();
};

// ================= MATCHES RENDER =================
function renderMatches() {
    if (!currentUser) return;

    elIncomingMatchesList.innerHTML = "";
    elActiveMatchesList.innerHTML = "";

    let incomingCount = 0;
    let activeCount = 0;

    matches.forEach(m => {
        // 1. Pending Request (Incoming)
        if (m.status === "PENDING" && m.userBId === currentUser.id) {
            incomingCount++;
            const sender = users.find(u => u.id === m.userAId);
            if (sender) {
                elIncomingMatchesList.innerHTML += `
                    <div class="match-item">
                        <div class="match-user">
                            <img src="https://api.dicebear.com/7.x/bottts/svg?seed=${sender.avatarSeed}" alt="Avatar" class="avatar-small">
                            <div class="match-user-details">
                                <h4>${sender.displayName}</h4>
                                <p>${sender.department} (${sender.grade})</p>
                            </div>
                        </div>
                        <div class="match-actions">
                            <button class="btn-sm-icon btn-success" onclick="acceptMatchRequest('${m.id}')" title="Terima"><i class="fa-solid fa-check"></i></button>
                            <button class="btn-sm-icon btn-danger" onclick="rejectMatchRequest('${m.id}')" title="Tolak"><i class="fa-solid fa-xmark"></i></button>
                        </div>
                    </div>
                `;
            }
        }

        // 2. Active Match
        if (m.status === "ACTIVE" && (m.userAId === currentUser.id || m.userBId === currentUser.id)) {
            activeCount++;
            const partnerId = m.userAId === currentUser.id ? m.userBId : m.userAId;
            const partner = users.find(u => u.id === partnerId);
            if (partner) {
                elActiveMatchesList.innerHTML += `
                    <div class="match-item">
                        <div class="match-user">
                            <img src="https://api.dicebear.com/7.x/bottts/svg?seed=${partner.avatarSeed}" alt="Avatar" class="avatar-small">
                            <div class="match-user-details">
                                <h4>${partner.displayName}</h4>
                                <p>${partner.department} (${partner.grade})</p>
                            </div>
                        </div>
                        <div class="match-actions">
                            <button class="btn btn-secondary" onclick="openChatWindow('${partner.id}')"><i class="fa-solid fa-comments"></i> Chat</button>
                            <button class="btn-sm-icon btn-danger" onclick="rejectMatchRequest('${m.id}')" title="Putus Match"><i class="fa-solid fa-trash-can"></i></button>
                        </div>
                    </div>
                `;
            }
        }
    });

    if (incomingCount === 0) {
        elIncomingMatchesList.innerHTML = `
            <div class="empty-state">
                <i class="fa-regular fa-envelope-open"></i>
                <p>Tidak ada permintaan match masuk.</p>
            </div>
        `;
    }

    if (activeCount === 0) {
        elActiveMatchesList.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-people-arrows"></i>
                <p>Belum ada match yang aktif.</p>
            </div>
        `;
    }
}

// ================= CHAT LOGIC & SIMULATION =================
window.openChatWindow = function(partnerId) {
    activeChatPartnerId = partnerId;
    
    // Redirect ke tab Chat
    document.querySelector('[data-target="view-chat"]').click();
    renderChat();
};

function renderChat() {
    if (!currentUser) return;

    // Render User list in Chat Sidebar
    elChatUsersList.innerHTML = "";
    
    // Temukan partner aktif dari matches
    const activeMatches = matches.filter(m => 
        m.status === "ACTIVE" && (m.userAId === currentUser.id || m.userBId === currentUser.id)
    );

    if (activeMatches.length === 0) {
        elChatUsersList.innerHTML = `<span class="subtitle" style="padding: 1.5rem; display:block; text-align:center;">Belum memiliki partner match untuk mengobrol.</span>`;
        elChatNoSelection.classList.remove("hidden");
        elChatActive.classList.add("hidden");
        return;
    }

    activeMatches.forEach(m => {
        const partnerId = m.userAId === currentUser.id ? m.userBId : m.userAId;
        const partner = users.find(u => u.id === partnerId);
        
        if (partner) {
            // Dapatkan pesan terakhir
            const partnerMsgs = messages.filter(msg => 
                (msg.senderId === currentUser.id && msg.receiverId === partner.id) ||
                (msg.senderId === partner.id && msg.receiverId === currentUser.id)
            );
            const lastMsgText = partnerMsgs.length > 0 ? partnerMsgs[partnerMsgs.length - 1].body : "Belum ada percakapan";

            const isActiveClass = partner.id === activeChatPartnerId ? "active" : "";

            elChatUsersList.innerHTML += `
                <div class="chat-user-item ${isActiveClass}" onclick="selectChatPartner('${partner.id}')">
                    <img src="https://api.dicebear.com/7.x/bottts/svg?seed=${partner.avatarSeed}" alt="Avatar" class="chat-user-avatar">
                    <div class="chat-user-item-info">
                        <h4>${partner.displayName}</h4>
                        <p>${lastMsgText}</p>
                    </div>
                </div>
            `;
        }
    });

    // Render Active Chat Window
    if (!activeChatPartnerId) {
        elChatNoSelection.classList.remove("hidden");
        elChatActive.classList.add("hidden");
    } else {
        elChatNoSelection.classList.add("hidden");
        elChatActive.classList.remove("hidden");

        const partner = users.find(u => u.id === activeChatPartnerId);
        elChatPartnerName.innerText = partner.displayName;
        elChatPartnerAvatar.src = `https://api.dicebear.com/7.x/bottts/svg?seed=${partner.avatarSeed}`;

        // Render Messages
        elChatMessagesContainer.innerHTML = "";
        const conversation = messages.filter(msg => 
            (msg.senderId === currentUser.id && msg.receiverId === partner.id) ||
            (msg.senderId === partner.id && msg.receiverId === currentUser.id)
        );

        if (conversation.length === 0) {
            elChatMessagesContainer.innerHTML = `
                <div class="empty-state">
                    <p>Mulai percakapan Anda dengan mengirimkan pesan pertama!</p>
                </div>
            `;
        } else {
            conversation.forEach(msg => {
                const isSent = msg.senderId === currentUser.id;
                elChatMessagesContainer.innerHTML += `
                    <div class="message-bubble ${isSent ? 'msg-sent' : 'msg-received'}">
                        ${msg.body}
                    </div>
                `;
            });
            // Auto scroll ke bawah
            elChatMessagesContainer.scrollTop = elChatMessagesContainer.scrollHeight;
        }
    }
}

window.selectChatPartner = function(partnerId) {
    activeChatPartnerId = partnerId;
    renderChat();
};

elChatSendForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!activeChatPartnerId || !currentUser) return;

    const messageText = elChatInput.value.trim();
    if (!messageText) return;

    const newMsg = {
        id: "msg_" + Date.now(),
        senderId: currentUser.id,
        receiverId: activeChatPartnerId,
        body: messageText,
        createdAt: new Date().toISOString()
    };

    messages.push(newMsg);
    localStorage.setItem("sem_messages", JSON.stringify(messages));
    elChatInput.value = "";

    renderChat();

    // Trigger AI Simulator Response (2 detik kemudian)
    simulatePartnerReply(activeChatPartnerId, messageText);
});

function simulatePartnerReply(partnerId, userMsg) {
    setTimeout(() => {
        // Cari user partner
        const partner = users.find(u => u.id === partnerId);
        if (!partner) return;

        // Pilihan template jawaban agar terasa hidup
        let reply = "";
        const lowerMsg = userMsg.toLowerCase();

        if (lowerMsg.includes("halo") || lowerMsg.includes("hai") || lowerMsg.includes("pagi") || lowerMsg.includes("siang")) {
            reply = `Halo juga! Salam kenal ya. Makasih sudah kirim match, senang bisa terhubung dengan kamu di Skill Exchange Market!`;
        } else if (lowerMsg.includes("kapan") || lowerMsg.includes("waktu") || lowerMsg.includes("luang") || lowerMsg.includes("belajar")) {
            reply = `Saya biasanya luang sore hari di weekdays atau pagi hari di hari Sabtu. Kamu lebih luang kapan? Nanti kita bisa bikin sesi belajar bareng via Zoom/Meet.`;
        } else if (lowerMsg.includes("makasih") || lowerMsg.includes("terima kasih") || lowerMsg.includes("thank")) {
            reply = `Sama-sama! Semoga sesi tukar skill kita berjalan lancar ya.`;
        } else {
            reply = `Menarik sekali! Saya sangat tertarik mendiskusikan itu lebih lanjut. Nanti kita coba bahas detail keahlian kita masing-masing saat belajar bareng ya.`;
        }

        const newReply = {
            id: "msg_" + Date.now(),
            senderId: partner.id,
            receiverId: currentUser.id,
            body: reply,
            createdAt: new Date().toISOString()
        };

        messages.push(newReply);
        localStorage.setItem("sem_messages", JSON.stringify(messages));

        // Cek jika user masih membuka chat yang sama
        if (activeChatPartnerId === partnerId) {
            renderChat();
        } else {
            updateChatBadge();
        }
    }, 1500);
}

function updateChatBadge() {
    // Hitung jumlah total pesan masuk dari partner lain
    // Di simulasi ini kita buat sederhana
    elChatBadge.classList.add("hidden");
}

// ================= PROFILE PAGE CONTROLLER =================
function loadProfileFields() {
    if (!currentUser) return;

    elProfileName.value = currentUser.displayName || "";
    elProfileAvatarSeed.value = currentUser.avatarSeed || "Felix";
    elProfileDept.value = currentUser.department || "";
    elProfileGrade.value = currentUser.grade || "";
    elProfileBio.value = currentUser.bio || "";

    renderManageSkills();
}

elProfileForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!currentUser) return;

    currentUser.displayName = elProfileName.value.trim();
    currentUser.avatarSeed = elProfileAvatarSeed.value;
    currentUser.department = elProfileDept.value.trim();
    currentUser.grade = elProfileGrade.value.trim();
    currentUser.bio = elProfileBio.value.trim();

    // Update list global
    const idx = users.findIndex(u => u.id === currentUser.id);
    if (idx !== -1) {
        users[idx] = currentUser;
        localStorage.setItem("sem_users", JSON.stringify(users));
    }

    localStorage.setItem("sem_current_user", JSON.stringify(currentUser));
    showToast("Profil berhasil diperbarui!");
    
    // Update sidebar info
    elUserDisplayName.innerText = currentUser.displayName;
    elUserDisplayDept.innerText = `${currentUser.department} (${currentUser.grade})`;
    elUserAvatar.src = `https://api.dicebear.com/7.x/bottts/svg?seed=${currentUser.avatarSeed}`;
});

function renderManageSkills() {
    // 1. Render Teach Skills list
    elManageTeachList.innerHTML = "";
    currentUser.teachSkills.forEach((s, i) => {
        elManageTeachList.innerHTML += `
            <span class="skill-chip ${getCategoryClass(s.category)}">
                ${s.name}
                <i class="fa-solid fa-xmark remove-skill" onclick="removeSkill('teach', ${i})"></i>
            </span>
        `;
    });

    // 2. Render Learn Skills list
    elManageLearnList.innerHTML = "";
    currentUser.learning.forEach((s, i) => {
        elManageLearnList.innerHTML += `
            <span class="skill-chip ${getCategoryClass(s.category)}">
                ${s.name}
                <i class="fa-solid fa-xmark remove-skill" onclick="removeSkill('learn', ${i})"></i>
            </span>
        `;
    });
}

// Add Skill Teach
elBtnAddTeach.addEventListener("click", () => {
    const name = elInputTeachSkill.value.trim();
    const category = elSelectTeachCat.value;

    if (!name) return;

    // Cek duplikasi
    const exists = currentUser.teachSkills.some(s => s.name.toLowerCase() === name.toLowerCase());
    if (exists) {
        showToast("Skill sudah ditambahkan!", "danger");
        return;
    }

    currentUser.teachSkills.push({ name, category });
    saveUserSkills();
    elInputTeachSkill.value = "";
    renderManageSkills();
});

// Add Skill Learn
elBtnAddLearn.addEventListener("click", () => {
    const name = elInputLearnSkill.value.trim();
    const category = elSelectLearnCat.value;

    if (!name) return;

    // Cek duplikasi
    const exists = currentUser.learning.some(s => s.name.toLowerCase() === name.toLowerCase());
    if (exists) {
        showToast("Skill kebutuhan sudah ditambahkan!", "danger");
        return;
    }

    currentUser.learning.push({ name, category });
    saveUserSkills();
    elInputLearnSkill.value = "";
    renderManageSkills();
});

window.removeSkill = function(type, index) {
    if (type === "teach") {
        currentUser.teachSkills.splice(index, 1);
    } else {
        currentUser.learning.splice(index, 1);
    }
    saveUserSkills();
    renderManageSkills();
};

function saveUserSkills() {
    const idx = users.findIndex(u => u.id === currentUser.id);
    if (idx !== -1) {
        users[idx] = currentUser;
        localStorage.setItem("sem_users", JSON.stringify(users));
    }
    localStorage.setItem("sem_current_user", JSON.stringify(currentUser));
}
