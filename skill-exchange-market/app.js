// ================= MULTI-LANGUAGE TRANSLATION DICTIONARY =================
const TRANSLATIONS = {
    id: {
        app_title: "Skill Exchange",
        app_subtitle: "Belajar & berbagi ilmu antar mahasiswa",
        email: "Email Kampus",
        password: "Password",
        login: "Masuk",
        no_account: "Belum punya akun?",
        register_now: "Daftar Sekarang",
        register: "Buat Akun",
        register_sub: "Gabung dengan komunitas mahasiswa pembelajar",
        username: "Username",
        have_account: "Sudah punya akun?",
        login_here: "Masuk di sini",
        menu_dashboard: "Dashboard",
        menu_swipe: "Geser Kartu",
        menu_matches: "Kecocokan",
        menu_chat: "Obrolan",
        menu_profile: "Edit Profil",
        logout: "Keluar",
        dash_welcome: "Selamat Datang Kembali! 👋",
        dash_subtitle: "Temukan mahasiswa lain untuk bertukar keahlian hari ini.",
        stat_teach: "Skill Diajarkan",
        stat_learn: "Kebutuhan Belajar",
        stat_match: "Total Match",
        dash_recommend: "Rekomendasi Match Heuristik",
        dash_recommend_sub: "Kami mencocokkan apa yang ingin Anda pelajari dengan apa yang diajarkan pengguna lain.",
        dash_profile_summary: "Ringkasan Profil",
        profile_can_teach: "Bisa Mengajar:",
        profile_want_learn: "Ingin Belajar:",
        swipe_title: "Temukan Partner Belajar",
        swipe_subtitle: "Geser ke Kanan jika tertarik belajar bareng, Geser ke Kiri untuk melewati.",
        no_cards_title: "Semua Kartu Sudah Habis!",
        no_cards_sub: "Coba ubah profil Anda atau tambahkan skill lain agar kami bisa mencari lebih banyak orang.",
        matches_title: "Kecocokan Hubungan (Matches)",
        matches_subtitle: "Kelola permintaan kecocokan belajar Anda di sini.",
        incoming_requests: "Permintaan Masuk",
        active_matches: "Match Aktif",
        inbox: "Pesan Masuk",
        start_chat_title: "Mulai Obrolan",
        start_chat_sub: "Pilih salah satu teman belajar di sebelah kiri untuk mulai mengobrol.",
        profile_title: "Edit Profil",
        profile_subtitle: "Lengkapi informasi diri untuk mendapatkan pencocokan belajar terbaik.",
        profile_personal_info: "Informasi Diri",
        fullname: "Nama Lengkap",
        avatar_style: "Pilih Style Avatar",
        department: "Jurusan / Program Studi",
        grade: "Angkatan",
        bio: "Bio Diri (Deskripsi singkat)",
        save_profile: "Simpan Profil",
        profile_manage_skills: "Kelola Keahlian & Kebutuhan",
        skills_to_teach: "Keahlian yang Bisa Saya Ajarkan",
        skills_to_learn: "Keahlian yang Ingin Saya Pelajari",
        you_matched: "YOU MATCHED!",
        send_message: "Kirim Pesan",
        matched_text: "Kamu dan {name} saling menyukai!",
        empty_matches: "Belum ada match yang aktif.",
        empty_incoming: "Tidak ada permintaan match masuk."
    },
    jp: {
        app_title: "スキルエクスチェンジ",
        app_subtitle: "学生同士のスキル共有・学習プラットフォーム",
        email: "大学のメールアドレス",
        password: "パスワード",
        login: "ログイン",
        no_account: "アカウントをお持ちでないですか？",
        register_now: "今すぐ新規登録",
        register: "アカウント作成",
        register_sub: "学習コミュニティに参加しましょう",
        username: "ユーザー名",
        have_account: "既にアカウントを持っていますか？",
        login_here: "ここからログイン",
        menu_dashboard: "ダッシュボード",
        menu_swipe: "カードをスワイプ",
        menu_matches: "マッチング",
        menu_chat: "チャット",
        menu_profile: "プロフィール編集",
        logout: "ログアウト",
        dash_welcome: "おかえりなさい！ 👋",
        dash_subtitle: "今日のスキル交換パートナーを見つけましょう。",
        stat_teach: "教えられるスキル",
        stat_learn: "学びたいスキル",
        stat_match: "合計マッチ数",
        dash_recommend: "おすすめのヒューリスティックマッチ",
        dash_recommend_sub: "あなたが学びたいスキルと、他の学生が教えられるスキルをマッチングします。",
        dash_profile_summary: "プロフィールの概要",
        profile_can_teach: "教えられること:",
        profile_want_learn: "学びたいこと:",
        swipe_title: "学習パートナーを探す",
        swipe_subtitle: "一緒に勉強したい場合は右にスワイプ、スキップする場合は左にスワイプします。",
        no_cards_title: "カードがなくなりました！",
        no_cards_sub: "プロフィールを更新するか、新しいスキルを追加してパートナーを探しましょう。",
        matches_title: "マッチング管理",
        matches_subtitle: "学習パートナーへのリクエストを管理します。",
        incoming_requests: "受信したリクエスト",
        active_matches: "アクティブなマッチ",
        inbox: "受信トレイ",
        start_chat_title: "チャットを始める",
        start_chat_sub: "左側のリストからパートナーを選択して会話を開始します。",
        profile_title: "プロフィール編集",
        profile_subtitle: "最高のパートナーを見つけるためにプロフィールを完成させましょう。",
        profile_personal_info: "個人情報",
        fullname: "氏名",
        avatar_style: "アバタースタイル",
        department: "学科 / 専攻",
        grade: "学年 (入学年度)",
        bio: "自己紹介 (短い説明)",
        save_profile: "プロフィールを保存",
        profile_manage_skills: "スキルとニーズの管理",
        skills_to_teach: "自分が教えられるスキル",
        skills_to_learn: "自分が学びたいスキル",
        you_matched: "マッチング成立！",
        send_message: "メッセージを送る",
        matched_text: "あなたと {name} はお互いにいいね！しました！",
        empty_matches: "アクティブなマッチングはありません。",
        empty_incoming: "受信したリクエストはありません。"
    },
    en: {
        app_title: "Skill Exchange",
        app_subtitle: "Learn & share skills with fellow students",
        email: "Campus Email",
        password: "Password",
        login: "Login",
        no_account: "Don't have an account?",
        register_now: "Register Now",
        register: "Create Account",
        register_sub: "Join the student learning community",
        username: "Username",
        have_account: "Already have an account?",
        login_here: "Login here",
        menu_dashboard: "Dashboard",
        menu_swipe: "Swipe Cards",
        menu_matches: "Matches",
        menu_chat: "Chat",
        menu_profile: "Edit Profile",
        logout: "Logout",
        dash_welcome: "Welcome Back! 👋",
        dash_subtitle: "Find other students to exchange skills with today.",
        stat_teach: "Skills to Teach",
        stat_learn: "Learning Needs",
        stat_match: "Total Matches",
        dash_recommend: "Heuristic Match Recommendations",
        dash_recommend_sub: "We match what you want to learn with what others can teach.",
        dash_profile_summary: "Profile Summary",
        profile_can_teach: "Can Teach:",
        profile_want_learn: "Wants to Learn:",
        swipe_title: "Find Study Partners",
        swipe_subtitle: "Swipe Right if you want to learn together, Swipe Left to pass.",
        no_cards_title: "Out of Cards!",
        no_cards_sub: "Try updating your profile or adding more skills to find more matches.",
        matches_title: "Matches Management",
        matches_subtitle: "Manage your study match requests here.",
        incoming_requests: "Incoming Requests",
        active_matches: "Active Matches",
        inbox: "Inbox Messages",
        start_chat_title: "Start a Conversation",
        start_chat_sub: "Select a study partner from the left to start chatting.",
        profile_title: "Edit Profile",
        profile_subtitle: "Complete your profile to get the best learning matches.",
        profile_personal_info: "Personal Information",
        fullname: "Full Name",
        avatar_style: "Choose Avatar Style",
        department: "Department / Program",
        grade: "Class / Year",
        bio: "Bio (Short description)",
        save_profile: "Save Profile",
        profile_manage_skills: "Manage Skills & Needs",
        skills_to_teach: "Skills I Can Teach",
        skills_to_learn: "Skills I Want to Learn",
        you_matched: "YOU MATCHED!",
        send_message: "Send Message",
        matched_text: "You and {name} liked each other!",
        empty_matches: "No active matches yet.",
        empty_incoming: "No incoming match requests."
    },
    zh: {
        app_title: "技能交换市场",
        app_subtitle: "与同学互相学习，分享技能",
        email: "校园邮箱",
        password: "密码",
        login: "登录",
        no_account: "没有账号？",
        register_now: "立即注册",
        register: "创建账号",
        register_sub: "加入学生学习社区",
        username: "用户名",
        have_account: "已有账号？",
        login_here: "在此登录",
        menu_dashboard: "仪表板",
        menu_swipe: "滑动卡片",
        menu_matches: "配对结果",
        menu_chat: "聊天",
        menu_profile: "编辑个人资料",
        logout: "退出登录",
        dash_welcome: "欢迎回来！ 👋",
        dash_subtitle: "寻找今天可以进行技能交换的同学。",
        stat_teach: "可教学技能",
        stat_learn: "想学习技能",
        stat_match: "配对总数",
        dash_recommend: "启发式配对推荐",
        dash_recommend_sub: "我们将你想学习的技能与他人可以教授的技能进行配对。",
        dash_profile_summary: "个人资料摘要",
        profile_can_teach: "可以教授:",
        profile_want_learn: "想要学习:",
        swipe_title: "寻找学习伙伴",
        swipe_subtitle: "向右滑动表示想一起学习，向左滑动表示跳过。",
        no_cards_title: "卡片已用完！",
        no_cards_sub: "尝试更新个人资料或添加更多技能以寻找更多配对。",
        matches_title: "配对管理",
        matches_subtitle: "在此管理您的学习配对请求。",
        incoming_requests: "收到的请求",
        active_matches: "活跃配对",
        inbox: "收件箱消息",
        start_chat_title: "开始对话",
        start_chat_sub: "在左侧选择一个学习伙伴开始聊天。",
        profile_title: "编辑个人资料",
        profile_subtitle: "完善个人信息以获得最佳配对推荐。",
        profile_personal_info: "个人资料",
        fullname: "全名",
        avatar_style: "选择头像风格",
        department: "科系 / 专业",
        grade: "年级 (入学年份)",
        bio: "个人简介 (简短描述)",
        save_profile: "保存资料",
        profile_manage_skills: "管理技能与需求",
        skills_to_teach: "我可以教授的技能",
        skills_to_learn: "我想要学习的技能",
        you_matched: "配对成功！",
        send_message: "发送消息",
        matched_text: "你和 {name} 互相喜欢了！",
        empty_matches: "尚无活跃的配对。",
        empty_incoming: "没有收到配对请求。"
    }
};

