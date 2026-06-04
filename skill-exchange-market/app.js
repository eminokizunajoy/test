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
        empty_incoming: "Tidak ada permintaan match masuk.",
        upload_photo: "Unggah Foto Kustom",
        label_language: "Bahasa",
        chat_translate_to: "Terjemahkan ke:",
        lang_original: "Asli",
        lang_id: "Bahasa Indonesia",
        lang_jp: "日本語",
        lang_en: "English",
        lang_zh: "中文",
        chat_input_placeholder: "Tulis pesan untuk partner Anda...",
        profile_dept_placeholder: "Informatika, Sastra, Teknik...",
        profile_bio_placeholder: "Saya menyukai programming...",
        input_teach_skill_placeholder: "Python, Masak, Fotografi",
        input_learn_skill_placeholder: "Laravel, Photoshop, Mandarin",
        cat_design: "Desain",
        cat_business: "Bisnis",
        cat_language: "Bahasa",
        cat_other: "Lain-lain",
        no_chat_partner: "Belum memiliki partner chat.",
        no_conversations: "Belum ada obrolan",
        start_conversation: "Mulai percakapan Anda!",
        no_skills: "Belum ada skill",
        no_learning_needs: "Belum ada kebutuhan",
        no_skills_teach_fallback: "Belum ada skill diajarkan",
        no_skills_learn_fallback: "Belum ada skill dipelajari",
        toast_match_accepted: "Match diterima!",
        toast_match_removed: "Match dihapus.",
        toast_match_sent: "Permintaan match dikirim!",
        toast_skipped: "Dilewati",
        toast_profile_updated: "Profil berhasil diperbarui!",
        toast_photo_loaded: "Foto berhasil dimuat. Klik Simpan Profil!",
        toast_skill_exists: "Skill sudah ditambahkan!",
        toast_skill_added: "Skill berhasil ditambahkan!",
        toast_skill_removed: "Skill berhasil dihapus!",
        toast_network_error: "Terjadi kesalahan jaringan!",
        toast_photo_limit: "Ukuran foto maksimal 2MB!",
                toast_logout: "Berhasil keluar.",
        toast_registration_success: "Pendaftaran berhasil! Silakan masuk.",
        toast_password_length: "Password harus minimal 6 karakter!",
        toast_opening_deck: "Membuka deck kartu...",
        menu_forum: "Forum Q&A",
        menu_study: "Study Room",
        menu_leaderboard: "Leaderboard",
        notifications_title: "Notifikasi",
        clear: "Bersihkan",
        no_notifications: "Tidak ada notifikasi baru",
        rate_partner: "Beri Ulasan",
        schedule_study: "Jadwal Belajar",
        set_meeting: "Atur Pertemuan",
        no_sessions: "Belum ada pertemuan terjadwal",
        forum_title: "Forum Diskusi & Q&A",
        forum_subtitle: "Tanyakan hal kecil dan temukan teman belajar sebelum mencocokkan.",
        btn_ask: "Tanya Sesuatu",
        forum_search_placeholder: "Cari pertanyaan...",
        answers_title: "Jawaban",
        your_answer: "Tulis Jawaban Anda",
        forum_answer_placeholder: "Bagikan pengetahuan Anda...",
        btn_submit_answer: "Kirim Jawaban",
        study_title: "Virtual Study Room (Pomodoro)",
        study_subtitle: "Belajar produktif bersama teman secara visual tanpa gangguan.",
        pomodoro_session: "Sesi Fokus",
        study_info_title: "Status Co-Working",
        study_desc: "Mulai timer Pomodoro untuk mengaktifkan sesi belajar fokus.",
        pomodoro_mode_focus: "Fokus (25 Menit)",
        pomodoro_mode_short: "Istirahat Singkat (5 Menit)",
        pomodoro_mode_long: "Istirahat Panjang (15 Menit)",
        pomodoro_status_running: "Fokus Belajar Aktif! Tetap fokus pada tugas Anda.",
        pomodoro_status_paused: "Sesi ditunda. Klik putar untuk melanjutkan.",
        pomodoro_status_idle: "Mulai timer Pomodoro untuk sesi belajar fokus.",
        pomodoro_status_break: "Waktunya Istirahat! Nikmati 5 menit waktu senggang.",
        pomodoro_finished_focus: "Sesi fokus selesai! Waktunya istirahat.",
        pomodoro_finished_break: "Istirahat selesai! Mulai sesi fokus berikutnya.",
        cam_on: "Kamera On",
        cam_off: "Kamera Off",
        mic_on: "Mic On",
        mic_off: "Mic Off",
        screen_share: "Bagikan Layar",
        video_label_you: "Kamu",
        video_label_partner: "Partner Belajar (Simulasi)",
        leaderboard_title: "Papan Peringkat (Leaderboard)",
        leaderboard_subtitle: "Aktivitas mengajar dan belajar terbaik mahasiswa bulan ini.",
        rank: "Peringkat",
        modal_ask_title: "Tanyakan Sesuatu",
        modal_schedule_title: "Atur Jadwal Belajar",
        modal_review_title: "Ulasan Partner Belajar",
        modal_flash_title: "Buat Tugas Darurat (Flash Match)",
        flash_board_title: "Papan Tugas Darurat (Flash Match)",
        btn_create_flash: "Buat Tugas Darurat",
        filters: "Filter",
        filter_skill_level: "Level Keahlian",
        filter_study_method: "Metode Belajar",
        filter_availability: "Ketersediaan Waktu",
        all: "Semua",
        reset: "Reset",
        apply: "Terapkan",
        cancel: "Batal",
        profile_method: "Metode Belajar Utama",
        profile_availability: "Ketersediaan Waktu",
        level_beginner: "Beginner (Pemula)",
        level_intermediate: "Intermediate (Menengah)",
        level_advanced: "Advanced (Ahli)",
        toast_registration_success: "Pendaftaran berhasil! Silakan masuk.",
        toast_password_length: "Password harus minimal 6 karakter!",
        toast_opening_deck: "Membuka deck kartu...",
        no_recommendations: "Belum ada rekomendasi baru yang cocok. Coba lengkapi profil di halaman edit profil!",
        teaches: "Mengajar",
        send_match: "Kirim Match",
        no_bio_fallback: "Mahasiswa ini belum mengisi bio.",
        no_leaderboard_other: "Belum ada peringkat lainnya",
        no_forum_questions: "Belum ada pertanyaan di forum ini. Jadilah yang pertama bertanya!",
        no_forum_answers: "Belum ada jawaban. Tulis jawaban pertama Anda di bawah!",
        no_badges_earned: "Belum ada gelar",
        no_teach_skills_passport: "Belum ada keahlian diajarkan.",
        no_learn_skills_passport: "Belum ada kebutuhan belajar.",
        modal_create_group_title: "Buat Grup Belajar Baru",
        group_name_label: "Nama Grup",
        group_desc_label: "Deskripsi",
        group_skill_label: "Fokus Skill Utama",
        btn_create: "Buat Grup",
        modal_invite_title: "Undang Teman Belajar",
        invite_helper_desc: "Hanya menampilkan partner match aktif yang memiliki kecocokan skill yang sama dengan grup ini.",
        btn_invite: "Undang",
        no_groups: "Belum bergabung ke grup",
        no_eligible_partners: "Tidak ada partner match yang cocok untuk diundang.",
        menu_study_group: "Grup Belajar",
        passport_cert_text: "Sertifikat Portofolio ini secara resmi diberikan kepada:",
        passport_cert_subtext: "atas keaktifan akademik dan partisipasi dalam pertukaran keahlian mahasiswa.",
        passport_give_title: "Materi Pengajaran (Give Skills)",
        passport_take_title: "Materi Kebutuhan Belajar (Take Skills)",
        passport_level_label: "Tingkat Reputasi",
        passport_rating_label: "Rating Penilaian",
        passport_date_label: "Tanggal Cetak",
        no_flash_requests: "Tidak ada tugas darurat saat ini.",
        flash_reward: "Imbalan",
        flash_by: "Oleh",
        btn_take: "Ambil",
        rating_new: "Baru",
        toast_auth_error: "Email atau password Anda salah!",
        toast_welcome: "Selamat datang",
        toast_registration_failed: "Pendaftaran gagal!",
        toast_swipe_error: "Gagal merekam swipe",
        toast_match_accept_error: "Gagal menyetujui match",
        toast_match_reject_error: "Gagal menolak match",
        toast_group_create_error: "Gagal membuat grup",
        toast_profile_update_error: "Gagal memperbarui profil!",
        toast_review_sent: "Ulasan berhasil dikirim!",
        toast_meeting_scheduled: "Pertemuan berhasil dijadwalkan!",
        toast_question_posted: "Pertanyaan Anda berhasil diterbitkan!",
        toast_answer_sent: "Jawaban Anda berhasil dikirim!",
        toast_match_formed: "Match terbentuk! Obrolan diaktifkan.",
        toast_match_invite_sent: "Undangan match dikirim!",
        toast_pomodoro_finished: "Sesi Pomodoro selesai! Waktunya istirahat.",
        toast_camera_error: "Gagal mengakses kamera!",
        toast_mic_on: "Mikrofon Diaktifkan!",
        toast_mic_off: "Mikrofon Dimatikan!",
        toast_screenshare_start: "Berbagi Layar Dimulai!",
        toast_screenshare_end: "Berbagi Layar Selesai.",
        toast_flash_posted: "Request darurat berhasil diposting!",
        toast_flash_match_formed: "Flash Match terbentuk! Membuka obrolan...",
        toast_flash_take_error: "Gagal mengambil request"
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
        profile_manage_skills: "スキルとニーズ of 管理",
        skills_to_teach: "自分が教えられるスキル",
        skills_to_learn: "自分が学びたいスキル",
        you_matched: "マッチング成立！",
        send_message: "メッセージを送る",
        matched_text: "あなたと {name} はお互いにいいね！しました！",
        empty_matches: "アクティブなマッチングはありません。",
        empty_incoming: "受信したリクエストはありません。",
        upload_photo: "カスタム写真をアップロード",
        label_language: "言語",
        chat_translate_to: "翻訳先:",
        lang_original: "原文",
        lang_id: "インドネシア語",
        lang_jp: "日本語",
        lang_en: "英語",
        lang_zh: "中国語",
        chat_input_placeholder: "メッセージを入力してください...",
        profile_dept_placeholder: "情報工学、文学、工学など...",
        profile_bio_placeholder: "プログラミングが好きです...",
        input_teach_skill_placeholder: "Python、料理、写真など",
        input_learn_skill_placeholder: "Laravel、Photoshop、中国語など",
        cat_design: "デザイン",
        cat_business: "ビジネス",
        cat_language: "語学",
        cat_other: "その他",
        no_chat_partner: "チャットパートナーがまだいません。",
        no_conversations: "会話履歴なし",
        start_conversation: "メッセージを送信して会話を始めましょう！",
        no_skills: "スキルが登録されていません",
        no_learning_needs: "学びたいスキルがありません",
        no_skills_teach_fallback: "教えられるスキルがありません",
        no_skills_learn_fallback: "学びたいスキルがありません",
        toast_match_accepted: "マッチを承認しました！",
        toast_match_removed: "マッチリクエストを削除しました。",
        toast_match_sent: "マッチリクエストを送信しました！",
        toast_skipped: "スワイプしました",
        toast_profile_updated: "プロフィールを更新しました！",
        toast_photo_loaded: "写真が読み込まれました。「プロフィールを保存」をクリックしてください！",
        toast_skill_exists: "このスキルは既に追加されています！",
        toast_skill_added: "スキルを追加しました！",
        toast_skill_removed: "スキルを削除しました！",
        toast_network_error: "ネットワークエラーが発生しました！",
        toast_photo_limit: "写真のサイズは最大2MBまでです！",
                toast_logout: "ログアウトしました。",
        toast_registration_success: "登録が完了しました！",
        toast_password_length: "パスワードは6文字以上で入力してください！",
        toast_opening_deck: "探索カードを開いています...",
        menu_forum: "Q&Aフォーラム",
        menu_study: "自習室",
        menu_leaderboard: "リーダーボード",
        notifications_title: "通知",
        clear: "クリア",
        no_notifications: "新しい通知はありません",
        rate_partner: "評価する",
        schedule_study: "学習スケジュール",
        set_meeting: "ミーティング設定",
        no_sessions: "予定されたミーティングはありません",
        forum_title: "ディスカッション＆Q&Aフォーラム",
        forum_subtitle: "ディスカッションで疑問を解決し、マッチングパートナーを見つけましょう。",
        btn_ask: "質問する",
        forum_search_placeholder: "質問を検索...",
        answers_title: "回答",
        your_answer: "回答を入力する",
        forum_answer_placeholder: "知識を共有しましょう...",
        btn_submit_answer: "回答を送信",
        study_title: "バーチャル自習室 (ポモドーロ)",
        study_subtitle: "ポモドーロタイマーとWebカメラ共有で、他の学生と一緒に集中して勉強しましょう。",
        pomodoro_session: "集中セッション",
        study_info_title: "コワーキングステータス",
        study_desc: "ポモドーロタイマーを開始して、集中学習セッションを始めましょう。",
        pomodoro_mode_focus: "集中 (25分)",
        pomodoro_mode_short: "短い休憩 (5分)",
        pomodoro_mode_long: "長い休憩 (15分)",
        pomodoro_status_running: "集中学習中！タスクに集中しましょう。",
        pomodoro_status_paused: "一時停止中。再開するには再生を押してください。",
        pomodoro_status_idle: "ポモドーロタイマーを開始して集中セッションを始めましょう。",
        pomodoro_status_break: "休憩時間！5分間リフレッシュしましょう。",
        pomodoro_finished_focus: "集中セッション終了！休憩しましょう。",
        pomodoro_finished_break: "休憩終了！次の集中セッションを始めましょう。",
        cam_on: "カメラ オン",
        cam_off: "カメラ オフ",
        mic_on: "マイク オン",
        mic_off: "マイク オフ",
        screen_share: "画面共有",
        video_label_you: "あなた",
        video_label_partner: "学習パートナー (シミュレーション)",
        leaderboard_title: "リーダーボード",
        leaderboard_subtitle: "今月の最もアクティブな学生のランキング。",
        rank: "順位",
        modal_ask_title: "質問を投稿する",
        modal_schedule_title: "ミーティング設定",
        modal_review_title: "パートナー評価",
        modal_flash_title: "緊急リクエスト (Flash Match)",
        flash_board_title: "緊急リクエストボード (Flash Match)",
        btn_create_flash: "緊急リクエスト作成",
        filters: "フィルター",
        filter_skill_level: "スキルレベル",
        filter_study_method: "学習方法",
        filter_availability: "時間帯",
        all: "すべて",
        reset: "リセット",
        apply: "適用",
        cancel: "キャンセル",
        profile_method: "主な学習方法",
        profile_availability: "都合の良い時間帯",
        level_beginner: "Beginner (初心者)",
        level_intermediate: "Intermediate (中級者)",
        level_advanced: "Advanced (上級者)",
        toast_registration_success: "登録が完了しました！",
        toast_password_length: "パスワードは6文字以上で入力してください！",
        toast_opening_deck: "探索カードを開いています...",
        no_recommendations: "マッチする新しいおすすめのパートナーはまだいません。プロフィール編集ページで情報を入力してください！",
        teaches: "教えられるスキル",
        send_match: "マッチを送信",
        no_bio_fallback: "この学生はまだ自己紹介を入力していません。",
        no_leaderboard_other: "他の順位はまだありません",
        no_forum_questions: "このフォーラムにはまだ質問がありません。最初の質問を投稿しましょう！",
        no_forum_answers: "回答はまだありません。以下に最初の回答を入力しましょう！",
        no_badges_earned: "獲得したバッジ（称号）はまだありません",
        no_teach_skills_passport: "教えられるスキルがまだ登録されていません。",
        no_learn_skills_passport: "学びたいスキルがまだ登録されていません。",
        modal_create_group_title: "新規勉強グループ作成",
        group_name_label: "グループ名",
        group_desc_label: "説明",
        group_skill_label: "主な対象スキル",
        btn_create: "作成",
        modal_invite_title: "学習パートナーを招待",
        invite_helper_desc: "このグループと同じスキルを持つ、アクティブなマッチングパートナーのみが表示されます。",
        btn_invite: "招待",
        no_groups: "グループ未加入",
        no_eligible_partners: "招待可能なマッチングパートナーがいません。",
        menu_study_group: "勉強グループ",
        passport_cert_text: "このポートフォリオ証明書は、以下の方に正式に授与されます：",
        passport_cert_subtext: "学術的な活動および学生間のスキル交換への積極的な参加を称えます。",
        passport_give_title: "教えられるスキル (Give Skills)",
        passport_take_title: "学びたいスキル (Take Skills)",
        passport_level_label: "評判レベル",
        passport_rating_label: "評価",
        passport_date_label: "発行日",
        no_flash_requests: "現在、緊急リクエストはありません。",
        flash_reward: "報酬",
        flash_by: "投稿者",
        btn_take: "引き受ける",
        rating_new: "新規",
        toast_auth_error: "メールアドレスまたはパスワードが正しくありません！",
        toast_welcome: "ようこそ",
        toast_registration_failed: "登録に失敗しました！",
        toast_swipe_error: "スワイプの保存に失敗しました",
        toast_match_accept_error: "マッチの承認に失敗しました",
        toast_match_reject_error: "マッチの拒否に失敗しました",
        toast_group_create_error: "グループの作成に失敗しました",
        toast_profile_update_error: "プロフィールの更新に失敗しました！",
        toast_review_sent: "レビューを送信しました！",
        toast_meeting_scheduled: "ミーティングがスケジュールされました！",
        toast_question_posted: "質問が投稿されました！",
        toast_answer_sent: "回答を送信しました！",
        toast_match_formed: "マッチング成立！チャットが利用可能になりました。",
        toast_match_invite_sent: "マッチリクエストを送信しました！",
        toast_pomodoro_finished: "ポモドーロセッション終了！休憩時間です。",
        toast_camera_error: "カメラへのアクセスに失敗しました！",
        toast_mic_on: "マイクがオンになりました！",
        toast_mic_off: "マイクがオフになりました！",
        toast_screenshare_start: "画面共有を開始しました！",
        toast_screenshare_end: "画面共有を終了しました。",
        toast_flash_posted: "緊急リクエストを投稿しました！",
        toast_flash_match_formed: "フラッシュマッチ成立！チャットを開いています...",
        toast_flash_take_error: "リクエストの引き受けに失敗しました"
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
        empty_incoming: "No incoming match requests.",
        upload_photo: "Upload Custom Photo",
        label_language: "Language",
        chat_translate_to: "Translate to:",
        lang_original: "Original",
        lang_id: "Indonesian",
        lang_jp: "Japanese",
        lang_en: "English",
        lang_zh: "Chinese",
        chat_input_placeholder: "Type a message for your partner...",
        profile_dept_placeholder: "IT, Literature, Engineering...",
        profile_bio_placeholder: "I like programming...",
        input_teach_skill_placeholder: "Python, Cooking, Photography",
        input_learn_skill_placeholder: "Laravel, Photoshop, Chinese",
        cat_design: "Design",
        cat_business: "Business",
        cat_language: "Language",
        cat_other: "Other",
        no_chat_partner: "No chat partners yet.",
        no_conversations: "No conversation",
        start_conversation: "Start your conversation!",
        no_skills: "No skills added yet",
        no_learning_needs: "No learning needs added yet",
        no_skills_teach_fallback: "No skills to teach",
        no_skills_learn_fallback: "No skills to learn",
        toast_match_accepted: "Match accepted!",
        toast_match_removed: "Match request removed.",
        toast_match_sent: "Match request sent!",
        toast_skipped: "Skipped",
        toast_profile_updated: "Profile updated!",
        toast_photo_loaded: "Photo loaded successfully. Click Save Profile!",
        toast_skill_exists: "Skill already added!",
        toast_skill_added: "Skill added!",
        toast_skill_removed: "Skill removed!",
        toast_network_error: "Network error occurred!",
        toast_photo_limit: "Max photo size is 2MB!",
                toast_logout: "Logged out successfully.",
        toast_registration_success: "Registration successful! Please login.",
        toast_password_length: "Password must be at least 6 characters!",
        toast_opening_deck: "Opening card deck...",
        menu_forum: "Forum Q&A",
        menu_study: "Study Room",
        menu_leaderboard: "Leaderboard",
        notifications_title: "Notifications",
        clear: "Clear",
        no_notifications: "No new notifications",
        rate_partner: "Rate Partner",
        schedule_study: "Study Schedule",
        set_meeting: "Set Meeting",
        no_sessions: "No study sessions scheduled",
        forum_title: "Forum Discussion & Q&A",
        forum_subtitle: "Ask questions and find study buddies before matching.",
        btn_ask: "Ask Question",
        forum_search_placeholder: "Search questions...",
        answers_title: "Answers",
        your_answer: "Write Your Answer",
        forum_answer_placeholder: "Share your knowledge...",
        btn_submit_answer: "Submit Answer",
        study_title: "Virtual Study Room (Pomodoro)",
        study_subtitle: "Study productively with others using Pomodoro and Webcams.",
        pomodoro_session: "Focus Session",
        study_info_title: "Co-Working Status",
        study_desc: "Start Pomodoro timer to begin your focus session.",
        pomodoro_mode_focus: "Focus (25 Min)",
        pomodoro_mode_short: "Short Break (5 Min)",
        pomodoro_mode_long: "Long Break (15 Min)",
        pomodoro_status_running: "Focus Mode Active! Stay on task.",
        pomodoro_status_paused: "Session paused. Press play to resume.",
        pomodoro_status_idle: "Start Pomodoro timer to begin a focus session.",
        pomodoro_status_break: "Break Time! Refresh for 5 minutes.",
        pomodoro_finished_focus: "Focus session done! Take a break.",
        pomodoro_finished_break: "Break over! Start your next focus session.",
        cam_on: "Camera On",
        cam_off: "Camera Off",
        mic_on: "Mic On",
        mic_off: "Mic Off",
        screen_share: "Share Screen",
        video_label_you: "You",
        video_label_partner: "Study Partner (Simulation)",
        leaderboard_subtitle: "Rankings of the most active learning students this month.",
        rank: "Rank",
        modal_ask_title: "Ask a Question",
        modal_schedule_title: "Set Study Schedule",
        modal_review_title: "Rate Study Partner",
        modal_flash_title: "Create Emergency Request (Flash Match)",
        flash_board_title: "Emergency Task Board (Flash Match)",
        btn_create_flash: "Create Emergency Request",
        filters: "Filters",
        filter_skill_level: "Skill Level",
        filter_study_method: "Study Method",
        filter_availability: "Availability",
        all: "All",
        reset: "Reset",
        apply: "Apply",
        cancel: "Cancel",
        profile_method: "Preferred Study Method",
        profile_availability: "Time Availability",
        level_beginner: "Beginner",
        level_intermediate: "Intermediate",
        level_advanced: "Advanced",
        toast_registration_success: "Registration successful! Please login.",
        toast_password_length: "Password must be at least 6 characters!",
        toast_opening_deck: "Opening card deck...",
        no_recommendations: "No matching recommendations yet. Try completing your profile on the edit profile page!",
        teaches: "Teaches",
        send_match: "Send Match",
        no_bio_fallback: "This student has not filled out their bio yet.",
        no_leaderboard_other: "No other ranks yet",
        no_forum_questions: "No questions in this forum yet. Be the first to ask!",
        no_forum_answers: "No answers yet. Write your first answer below!",
        no_badges_earned: "No titles earned yet",
        no_teach_skills_passport: "No teaching skills registered yet.",
        no_learn_skills_passport: "No learning needs registered yet.",
        modal_create_group_title: "Create New Study Group",
        group_name_label: "Group Name",
        group_desc_label: "Description",
        group_skill_label: "Target Skill",
        btn_create: "Create Group",
        modal_invite_title: "Invite Study Partner",
        invite_helper_desc: "Only displays active match partners who share the same skill as this group.",
        btn_invite: "Invite",
        no_groups: "Not in any group",
        no_eligible_partners: "No matched partners eligible for invitation.",
        menu_study_group: "Study Groups",
        passport_cert_text: "This Portfolio Certificate is officially awarded to:",
        passport_cert_subtext: "for academic activity and participation in student skill exchange.",
        passport_give_title: "Teaching Topics (Give Skills)",
        passport_take_title: "Learning Needs (Take Skills)",
        passport_level_label: "Reputation Level",
        passport_rating_label: "Rating",
        passport_date_label: "Print Date",
        no_flash_requests: "No emergency requests at this time.",
        flash_reward: "Reward",
        flash_by: "By",
        btn_take: "Take",
        rating_new: "New",
        toast_auth_error: "Invalid email or password!",
        toast_welcome: "Welcome",
        toast_registration_failed: "Registration failed!",
        toast_swipe_error: "Failed to record swipe",
        toast_match_accept_error: "Failed to accept match",
        toast_match_reject_error: "Failed to reject match",
        toast_group_create_error: "Failed to create group",
        toast_profile_update_error: "Failed to update profile!",
        toast_review_sent: "Review sent successfully!",
        toast_meeting_scheduled: "Meeting scheduled successfully!",
        toast_question_posted: "Question posted successfully!",
        toast_answer_sent: "Answer sent successfully!",
        toast_match_formed: "Match formed! Chat enabled.",
        toast_match_invite_sent: "Match invitation sent!",
        toast_pomodoro_finished: "Pomodoro session finished! Time for a break.",
        toast_camera_error: "Failed to access camera!",
        toast_mic_on: "Microphone turned on!",
        toast_mic_off: "Microphone turned off!",
        toast_screenshare_start: "Screen sharing started!",
        toast_screenshare_end: "Screen sharing ended.",
        toast_flash_posted: "Emergency request posted successfully!",
        toast_flash_match_formed: "Flash Match formed! Opening chat...",
        toast_flash_take_error: "Failed to take request"
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
        empty_incoming: "没有收到配对请求。",
        upload_photo: "上传自定义照片",
        label_language: "语言",
        chat_translate_to: "翻译为:",
        lang_original: "原文",
        lang_id: "印尼语",
        lang_jp: "日语",
        lang_en: "英语",
        lang_zh: "中文",
        chat_input_placeholder: "给你的伙伴写条信息...",
        profile_dept_placeholder: "资讯工程、文学、工学...",
        profile_bio_placeholder: "我喜欢编程...",
        input_teach_skill_placeholder: "Python，烹饪，摄影",
        input_learn_skill_placeholder: "Laravel，Photoshop，中文",
        cat_design: "设计",
        cat_business: "商业",
        cat_language: "语言",
        cat_other: "其他",
        no_chat_partner: "还没有聊天伙伴。",
        no_conversations: "暂无对话",
        start_conversation: "开始你们的对话吧！",
        no_skills: "尚未添加技能",
        no_learning_needs: "尚未添加学习需求",
        no_skills_teach_fallback: "没有可教授的技能",
        no_skills_learn_fallback: "没有要学习的技能",
        toast_match_accepted: "接受配对！",
        toast_match_removed: "配对请求已移除。",
        toast_match_sent: "已发送配对请求！",
        toast_skipped: "已跳过",
        toast_profile_updated: "个人资料已更新！",
        toast_photo_loaded: "照片加载成功。点击保存资料！",
        toast_skill_exists: "已添加此技能！",
        toast_skill_added: "技能已添加！",
        toast_skill_removed: "技能已删除！",
        toast_network_error: "发生网络错误！",
        toast_photo_limit: "照片大小最大为2MB！",
                toast_logout: "已成功退出登录。",
        toast_registration_success: "注册成功！请登录。",
        toast_password_length: "密码长度必须至少为6位！",
        toast_opening_deck: "正在打开卡片组...",
        menu_forum: "论坛与问答",
        menu_study: "自习室",
        menu_leaderboard: "排行榜",
        notifications_title: "通知",
        clear: "清除",
        no_notifications: "没有新通知",
        rate_partner: "评价伙伴",
        schedule_study: "学习计划",
        set_meeting: "设置会议",
        no_sessions: "暂无安排的学习会议",
        forum_title: "论坛与问答交流",
        forum_subtitle: "在配对之前先发帖询问小问题并寻找学习伙伴。",
        btn_ask: "我要发帖",
        forum_search_placeholder: "搜索帖子...",
        answers_title: "回答列表",
        your_answer: "撰写你的回答",
        forum_answer_placeholder: "分享你的知识...",
        btn_submit_answer: "提交回答",
        study_title: "虚拟自习室 (番茄钟)",
        study_subtitle: "使用番茄钟和摄像头同步，与其他同学高效静音自习。",
        pomodoro_session: "专注时间",
        study_info_title: "自习状态",
        study_desc: "启动番茄计时器，开启你的专注学习之旅。",
        pomodoro_mode_focus: "专注 (25分)",
        pomodoro_mode_short: "短休 (5分)",
        pomodoro_mode_long: "长休 (15分)",
        pomodoro_status_running: "专注模式已激活！请专注于任务。",
        pomodoro_status_paused: "已暂停。点播放继续。",
        pomodoro_status_idle: "启动番茄计时器开始专注学习。",
        pomodoro_status_break: "休息时间！放松5分钟。",
        pomodoro_finished_focus: "专注时间结束！去休息吧。",
        pomodoro_finished_break: "休息结束！开始下一个专注时间。",
        cam_on: "开启摄像头",
        cam_off: "关闭摄像头",
        mic_on: "开启麦克风",
        mic_off: "关闭麦克风",
        screen_share: "共享屏幕",
        video_label_you: "我",
        video_label_partner: "学习伙伴 (模拟)",
        leaderboard_subtitle: "本月最活跃的学生光荣榜。",
        rank: "排名",
        modal_ask_title: "发布提问",
        modal_schedule_title: "安排自习日程",
        modal_review_title: "评价你的学习伙伴",
        modal_flash_title: "发布紧急辅导求助 (Flash Match)",
        flash_board_title: "紧急求助告示板 (Flash Match)",
        btn_create_flash: "发布求助",
        filters: "筛选",
        filter_skill_level: "技能级别",
        filter_study_method: "学习方式",
        filter_availability: "空闲时间",
        all: "全部",
        reset: "重置",
        apply: "应用",
        cancel: "取消",
        profile_method: "主要自习方式",
        profile_availability: "空闲时间段",
        level_beginner: "Beginner (初学者)",
        level_intermediate: "Intermediate (中等)",
        level_advanced: "Advanced (熟练)",
        toast_registration_success: "注册成功！请登录。",
        toast_password_length: "密码长度必须至少为6位！",
        toast_opening_deck: "正在打开卡片组...",
        no_recommendations: "暂无符合的推荐伙伴。请尝试在编辑资料页面完善您的信息！",
        teaches: "可教技能",
        send_match: "发送匹配",
        no_bio_fallback: "该学生尚未填写个人简介。",
        no_leaderboard_other: "暂无其他排名",
        no_forum_questions: "本论坛暂无提问。快来发布第一个提问吧！",
        no_forum_answers: "暂无回答。在下方发表你的第一个回答吧！",
        no_badges_earned: "暂无称号",
        no_teach_skills_passport: "暂无登记的可教技能。",
        no_learn_skills_passport: "暂无登记的想学技能。",
        modal_create_group_title: "创建新学习小组",
        group_name_label: "小组名称",
        group_desc_label: "描述",
        group_skill_label: "主要目标技能",
        btn_create: "创建小组",
        modal_invite_title: "邀请学习伙伴",
        invite_helper_desc: "仅显示与此小组拥有相同技能的活跃匹配伙伴。",
        btn_invite: "邀请",
        no_groups: "未加入任何小组",
        no_eligible_partners: "没有可邀请的匹配伙伴。",
        menu_study_group: "学习小组",
        passport_cert_text: "此个人资料证书正式授予给：",
        passport_cert_subtext: "以表彰其在学生技能交换中的积极学术表现与参与。",
        passport_give_title: "教学内容 (Give Skills)",
        passport_take_title: "学习需求 (Take Skills)",
        passport_level_label: "信誉等级",
        passport_rating_label: "评分",
        passport_date_label: "打印日期",
        no_flash_requests: "目前没有紧急任务。",
        flash_reward: "奖励",
        flash_by: "发布者",
        btn_take: "接受",
        rating_new: "新",
        toast_auth_error: "邮箱或密码错误！",
        toast_welcome: "欢迎",
        toast_registration_failed: "注册失败！",
        toast_swipe_error: "记录滑动失败",
        toast_match_accept_error: "接受匹配失败",
        toast_match_reject_error: "拒绝匹配失败",
        toast_group_create_error: "创建小组失败",
        toast_profile_update_error: "更新个人资料失败！",
        toast_review_sent: "评价发送成功！",
        toast_meeting_scheduled: "会议日程安排成功！",
        toast_question_posted: "提问发布成功！",
        toast_answer_sent: "回答发送成功！",
        toast_match_formed: "匹配成立！聊天已启用。",
        toast_match_invite_sent: "配对邀请已发送！",
        toast_pomodoro_finished: "番茄时间结束！现在是休息时间。",
        toast_camera_error: "无法访问摄像头！",
        toast_mic_on: "麦克风已开启！",
        toast_mic_off: "麦克风已关闭！",
        toast_screenshare_start: "屏幕共享已开始！",
        toast_screenshare_end: "屏幕共享已结束。",
        toast_flash_posted: "紧急求助发布成功！",
        toast_flash_match_formed: "闪电匹配成立！正在打开聊天室...",
        toast_flash_take_error: "接受紧急求助失败"
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
const DUMMY_USERS = [];

