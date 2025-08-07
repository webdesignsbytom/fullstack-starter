# PgBounce

## Processes

1. Set up and seed via postgres not pg `DATABASE_URL="postgresql://sissy_user:sissy_pass@127.0.0.1:5432/sissy_school?schema=public"`

## Install


# 🐘 PostgreSQL + PgBouncer + Prisma Setup (Production Ready)

This guide documents a fully working and clean setup for hosting PostgreSQL and PgBouncer using Docker on a remote Linux server, while developing and running Prisma locally.

---

## 🔐 Configuration

- **Database Name**: `sissy_school_main`
- **Database User**: `sissy_admin`
- **Password**: (your chosen secret password)
- **Prisma Location**: Runs on your local machine only
- **No app code is uploaded to the database server**

---

## 🖥️ On the Remote Linux Server

### 1. SSH into the server

```
ssh root@your-server-ip
```

---

### 2. Install Docker

```
apt update
apt install -y docker.io
systemctl enable docker
systemctl start docker
```

Add Docker permissions:

```
usermod -aG docker $USER
newgrp docker
```

---

### 3. Create Working Directory

```
mkdir -p ~/pgbouncer-docker/server
cd ~/pgbouncer-docker
```

---

### 4. Run PostgreSQL via Docker

```
docker run -d \
  --name pg \
  -e POSTGRES_DB=sissy_school_main \
  -e POSTGRES_USER=sissy_admin \
  -e POSTGRES_PASSWORD=your_secret_password \
  -p 5432:5432 \
  postgres:17.4
```

---

### 5. Install PostgreSQL Client

```
apt install postgresql-client-15
```

---

### 6. Create `pgbouncer.ini`

```
nano server/pgbouncer.ini
```

Paste this:

```
[databases]
sissy_school_main = host=127.0.0.1 port=5432 dbname=sissy_school_main user=sissy_admin

[pgbouncer]
listen_addr = 0.0.0.0
listen_port = 6432
auth_type = md5
auth_file = /etc/pgbouncer/userlist.txt
admin_users = sissy_admin
pool_mode = session
server_reset_query = DISCARD ALL
max_client_conn = 100
default_pool_size = 20
log_connections = 1
log_disconnections = 1
```

---

### 7. Create `userlist.txt`

```
nano server/userlist.txt
```

Add:

```
"sissy_admin" "md5<md5_hashed_password>"
```

To generate the hash:

```
echo -n 'your_secret_passwordsissy_admin' | md5sum
```

Use the result as:

```
"sissy_admin" "md5<the_md5_hash>"
```

---

### 8. Start PgBouncer via Docker

```
docker run -d \
  --name pgbouncer \
  --network host \
  -v $(pwd)/server/pgbouncer.ini:/etc/pgbouncer/pgbouncer.ini \
  -v $(pwd)/server/userlist.txt:/etc/pgbouncer/userlist.txt \
  edoburu/pgbouncer
```

---

## 💻 On Your Local Machine

### 9. Set `.env` for PgBouncer

```
DATABASE_URL="postgresql://sissy_admin:sissy_pass@your-server-ip:6432/sissy_school_main?schema=public"
```

### 10. Set `.env` for Direct PostgreSQL (for migration/seed)

```
DATABASE_DIRECT_URL="postgresql://sissy_admin:sissy_pass@your-server-ip:5432/sissy_school_main?schema=public"
```

---

### 11. Migrate and Seed (Direct DB)

```
export DATABASE_URL=$DATABASE_DIRECT_URL
npx prisma generate
npx prisma migrate deploy
node prisma/seed.js
```

---

### 12. Switch Back to PgBouncer for Production

```
export DATABASE_URL="postgresql://sissy_admin:sissy_pass@your-server-ip:6432/sissy_school_main?schema=public"
npm start
```

---

## 📈 Monitor PgBouncer

On the remote server:

```
PGPASSWORD=sissy_pass psql -h 127.0.0.1 -p 6432 -U sissy_admin pgbouncer
```

Then run queries like:

```
SHOW clients;
SHOW databases;
SHOW pools;
SHOW stats;
```

---

✅ You now have a robust PostgreSQL + PgBouncer setup with local Prisma.