// Real-time Chat Pre-defined Translations Database (Simulasi)
const CHAT_TRANSLATIONS = {
    "Halo juga! Salam kenal ya. Makasih sudah kirim match, senang bisa terhubung dengan kamu di Skill Exchange Market!": {
        jp: "こんにちは！はじめまして。マッチリクエストありがとうございます。スキルエクスチェンジでお会いできて嬉しいです！",
        en: "Hello too! Nice to meet you. Thanks for the match, glad to connect with you in the Skill Exchange Market!",
        zh: "你好！很高兴认识你。谢谢你的配对，很高兴在技能交换市场上与你建立联系！",
        id: "Halo juga! Salam kenal ya. Makasih sudah kirim match, senang bisa terhubung dengan kamu di Skill Exchange Market!"
    },
    "Saya biasanya luang sore hari di weekdays atau pagi hari di hari Sabtu. Kamu lebih luang kapan? Nanti kita bisa bikin sesi belajar bareng via Zoom/Meet.": {
        jp: "私は平日の夕方か土曜日の朝が空いています。あなたのご都合はいかがですか？後でZoomやMeetで勉強会をしましょう。",
        en: "I'm usually free on weekday afternoons or Saturday mornings. When are you most free? We can create a study session via Zoom/Meet later.",
        zh: "我通常在工作日放学后的下午或周六早上有空。你什么时候最方便？晚些时候我们可以通过Zoom/Meet创建一个学习会。",
        id: "Saya biasanya luang sore hari di weekdays atau pagi hari di hari Sabtu. Kamu lebih luang kapan? Nanti kita bisa bikin sesi belajar bareng via Zoom/Meet."
    },
    "Sama-sama! Semoga sesi tukar skill kita berjalan lancar ya.": {
        jp: "どういたしまして！スキル交換セッションが上手くいくといいですね。",
        en: "You're welcome! Hope our skill exchange session goes smoothly.",
        zh: "不客气！希望我们的技能交换学习顺利进行。",
        id: "Sama-sama! Semoga sesi tukar skill kita berjalan lancar ya."
    },
    "Menarik sekali! Saya sangat tertarik mendiskusikan itu lebih lanjut. Nanti kita coba bahas detail keahlian kita masing-masing saat belajar bareng ya.": {
        jp: "とても興味深いです！もっと詳しく話し合いたいです。今度一緒に勉強するときに、それぞれのスキルの詳細を話し合いましょう。",
        en: "Very interesting! I am very interested in discussing that further. Let's discuss our respective skills details when we study together.",
        zh: "非常有意思！我很想进一步讨论。等我们一起学习时，我们再详细讨论各自的技能细节吧。",
        id: "Menarik sekali! Saya sangat tertarik mendiskusikan itu lebih lanjut. Nanti kita coba bahas detail keahlian kita masing-masing saat belajar bareng ya."
    }
};

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