function isUserOnline(user) {
    if (!user) return false;
    if (user.isOnline !== undefined) return !!user.isOnline;
    if (!user.lastActive) return false;
    const lastActiveDate = new Date(user.lastActive);
    const now = new Date();
    return (now - lastActiveDate) < 15000;
}

function getLocalizedDept(dept) {
    if (!dept || dept === "Fakultas Belum Diisi" || dept === "Fakultas...") {
        const dict = {
            id: "Fakultas Belum Diisi",
            jp: "学部未設定",
            en: "Department Not Set",
            zh: "科系未设置"
        };
        return dict[currentLanguage] || dict.en;
    }
    return dept;
}

function getLocalizedBio(bio) {
    if (!bio || bio === "Mahasiswa baru di Skill Exchange Market.") {
        const dict = {
            id: "Mahasiswa baru di Skill Exchange Market.",
            jp: "スキルエクスチェンジの新メンバー。",
            en: "New student at Skill Exchange Market.",
            zh: "技能交换市场的新成员。"
        };
        return dict[currentLanguage] || dict.en;
    }
    return bio;
}

function formatDeptGrade(user) {
    if (!user) return "";
    let dept = getLocalizedDept(user.department);
    let grade = user.grade || "-";
    if (currentLanguage === "jp") {
        return `${dept} (${grade}年度)`;
    } else if (currentLanguage === "en") {
        return `${dept} (Class of ${grade})`;
    } else if (currentLanguage === "zh") {
        return `${dept} (${grade}级)`;
    } else {
        return `${dept} (Angkatan ${grade})`;
    }
}

