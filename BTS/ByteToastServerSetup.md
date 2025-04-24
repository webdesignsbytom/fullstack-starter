# Server Set up

Used for BTS1
API server and postgres database

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
9. Install postgres `sudo apt install postgresql postgresql-contrib`
10. Open Psql `sudo -i -u postgres`
11. `psql`
12. Edit root password `ALTER USER postgres WITH PASSWORD 'YourPasswordHere';`
13. Create user `CREATE USER tomadmin WITH PASSWORD 'YourPasswordHere';`
14. Give priveledges `ALTER USER tomadmin WITH SUPERUSER;`
15. Create shadow db .. `CREATE DATABASE shadow_db OWNER tomadmin;`
16. Add priviledges `GRANT ALL PRIVILEGES ON DATABASE shadow_db TO tomadmin;`
17. Create dummy server db .. `CREATE DATABASE dummy_db OWNER tomadmin;`
18. Add priviledges `GRANT ALL PRIVILEGES ON DATABASE dummy_db TO tomadmin;`
19. Configure potgres `sudo nano /etc/postgresql/16/main/postgresql.conf`
20. Add or uncomment `listen_addresses = '*'`
21. Go to `sudo nano /etc/postgresql/16/main/pg_hba.conf`
22. Allow access from local network `host    all             all             192.168.1.0/24           md5`
23. We adjusted the pg_hba.conf file to allow remote connections `host    dummy_db    tomadmin    0.0.0.0/0    md5`
24. Reset postgres `sudo systemctl restart postgresql`
25. Open firewall `sudo ufw allow 5432/tcp`
26. Ensure all permissions are granted 
27. `GRANT CONNECT, CREATE ON DATABASE shadow_db TO tomadmin;`
28. `GRANT USAGE, CREATE ON SCHEMA public TO tomadmin;`
29. `GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO tomadmin;`
30. `GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO tomadmin;`
31. `sudo ufw status` allow all on postgres port
32. `sudo ufw allow ssh` allow ssh
33. `sudo ufw enable`
34. `sudo ufw status verbose` check


1. Change postgres port


## Create new database

-- Grant access to the database
`GRANT CONNECT, CREATE ON DATABASE missjenny_db TO tomadmin;`

-- Grant privileges on the public schema
`GRANT USAGE, CREATE ON SCHEMA public TO tomadmin;`

-- Grant privileges on existing tables and sequences
`GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO tomadmin;`
`GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO tomadmin;`

-- Optional: Grant privileges on future tables and sequences
`ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL PRIVILEGES ON TABLES TO tomadmin;`
`ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL PRIVILEGES ON SEQUENCES TO tomadmin;`