let users = [];
let matches = [];
let messages = [];
let currentUser = JSON.parse(localStorage.getItem("sem_current_user")) || null;
let currentLanguage = localStorage.getItem("sem_lang") || "jp";
let syncInterval = null;

async function syncData() {
    try {
        const res = await fetch('/api/sync');
        if (!res.ok) throw new Error("Sync failed");
        const data = await res.json();
        users = data.users || [];
        matches = data.matches || [];
        messages = data.messages || [];

        if (currentUser) {
            const updatedMe = users.find(u => u.id === currentUser.id);
            if (updatedMe) {
                currentUser = updatedMe;
                localStorage.setItem("sem_current_user", JSON.stringify(currentUser));
            }
        }
        return true;
    } catch (err) {
        console.error("Error syncing data:", err);
        return false;
    }
}

function startSyncInterval() {
    if (syncInterval) clearInterval(syncInterval);
    syncInterval = setInterval(async () => {
        if (!currentUser) {
            stopSyncInterval();
            return;
        }
        const success = await syncData();
        if (success) {
            updateChatBadge();
            const activeView = document.querySelector(".app-view:not(.hidden)");
            if (activeView) {
                const viewId = activeView.id;
                if (viewId === "view-chat" && activeChatPartnerId) {
                    const chatContainer = document.getElementById("chat-messages-container");
                    const isAtBottom = chatContainer.scrollHeight - chatContainer.scrollTop - chatContainer.clientHeight < 20;
                    renderChat();
                    if (isAtBottom) {
                        chatContainer.scrollTop = chatContainer.scrollHeight;
                    }
                } else if (viewId === "view-matches") {
                    renderMatches();
                } else if (viewId === "view-dashboard") {
                    elStatTeach.innerText = currentUser.teachSkills.length;
                    elStatLearn.innerText = currentUser.learning.length;
                    const activeMatches = matches.filter(m => 
                        (m.userAId === currentUser.id || m.userBId === currentUser.id) && m.status === "ACTIVE"
                    );
                    elStatMatch.innerText = activeMatches.length;
                }
            }
        }
    }, 3000);
}

function stopSyncInterval() {
    if (syncInterval) {
        clearInterval(syncInterval);
        syncInterval = null;
    }
}

// Temporary active states
let activeChatPartnerId = null;
let currentSwiperCards = [];

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
const elLangSelect = document.getElementById("lang-select");
const elAuthLangSelects = document.querySelectorAll(".auth-lang-select-box");

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

// Swiper DOM
const elCardStack = document.getElementById("card-stack");
const elSwipeBtnLeft = document.getElementById("swipe-btn-left");
const elSwipeBtnRight = document.getElementById("swipe-btn-right");

// Match Modal DOM
const elMatchModal = document.getElementById("match-modal");
const elMatchAvatarMe = document.getElementById("match-avatar-me");
const elMatchAvatarPartner = document.getElementById("match-avatar-partner");
const elMatchModalText = document.getElementById("match-modal-text");
const elBtnCloseMatchModal = document.getElementById("btn-close-match-modal");

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
const elChatTranslateLang = document.getElementById("chat-translate-lang");

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