let users = [];
let reviews = [];
let schedules = [];
let notifications = [];
let questions = [];
let flashRequests = [];
let activeFilters = { level: 'all', method: 'all', availability: 'all' };
let groups = [];
let activeGroupId = null;
let matches = [];
let messages = [];
let currentUser = JSON.parse(localStorage.getItem("sem_current_user")) || null;
let currentLanguage = localStorage.getItem("sem_lang") || "jp";
let syncInterval = null;
let customAvatarBase64 = null;

function getUserAvatarUrl(user) {
    if (!user) return `https://api.dicebear.com/7.x/bottts/svg?seed=default`;
    if (user.avatarUrl) return user.avatarUrl;
    return `https://api.dicebear.com/7.x/bottts/svg?seed=${user.avatarSeed || 'default'}`;
}

async function syncData() {
    try {
        const url = currentUser ? `/api/sync?userId=${currentUser.id}` : '/api/sync';
        const res = await fetch(url);
        if (!res.ok) throw new Error("Sync failed");
        const data = await res.json();
        users = data.users || [];
        matches = data.matches || [];
        messages = data.messages || [];
        reviews = data.reviews || [];
        schedules = data.schedules || [];
        notifications = data.notifications || [];
        questions = data.questions || [];
        flashRequests = data.flashRequests || [];
        groups = data.groups || [];

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
        updateNotificationsBell();
        if (activeView) {
            const viewId = activeView.id;
            if (viewId === "view-forum" && !document.getElementById("forum-detail-view").classList.contains("hidden")) {
                // Keep forum detail updated if open
            } else if (viewId === "view-forum") {
                renderForum();
            } else if (viewId === "view-search") {
                renderFlashRequests();
            } else if (viewId === "view-leaderboard") {
                renderLeaderboard();
            }
        }
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
const elChatPartnerStatus = document.getElementById("chat-partner-status");
const elChatMessagesContainer = document.getElementById("chat-messages-container");
const elChatSendForm = document.getElementById("chat-send-form");
const elChatInput = document.getElementById("chat-input");
const elChatTranslateLang = document.getElementById("chat-translate-lang");

// Profile DOM
const elProfileForm = document.getElementById("profile-form");
const elProfileName = document.getElementById("profile-name");
const elProfileAvatarSeed = document.getElementById("profile-avatar-seed");
const elProfileAvatarFile = document.getElementById("profile-avatar-file");
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
    const dict = TRANSLATIONS[currentLanguage];
    let displayMessage = message;
    if (dict && dict[message]) {
        displayMessage = dict[message];
    }
    elToast.innerText = displayMessage;
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
        } else if (targetId === "view-study") {
            initStudyRoom();
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
        showToast("toast_network_error", "danger");
        console.error(err);
    }
});

elRegisterForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("reg-username").value.trim().toLowerCase();
    const email = document.getElementById("reg-email").value.trim().toLowerCase();
    const password = document.getElementById("reg-password").value;

    if (password.length < 6) {
        showToast("toast_password_length", "danger");
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
        showToast("toast_registration_success");
        loginSuccess();
        startSyncInterval();
    } catch (err) {
        showToast("toast_network_error", "danger");
        console.error(err);
    }
});

elBtnLogout.addEventListener("click", () => {
    currentUser = null;
    localStorage.removeItem("sem_current_user");
    stopSyncInterval();
    showToast("toast_logout", "success");
    logoutSuccess();
});

