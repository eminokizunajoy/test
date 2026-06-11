# WAF Monitor — Admin Panel

## 📁 File Structure

```
admin-panel/
├── config.php       ← Database connection + helpers (EDIT DB CREDENTIALS HERE)
├── gatekeeper.php   ← IP blacklist check (included at top of every page)
├── setup.php        ← One-time database + table creator (run once, then delete)
├── login.php        ← Admin login portal
├── logout.php       ← Session destroyer
└── admin.php        ← Full admin dashboard (CRUD)
```

## 🗄️ Database Schema

### `access_logs` (tracks all visits/attempts)
| Column | Type | Description |
|--------|------|-------------|
| id | INT AUTO_INCREMENT PK | |
| ip_address | VARCHAR(45) | Client IP |
| username | VARCHAR(100) | Attempted username (nullable) |
| action | VARCHAR(50) | `login_attempt`, `login_failed`, `login_success`, `page_visit`, `manual_block` |
| status | VARCHAR(20) | `success`, `failed`, `blocked`, `visit` |
| user_agent | TEXT | Browser user agent |
| request_uri | VARCHAR(500) | Request URL |
| created_at | TIMESTAMP | Auto |

### `ip_blacklist` (One-to-Many → `access_logs.ip_address`)
| Column | Type | Description |
|--------|------|-------------|
| id | INT AUTO_INCREMENT PK | |
| ip_address | VARCHAR(45) UNIQUE | Blocked IP |
| reason | VARCHAR(500) | Block reason |
| blocked_by | VARCHAR(50) | `system` or admin username |
| blocked_at | TIMESTAMP | Auto |
| updated_at | TIMESTAMP | Auto on update |

**Relationship:** `ip_blacklist.ip_address` → `access_logs.ip_address` (One-to-Many)

## ⚙️ Installation

### 1. Requirements
- PHP 8.x
- MySQL 5.7+ or MariaDB 10+
- Web server: Apache/Nginx with PHP support

### 2. Configure Database
Edit `config.php`:
```php
define('DB_HOST', 'localhost');
define('DB_USER', 'your_mysql_user');
define('DB_PASS', 'your_mysql_password');
define('DB_NAME', 'waf_monitor');
```

### 3. Run Setup
Open in browser:
```
http://yoursite.com/admin-panel/setup.php?token=setup_waf_2026
```
This creates the database, tables, and sample data.

**Delete `setup.php` after running!**

### 4. Login
```
URL:      http://yoursite.com/admin-panel/login.php
Username: sabda26
Password: 123456
```

## 🔒 Security Logic

- **Every page load** of `login.php` → INSERT into `access_logs`
- **Every failed login** → INSERT with `status='failed'`
- **After >5 failures in 1 hour** → Auto-INSERT into `ip_blacklist`
- **Every protected page** includes `gatekeeper.php` → SELECT from `ip_blacklist`
- **If found** → 403 HTML page rendered, execution STOPPED

## 📊 CRUD Operations

| Operation | Where | Description |
|-----------|-------|-------------|
| **INSERT** | `login.php` | Log every visit/attempt |
| **INSERT** | Auto-blacklist | >5 fails → `ip_blacklist` |
| **INSERT** | `admin.php` | Manual "Block IP" form |
| **SELECT** | `gatekeeper.php` | IP check every page load |
| **SELECT** | `admin.php` | Read all logs + blacklist |
| **SELECT** | Search box | Filter by IP/user/action/status |
| **UPDATE** | `admin.php` | Edit block reason |
| **DELETE** | `admin.php` | Unblock IP (remove from blacklist) |
| **DELETE** | `admin.php` | Delete individual log entries |

## 🖥️ EC2 Nginx Setup (if needed)

Add to Nginx config (alongside your Node.js app):
```nginx
location /admin-panel/ {
    root /var/www/skill-exchange-market;
    index login.php;
    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }
}
```

Install PHP + MySQL:
```bash
sudo apt install php8.1-fpm php8.1-mysqli mysql-server -y
sudo systemctl start mysql
sudo mysql_secure_installation
```