// ================= MULTI-LANGUAGE SYSTEM =================
function updateLanguageUI() {
    const dict = TRANSLATIONS[currentLanguage];
    if (!dict) return;

    // Cari semua element yang punya data-i18n
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) {
            if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
                el.placeholder = dict[key];
            } else {
                el.innerText = dict[key];
            }
        }
    });

    if (elLangSelect) elLangSelect.value = currentLanguage;
    elAuthLangSelects.forEach(sel => {
        sel.value = currentLanguage;
    });
}

elLangSelect.addEventListener("change", (e) => {
    currentLanguage = e.target.value;
    localStorage.setItem("sem_lang", currentLanguage);
    elAuthLangSelects.forEach(sel => {
        sel.value = currentLanguage;
    });
    updateLanguageUI();
    
    // Refresh page structures
    renderDashboard();
    renderSearch();
    renderMatches();
    renderChat();
});

elAuthLangSelects.forEach(sel => {
    sel.addEventListener("change", (e) => {
        currentLanguage = e.target.value;
        localStorage.setItem("sem_lang", currentLanguage);
        if (elLangSelect) elLangSelect.value = currentLanguage;
        elAuthLangSelects.forEach(s => {
            s.value = currentLanguage;
        });
        updateLanguageUI();
        
        // Refresh page structures if logged in
        if (currentUser) {
            renderDashboard();
            renderSearch();
            renderMatches();
            renderChat();
        }
    });
});

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

elLoginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value;

    try {
        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await res.json();
        
        if (!res.ok) {
            showToast(data.error || "Email atau password Anda salah!", "danger");
            return;
        }

        currentUser = data.user;
        users = data.users || [];
        matches = data.matches || [];
        messages = data.messages || [];

        localStorage.setItem("sem_current_user", JSON.stringify(currentUser));
        showToast(`Selamat datang, ${currentUser.displayName || currentUser.username}!`);
        loginSuccess();
        startSyncInterval();
    } catch (err) {
        showToast("Terjadi kesalahan jaringan!", "danger");
        console.error(err);
    }
});

elRegisterForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("reg-username").value.trim().toLowerCase();
    const email = document.getElementById("reg-email").value.trim().toLowerCase();
    const password = document.getElementById("reg-password").value;

    if (password.length < 6) {
        showToast("Password minimal harus 6 karakter!", "danger");
        return;
    }

    try {
        const res = await fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        });
        const data = await res.json();

        if (!res.ok) {
            showToast(data.error || "Pendaftaran gagal!", "danger");
            return;
        }

        currentUser = data.user;
        users = data.users || [];
        matches = data.matches || [];
        messages = data.messages || [];

        localStorage.setItem("sem_current_user", JSON.stringify(currentUser));
        showToast("Pendaftaran berhasil!");
        loginSuccess();
        startSyncInterval();
    } catch (err) {
        showToast("Terjadi kesalahan jaringan!", "danger");
        console.error(err);
    }
});

elBtnLogout.addEventListener("click", () => {
    currentUser = null;
    localStorage.removeItem("sem_current_user");
    stopSyncInterval();
    showToast("Berhasil keluar.", "success");
    logoutSuccess();
});

function loginSuccess() {
    elAuthContainer.classList.add("hidden");
    elAppContainer.classList.remove("hidden");
    
    // Set Sidebar User Info
    elUserDisplayName.innerText = currentUser.displayName || currentUser.username;
    elUserDisplayDept.innerText = `${currentUser.department || 'Jurusan'} (${currentUser.grade || 'Angkatan'})`;
    elUserAvatar.src = `https://api.dicebear.com/7.x/bottts/svg?seed=${currentUser.avatarSeed || 'default'}`;

    updateLanguageUI();
    updateChatBadge();

    // Default to dashboard
    document.querySelector('[data-target="view-dashboard"]').click();
}

function logoutSuccess() {
    elAppContainer.classList.add("hidden");
    elAuthContainer.classList.remove("hidden");
    elLoginCard.classList.remove("hidden");
    elRegisterCard.classList.add("hidden");
}

// Check session on start with real backend sync
async function initApp() {
    const synced = await syncData();
    if (synced && currentUser) {
        const latestMe = users.find(u => u.id === currentUser.id);
        if (latestMe) {
            currentUser = latestMe;
            localStorage.setItem("sem_current_user", JSON.stringify(currentUser));
            loginSuccess();
            startSyncInterval();
        } else {
            currentUser = null;
            localStorage.removeItem("sem_current_user");
            updateLanguageUI();
        }
    } else if (currentUser) {
        loginSuccess();
        startSyncInterval();
    } else {
        updateLanguageUI();
    }
}
initApp();

// ================= MATCHING ENGINE (HEURISTIC) =================
function calculateMatchScore(userA, userB) {
    if (!userA || !userB) return 0;
    
    let aTeachesB = userA.teachSkills.some(skill => 
        userB.learning.some(need => need.name.toLowerCase() === skill.name.toLowerCase())
    );

    let bTeachesA = userB.teachSkills.some(skill => 
        userA.learning.some(need => need.name.toLowerCase() === skill.name.toLowerCase())
    );

    if (aTeachesB && bTeachesA) {
        return 100;
    }

    if (aTeachesB || bTeachesA) {
        return 65;
    }

    let sharedCats = 0;
    userA.learning.forEach(need => {
        if (userB.learning.some(n => n.category === need.category)) {
            sharedCats++;
        }
    });

    if (sharedCats > 0) {
        return 30;
    }

    return 10;
}