function loginSuccess() {
    elAuthContainer.classList.add("hidden");
    elAppContainer.classList.remove("hidden");
    
    // Set Sidebar User Info
    elUserDisplayName.innerText = currentUser.displayName || currentUser.username;
    elUserDisplayDept.innerText = formatDeptGrade(currentUser);
    elUserAvatar.src = getUserAvatarUrl(currentUser);

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
    const dict = TRANSLATIONS[currentLanguage] || {};

    elStatTeach.innerText = currentUser.teachSkills.length;
    elStatLearn.innerText = currentUser.learning.length;

    const activeMatchesCount = matches.filter(m => 
        (m.userAId === currentUser.id || m.userBId === currentUser.id) && m.status === "ACTIVE"
    ).length;
    elStatMatch.innerText = activeMatchesCount;

    elPreviewAvatar.src = getUserAvatarUrl(currentUser);
    elPreviewName.innerText = currentUser.displayName || currentUser.username;
    elPreviewDeptGrade.innerText = formatDeptGrade(currentUser);

    elPreviewTeachSkills.innerHTML = "";
    if (currentUser.teachSkills.length === 0) {
        elPreviewTeachSkills.innerHTML = `<span class="subtitle" data-i18n="no_skills">${dict["no_skills"] || "Belum ada skill"}</span>`;
    } else {
        currentUser.teachSkills.forEach(s => {
            elPreviewTeachSkills.innerHTML += `<span class="skill-chip ${getCategoryClass(s.category)}">${s.name}</span>`;
        });
    }

    elPreviewLearnNeeds.innerHTML = "";
    if (currentUser.learning.length === 0) {
        elPreviewLearnNeeds.innerHTML = `<span class="subtitle" data-i18n="no_learning_needs">${dict["no_learning_needs"] || "Belum ada kebutuhan"}</span>`;
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
                <p>${dict["no_recommendations"] || "Belum ada rekomendasi baru yang cocok. Coba lengkapi profil di halaman edit profil!"}</p>
            </div>
        `;
    } else {
        filteredRecs.forEach(r => {
            const fallbackText = currentLanguage === "jp" ? "なし" : "None";
            const teachList = r.user.teachSkills.map(s => s.name).join(", ") || fallbackText;
            const teachesLabel = dict["teaches"] || "Mengajar";
            const sendMatchLabel = dict["send_match"] || "Kirim Match";
            
            elRecommendedList.innerHTML += `
                <div class="recommended-item">
                    <img src="${getUserAvatarUrl(r.user)}" alt="Avatar" class="avatar-small">
                    <div class="rec-info">
                        <h4>${r.user.displayName} <span class="match-percentage">${r.score}% Match</span></h4>
                        <p>${formatDeptGrade(r.user)}</p>
                        <p class="subtitle" style="margin-bottom:0; font-size:0.75rem;">${teachesLabel}: <strong>${teachList}</strong></p>
                    </div>
                    <button class="btn btn-primary" onclick="triggerCardSwipeRight('${r.user.id}')">${sendMatchLabel}</button>
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
        ).join("") || `<span class="subtitle" data-i18n="no_skills_teach_fallback">Belum ada skill diajarkan</span>`;

        const learnChips = r.user.learning.map(s => 
            `<span class="skill-chip ${getCategoryClass(s.category)}">${s.name}</span>`
        ).join("") || `<span class="subtitle" data-i18n="no_skills_learn_fallback">Belum ada skill dipelajari</span>`;

        const cardEl = document.createElement("div");
        cardEl.className = "swipe-card";
        cardEl.setAttribute("data-user-id", r.user.id);
        
        cardEl.innerHTML = `
            <div class="card-inner">
                <img src="${getUserAvatarUrl(r.user)}" alt="Avatar" class="card-avatar">
                <div class="card-details">
                    <h2>${r.user.displayName} <span class="match-percentage">${r.score}%</span></h2>
                    <span class="dept">${formatDeptGrade(r.user)}</span>
                </div>
                <div class="card-bio">${getLocalizedBio(r.user.bio)}</div>
                <div class="card-skills-section">
                    <h4 data-i18n="profile_can_teach">Bisa Mengajar:</h4>
                    <div class="skills-wrapper" style="margin-bottom: 10px;">${teachChips}</div>
                    <h4 data-i18n="profile_want_learn">Ingin Belajar:</h4>
                    <div class="skills-wrapper">${learnChips}</div>
                </div>
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
    showToast("toast_opening_deck");
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
            showToast("toast_match_sent");
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
            showToast("toast_skipped");
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
                            <img src="${getUserAvatarUrl(sender)}" alt="Avatar" class="avatar-small">
                            <div class="match-user-details">
                                <h4>${sender.displayName}</h4>
                                <p>${formatDeptGrade(sender)}</p>
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
                            <img src="${getUserAvatarUrl(partner)}" alt="Avatar" class="avatar-small">
                            <div class="match-user-details">
                                <h4>${partner.displayName}</h4>
                                <p>${formatDeptGrade(partner)}</p>
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

window.acceptMatchRequest = async function(matchId) {
    try {
        const res = await fetch('/api/matches/accept', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ matchId })
        });
        const data = await res.json();
        if (res.ok) {
            matches = data.matches || [];
            localStorage.setItem("sem_matches", JSON.stringify(matches));
            showToast("toast_match_accepted");

            const match = matches.find(m => m.id === matchId);
            if (match) {
                const partner = users.find(u => u.id === (match.userAId === currentUser.id ? match.userBId : match.userAId));
                if (partner) {
                    triggerMatchModal(partner);
                }
            }
            renderMatches();
            renderDashboard();
        } else {
            showToast(data.error || "Gagal menyetujui match", "danger");
        }
    } catch (err) {
        console.error("Error accepting match request:", err);
        showToast("toast_network_error", "danger");
    }
};

window.rejectMatchRequest = async function(matchId) {
    try {
        const res = await fetch('/api/matches/reject', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ matchId })
        });
        const data = await res.json();
        if (res.ok) {
            matches = data.matches || [];
            localStorage.setItem("sem_matches", JSON.stringify(matches));
            showToast("toast_match_removed", "danger");

            renderMatches();
            renderDashboard();
        } else {
            showToast(data.error || "Gagal menolak match", "danger");
        }
    } catch (err) {
        console.error("Error rejecting match request:", err);
        showToast("toast_network_error", "danger");
    }
};

// ================= CHAT LOGIC & TRANSLATOR TOOL =================
window.openChatWindow = function(partnerId) {
    activeChatPartnerId = partnerId;
function renderGroups() {
    const list = document.getElementById("chat-groups-list");
    if (!list) return;
    list.innerHTML = "";
    
    if (!currentUser) return;
    
    const myGroups = groups.filter(g => g.members.includes(currentUser.id));
    const dict = TRANSLATIONS[currentLanguage] || {};
    
    if (myGroups.length === 0) {
        const fallbackText = dict["no_groups"] || "Belum bergabung ke grup";
        list.innerHTML = `<span class="subtitle" style="padding: 1rem; display:block; text-align:center; font-size: 0.75rem;" data-i18n="no_groups">${fallbackText}</span>`;
        return;
    }
    
    myGroups.forEach(g => {
        const lastMsg = g.messages && g.messages.length > 0 ? g.messages[g.messages.length - 1] : null;
        const lastMsgText = lastMsg ? `${lastMsg.senderName}: ${lastMsg.body}` : (dict["no_conversations"] || "Belum ada obrolan");
        const isActiveClass = g.id === activeGroupId ? "active" : "";
        
        list.innerHTML += `
            <div class="chat-user-item ${isActiveClass}" onclick="selectGroup('${g.id}')">
                <div style="position: relative; display: inline-block; flex-shrink: 0;">
                    <div class="chat-user-avatar" style="display: flex; align-items: center; justify-content: center; background: var(--primary-color); color: #fff; font-weight: bold; border-radius: 50%; font-size: 0.8rem; width: 40px; height: 40px;">
                        ${g.name.substring(0, 2).toUpperCase()}
                    </div>
                </div>
                <div class="chat-user-item-info">
                    <h4>${g.name} <span class="badge badge-info" style="font-size: 0.6rem; padding: 2px 4px; background: rgba(59, 130, 246, 0.2); color: var(--primary-color); border: 1px solid var(--primary-color); border-radius: 4px; margin-left: 4px;">${g.skillName.toUpperCase()}</span></h4>
                    <p style="font-size: 0.75rem; color: var(--text-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 140px;">${lastMsgText}</p>
                </div>
            </div>
        `;
    });
}

window.selectGroup = function(groupId) {
    activeGroupId = groupId;
    activeChatPartnerId = null;
    renderChat();
};

window.selectChatPartner = function(partnerId) {
    activeChatPartnerId = partnerId;
    activeGroupId = null;
    renderChat();
};

window.openGroupInviteModal = function() {
    if (!activeGroupId || !currentUser) return;
    const group = groups.find(g => g.id === activeGroupId);
    if (!group) return;

    const dict = TRANSLATIONS[currentLanguage] || {};
    const inviteList = document.getElementById("group-invite-list");
    if (!inviteList) return;
    inviteList.innerHTML = "";

    // Find active matches
    const activeMatches = matches.filter(m => 
        m.status === "ACTIVE" && (m.userAId === currentUser.id || m.userBId === currentUser.id)
    );

    const eligiblePartners = [];
    activeMatches.forEach(m => {
        const partnerId = m.userAId === currentUser.id ? m.userBId : m.userAId;
        const partner = users.find(u => u.id === partnerId);
        
        if (partner && !group.members.includes(partner.id)) {
            const sharesSkill = partner.teachSkills.some(s => s.name.toLowerCase() === group.skillName.toLowerCase()) ||
                                partner.learning.some(s => s.name.toLowerCase() === group.skillName.toLowerCase());
            
            if (sharesSkill) {
                eligiblePartners.push(partner);
            }
        }
    });

    if (eligiblePartners.length === 0) {
        inviteList.innerHTML = `<p style="padding: 1rem; text-align: center; color: var(--text-muted); font-size: 0.8rem;">${dict["no_eligible_partners"] || "Tidak ada partner match yang cocok untuk diundang."}</p>`;
        openModal("modal-group-invite");
        return;
    }

    eligiblePartners.forEach(partner => {
        inviteList.innerHTML += `
            <div class="match-item" style="display: flex; justify-content: space-between; align-items: center; padding: 10px; border-bottom: 1px solid var(--border-color);">
                <div style="display: flex; align-items: center;">
                    <img src="${getUserAvatarUrl(partner)}" alt="Avatar" class="avatar-small" style="margin-right: 10px; width: 32px; height: 32px; border-radius: 50%;">
                    <div>
                        <h5 style="margin: 0; font-size: 0.9rem; color: var(--text-light);">${partner.displayName}</h5>
                        <small style="color: var(--text-muted);">${formatDeptGrade(partner)}</small>
                    </div>
                </div>
                <button class="btn btn-primary btn-sm" onclick="inviteToGroup('${partner.id}')" type="button" style="font-size: 0.75rem; padding: 4px 10px;">${dict["btn_invite"] || "Undang"}</button>
            </div>
        `;
    });

    openModal("modal-group-invite");
};

window.inviteToGroup = async function(inviteeId) {
    if (!activeGroupId || !currentUser) return;
    try {
        const res = await fetch('/api/groups/invite', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                groupId: activeGroupId,
                inviteeId: inviteeId,
                inviterId: currentUser.id
            })
        });
        const data = await res.json();
        if (res.ok) {
            groups = data.groups || [];
            showToast(currentLanguage === "jp" ? "招待を送りました！" : "Undangan berhasil dikirim!");
            closeModal("modal-group-invite");
            renderChat();
        } else {
            showToast(data.error || "Gagal mengundang", "danger");
        }
    } catch (err) {
        console.error("Error inviting user to group:", err);
    }
};

function renderChat() {
    if (!currentUser) return;

    elChatUsersList.innerHTML = "";
    
    const activeMatches = matches.filter(m => 
        m.status === "ACTIVE" && (m.userAId === currentUser.id || m.userBId === currentUser.id)
    );

    const dict = TRANSLATIONS[currentLanguage] || {};

    if (activeMatches.length === 0) {
        const fallbackText = dict["no_chat_partner"] || "Belum memiliki partner chat.";
        elChatUsersList.innerHTML = `<span class="subtitle" style="padding: 1.5rem; display:block; text-align:center;" data-i18n="no_chat_partner">${fallbackText}</span>`;
    } else {
        activeMatches.forEach(m => {
            const partnerId = m.userAId === currentUser.id ? m.userBId : m.userAId;
            const partner = users.find(u => u.id === partnerId);
            
            if (partner) {
                const partnerMsgs = messages.filter(msg => 
                    (msg.senderId === currentUser.id && msg.receiverId === partner.id) ||
                    (msg.senderId === partner.id && msg.receiverId === currentUser.id)
                );
                const fallbackText = dict["no_conversations"] || "Belum ada obrolan";
                const lastMsgText = partnerMsgs.length > 0 ? partnerMsgs[partnerMsgs.length - 1].body : fallbackText;

                const isActiveClass = partner.id === activeChatPartnerId ? "active" : "";

                elChatUsersList.innerHTML += `
                    <div class="chat-user-item ${isActiveClass}" onclick="selectChatPartner('${partner.id}')">
                        <div style="position: relative; display: inline-block; flex-shrink: 0;">
                            <img src="${getUserAvatarUrl(partner)}" alt="Avatar" class="chat-user-avatar">
                            <span class="status-indicator-dot ${isUserOnline(partner) ? 'online' : 'offline'}" style="position: absolute; bottom: 0; right: 0; border: 2px solid #0b0f19; width: 10px; height: 10px;"></span>
                        </div>
                        <div class="chat-user-item-info">
                            <h4>${partner.displayName}</h4>
                            <p>${lastMsgText}</p>
                        </div>
                    </div>
                `;
            }
        });
    }

    if (!activeChatPartnerId && !activeGroupId) {
        elChatNoSelection.classList.remove("hidden");
        elChatActive.classList.add("hidden");
    } else {
        elChatNoSelection.classList.add("hidden");
        elChatActive.classList.remove("hidden");

        if (activeGroupId) {
            const group = groups.find(g => g.id === activeGroupId);
            if (group) {
                elChatPartnerName.innerText = group.name;
                elChatPartnerAvatar.src = `https://api.dicebear.com/7.x/identicon/svg?seed=${encodeURIComponent(group.name)}`;
                
                const membersLabel = currentLanguage === "jp" ? "人のメンバー" : (currentLanguage === "en" ? "members" : "Anggota");
                elChatPartnerStatus.className = "chat-partner-status status-online";
                elChatPartnerStatus.innerHTML = `<i class="fa-solid fa-users"></i> ${group.members.length} ${membersLabel} &bull; Focus: ${group.skillName.toUpperCase()}`;

                document.getElementById("btn-chat-schedule")?.classList.add("hidden");
                document.getElementById("btn-chat-review")?.classList.add("hidden");
                document.getElementById("btn-group-invite")?.classList.remove("hidden");

                elChatMessagesContainer.innerHTML = "";
                const conversation = group.messages || [];
                const targetLang = elChatTranslateLang.value;

                if (conversation.length === 0) {
                    elChatMessagesContainer.innerHTML = `
                        <div class="empty-state">
                            <p data-i18n="start_conversation">${dict["start_conversation"] || "Mulai percakapan Anda!"}</p>
                        </div>
                    `;
                } else {
                    conversation.forEach(msg => {
                        const isSent = msg.senderId === currentUser.id;
                        
                        let translationText = "";
                        let isLoadingTranslate = false;
                        if (targetLang !== "none") {
                            if (CHAT_TRANSLATIONS[msg.body] && CHAT_TRANSLATIONS[msg.body][targetLang]) {
                                translationText = CHAT_TRANSLATIONS[msg.body][targetLang];
                            } else if (!isSent) {
                                const cacheKey = `${msg.body}_${targetLang}`;
                                if (translationCache[cacheKey]) {
                                    if (translationCache[cacheKey] === "...") {
                                        isLoadingTranslate = true;
                                    } else {
                                        translationText = translationCache[cacheKey];
                                    }
                                } else {
                                    translationCache[cacheKey] = "...";
                                    isLoadingTranslate = true;
                                    fetchRealTranslation(msg.body, targetLang);
                                }
                            }
                        }

                        const translationHtml = isLoadingTranslate ?
                            `<div class="translate-subtext"><i class="fa-solid fa-spinner fa-spin"></i> Translating...</div>` :
                            (translationText ? `<div class="translate-subtext"><i class="fa-solid fa-language"></i> ${targetLang.toUpperCase()}: ${translationText}</div>` : "");

                        const senderNameHtml = isSent ? "" : `<div style="font-size:0.7rem; color:var(--text-muted); margin-bottom:2px; margin-left:4px;">${msg.senderName || 'User'}</div>`;

                        elChatMessagesContainer.innerHTML += `
                            <div class="message-wrapper ${isSent ? 'wrapper-sent' : 'wrapper-received'}">
                                ${senderNameHtml}
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
        } else {
            const partner = users.find(u => u.id === activeChatPartnerId);
            if (partner) {
                elChatPartnerName.innerText = partner.displayName;
                elChatPartnerAvatar.src = getUserAvatarUrl(partner);

                const online = isUserOnline(partner);
                const statusText = online ? (currentLanguage === "jp" ? "オンライン" : "Online") : (currentLanguage === "jp" ? "オフライン" : "Offline");
                const statusClass = online ? "status-online" : "status-offline";
                
                elChatPartnerStatus.className = `chat-partner-status ${statusClass}`;
                elChatPartnerStatus.innerHTML = `<i class="fa-solid fa-circle"></i> ${statusText}`;

                document.getElementById("btn-chat-schedule")?.classList.remove("hidden");
                document.getElementById("btn-chat-review")?.classList.remove("hidden");
                document.getElementById("btn-group-invite")?.classList.add("hidden");

                elChatMessagesContainer.innerHTML = "";
                const conversation = messages.filter(msg => 
                    (msg.senderId === currentUser.id && msg.receiverId === partner.id) ||
                    (msg.senderId === partner.id && msg.receiverId === currentUser.id)
                );

                const targetLang = elChatTranslateLang.value;

                if (conversation.length === 0) {
                    elChatMessagesContainer.innerHTML = `
                        <div class="empty-state">
                            <p data-i18n="start_conversation">${dict["start_conversation"] || "Mulai percakapan Anda!"}</p>
                        </div>
                    `;
                } else {
                     conversation.forEach(msg => {
                        const isSent = msg.senderId === currentUser.id;
                        
                        let translationText = "";
                        let isLoadingTranslate = false;
                        if (targetLang !== "none") {
                            if (CHAT_TRANSLATIONS[msg.body] && CHAT_TRANSLATIONS[msg.body][targetLang]) {
                                translationText = CHAT_TRANSLATIONS[msg.body][targetLang];
                            } else if (!isSent) {
                                const cacheKey = `${msg.body}_${targetLang}`;
                                if (translationCache[cacheKey]) {
                                    if (translationCache[cacheKey] === "...") {
                                        isLoadingTranslate = true;
                                    } else {
                                        translationText = translationCache[cacheKey];
                                    }
                                } else {
                                    translationCache[cacheKey] = "...";
                                    isLoadingTranslate = true;
                                    fetchRealTranslation(msg.body, targetLang);
                                }
                            }
                        }

                        const translationHtml = isLoadingTranslate ?
                            `<div class="translate-subtext"><i class="fa-solid fa-spinner fa-spin"></i> Translating...</div>` :
                            (translationText ? `<div class="translate-subtext"><i class="fa-solid fa-language"></i> ${targetLang.toUpperCase()}: ${translationText}</div>` : "");

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
    }
}

elChatTranslateLang.addEventListener("change", renderChat);

const translationCache = {};

async function fetchRealTranslation(text, lang) {
    const langMap = {
        id: "id",
        jp: "ja",
        en: "en",
        zh: "zh"
    };
    const targetLangCode = langMap[lang] || lang;
    const cacheKey = `${text}_${lang}`;

    // Detect source language from characters (MyMemory does NOT support 'auto')
    function detectSourceLang(str) {
        if (/[\u3040-\u30FF\u31F0-\u31FF]/.test(str)) return "ja"; // Hiragana/Katakana
        if (/[\u4E00-\u9FFF]/.test(str)) return "zh";              // CJK (Chinese/Kanji)
        if (/[\uAC00-\uD7A3]/.test(str)) return "ko";              // Korean Hangul
        if (/[\u0600-\u06FF]/.test(str)) return "ar";              // Arabic
        return "en"; // Default: English / Latin
    }

    const sourceLangCode = detectSourceLang(text);
    // Don't translate if source == target
    if (sourceLangCode === targetLangCode) {
        translationCache[cacheKey] = text;
        renderChat();
        return;
    }

    try {
        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLangCode}|${targetLangCode}`;
        const res = await fetch(url);
        const data = await res.json();
        if (data && data.responseData && data.responseData.translatedText &&
            data.responseStatus === 200) {
            translationCache[cacheKey] = data.responseData.translatedText;
        } else {
            translationCache[cacheKey] = text; // Fallback: tampilkan teks asli
        }
    } catch (err) {
        console.error("Translation API error:", err);
        translationCache[cacheKey] = text; // Fallback: tampilkan teks asli
    }
    renderChat();
}

elChatSendForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!currentUser) return;
    if (!activeChatPartnerId && !activeGroupId) return;

    const messageText = elChatInput.value.trim();
    if (!messageText) return;

    elChatInput.value = "";

    try {
        if (activeGroupId) {
            const res = await fetch('/api/groups/messages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    groupId: activeGroupId,
                    senderId: currentUser.id,
                    body: messageText
                })
            });
            const data = await res.json();
            if (res.ok) {
                groups = data.groups || [];
                renderChat();
            }
        } else {
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
            }
        }
    } catch (err) {
        console.error("Error sending message:", err);
    }
});

