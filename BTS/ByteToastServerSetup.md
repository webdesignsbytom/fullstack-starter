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
23. Reset postgres `sudo systemctl restart postgresql`
24. Open firewall `sudo ufw allow 5432/tcp`
25. `sudo ufw status` allow all on postgres port


1. Change postgres port