function getRecommendedMatches() {
    if (!currentUser) return [];

    let recommendations = [];

    users.forEach(otherUser => {
        if (otherUser.id === currentUser.id) return;

        const score = calculateMatchScore(currentUser, otherUser);
        
        const relationship = matches.find(m => 
            (m.userAId === currentUser.id && m.userBId === otherUser.id) ||
            (m.userAId === otherUser.id && m.userBId === currentUser.id)
        );

        recommendations.push({
            user: otherUser,
            score: score,
            relationshipStatus: relationship ? relationship.status : "NONE",
            initiator: relationship ? relationship.userAId : null
        });
    });

    return recommendations.sort((a, b) => b.score - a.score);
}

// ================= DASHBOARD RENDER =================
function renderDashboard() {
    if (!currentUser) return;

    elStatTeach.innerText = currentUser.teachSkills.length;
    elStatLearn.innerText = currentUser.learning.length;

    const activeMatchesCount = matches.filter(m => 
        (m.userAId === currentUser.id || m.userBId === currentUser.id) && m.status === "ACTIVE"
    ).length;
    elStatMatch.innerText = activeMatchesCount;

    elPreviewAvatar.src = `https://api.dicebear.com/7.x/bottts/svg?seed=${currentUser.avatarSeed || 'default'}`;
    elPreviewName.innerText = currentUser.displayName || currentUser.username;
    elPreviewDeptGrade.innerText = `${currentUser.department || 'Jurusan'} - Angkatan ${currentUser.grade || '-'}`;

    elPreviewTeachSkills.innerHTML = "";
    if (currentUser.teachSkills.length === 0) {
        elPreviewTeachSkills.innerHTML = `<span class="subtitle">Belum ada skill</span>`;
    } else {
        currentUser.teachSkills.forEach(s => {
            elPreviewTeachSkills.innerHTML += `<span class="skill-chip ${getCategoryClass(s.category)}">${s.name}</span>`;
        });
    }

    elPreviewLearnNeeds.innerHTML = "";
    if (currentUser.learning.length === 0) {
        elPreviewLearnNeeds.innerHTML = `<span class="subtitle">Belum ada kebutuhan</span>`;
    } else {
        currentUser.learning.forEach(s => {
            elPreviewLearnNeeds.innerHTML += `<span class="skill-chip ${getCategoryClass(s.category)}">${s.name}</span>`;
        });
    }

    // Recommended List
    const recs = getRecommendedMatches();
    elRecommendedList.innerHTML = "";

    const filteredRecs = recs.filter(r => r.relationshipStatus === "NONE" && r.score >= 30).slice(0, 3);

    if (filteredRecs.length === 0) {
        elRecommendedList.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-wand-magic-sparkles"></i>
                <p>Belum ada rekomendasi baru yang cocok. Coba lengkapi profil di halaman edit profil!</p>
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
                    <button class="btn btn-primary" onclick="triggerCardSwipeRight('${r.user.id}')">Kirim Match</button>
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

// ================= BUMBLE-STYLE CARD SWIPER LOGIC =================
function renderSearch() {
    elCardStack.innerHTML = "";

    // Cari user yang status relationshipnya NONE atau PENDING (dari orang lain ke kita)
    const recs = getRecommendedMatches();
    
    // Tumpukan kartu (deck) diisi oleh relasi yang statusnya NONE, atau status PENDING (dikirim dari orang lain ke kita)
    const swiperUsers = recs.filter(r => 
        r.relationshipStatus === "NONE" || 
        (r.relationshipStatus === "PENDING" && r.initiator !== currentUser.id)
    );

    currentSwiperCards = swiperUsers;

    if (swiperUsers.length === 0) {
        elCardStack.innerHTML = `
            <div class="empty-deck-message">
                <i class="fa-solid fa-circle-nodes"></i>
                <h3 data-i18n="no_cards_title">Semua Kartu Sudah Habis!</h3>
                <p data-i18n="no_cards_sub">Coba ubah profil Anda atau tambahkan skill lain agar kami bisa mencari lebih banyak orang.</p>
            </div>
        `;
        updateLanguageUI();
        return;
    }

    // Render kartu dari belakang ke depan (user pertama berada di paling atas / paling terakhir di DOM)
    // Jadi di-reverse agar indeks pertama dirender paling akhir di DOM
    const usersToRender = [...swiperUsers].reverse();

    usersToRender.forEach((r, idx) => {
        const teachChips = r.user.teachSkills.map(s => 
            `<span class="skill-chip ${getCategoryClass(s.category)}">${s.name}</span>`
        ).join("") || `<span class="subtitle">Belum ada skill diajarkan</span>`;

        const learnChips = r.user.learning.map(s => 
            `<span class="skill-chip ${getCategoryClass(s.category)}">${s.name}</span>`
        ).join("") || `<span class="subtitle">Belum ada skill dipelajari</span>`;

        const cardEl = document.createElement("div");
        cardEl.className = "swipe-card";
        cardEl.setAttribute("data-user-id", r.user.id);
        
        cardEl.innerHTML = `
            <div class="card-user-info">
                <img src="https://api.dicebear.com/7.x/bottts/svg?seed=${r.user.avatarSeed}" alt="Avatar" class="card-avatar">
                <h2>${r.user.displayName} <span class="match-percentage">${r.score}%</span></h2>
                <span class="dept">${r.user.department} (${r.user.grade})</span>
            </div>
            <div class="card-bio">${r.user.bio}</div>
            <div class="card-skills-section">
                <h4 data-i18n="profile_can_teach">Bisa Mengajar:</h4>
                <div class="skills-wrapper" style="margin-bottom: 10px;">${teachChips}</div>
                <h4 data-i18n="profile_want_learn">Ingin Belajar:</h4>
                <div class="skills-wrapper">${learnChips}</div>
            </div>
        `;

        elCardStack.appendChild(cardEl);
        initCardDrag(cardEl);
    });

    updateLanguageUI();
}

// Drag & Swipe Physics
function initCardDrag(cardEl) {
    let startX = 0, startY = 0;
    let isDragging = false;
    
    cardEl.addEventListener("mousedown", dragStart);
    cardEl.addEventListener("touchstart", dragStart);

    function dragStart(e) {
        if (cardEl !== elCardStack.lastElementChild) return; // Hanya izinkan drag kartu paling atas
        isDragging = true;
        cardEl.style.transition = "none";
        
        const clientX = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
        const clientY = e.type === "touchstart" ? e.touches[0].clientY : e.clientY;
        startX = clientX;
        startY = clientY;

        document.addEventListener("mousemove", dragMove);
        document.addEventListener("touchmove", dragMove, { passive: false });
        document.addEventListener("mouseup", dragEnd);
        document.addEventListener("touchend", dragEnd);
    }

    function dragMove(e) {
        if (!isDragging) return;
        if (e.type === "touchmove") e.preventDefault(); // Mencegah scrolling

        const clientX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
        const clientY = e.type === "touchmove" ? e.touches[0].clientY : e.clientY;
        
        const deltaX = clientX - startX;
        const deltaY = clientY - startY;

        const rotate = deltaX * 0.08;
        cardEl.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0) rotate(${rotate}deg)`;
    }

    function dragEnd(e) {
        if (!isDragging) return;
        isDragging = false;
        
        document.removeEventListener("mousemove", dragMove);
        document.removeEventListener("touchmove", dragMove);
        document.removeEventListener("mouseup", dragEnd);
        document.removeEventListener("touchend", dragEnd);

        cardEl.style.transition = "transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.3s";
        
        const transform = cardEl.style.transform;
        const match = transform.match(/translate3d\(([^px]+)px/);
        const deltaX = match ? parseFloat(match[1]) : 0;

        if (deltaX > 110) {
            // Swipe Right (Like)
            swipeCardOut(cardEl, "right");
        } else if (deltaX < -110) {
            // Swipe Left (Pass)
            swipeCardOut(cardEl, "left");
        } else {
            // Snap back
            cardEl.style.transform = "translate3d(0,0,0) rotate(0deg)";
        }
    }
}

function swipeCardOut(cardEl, direction) {
    const partnerId = cardEl.getAttribute("data-user-id");
    const rotate = direction === "right" ? 35 : -35;
    const moveX = direction === "right" ? 600 : -600;

    cardEl.style.transform = `translate3d(${moveX}px, 100px, 0) rotate(${rotate}deg)`;
    cardEl.style.opacity = "0";

    setTimeout(() => {
        cardEl.remove();
        if (direction === "right") {
            handleLike(partnerId);
        } else {
            handlePass(partnerId);
        }
        
        // Refresh tumpukan kartu di belakang jika habis
        if (elCardStack.children.length <= 1) {
            renderSearch();
        }
    }, 3000); // Tunggu sampai animasi transisi keluar selesai
}

// Handler Tombol Action di Bawah Kartu
elSwipeBtnLeft.addEventListener("click", () => {
    const topCard = elCardStack.lastElementChild;
    if (topCard && !topCard.classList.contains("empty-deck-message")) {
        swipeCardOut(topCard, "left");
    }
});

elSwipeBtnRight.addEventListener("click", () => {
    const topCard = elCardStack.lastElementChild;
    if (topCard && !topCard.classList.contains("empty-deck-message")) {
        swipeCardOut(topCard, "right");
    }
});

// Pemicu Like dari Rekomendasi di Dashboard
window.triggerCardSwipeRight = function(userId) {
    showToast("Membuka kartu pencarian...");
    document.querySelector('[data-target="view-search"]').click();
    
    setTimeout(() => {
        const topCard = elCardStack.lastElementChild;
        if (topCard && topCard.getAttribute("data-user-id") === userId) {
            swipeCardOut(topCard, "right");
        } else {
            // Jalankan like langsung jika kartu tidak di paling atas
            handleLike(userId);
        }
    }, 300);
};

// ================= LIKE & PASS LOGIC + MATCH POPUP =================
async function handleLike(partnerId) {
    const partner = users.find(u => u.id === partnerId);
    if (!partner) return;

    try {
        const res = await fetch('/api/swipe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: currentUser.id,
                partnerId: partnerId,
                action: 'like'
            })
        });
        const data = await res.json();
        
        if (!res.ok) {
            showToast(data.error || "Gagal merekam swipe", "danger");
            return;
        }

        matches = data.matches || [];

        if (data.isMatch) {
            triggerMatchModal(partner);
        } else {
            showToast("Match request sent!");
        }

        renderDashboard();
        renderSearch();
        renderMatches();
    } catch (err) {
        console.error("Error on swipe right:", err);
    }
}

async function handlePass(partnerId) {
    try {
        const res = await fetch('/api/swipe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: currentUser.id,
                partnerId: partnerId,
                action: 'pass'
            })
        });
        const data = await res.json();
        
        if (res.ok) {
            matches = data.matches || [];
            showToast("Skipped");
            renderDashboard();
            renderSearch();
            renderMatches();
        }
    } catch (err) {
        console.error("Error on swipe left:", err);
    }
}

// YOU MATCHED Popup Modal
function triggerMatchModal(partner) {
    elMatchAvatarMe.src = `https://api.dicebear.com/7.x/bottts/svg?seed=${currentUser.avatarSeed || 'default'}`;
    elMatchAvatarPartner.src = `https://api.dicebear.com/7.x/bottts/svg?seed=${partner.avatarSeed}`;
    
    // Translate modal text
    const textPattern = TRANSLATIONS[currentLanguage]["matched_text"] || "Kamu dan {name} saling menyukai!";
    elMatchModalText.innerText = textPattern.replace("{name}", partner.displayName);
    
    elMatchModal.classList.remove("hidden");

    // Close handler
    elBtnCloseMatchModal.onclick = function() {
        elMatchModal.classList.add("hidden");
        // Buka chat window
        openChatWindow(partner.id);
    };
}

// ================= MATCHES VIEW =================
function renderMatches() {
    if (!currentUser) return;

    elIncomingMatchesList.innerHTML = "";
    elActiveMatchesList.innerHTML = "";

    let incomingCount = 0;
    let activeCount = 0;

    matches.forEach(m => {
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

    const dict = TRANSLATIONS[currentLanguage];
    if (incomingCount === 0) {
        elIncomingMatchesList.innerHTML = `
            <div class="empty-state">
                <i class="fa-regular fa-envelope-open"></i>
                <p>${dict["empty_incoming"] || "Tidak ada permintaan match masuk."}</p>
            </div>
        `;
    }

    if (activeCount === 0) {
        elActiveMatchesList.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-people-arrows"></i>
                <p>${dict["empty_matches"] || "Belum ada match yang aktif."}</p>
            </div>
        `;
    }
}

window.acceptMatchRequest = function(matchId) {
    const match = matches.find(m => m.id === matchId);
    if (!match) return;

    match.status = "ACTIVE";
    localStorage.setItem("sem_matches", JSON.stringify(matches));
    showToast("Match accepted!");

    const partner = users.find(u => u.id === (match.userAId === currentUser.id ? match.userBId : match.userAId));
    if (partner) {
        triggerMatchModal(partner);
    }

    renderMatches();
    renderDashboard();
};

window.rejectMatchRequest = function(matchId) {
    matches = matches.filter(m => m.id !== matchId);
    localStorage.setItem("sem_matches", JSON.stringify(matches));
    showToast("Match request removed.", "danger");

    renderMatches();
    renderDashboard();
};

// ================= CHAT LOGIC & TRANSLATOR TOOL =================
window.openChatWindow = function(partnerId) {
    activeChatPartnerId = partnerId;
    document.querySelector('[data-target="view-chat"]').click();
    renderChat();
};

function renderChat() {
    if (!currentUser) return;

    elChatUsersList.innerHTML = "";
    
    const activeMatches = matches.filter(m => 
        m.status === "ACTIVE" && (m.userAId === currentUser.id || m.userBId === currentUser.id)
    );

    if (activeMatches.length === 0) {
        elChatUsersList.innerHTML = `<span class="subtitle" style="padding: 1.5rem; display:block; text-align:center;">Belum memiliki partner chat.</span>`;
        elChatNoSelection.classList.remove("hidden");
        elChatActive.classList.add("hidden");
        return;
    }

    activeMatches.forEach(m => {
        const partnerId = m.userAId === currentUser.id ? m.userBId : m.userAId;
        const partner = users.find(u => u.id === partnerId);
        
        if (partner) {
            const partnerMsgs = messages.filter(msg => 
                (msg.senderId === currentUser.id && msg.receiverId === partner.id) ||
                (msg.senderId === partner.id && msg.receiverId === currentUser.id)
            );
            const lastMsgText = partnerMsgs.length > 0 ? partnerMsgs[partnerMsgs.length - 1].body : "Belum ada obrolan";

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

    if (!activeChatPartnerId) {
        elChatNoSelection.classList.remove("hidden");
        elChatActive.classList.add("hidden");
    } else {
        elChatNoSelection.classList.add("hidden");
        elChatActive.classList.remove("hidden");

        const partner = users.find(u => u.id === activeChatPartnerId);
        elChatPartnerName.innerText = partner.displayName;
        elChatPartnerAvatar.src = `https://api.dicebear.com/7.x/bottts/svg?seed=${partner.avatarSeed}`;

        // Render Messages dengan Terjemahan Real-time (jika dipilih)
        elChatMessagesContainer.innerHTML = "";
        const conversation = messages.filter(msg => 
            (msg.senderId === currentUser.id && msg.receiverId === partner.id) ||
            (msg.senderId === partner.id && msg.receiverId === currentUser.id)
        );

        const targetLang = elChatTranslateLang.value; // 'none', 'id', 'jp', 'en', 'zh'

        if (conversation.length === 0) {
            elChatMessagesContainer.innerHTML = `
                <div class="empty-state">
                    <p>Mulai percakapan Anda!</p>
                </div>
            `;
        } else {
            conversation.forEach(msg => {
                const isSent = msg.senderId === currentUser.id;
                
                // Cari terjemahan di database kamus chat simulasi
                let translationText = "";
                if (targetLang !== "none" && CHAT_TRANSLATIONS[msg.body] && CHAT_TRANSLATIONS[msg.body][targetLang]) {
                    translationText = CHAT_TRANSLATIONS[msg.body][targetLang];
                } else if (targetLang !== "none" && !isSent) {
                    // Fallback translate untuk teks lain
                    translationText = mockTranslation(msg.body, targetLang);
                }

                const translationHtml = translationText ? 
                    `<div class="translate-subtext"><i class="fa-solid fa-language"></i> ${targetLang.toUpperCase()}: ${translationText}</div>` : "";

                elChatMessagesContainer.innerHTML += `
                    <div class="message-wrapper ${isSent ? 'wrapper-sent' : 'wrapper-received'}">
                        <div class="message-bubble ${isSent ? 'msg-sent' : 'msg-received'}">
                            ${msg.body}
                        </div>
                        ${translationHtml}
                    </div>
                `;
            });
            elChatMessagesContainer.scrollTop = elChatMessagesContainer.scrollHeight;
        }
    }
}

window.selectChatPartner = function(partnerId) {
    activeChatPartnerId = partnerId;
    renderChat();
};

// Deteksi perubahan bahasa dropdown terjemahan di chat
elChatTranslateLang.addEventListener("change", renderChat);

// Fungsi mock terjemahan untuk pesan non-dictionary
function mockTranslation(text, lang) {
    const jpTemplates = ["はい、分かりました！", "素晴らしいですね！一緒に勉強しましょう。", "Zoomリンクを送ってください。"];
    const enTemplates = ["Alright, got it!", "That's awesome! Let's study together.", "Send me the Zoom link."];
    const zhTemplates = ["好的，明白了！", "太棒了！我们一起学习吧。", "把Zoom链接发给我吧。"];
    const idTemplates = ["Baik, saya paham!", "Hebat sekali! Mari belajar bersama.", "Kirimkan link Zoom-nya ke saya."];

    const hash = text.length % 3;
    switch(lang) {
        case "jp": return jpTemplates[hash];
        case "en": return enTemplates[hash];
        case "zh": return zhTemplates[hash];
        case "id": return idTemplates[hash];
        default: return "";
    }
}

elChatSendForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!activeChatPartnerId || !currentUser) return;

    const messageText = elChatInput.value.trim();
    if (!messageText) return;

    elChatInput.value = "";

    try {
        const res = await fetch('/api/messages', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                senderId: currentUser.id,
                receiverId: activeChatPartnerId,
                body: messageText
            })
        });
        const data = await res.json();
        
        if (res.ok) {
            messages = data.messages || [];
            renderChat();
            
            const chatContainer = document.getElementById("chat-messages-container");
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    } catch (err) {
        console.error("Error sending message:", err);
    }
});