const elFormCreateGroup = document.getElementById("form-create-group");
if (elFormCreateGroup) {
    elFormCreateGroup.addEventListener("submit", async (e) => {
        e.preventDefault();
        const name = document.getElementById("group-name").value.trim();
        const description = document.getElementById("group-desc").value.trim();
        const skillName = document.getElementById("group-skill").value.trim();
        
        if (!name || !skillName || !currentUser) return;
        
        try {
            const res = await fetch('/api/groups/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    description,
                    skillName,
                    createdById: currentUser.id
                })
            });
            const data = await res.json();
            if (res.ok) {
                groups = data.groups || [];
                closeModal('modal-create-group');
                elFormCreateGroup.reset();
                showToast(currentLanguage === "jp" ? "勉強グループを作成しました！" : "Grup belajar berhasil dibuat!");
                
                if (data.group) {
                    activeGroupId = data.group.id;
                    activeChatPartnerId = null;
                }
                syncData().then(() => {
                    renderChat();
                });
            } else {
                showToast(data.error || "Gagal membuat grup", "danger");
            }
        } catch (err) {
            console.error("Error creating group:", err);
            showToast("Gagal membuat grup", "danger");
        }
    });
}

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
    customAvatarBase64 = currentUser.avatarUrl || null;
    document.getElementById("profile-method").value = currentUser.studyMethod || "Both";
    document.getElementById("profile-availability").value = currentUser.availability || "Both";

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
        bio: elProfileBio.value.trim(),
        avatarUrl: customAvatarBase64 || currentUser.avatarUrl || null,
        studyMethod: document.getElementById("profile-method").value,
        availability: document.getElementById("profile-availability").value
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
        showToast("toast_profile_updated");
        
        elUserDisplayName.innerText = currentUser.displayName;
        elUserDisplayDept.innerText = formatDeptGrade(currentUser);
        elUserAvatar.src = getUserAvatarUrl(currentUser);
    } catch (err) {
        showToast("toast_network_error", "danger");
        console.error(err);
    }
});

// Attach profile photo change listeners
if (elProfileAvatarFile) {
    elProfileAvatarFile.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 2 * 1024 * 1024) {
                showToast("toast_photo_limit", "danger");
                elProfileAvatarFile.value = "";
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                customAvatarBase64 = reader.result;
                elPreviewAvatar.src = customAvatarBase64;
                showToast("toast_photo_loaded", "success");
            };
            reader.readAsDataURL(file);
        }
    });
}

if (elProfileAvatarSeed) {
    elProfileAvatarSeed.addEventListener("change", () => {
        customAvatarBase64 = null;
        elPreviewAvatar.src = `https://api.dicebear.com/7.x/bottts/svg?seed=${elProfileAvatarSeed.value}`;
    });
}

function renderManageSkills() {
    elManageTeachList.innerHTML = "";
    currentUser.teachSkills.forEach((s, i) => {
        const levelBadge = s.level ? `<span class="skill-level-indicator">${s.level}</span>` : "";
        elManageTeachList.innerHTML += `
            <span class="skill-chip ${getCategoryClass(s.category)}">
                ${s.name}
                <i class="fa-solid fa-xmark remove-skill" onclick="removeSkill('teach', ${i})"></i>
            </span>
        `;
    });

    elManageLearnList.innerHTML = "";
    currentUser.learning.forEach((s, i) => {
        const levelBadge = s.level ? `<span class="skill-level-indicator">${s.level}</span>` : "";
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
        showToast("toast_skill_exists", "danger");
        return;
    }

    try {
        const res = await fetch('/api/profile/skills', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: currentUser.id,
                type: 'teach',
                skill: { name, category, level: document.getElementById('select-teach-level').value }
            })
        });
        const data = await res.json();
        if (res.ok) {
            currentUser = data.user;
            users = data.users || [];
            localStorage.setItem("sem_current_user", JSON.stringify(currentUser));
            elInputTeachSkill.value = "";
            renderManageSkills();
            showToast("toast_skill_added");
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
        showToast("toast_skill_exists", "danger");
        return;
    }

    try {
        const res = await fetch('/api/profile/skills', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: currentUser.id,
                type: 'learn',
                skill: { name, category, level: document.getElementById('select-learn-level').value }
            })
        });
        const data = await res.json();
        if (res.ok) {
            currentUser = data.user;
            users = data.users || [];
            localStorage.setItem("sem_current_user", JSON.stringify(currentUser));
            elInputLearnSkill.value = "";
            renderManageSkills();
            showToast("toast_skill_added");
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
            showToast("toast_skill_removed");
        }
    } catch (err) {
        console.error("Error removing skill:", err);
    }
};

// ============================================================================
// ======================== PHASE 2 IMPLEMENTATION CODE ========================
// ============================================================================

// --- UI Helper: Modals ---
window.openModal = function(modalId) {
    document.getElementById(modalId).classList.remove("hidden");
};

window.closeModal = function(modalId) {
    document.getElementById(modalId).classList.add("hidden");
};

// --- Gamification Dashboard Render ---
const originalRenderDashboard = renderDashboard;
renderDashboard = function() {
    if (typeof originalRenderDashboard === "function") {
        originalRenderDashboard();
    }
    
    if (!currentUser) return;
    
    // XP & Level calculation
    const xp = currentUser.xp || 0;
    const level = currentUser.level || 1;
    const xpInCurrentLevel = xp % 300;
    const progressPercent = Math.min((xpInCurrentLevel / 300) * 100, 100);
    
    let rankName = "Novice";
    if (level >= 3 && level < 6) rankName = "Scholar";
    else if (level >= 6) rankName = "Grandmaster";
    
    document.getElementById("dash-user-level").innerText = level;
    document.getElementById("dash-user-rank").innerText = rankName;
    document.getElementById("dash-xp-progress-fill").style.width = progressPercent + "%";
    document.getElementById("dash-xp-progress-text").innerText = `${xpInCurrentLevel} / 300 XP`;
    
    const badgeCount = (currentUser.badges || []).length;
    document.getElementById("dash-xp-badges-count").innerText = `${badgeCount} Lencana`;
    
    // Show level and badges on Profile Summary Card
    const previewHeader = document.querySelector(".preview-header");
    if (previewHeader) {
        // Clear old badge container if exists
        const oldBadges = previewHeader.querySelector(".user-badges-list");
        if (oldBadges) oldBadges.remove();
        
        // Add badges
        const badgesHtml = (currentUser.badges || []).map(b => `<span class="user-badge-item"><i class="fa-solid fa-award"></i> ${b}</span>`).join("");
        const badgeContainer = document.createElement("div");
        badgeContainer.className = "user-badges-list";
        badgeContainer.innerHTML = badgesHtml;
        previewHeader.appendChild(badgeContainer);
    }
};

// --- XP Podium & Leaderboard ---
async function renderLeaderboard() {
    const dict = TRANSLATIONS[currentLanguage] || {};
    try {
        const res = await fetch('/api/leaderboard');
        const data = await res.json();
        const topUsers = data.leaderboard || [];
        
        const podiumContainer = document.getElementById("leaderboard-podium");
        const listRowsContainer = document.getElementById("leaderboard-list-rows");
        
        // Render Top 3 Podium
        podiumContainer.innerHTML = "";
        
        // 2nd Place (Left)
        const secondUser = topUsers[1];
        if (secondUser) {
            podiumContainer.innerHTML += `
                <div class="podium-card second">
                    <div class="podium-rank">2</div>
                    <img class="podium-avatar" src="${getUserAvatarUrl(secondUser)}">
                    <h4 style="font-size: 0.95rem; font-weight: 700;">${secondUser.displayName}</h4>
                    <span style="font-size: 0.75rem; color: var(--text-muted);">${secondUser.department}</span>
                    <span class="user-badge-item" style="margin-top: 8px;">Level ${secondUser.level}</span>
                    <small style="font-size: 0.7rem; color: var(--text-muted); margin-top: 4px;">${secondUser.xp} XP</small>
                </div>
            `;
        } else {
            podiumContainer.innerHTML += `<div></div>`;
        }
        
        // 1st Place (Center)
        const firstUser = topUsers[0];
        if (firstUser) {
            podiumContainer.innerHTML += `
                <div class="podium-card first">
                    <div class="podium-rank">1</div>
                    <img class="podium-avatar" src="${getUserAvatarUrl(firstUser)}">
                    <h4 style="font-size: 1.1rem; font-weight: 800; color: #f59e0b;">${firstUser.displayName}</h4>
                    <span style="font-size: 0.8rem; color: var(--text-muted);">${firstUser.department}</span>
                    <span class="user-badge-item" style="margin-top: 8px; background: linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(245, 158, 11, 0.15)); border-color: #f59e0b;">Level ${firstUser.level}</span>
                    <small style="font-size: 0.75rem; font-weight: 700; color: #f59e0b; margin-top: 4px;">${firstUser.xp} XP</small>
                </div>
            `;
        } else {
            podiumContainer.innerHTML += `<div></div>`;
        }
        
        // 3rd Place (Right)
        const thirdUser = topUsers[2];
        if (thirdUser) {
            podiumContainer.innerHTML += `
                <div class="podium-card third">
                    <div class="podium-rank">3</div>
                    <img class="podium-avatar" src="${getUserAvatarUrl(thirdUser)}">
                    <h4 style="font-size: 0.9rem; font-weight: 700;">${thirdUser.displayName}</h4>
                    <span style="font-size: 0.75rem; color: var(--text-muted);">${thirdUser.department}</span>
                    <span class="user-badge-item" style="margin-top: 8px;">Level ${thirdUser.level}</span>
                    <small style="font-size: 0.7rem; color: var(--text-muted); margin-top: 4px;">${thirdUser.xp} XP</small>
                </div>
            `;
        } else {
            podiumContainer.innerHTML += `<div></div>`;
        }
        
        // Render 4-10 position rows
        listRowsContainer.innerHTML = "";
        if (topUsers.length <= 3) {
            listRowsContainer.innerHTML = `<div class="empty-state" style="padding: 1.5rem;"><p data-i18n="no_records">${dict["no_leaderboard_other"] || "Belum ada peringkat lainnya"}</p></div>`;
        } else {
            for (let i = 3; i < topUsers.length; i++) {
                const u = topUsers[i];
                listRowsContainer.innerHTML += `
                    <div class="leaderboard-row">
                        <span style="font-weight: 800; font-size: 1rem; color: var(--text-muted);">#${i+1}</span>
                        <img src="${getUserAvatarUrl(u)}" class="avatar-small" style="width: 32px; height: 32px;">
                        <span style="font-weight: 600;">${u.displayName} <small style="font-size: 0.75rem; color: var(--text-muted); font-weight: normal; margin-left: 6px;">${u.department}</small></span>
                        <span>Level ${u.level}</span>
                        <span style="font-weight: 700;">${u.xp} XP</span>
                    </div>
                `;
            }
        }
    } catch (err) {
        console.error("Error loading leaderboard:", err);
    }
}

// --- Notifications Management ---
function updateNotificationsBell() {
    if (!currentUser) return;
    const unread = notifications.filter(n => n.userId === currentUser.id && !n.read);
    const badge = document.getElementById("notif-badge");
    if (unread.length > 0) {
        badge.classList.remove("hidden");
    } else {
        badge.classList.add("hidden");
    }
}

