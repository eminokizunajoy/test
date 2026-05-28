# Skill Exchange Market (Next.js + MariaDB)

MVP web app untuk matching dan chat antar mahasiswa berdasarkan **skill yang bisa diajarkan** dan **yang ingin dipelajari**.

## Fitur MVP
- Register + Login (email+password) + Login Google (NextAuth)
- Edit profil
- Kelola teaching skills
- Kelola learning needs
- Search user
- Matching kandidat (heuristic sederhana)
- Chat (buat match + kirim pesan)

## Persiapan lokal (Windows)
1. Install Node.js (LTS) dan npm.
2. Copy env:
   - Salin `.env.example` menjadi `.env`
   - Ubah `DATABASE_URL` sesuai MariaDB/MySQL kamu
   - Ubah `AUTH_SECRET` (string panjang random)
   - Jika mau login Google: isi `GOOGLE_CLIENT_ID` dan `GOOGLE_CLIENT_SECRET`
3. Install dependency:
   - `npm install`
4. Buat tabel DB:
   - `npx prisma migrate dev --name init`
5. Jalankan:
   - `npm run dev`
   - Buka `http://localhost:3000`

## Setup Google Login (OAuth)
1. Buat OAuth Client di Google Cloud Console:
   - Authorized JavaScript origins: `http://localhost:3000`
   - Authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
2. Isi `.env`:
   - `GOOGLE_CLIENT_ID=...`
   - `GOOGLE_CLIENT_SECRET=...`
   - `NEXTAUTH_URL=http://localhost:3000`

## MariaDB cepat (contoh)
Kamu bisa pakai MariaDB lokal, atau MariaDB di EC2.

Database yang dibutuhkan:
- Nama DB: `skill_exchange_market` (atau sesuai `DATABASE_URL`)
- User DB dengan hak akses create/alter untuk migrasi

## Deploy ke AWS EC2 (sesuai rencana AWS kamu)
Arsitektur sederhana (1 EC2):
- **EC2**: menjalankan Next.js (Node.js) + MariaDB (atau DB terpisah jika nanti mau)
- **Security Group**: buka `80`/`443`, SSH `22` hanya IP admin/dev, DB `3306` tidak dibuka publik

Langkah ringkas:
1. Siapkan EC2 (Ubuntu/Amazon Linux).
2. Install Node.js, MariaDB, dan reverse proxy (Nginx/Apache).
3. Clone repo, set `.env`, lalu:
   - `npm ci`
   - `npx prisma migrate deploy`
   - `npm run build`
4. Jalankan app dengan service manager (systemd) di port 3000.
5. Reverse proxy 80/443 -> 3000.