function updateChatBadge() {
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

elProfileForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!currentUser) return;

    const updatedProfile = {
        userId: currentUser.id,
        displayName: elProfileName.value.trim(),
        avatarSeed: elProfileAvatarSeed.value,
        department: elProfileDept.value.trim(),
        grade: elProfileGrade.value.trim(),
        bio: elProfileBio.value.trim()
    };

    try {
        const res = await fetch('/api/profile/update', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedProfile)
        });
        const data = await res.json();

        if (!res.ok) {
            showToast(data.error || "Gagal memperbarui profil!", "danger");
            return;
        }

        currentUser = data.user;
        users = data.users || [];
        localStorage.setItem("sem_current_user", JSON.stringify(currentUser));
        showToast("Profile updated!");
        
        elUserDisplayName.innerText = currentUser.displayName;
        elUserDisplayDept.innerText = `${currentUser.department} (${currentUser.grade})`;
        elUserAvatar.src = `https://api.dicebear.com/7.x/bottts/svg?seed=${currentUser.avatarSeed}`;
    } catch (err) {
        showToast("Terjadi kesalahan jaringan!", "danger");
        console.error(err);
    }
});

function renderManageSkills() {
    elManageTeachList.innerHTML = "";
    currentUser.teachSkills.forEach((s, i) => {
        elManageTeachList.innerHTML += `
            <span class="skill-chip ${getCategoryClass(s.category)}">
                ${s.name}
                <i class="fa-solid fa-xmark remove-skill" onclick="removeSkill('teach', ${i})"></i>
            </span>
        `;
    });

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

elBtnAddTeach.addEventListener("click", async () => {
    const name = elInputTeachSkill.value.trim();
    const category = elSelectTeachCat.value;

    if (!name) return;

    const exists = currentUser.teachSkills.some(s => s.name.toLowerCase() === name.toLowerCase());
    if (exists) {
        showToast("Skill already added!", "danger");
        return;
    }

    try {
        const res = await fetch('/api/profile/skills', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: currentUser.id,
                type: 'teach',
                skill: { name, category }
            })
        });
        const data = await res.json();
        if (res.ok) {
            currentUser = data.user;
            users = data.users || [];
            localStorage.setItem("sem_current_user", JSON.stringify(currentUser));
            elInputTeachSkill.value = "";
            renderManageSkills();
            showToast("Skill added!");
        }
    } catch (err) {
        console.error("Error adding skill:", err);
    }
});