function getLocalizedNotificationText(content, lang) {
    if (lang !== "jp" && lang !== "en") {
        return content; // Keep original Indonesian if not Japanese or English
    }
    
    // 1. Level/Badge awards
    if (content.includes("Selamat! Anda mendapatkan gelar 'Scholar'")) {
        return lang === "jp" ? "おめでとうございます！レベル3に達したため、「Scholar」の称号を獲得しました。" : "Congratulations! You have earned the 'Scholar' title for reaching Level 3.";
    }
    if (content.includes("Luar biasa! Anda telah mencapai Level 6")) {
        return lang === "jp" ? "素晴らしい！レベル6に達し、「Grandmaster」の称号が授与されました！" : "Amazing! You have reached Level 6 and been awarded the 'Grandmaster' title!";
    }
    if (content.includes("Selamat! Anda mendapatkan lencana 'Bahasa Is My Jam'")) {
        return lang === "jp" ? "おめでとうございます！3つ以上の語学スキルを持っているため、「Bahasa Is My Jam」のバッジを獲得しました。" : "Congratulations! You have earned the 'Bahasa Is My Jam' badge for having 3+ language skills.";
    }
    if (content.includes("Selamat! Anda mendapatkan lencana 'Bug Hunter'")) {
        return lang === "jp" ? "おめでとうございます！3つ以上のIT/プログラミングスキルを持っているため、「Bug Hunter」のバッジを獲得しました。" : "Congratulations! You have earned the 'Bug Hunter' badge for having 3+ IT/Programming skills.";
    }
    if (content.includes("Selamat! Anda mendapatkan lencana 'Night Owl'")) {
        return lang === "jp" ? "おめでとうございます！深夜の学習セッションをスケジュールしたため、「Night Owl」のバッジを獲得しました。" : "Congratulations! You have earned the 'Night Owl' badge for scheduling a late-night study session.";
    }
    
    // Group creation award
    let groupCreateMatch = content.match(/Selamat! Anda mendapatkan 100 XP karena telah membuat grup belajar:\s*"(.*)"/);
    if (groupCreateMatch) {
        const groupName = groupCreateMatch[1];
        return lang === "jp" ? `おめでとうございます！勉強グループ「${groupName}」を作成したため、100 XPを獲得しました。` : `Congratulations! You earned 100 XP for creating the study group: "${groupName}".`;
    }

    // 2. Match
    let matchMatch = content.match(/Kecocokan terjalin! Anda sekarang terhubung dengan\s*(.*)\./);
    if (matchMatch) {
        const name = matchMatch[1];
        return lang === "jp" ? `マッチングが成立しました！${name}さんと繋がりました。` : `Match made! You are now connected with ${name}.`;
    }

    // 3. Review
    let reviewMatch = content.match(/(.*)\s+memberikan rating\s+⭐\s+(\d+)\s+untuk Anda!/);
    if (reviewMatch) {
        const name = reviewMatch[1];
        const rating = reviewMatch[2];
        return lang === "jp" ? `${name}さんがあなたに ⭐ ${rating} の評価をつけました！` : `${name} gave you a ⭐ ${rating} rating!`;
    }

    // 4. Schedule
    let scheduleMatch = content.match(/(.*)\s+mengundang Anda ke sesi belajar:\s+(.*)\s+pada\s+(.*)\s+pukul\s+(.*)\./);
    if (scheduleMatch) {
        const name = scheduleMatch[1];
        const title = scheduleMatch[2];
        const date = scheduleMatch[3];
        const time = scheduleMatch[4];
        return lang === "jp" 
            ? `${name}さんがあなたを学習セッション「${title}」（日程: ${date} ${time}）に招待しました。` 
            : `${name} invited you to a study session: ${title} on ${date} at ${time}.`;
    }

    // 5. Forum
    let forumMatch = content.match(/(.*)\s+menjawab pertanyaan Anda:\s+"(.*)"/);
    if (forumMatch) {
        const name = forumMatch[1];
        const qTitle = forumMatch[2];
        return lang === "jp" ? `${name}さんがあなたの質問「${qTitle}」に回答しました。` : `${name} answered your question: "${qTitle}".`;
    }

    // 6. Flash Match
    let flashTakeMatch = content.match(/Flash Match!\s+(.*)\s+telah mengambil request darurat Anda:\s+"(.*)"/);
    if (flashTakeMatch) {
        const name = flashTakeMatch[1];
        const title = flashTakeMatch[2];
        return lang === "jp" ? `フラッシュマッチ！${name}さんがあなたの緊急リクエスト「${title}」を引き受けました。` : `Flash Match! ${name} has accepted your emergency request: "${title}".`;
    }
    let flashReceiveMatch = content.match(/Flash Match!\s+Anda berhasil mengambil request darurat dari\s+(.*):\s+"(.*)"/);
    if (flashReceiveMatch) {
        const name = flashReceiveMatch[1];
        const title = flashReceiveMatch[2];
        return lang === "jp" ? `フラッシュマッチ！${name}さんの緊急リクエスト「${title}」を正常に引き受けました。` : `Flash Match! You successfully accepted the emergency request from ${name}: "${title}".`;
    }

    // 7. Group Invitation
    let groupInviteMatch = content.match(/(.*)\s+mengundang Anda bergabung ke grup belajar:\s+"(.*)"/);
    if (groupInviteMatch) {
        const name = groupInviteMatch[1];
        const groupName = groupInviteMatch[2];
        return lang === "jp" ? `${name}さんがあなたを勉強グループ「${groupName}」に招待しました。` : `${name} invited you to join the study group: "${groupName}".`;
    }

    return content;
}

async function renderNotificationsDropdown() {
    const list = document.getElementById("notif-list-box");
    const userNotifs = notifications.filter(n => n.userId === currentUser.id).reverse(); // Newest first
    const dict = TRANSLATIONS[currentLanguage] || {};
    
    if (userNotifs.length === 0) {
        list.innerHTML = `<div class="empty-state" style="padding: 1.5rem; text-align: center;"><p style="font-size: 0.75rem; color: var(--text-muted);">${dict["no_notifications"] || "Tidak ada notifikasi baru"}</p></div>`;
        return;
    }
    
    list.innerHTML = "";
    userNotifs.forEach(n => {
        let icon = "fa-bell";
        if (n.type === "match") icon = "fa-handshake";
        else if (n.type === "badge") icon = "fa-award";
        else if (n.type === "forum") icon = "fa-comments";
        else if (n.type === "review") icon = "fa-star";
        else if (n.type === "schedule") icon = "fa-calendar";
        
        list.innerHTML += `
            <div class="notif-item ${n.read ? '' : 'unread'}">
                <span><i class="fa-solid ${icon}" style="margin-right: 6px; color: var(--primary-color);"></i> ${getLocalizedNotificationText(n.content, currentLanguage)}</span>
                <small>${new Date(n.createdAt).toLocaleDateString()} ${new Date(n.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</small>
            </div>
        `;
    });
}

// Toggle notification bell dropdown
document.getElementById("notif-bell-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    const dropdown = document.getElementById("notif-dropdown");
    dropdown.classList.toggle("hidden");
    if (!dropdown.classList.contains("hidden")) {
        renderNotificationsDropdown();
    }
});

document.addEventListener("click", () => {
    document.getElementById("notif-dropdown").classList.add("hidden");
});

document.getElementById("notif-dropdown").addEventListener("click", (e) => {
    e.stopPropagation();
});

document.getElementById("btn-clear-notif").addEventListener("click", async () => {
    if (!currentUser) return;
    try {
        const res = await fetch('/api/notifications/read', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: currentUser.id })
        });
        if (res.ok) {
            const data = await res.json();
            notifications = data.notifications || [];
            updateNotificationsBell();
            renderNotificationsDropdown();
        }
    } catch (err) {
        console.error("Error clearing notifications:", err);
    }
});

// --- Search Filter Logic ---
document.getElementById("btn-toggle-filters").addEventListener("click", () => {
    document.getElementById("search-filters-panel").classList.toggle("hidden");
});

document.getElementById("btn-reset-filters").addEventListener("click", () => {
    document.getElementById("filter-skill-level").value = "all";
    document.getElementById("filter-study-method").value = "all";
    document.getElementById("filter-availability").value = "all";
    activeFilters = { level: 'all', method: 'all', availability: 'all' };
    renderSearch();
});

document.getElementById("btn-apply-filters").addEventListener("click", () => {
    activeFilters = {
        level: document.getElementById("filter-skill-level").value,
        method: document.getElementById("filter-study-method").value,
        availability: document.getElementById("filter-availability").value
    };
    renderSearch();
});

// Override card swiper recomendations to support detailed filtering & Give/Take Contrast
const originalRenderSearch = renderSearch;
renderSearch = function() {
    if (!currentUser) return;
    const dict = TRANSLATIONS[currentLanguage] || {};
    
    // XP board updates
    renderFlashRequests();
    
    const stack = document.getElementById("card-stack");
    stack.innerHTML = "";
    
    // Get users that are not the current user and not already matched/passed
    const partnerIdsDone = matches.filter(m => m.userAId === currentUser.id || m.userBId === currentUser.id)
        .map(m => m.userAId === currentUser.id ? m.userBId : m.userAId);
        
    let deck = users.filter(u => u.id !== currentUser.id && !partnerIdsDone.includes(u.id));
    
    // Apply filters
    if (activeFilters.level !== "all") {
        deck = deck.filter(u => 
            u.teachSkills.some(s => s.level === activeFilters.level) || 
            u.learning.some(s => s.level === activeFilters.level)
        );
    }
    if (activeFilters.method !== "all") {
        deck = deck.filter(u => u.studyMethod === activeFilters.method || u.studyMethod === "Both");
    }
    if (activeFilters.availability !== "all") {
        deck = deck.filter(u => u.availability === activeFilters.availability || u.availability === "Both");
    }
    
    if (deck.length === 0) {
        stack.innerHTML = `
            <div class="empty-deck-message">
                <i class="fa-solid fa-circle-nodes"></i>
                <h3 data-i18n="no_cards_title">Semua Kartu Sudah Habis!</h3>
                <p data-i18n="no_cards_sub">Coba ubah filter pencarian Anda atau tambahkan skill lainnya.</p>
            </div>
        `;
        return;
    }
    
    // Render deck top card (we only show the first card and style it gorgeously)
    const topUser = deck[0];
    
    // Calculate Average stars
    const userReviews = reviews.filter(r => r.revieweeId === topUser.id);
    const avgRating = userReviews.length > 0 ? (userReviews.reduce((sum, r) => sum + r.rating, 0) / userReviews.length).toFixed(1) : "Baru";
    
    const teachHtml = topUser.teachSkills.map(s => `<span class="badge-teach"><i class="fa-solid fa-hand-holding-hand"></i> ${s.name} <small class="skill-level-indicator">${s.level || 'Intermediate'}</small></span>`).join("");
    const learnHtml = topUser.learning.map(s => `<span class="badge-learn"><i class="fa-solid fa-book-open"></i> ${s.name} <small class="skill-level-indicator">${s.level || 'Intermediate'}</small></span>`).join("");
    
    const methodText = topUser.studyMethod === "Both" ? "Online & Offline" : topUser.studyMethod || "Online";
    const availText = topUser.availability === "Both" ? "Weekday & Weekend" : topUser.availability || "Weekday";
    
    const badgesHtml = (topUser.badges || []).map(b => `<span class="user-badge-item"><i class="fa-solid fa-award"></i> ${b}</span>`).join("");
    
    stack.innerHTML = `
        <div class="swipe-card active-card" data-partner-id="${topUser.id}">
            <div class="card-avatar-box">
                <img class="card-avatar" src="${getUserAvatarUrl(topUser)}">
                <div class="card-rating-badge"><i class="fa-solid fa-star"></i> ${avgRating} (${userReviews.length})</div>
            </div>
            <div class="card-content">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h2>${topUser.displayName} <small style="font-size: 0.8rem; color: var(--text-muted);">Level ${topUser.level || 1}</small></h2>
                    <span class="status-indicator-dot ${isUserOnline(topUser) ? 'online' : 'offline'}"></span>
                </div>
                <p class="dept-grade" style="margin-top: 4px; font-weight: 700; color: var(--primary-color);">${formatDeptGrade(topUser)}</p>
                <div class="user-badges-list" style="margin: 6px 0;">${badgesHtml}</div>
                <p class="bio" style="font-size: 0.85rem; color: var(--text-muted); margin: 8px 0; max-height: 60px; overflow-y: auto;">${topUser.bio || (dict["no_bio_fallback"] || 'Mahasiswa ini belum mengisi bio.')}</p>
                
                <hr class="preview-divider">
                <div class="preview-section">
                    <h5 style="color: #10b981; font-weight: 700; margin-bottom: 4px;"><i class="fa-solid fa-hand-holding-hand"></i> ${dict["skills_to_teach"] || "Can Teach (Bisa Mengajar)"}:</h5>
                    <div class="skills-wrapper">${teachHtml || `<small class="text-muted">${dict["no_skills_teach_fallback"] || "Tidak ada skill"}</small>`}</div>
                </div>
                <div class="preview-section" style="margin-top: 10px;">
                    <h5 style="color: #8b5cf6; font-weight: 700; margin-bottom: 4px;"><i class="fa-solid fa-book-open"></i> ${dict["skills_to_learn"] || "Wants to Learn (Ingin Belajar)"}:</h5>
                    <div class="skills-wrapper">${learnHtml || `<small class="text-muted">${dict["no_skills_learn_fallback"] || "Tidak ada kebutuhan"}</small>`}</div>
                </div>
                
                <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--text-muted); margin-top: 12px; background: rgba(255,255,255,0.02); padding: 6px 10px; border-radius: 6px;">
                    <span><i class="fa-solid fa-laptop"></i> ${methodText}</span>
                    <span><i class="fa-solid fa-calendar-day"></i> ${availText}</span>
                </div>
            </div>
        </div>
    `;
};

// --- Reviews & Stars submit ---
document.getElementById("btn-chat-review").addEventListener("click", () => {
    openModal("modal-review");
});

const starBtns = document.querySelectorAll(".star-btn");
starBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const rating = Number(btn.getAttribute("data-value"));
        document.getElementById("review-stars-val").value = rating;
        starBtns.forEach(b => {
            const val = Number(b.getAttribute("data-value"));
            if (val <= rating) {
                b.style.color = "#f59e0b"; // Golden
            } else {
                b.style.color = "#cbd5e0"; // Gray
            }
        });
    });
});

document.getElementById("form-submit-review").addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!currentUser || !activeChatPartnerId) return;
    
    const rating = document.getElementById("review-stars-val").value;
    const comment = document.getElementById("review-comment").value;
    
    try {
        const res = await fetch('/api/reviews', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                reviewerId: currentUser.id,
                revieweeId: activeChatPartnerId,
                rating,
                comment
            })
        });
        if (res.ok) {
            const data = await res.json();
            reviews = data.reviews || [];
            showToast("Ulasan berhasil dikirim!");
            closeModal("modal-review");
            document.getElementById("review-comment").value = "";
        }
    } catch (err) {
        console.error("Error submitting review:", err);
    }
});

// --- Schedules Management ---
document.getElementById("btn-create-schedule").addEventListener("click", () => {
    openModal("modal-schedule");
});

document.getElementById("form-create-schedule").addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!currentUser || !activeChatPartnerId) return;
    
    // Find matching ID
    const activeMatch = matches.find(m => 
        (m.userAId === currentUser.id && m.userBId === activeChatPartnerId) ||
        (m.userAId === activeChatPartnerId && m.userBId === currentUser.id)
    );
    
    if (!activeMatch) return;
    
    const title = document.getElementById("schedule-title").value;
    const date = document.getElementById("schedule-date").value;
    const time = document.getElementById("schedule-time").value;
    const link = document.getElementById("schedule-link").value;
    
    try {
        const res = await fetch('/api/schedules', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                matchId: activeMatch.id,
                title,
                date,
                time,
                link,
                createdById: currentUser.id
            })
        });
        if (res.ok) {
            const data = await res.json();
            schedules = data.schedules || [];
            showToast("Pertemuan berhasil dijadwalkan!");
            closeModal("modal-schedule");
            
            document.getElementById("schedule-title").value = "";
            document.getElementById("schedule-date").value = "";
            document.getElementById("schedule-time").value = "";
            document.getElementById("schedule-link").value = "";
            
            renderChatSchedules();
        }
    } catch (err) {
        console.error("Error creating schedule:", err);
    }
});

