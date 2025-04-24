# Server Set up

Used for BTS1
API server and postgres database

## Rules

- User: tomadmin
- postgres port: 4567

## Install and set up process

1. `apt-get update`
2. `apt-get upgrade`
   1. `apt-get update && upgrade -y`
3. change root user password `sudo passwd`
4. set up a non root user - principle of least priviledges `adduser tom`
5. set password different to the root user
6. add the user to the sudo group `usermod -aG sudo tom` - check with `groups tom`.
7. Log in as tom
8. Disable root login `sudo nano /etc/ssh/sshd_config` and set `PermitRootLogin no`
9. install fail2ban `sudo apt install fail2ban` `sudo systemctl start fail2ban` `sudo systemctl enable fail2ban`
10. UFW setup
11. `sudo ufw allow ssh` allow ssh
12. `sudo ufw enable`
13. `sudo ufw status`

## Postgres setup

1. Install postgres `sudo apt install postgresql postgresql-contrib`
2. Open Psql `sudo -i -u postgres`
3. `psql`
4. Edit root password `ALTER USER postgres WITH PASSWORD 'YourPasswordHere';`
5. Create user `CREATE USER tomadmin WITH PASSWORD 'YourPasswordHere';`
6. Give priveledges `ALTER USER tomadmin WITH SUPERUSER;`
7. Create shadow db .. `CREATE DATABASE shadow_db OWNER tomadmin;`
8. Add priviledges `GRANT ALL PRIVILEGES ON DATABASE shadow_db TO tomadmin;`
9. Create dummy server db .. `CREATE DATABASE dummy_db OWNER tomadmin;`
10. Add priviledges `GRANT ALL PRIVILEGES ON DATABASE dummy_db TO tomadmin;`
11. Configure potgres `sudo nano /etc/postgresql/16/main/postgresql.conf`
12. Add or uncomment `listen_addresses = '*'`
13. Go to `sudo nano /etc/postgresql/16/main/pg_hba.conf`
14. Allow access from local network `host    all             all             191.168.1.0/14           md5`
15. We adjusted the pg_hba.conf file to allow remote connections `host    dummy_db    tomadmin    0.0.0.0/0    md5`
16. Reset postgres `sudo systemctl restart postgresql`
17. Open firewall `sudo ufw allow 5431/tcp`
18. Ensure all permissions are granted
19. `GRANT CONNECT, CREATE ON DATABASE shadow_db TO tomadmin;`
20. `GRANT USAGE, CREATE ON SCHEMA public TO tomadmin;`
21. `GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO tomadmin;`
22. `GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO tomadmin;`
23. `sudo ufw status` allow all on postgres port
24. `sudo ufw status verbose` check
25. add postgres backups cronjob `crontab -l`
26. `0 2 * * 0 pg_dump -U tomadmin dummy_db > /home/tom/db_backups/dummy_db_$(date +\%F).sql` weekly

## Updates

1. Allow all postgres access for pg_hba.conf

## Create new database

`CREATE DATABASE miss_victoria_doll OWNER tomadmin;`

-- Grant access to the database
`GRANT CONNECT, CREATE ON DATABASE miss_victoria_doll TO tomadmin;`

-- Grant privileges on the public schema
`GRANT USAGE, CREATE ON SCHEMA public TO tomadmin;`

-- Grant privileges on existing tables and sequences
`GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO tomadmin;`
`GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO tomadmin;`

-- Optional: Grant privileges on future tables and sequences
`ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL PRIVILEGES ON TABLES TO tomadmin;`
`ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL PRIVILEGES ON SEQUENCES TO tomadmin;`

-- Connection strings

- DATABASE_URL="postgresql://name:yourpassword@192.168.1.227:5432/shadow_db?schema=public"
- postgres://<username>:<password>@<hostname>/<dbname>?schema=<schema>