elBtnAddLearn.addEventListener("click", async () => {
    const name = elInputLearnSkill.value.trim();
    const category = elSelectLearnCat.value;

    if (!name) return;

    const exists = currentUser.learning.some(s => s.name.toLowerCase() === name.toLowerCase());
    if (exists) {
        showToast("Learning need already added!", "danger");
        return;
    }

    try {
        const res = await fetch('/api/profile/skills', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: currentUser.id,
                type: 'learn',
                skill: { name, category }
            })
        });
        const data = await res.json();
        if (res.ok) {
            currentUser = data.user;
            users = data.users || [];
            localStorage.setItem("sem_current_user", JSON.stringify(currentUser));
            elInputLearnSkill.value = "";
            renderManageSkills();
            showToast("Skill added!");
        }
    } catch (err) {
        console.error("Error adding skill:", err);
    }
});

window.removeSkill = async function(type, index) {
    const skillList = type === 'teach' ? currentUser.teachSkills : currentUser.learning;
    if (!skillList[index]) return;
    const skillName = skillList[index].name;

    try {
        const res = await fetch('/api/profile/skills/delete', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: currentUser.id,
                type,
                skillName
            })
        });
        const data = await res.json();
        if (res.ok) {
            currentUser = data.user;
            users = data.users || [];
            localStorage.setItem("sem_current_user", JSON.stringify(currentUser));
            renderManageSkills();
            showToast("Skill removed!");
        }
    } catch (err) {
        console.error("Error removing skill:", err);
    }
};