function renderChatSchedules() {
    const list = document.getElementById("chat-schedules-list");
    if (!activeChatPartnerId) return;
    
    const activeMatch = matches.find(m => 
        (m.userAId === currentUser.id && m.userBId === activeChatPartnerId) ||
        (m.userAId === activeChatPartnerId && m.userBId === currentUser.id)
    );
    
    if (!activeMatch) return;
    
    const matchSchedules = schedules.filter(s => s.matchId === activeMatch.id);
    
    if (matchSchedules.length === 0) {
        list.innerHTML = `<div class="schedule-mini-card" style="border: none; background: none; color: var(--text-muted); padding: 0;"><small data-i18n="no_sessions">Belum ada pertemuan terjadwal</small></div>`;
        return;
    }
    
    list.innerHTML = "";
    matchSchedules.forEach(s => {
        const linkHtml = s.link ? `<a href="${s.link}" target="_blank" style="color: var(--primary-color); text-decoration: underline;"><i class="fa-solid fa-up-right-from-square"></i> Join</a>` : "";
        list.innerHTML += `
            <div class="schedule-mini-card">
                <i class="fa-regular fa-calendar-check"></i>
                <span><strong>${s.title}</strong> &bull; ${s.date} Pukul ${s.time} ${linkHtml}</span>
            </div>
        `;
    });
}

// Hook render schedules and groups into chat render
const originalRenderChat = renderChat;
renderChat = function() {
    if (typeof originalRenderChat === "function") {
        originalRenderChat();
    }
    renderChatSchedules();
    renderGroups();
};

// --- Q&A Forum Hub ---
async function renderForum() {
    const dict = TRANSLATIONS[currentLanguage] || {};
    const list = document.getElementById("forum-list-view");
    list.innerHTML = "";
    
    if (questions.length === 0) {
        list.innerHTML = `<div class="empty-state" style="padding: 2rem;"><p>${dict["no_forum_questions"] || "Belum ada pertanyaan di forum ini. Jadilah yang pertama bertanya!"}</p></div>`;
        return;
    }
    
    const searchQuery = document.getElementById("forum-search-input").value.toLowerCase();
    
    questions.forEach(q => {
        if (searchQuery && !q.title.toLowerCase().includes(searchQuery) && !q.body.toLowerCase().includes(searchQuery)) {
            return;
        }
        
        const asker = users.find(u => u.id === q.userId) || { displayName: "User" };
        const ansCount = (q.answers || []).length;
        
        list.innerHTML += `
            <div class="question-card" onclick="viewQuestionDetail('${q.id}')">
                <div class="question-header">
                    <span class="skill-chip ${getCategoryClass(q.category)}">${q.category}</span>
                    <small>${new Date(q.createdAt).toLocaleDateString()}</small>
                </div>
                <div class="question-title">${q.title}</div>
                <p class="question-body">${q.body.substring(0, 100)}...</p>
                <div class="question-footer">
                    <div class="question-meta-left">
                        <img src="${getUserAvatarUrl(asker)}" class="avatar-small" style="width: 20px; height: 20px;">
                        <span>Ditanyakan oleh <strong>${asker.displayName}</strong></span>
                    </div>
                    <span><i class="fa-regular fa-comment-dots"></i> ${ansCount} Jawaban</span>
                </div>
            </div>
        `;
    });
}

document.getElementById("forum-search-input").addEventListener("input", renderForum);

document.getElementById("btn-ask-question").addEventListener("click", () => {
    openModal("modal-ask");
});

document.getElementById("form-ask-question").addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!currentUser) return;
    
    const title = document.getElementById("ask-title").value;
    const body = document.getElementById("ask-body").value;
    const category = document.getElementById("ask-category").value;
    
    try {
        const res = await fetch('/api/forum/ask', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: currentUser.id,
                title,
                body,
                category
            })
        });
        if (res.ok) {
            const data = await res.json();
            questions = data.questions || [];
            showToast("Pertanyaan Anda berhasil diterbitkan!");
            closeModal("modal-ask");
            
            document.getElementById("ask-title").value = "";
            document.getElementById("ask-body").value = "";
            renderForum();
        }
    } catch (err) {
        console.error("Error posting question:", err);
    }
});

let activeQuestionId = null;

window.viewQuestionDetail = function(qId) {
    activeQuestionId = qId;
    document.getElementById("forum-list-panel").classList.add("hidden");
    document.getElementById("forum-detail-view").classList.remove("hidden");
    renderQuestionDetail();
};

document.getElementById("btn-forum-back").addEventListener("click", () => {
    activeQuestionId = null;
    document.getElementById("forum-detail-view").classList.add("hidden");
    document.getElementById("forum-list-panel").classList.remove("hidden");
    renderForum();
});

function renderQuestionDetail() {
    const dict = TRANSLATIONS[currentLanguage] || {};
    if (!activeQuestionId) return;
    const q = questions.find(item => item.id === activeQuestionId);
    if (!q) return;
    
    const asker = users.find(u => u.id === q.userId) || { displayName: "User" };
    
    const detailContent = document.getElementById("forum-detail-content");
    detailContent.innerHTML = `
        <div class="question-header" style="margin-top: 10px;">
            <span class="skill-chip ${getCategoryClass(q.category)}">${q.category}</span>
            <small>${new Date(q.createdAt).toLocaleDateString()} ${new Date(q.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</small>
        </div>
        <h2 style="font-size: 1.5rem; font-weight: 800; color: var(--text-light); margin: 10px 0;">${q.title}</h2>
        <div style="display: flex; align-items: center; gap: 8px; font-size: 0.8rem; color: var(--text-muted); margin-bottom: 1.5rem;">
            <img src="${getUserAvatarUrl(asker)}" class="avatar-small" style="width: 24px; height: 24px;">
            <span>Ditanyakan oleh <strong>${asker.displayName}</strong></span>
        </div>
        <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-light); white-space: pre-line; background: rgba(255,255,255,0.01); padding: 15px; border-radius: 8px; border: 1px solid var(--border-color);">${q.body}</p>
    `;
    
    // Render answers list
    const answersList = document.getElementById("forum-answers-list");
    answersList.innerHTML = "";
    
    const qAnswers = q.answers || [];
    if (qAnswers.length === 0) {
        answersList.innerHTML = `<div class="empty-state" style="padding: 1rem;"><p style="font-size: 0.8rem; color: var(--text-muted);">${dict["no_forum_answers"] || "Belum ada jawaban. Tulis jawaban pertama Anda di bawah!"}</p></div>`;
        return;
    }
    
    qAnswers.forEach(ans => {
        const replier = users.find(u => u.id === ans.userId) || { displayName: "User" };
        
        // Show match invite button if not self and not already matched
        const isSelf = ans.userId === currentUser.id;
        const alreadyMatched = matches.some(m => 
            (m.userAId === currentUser.id && m.userBId === ans.userId && m.status === "ACTIVE") ||
            (m.userAId === ans.userId && m.userBId === currentUser.id && m.status === "ACTIVE")
        );
        
        const inviteBtn = (!isSelf && !alreadyMatched) ? 
            `<button class="btn btn-secondary btn-sm" onclick="inviteFromForum('${ans.userId}')" style="font-size: 0.7rem; padding: 4px 8px;"><i class="fa-solid fa-heart"></i> Ajak Match</button>` : "";
            
        answersList.innerHTML += `
            <div class="answer-card">
                <div class="answer-header">
                    <div style="display: flex; align-items: center; gap: 6px;">
                        <img src="${getUserAvatarUrl(replier)}" class="avatar-small" style="width: 18px; height: 18px;">
                        <strong>${replier.displayName}</strong>
                    </div>
                    <span>${new Date(ans.createdAt).toLocaleDateString()}</span>
                </div>
                <p class="answer-body">${ans.body}</p>
                <div class="text-right">${inviteBtn}</div>
            </div>
        `;
    });
}

document.getElementById("forum-answer-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!currentUser || !activeQuestionId) return;
    
    const body = document.getElementById("forum-answer-input").value;
    
    try {
        const res = await fetch('/api/forum/answer', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                questionId: activeQuestionId,
                userId: currentUser.id,
                body
            })
        });
        if (res.ok) {
            const data = await res.json();
            
            // Sync local question list
            const qIndex = questions.findIndex(item => item.id === activeQuestionId);
            if (qIndex !== -1) {
                questions[qIndex] = data.question;
            }
            
            showToast("Jawaban Anda berhasil dikirim!");
            document.getElementById("forum-answer-input").value = "";
            renderQuestionDetail();
        }
    } catch (err) {
        console.error("Error submitting answer:", err);
    }
});

window.inviteFromForum = async function(partnerId) {
    if (!currentUser) return;
    try {
        const res = await fetch('/api/swipe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: currentUser.id,
                partnerId,
                action: 'like'
            })
        });
        const data = await res.json();
        if (res.ok) {
            matches = data.matches || [];
            if (data.isMatch) {
                showToast("Match terbentuk! Obrolan diaktifkan.", "success");
            } else {
                showToast("Undangan match dikirim!", "success");
            }
            renderQuestionDetail();
        }
    } catch (err) {
        console.error("Error swiping from forum:", err);
    }
};

// --- Open Study Room (Pomodoro & WebRTC Mock Camera) ---
let pomodoroTimer = null;
let pomodoroTotalSeconds = 25 * 60;
let pomodoroSeconds = 25 * 60;
let isTimerRunning = false;
let localStream = null;
let micStream = null;
let isCamOn = false;
let isMicOn = false;
let pomodoroMode = 'focus'; // 'focus' | 'short' | 'long'

const POMODORO_MODES = {
    focus: 25 * 60,
    short: 5 * 60,
    long: 15 * 60
};

function tr(key) {
    return (TRANSLATIONS[currentLanguage] || TRANSLATIONS['jp'])[key] || key;
}

function initStudyRoom() {
    // Show HTTPS warning if not secure
    const httpsWarning = document.getElementById('study-https-warning');
    if (httpsWarning) {
        const isSecure = location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1';
        httpsWarning.classList.toggle('hidden', isSecure);
    }

    // Update localized labels
    const labelYou = document.getElementById('local-video-label');
    const labelPartner = document.getElementById('study-partner-label');
    if (labelYou) labelYou.innerText = t('video_label_you');
    if (labelPartner) labelPartner.innerText = t('video_label_partner');

    // Update mode buttons
    const modeButtons = document.querySelectorAll('.pomodoro-mode-btn');
    modeButtons.forEach(btn => {
        const mode = btn.getAttribute('data-mode');
        btn.innerText = t(`pomodoro_mode_${mode}`);
        btn.classList.toggle('active', mode === pomodoroMode);
    });

    // Update camera/mic/share labels
    _updateCamBtn();
    _updateMicBtn();
    _updateShareBtn();

    // Update status text
    const statusEl = document.getElementById('study-status-desc');
    if (statusEl && !isTimerRunning) {
        statusEl.innerText = t('pomodoro_status_idle');
    }

    updatePomodoroDisplay();
    updatePomodoroRing();
}

function updatePomodoroDisplay() {
    const min = Math.floor(pomodoroSeconds / 60).toString().padStart(2, '0');
    const sec = (pomodoroSeconds % 60).toString().padStart(2, '0');
    const timerEl = document.getElementById('pomodoro-timer');
    if (timerEl) timerEl.innerText = `${min}:${sec}`;
}

function updatePomodoroRing() {
    const ring = document.getElementById('pomodoro-ring');
    if (!ring) return;
    const total = POMODORO_MODES[pomodoroMode];
    const radius = ring.r ? ring.r.baseVal.value : 90;
    const circumference = 2 * Math.PI * radius;
    const progress = pomodoroSeconds / total;
    const offset = circumference * (1 - progress);
    ring.style.strokeDasharray = `${circumference}`;
    ring.style.strokeDashoffset = `${offset}`;

    // Change ring color by mode
    if (pomodoroMode === 'focus') {
        ring.style.stroke = '#6c63ff';
    } else if (pomodoroMode === 'short') {
        ring.style.stroke = '#22c55e';
    } else {
        ring.style.stroke = '#f59e0b';
    }
}

function setMode(mode) {
    if (isTimerRunning) {
        clearInterval(pomodoroTimer);
        isTimerRunning = false;
    }
    pomodoroMode = mode;
    pomodoroTotalSeconds = POMODORO_MODES[mode];
    pomodoroSeconds = pomodoroTotalSeconds;
    document.querySelectorAll('.pomodoro-mode-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-mode') === mode);
    });
    const startBtn = document.getElementById('btn-pomodoro-start');
    const pauseBtn = document.getElementById('btn-pomodoro-pause');
    if (startBtn) startBtn.classList.remove('hidden');
    if (pauseBtn) pauseBtn.classList.add('hidden');
    const statusEl = document.getElementById('study-status-desc');
    if (statusEl) statusEl.innerText = tr('pomodoro_status_idle');
    updatePomodoroDisplay();
    updatePomodoroRing();
}

// Mode buttons
document.querySelectorAll('.pomodoro-mode-btn').forEach(btn => {
    btn.addEventListener('click', () => setMode(btn.getAttribute('data-mode')));
});

document.getElementById('btn-pomodoro-start').addEventListener('click', () => {
    if (isTimerRunning) return;
    isTimerRunning = true;
    document.getElementById('btn-pomodoro-start').classList.add('hidden');
    document.getElementById('btn-pomodoro-pause').classList.remove('hidden');
    const statusEl = document.getElementById('study-status-desc');
    if (statusEl) statusEl.innerText = tr('pomodoro_status_running');

    pomodoroTimer = setInterval(() => {
        if (pomodoroSeconds > 0) {
            pomodoroSeconds--;
            updatePomodoroDisplay();
            updatePomodoroRing();
        } else {
            clearInterval(pomodoroTimer);
            isTimerRunning = false;
            const isFocus = pomodoroMode === 'focus';
            showToast(isFocus ? tr('pomodoro_finished_focus') : tr('pomodoro_finished_break'), 'success');
            document.getElementById('btn-pomodoro-start').classList.remove('hidden');
            document.getElementById('btn-pomodoro-pause').classList.add('hidden');
            if (statusEl) statusEl.innerText = isFocus ? tr('pomodoro_status_break') : tr('pomodoro_status_idle');
            // Auto-switch mode
            const nextMode = isFocus ? 'short' : 'focus';
            pomodoroMode = nextMode;
            pomodoroTotalSeconds = POMODORO_MODES[nextMode];
            pomodoroSeconds = pomodoroTotalSeconds;
            document.querySelectorAll('.pomodoro-mode-btn').forEach(b => {
                b.classList.toggle('active', b.getAttribute('data-mode') === nextMode);
            });
            updatePomodoroDisplay();
            updatePomodoroRing();
        }
    }, 1000);
});

document.getElementById('btn-pomodoro-pause').addEventListener('click', () => {
    clearInterval(pomodoroTimer);
    isTimerRunning = false;
    document.getElementById('btn-pomodoro-start').classList.remove('hidden');
    document.getElementById('btn-pomodoro-pause').classList.add('hidden');
    const statusEl = document.getElementById('study-status-desc');
    if (statusEl) statusEl.innerText = tr('pomodoro_status_paused');
});

document.getElementById('btn-pomodoro-reset').addEventListener('click', () => {
    clearInterval(pomodoroTimer);
    isTimerRunning = false;
    pomodoroSeconds = POMODORO_MODES[pomodoroMode];
    pomodoroTotalSeconds = pomodoroSeconds;
    document.getElementById('btn-pomodoro-start').classList.remove('hidden');
    document.getElementById('btn-pomodoro-pause').classList.add('hidden');
    const statusEl = document.getElementById('study-status-desc');
    if (statusEl) statusEl.innerText = tr('pomodoro_status_idle');
    updatePomodoroDisplay();
    updatePomodoroRing();
});

// Camera
function _updateCamBtn() {
    const btn = document.getElementById('btn-toggle-cam');
    if (!btn) return;
    if (isCamOn) {
        btn.innerHTML = `<i class="fa-solid fa-video-slash"></i> ${tr('cam_off')}`;
        btn.className = 'btn btn-danger';
    } else {
        btn.innerHTML = `<i class="fa-solid fa-video"></i> ${tr('cam_on')}`;
        btn.className = 'btn btn-secondary';
    }
}

function _updateMicBtn() {
    const btn = document.getElementById('btn-toggle-mic');
    if (!btn) return;
    if (isMicOn) {
        btn.innerHTML = `<i class="fa-solid fa-microphone-slash"></i> ${tr('mic_off')}`;
        btn.className = 'btn btn-danger';
    } else {
        btn.innerHTML = `<i class="fa-solid fa-microphone"></i> ${tr('mic_on')}`;
        btn.className = 'btn btn-secondary';
    }
}

function _updateShareBtn() {
    const btn = document.getElementById('btn-share-screen');
    if (!btn) return;
    btn.innerHTML = `<i class="fa-solid fa-desktop"></i> ${tr('screen_share')}`;
}

document.getElementById('btn-toggle-cam').addEventListener('click', async () => {
    // Camera/mic require HTTPS in production
    if (location.protocol !== 'https:' && location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
        showToast('⚠️ カメラはHTTPS接続が必要です / Camera requires HTTPS', 'danger');
        return;
    }
    const video = document.getElementById('local-video');
    const placeholder = document.getElementById('local-video-placeholder');

    if (!isCamOn) {
        try {
            const camStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
            // Stop previous video tracks only
            if (localStream) localStream.getVideoTracks().forEach(track => track.stop());
            const tracks = [...camStream.getVideoTracks()];
            if (micStream) tracks.push(...micStream.getAudioTracks());
            localStream = new MediaStream(tracks);
            video.srcObject = localStream;
            placeholder.style.display = 'none';
            video.style.display = 'block';
            isCamOn = true;
        } catch (err) {
            console.error('Camera access denied:', err);
            if (err.name === 'NotAllowedError') {
                showToast('🚫 カメラのアクセスが拒否されました / Camera permission denied', 'danger');
            } else if (err.name === 'NotFoundError') {
                showToast('📷 カメラが見つかりません / No camera found', 'danger');
            } else {
                showToast(tr('toast_camera_error'), 'danger');
            }
        }
    } else {
        if (localStream) localStream.getVideoTracks().forEach(track => track.stop());
        video.srcObject = null;
        placeholder.style.display = '';
        video.style.display = 'none';
        isCamOn = false;
        if (isMicOn && micStream) {
            localStream = micStream;
        } else {
            localStream = null;
        }
    }
    _updateCamBtn();
});

// Microphone
document.getElementById('btn-toggle-mic').addEventListener('click', async () => {
    if (location.protocol !== 'https:' && location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
        showToast('⚠️ マイクはHTTPS接続が必要です / Mic requires HTTPS', 'danger');
        return;
    }
    if (!isMicOn) {
        try {
            micStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
            isMicOn = true;
            showToast(tr('toast_mic_on'));
        } catch (err) {
            console.error('Mic access denied:', err);
            if (err.name === 'NotAllowedError') {
                showToast('🚫 マイクのアクセスが拒否されました / Mic permission denied', 'danger');
            } else if (err.name === 'NotFoundError') {
                showToast('🎤 マイクが見つかりません / No microphone found', 'danger');
            } else {
                showToast(tr('toast_camera_error'), 'danger');
            }
        }
    } else {
        if (micStream) micStream.getTracks().forEach(track => track.stop());
        micStream = null;
        isMicOn = false;
        showToast(tr('toast_mic_off'));
    }
    _updateMicBtn();
});

// Screen share
document.getElementById('btn-share-screen').addEventListener('click', async () => {
    if (location.protocol !== 'https:' && location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
        showToast('⚠️ 画面共有はHTTPS接続が必要です / Screen share requires HTTPS', 'danger');
        return;
    }
    try {
        const stream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
        const video = document.getElementById('local-video');
        video.srcObject = stream;
        document.getElementById('local-video-placeholder').style.display = 'none';
        video.style.display = 'block';
        showToast(tr('toast_screenshare_start'));

        stream.getVideoTracks()[0].addEventListener('ended', () => {
            if (isCamOn && localStream) {
                video.srcObject = localStream;
            } else {
                video.srcObject = null;
                video.style.display = 'none';
                document.getElementById('local-video-placeholder').style.display = '';
            }
            showToast(tr('toast_screenshare_end'));
        });
    } catch (err) {
        if (err.name !== 'AbortError' && err.name !== 'NotAllowedError') {
            console.error('Display media error:', err);
        }
    }
});

// --- Flash Match / Emergency request board ---
document.getElementById("btn-create-flash").addEventListener("click", () => {
    openModal("modal-flash");
});

document.getElementById("form-create-flash").addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!currentUser) return;
    
    const title = document.getElementById("flash-title").value;
    const rewardDescription = document.getElementById("flash-reward").value;
    const category = document.getElementById("flash-category").value;
    
    try {
        const res = await fetch('/api/flash-requests/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: currentUser.id,
                title,
                rewardDescription,
                category
            })
        });
        if (res.ok) {
            const data = await res.json();
            flashRequests = data.flashRequests || [];
            showToast("Request darurat berhasil diposting!");
            closeModal("modal-flash");
            
            document.getElementById("flash-title").value = "";
            document.getElementById("flash-reward").value = "";
            renderFlashRequests();
        }
    } catch (err) {
        console.error("Error creating flash request:", err);
    }
});

function renderFlashRequests() {
    const list = document.getElementById("flash-board-list");
    list.innerHTML = "";
    
    const openRequests = flashRequests.filter(r => r.status === 'OPEN');
    if (openRequests.length === 0) {
        list.innerHTML = `<div class="empty-state" style="padding: 10px; text-align: center;"><p style="font-size: 0.75rem; color: var(--text-muted);">Tidak ada tugas darurat saat ini.</p></div>`;
        return;
    }
    
    openRequests.forEach(r => {
        const owner = users.find(u => u.id === r.userId) || { displayName: "User" };
        const isSelf = r.userId === currentUser.id;
        const takeBtn = isSelf ? "" : `<button class="btn btn-danger btn-sm" onclick="takeFlashRequest('${r.id}')" style="font-size: 0.7rem; padding: 4px 10px;"><i class="fa-solid fa-bolt"></i> Ambil</button>`;
        
        list.innerHTML += `
            <div class="flash-req-card">
                <div class="flash-req-info">
                    <h5>${r.title} <span class="skill-chip ${getCategoryClass(r.category)}" style="font-size: 0.6rem; padding: 2px 6px;">${r.category}</span></h5>
                    <p style="margin-bottom: 2px;"><i class="fa-solid fa-gift" style="color: var(--danger); margin-right: 4px;"></i> Imbalan: ${r.rewardDescription}</p>
                    <p><i class="fa-solid fa-user" style="margin-right: 4px;"></i> Oleh: ${owner.displayName}</p>
                </div>
                <div>${takeBtn}</div>
            </div>
        `;
    });
}

window.takeFlashRequest = async function(requestId) {
    if (!currentUser) return;
    try {
        const res = await fetch('/api/flash-requests/take', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                requestId,
                userId: currentUser.id
            })
        });
        const data = await res.json();
        if (res.ok) {
            flashRequests = data.flashRequests || [];
            matches = data.matches || [];
            showToast("Flash Match terbentuk! Membuka obrolan...", "success");
            
            // Switch to chat view with the new match partner
            activeChatPartnerId = data.request.userId;
            
            // Switch navigation click
            document.querySelector('[data-target="view-chat"]').click();
        } else {
            showToast(data.error || "Gagal mengambil request", "danger");
        }
    } catch (err) {
        console.error("Error taking flash request:", err);
    }
};

// --- Skill Passport Portfolio PDF Print Exporter ---
// Exporter click handler inside profile page
const profileCard = document.querySelector(".profile-layout");
if (profileCard) {
    const printBtn = document.createElement("button");
    printBtn.className = "btn btn-secondary btn-block margin-top";
    printBtn.type = "button";
    printBtn.innerHTML = `<i class="fa-solid fa-file-pdf"></i> <span data-i18n="export_passport">Unduh Skill Passport (PDF)</span>`;
    printBtn.addEventListener("click", exportSkillPassport);
    
    // Append print button in personal info card
    const personalCard = document.querySelector(".profile-card");
    if (personalCard) {
        personalCard.appendChild(printBtn);
    }
}

function exportSkillPassport() {
    if (!currentUser) return;
    const dict = TRANSLATIONS[currentLanguage] || {};
    
    // Fill passport printable data
    document.getElementById("passport-name").innerText = currentUser.displayName;
    document.getElementById("passport-dept").innerText = getLocalizedDept(currentUser.department);
    document.getElementById("passport-grade").innerText = currentUser.grade;
    document.getElementById("passport-level").innerText = currentUser.level || 1;
    document.getElementById("passport-xp").innerText = currentUser.xp || 0;
    
    // Format date based on language
    const printDate = new Date();
    let formattedDate = "";
    if (currentLanguage === "jp") {
        formattedDate = `${printDate.getFullYear()}年${printDate.getMonth() + 1}月${printDate.getDate()}日`;
    } else {
        formattedDate = printDate.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    }
    document.getElementById("passport-print-date").innerText = formattedDate;
    
    // Average rating
    const myReviews = reviews.filter(r => r.revieweeId === currentUser.id);
    const avg = myReviews.length > 0 ? (myReviews.reduce((sum, r) => sum + r.rating, 0) / myReviews.length).toFixed(1) : "0";
    
    // Badges
    const badgeText = (currentUser.badges || []).length > 0 ? (currentUser.badges || []).join(", ") : (dict["no_badges_earned"] || "Belum ada gelar");
    
    // Translate printable certificate text labels dynamically
    document.getElementById("passport-cert-text").innerText = dict["passport_cert_text"] || "Sertifikat Portofolio ini secara resmi diberikan kepada:";
    
    // Set localized user department & grade info row
    const dept = getLocalizedDept(currentUser.department);
    const grade = currentUser.grade || "-";
    const infoRow = document.getElementById("passport-user-info-row");
    if (infoRow) {
        if (currentLanguage === "jp") {
            infoRow.innerHTML = `<strong>${dept}</strong>（${grade}年度）の学生として、<br>学術的な活動および学生間のスキル交換への積極的な参加を称えます。`;
        } else if (currentLanguage === "en") {
            infoRow.innerHTML = `from the Department of <strong>${dept}</strong> (Class of ${grade})<br>for academic activity and participation in student skill exchange.`;
        } else {
            infoRow.innerHTML = `dari Program Studi / Jurusan <strong>${dept}</strong> (Angkatan ${grade})<br>atas keaktifan akademik dan partisipasi dalam pertukaran keahlian mahasiswa.`;
        }
    }
    
    const giveTitle = document.getElementById("passport-give-title");
    if (giveTitle) giveTitle.innerText = dict["passport_give_title"] || "Materi Pengajaran (Give Skills)";
    
    const takeTitle = document.getElementById("passport-take-title");
    if (takeTitle) takeTitle.innerText = dict["passport_take_title"] || "Materi Kebutuhan Belajar (Take Skills)";
    
    const dateLabel = document.getElementById("passport-date-label");
    if (dateLabel) dateLabel.innerText = (dict["passport_date_label"] || "Tanggal Cetak") + ":";
    
    const levelLabel = dict["passport_level_label"] || "Tingkat Reputasi";
    const ratingLabel = dict["passport_rating_label"] || "Rating Penilaian";
    const badgesLabel = dict["passport_badges_label"] || "Badges yang Diperoleh";
    
    const statsRow = document.getElementById("passport-stats-row");
    if (statsRow) {
        statsRow.innerHTML = `
            ${levelLabel}: <strong>Level ${currentUser.level || 1}</strong> (${currentUser.xp || 0} XP) &bull;
            ${ratingLabel}: <strong>⭐ ${avg}/5 (${myReviews.length} ${currentLanguage === "jp" ? "レビュー" : "ulasan"})</strong> &bull;
            ${badgesLabel}: <strong>${badgeText}</strong>
        `;
    }
    
    // Teaching skills list
    const teachList = document.getElementById("passport-teach-list");
    teachList.innerHTML = "";
    if (currentUser.teachSkills.length === 0) {
        teachList.innerHTML = `<li>${dict["no_teach_skills_passport"] || "Belum ada keahlian diajarkan."}</li>`;
    } else {
        currentUser.teachSkills.forEach(s => {
            teachList.innerHTML += `<li>&bull; <strong>${s.name}</strong> (${s.category}) &bull; ${s.level || 'Intermediate'}</li>`;
        });
    }
    
    // Learning needs list
    const learnList = document.getElementById("passport-learn-list");
    learnList.innerHTML = "";
    if (currentUser.learning.length === 0) {
        learnList.innerHTML = `<li>${dict["no_learn_skills_passport"] || "Belum ada kebutuhan belajar."}</li>`;
    } else {
        currentUser.learning.forEach(s => {
            learnList.innerHTML += `<li>&bull; <strong>${s.name}</strong> (${s.category}) &bull; ${s.level || 'Intermediate'}</li>`;
        });
    }
    
    // Trigger browser printing
    window.print();
}
