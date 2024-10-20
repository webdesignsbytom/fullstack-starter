
# PostgreSQL Setup and Configuration for Remote Access on Ubuntu

This guide provides step-by-step instructions to set up PostgreSQL on an Ubuntu server and configure it to allow connections from other devices on your local network. It also includes commands to create users, databases, and configure firewall and network settings for access.

## Prerequisites
- An Ubuntu server with `sudo` privileges.
- Access to your local network where you want PostgreSQL to be accessible.
- Basic knowledge of PostgreSQL and networking.

## 1. Install PostgreSQL
To install PostgreSQL and its necessary components, run the following commands:
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
```

This will install PostgreSQL and additional useful tools.

## 2. Access the PostgreSQL Shell
Switch to the `postgres` user and access the PostgreSQL shell:
```bash
sudo -i -u postgres
psql
```

## 3. Set Passwords and Create Users
Once inside the PostgreSQL shell, you can change the `postgres` user password and create new users.

- Change the password for the `postgres` user:
  ```sql
  ALTER USER postgres WITH PASSWORD 'YourPasswordHere';
  ```

- Create a new user with a password (e.g., `tomadmin`):
  ```sql
  CREATE USER tomadmin WITH PASSWORD 'YourPasswordHere';
  ```

- Grant the user `SUPERUSER` privileges:
  ```sql
  ALTER USER tomadmin WITH SUPERUSER;
  ```

- Verify users and their roles:
  ```sql
  \du
  ```

## 4. Create a Database
Create a new database and assign ownership to the new user:

```sql
CREATE DATABASE shadow_db OWNER tomadmin;
GRANT ALL PRIVILEGES ON DATABASE shadow_db TO tomadmin;
```

## 5. Configure PostgreSQL for Remote Access

### Edit `postgresql.conf`
You need to configure PostgreSQL to listen for connections on all IP addresses (not just `localhost`). Edit the `postgresql.conf` file:
```bash
sudo nano /etc/postgresql/16/main/postgresql.conf
```

Find the line:
```
#listen_addresses = 'localhost'
```
Uncomment it and change it to:
```
listen_addresses = '*'
```

Save the file and exit.

### Edit `pg_hba.conf`
Now, configure PostgreSQL to allow connections from your local network. Edit the `pg_hba.conf` file:
```bash
sudo nano /etc/postgresql/16/main/pg_hba.conf
```

Add the following line to allow access from your local network (adjust the `192.168.1.0/24` to match your network):
```
host    all             all             192.168.1.0/24           md5
```

Save and exit the file.

### Restart PostgreSQL
To apply the changes, restart the PostgreSQL service:
```bash
sudo systemctl restart postgresql
```

## 6. Configure Firewall (UFW)

Allow traffic on port 5432 (the default PostgreSQL port) using UFW:
```bash
sudo ufw allow 5432/tcp
```

Verify UFW status to ensure the rule is applied:
```bash
sudo ufw status
```

You should see something like this:
```
5432/tcp                   ALLOW       Anywhere
5432/tcp (v6)              ALLOW       Anywhere (v6)
```

## 7. Verify PostgreSQL is Listening on All Interfaces

To confirm that PostgreSQL is listening on the correct interfaces, use the `netstat` command:
```bash
sudo apt install net-tools
sudo netstat -plnt | grep 5432
```

You should see output similar to this:
```
tcp        0      0 0.0.0.0:5432            0.0.0.0:*               LISTEN      -
tcp6       0      0 :::5432                 :::*                    LISTEN      -
```

This confirms that PostgreSQL is listening on both IPv4 and IPv6 interfaces.

## 8. Test Remote Connection

From a remote machine on your local network, use `psql` or a database client (such as pgAdmin or a Prisma connection string) to connect to your PostgreSQL server:
```bash
psql -h 192.168.1.227 -U name -d shadow_db
```

Ensure that your connection string in applications like Node.js or Prisma is configured correctly:
```
DATABASE_URL="postgresql://name:yourpassword@192.168.1.227:5432/shadow_db"
```

## Conclusion

By following these steps, you've successfully installed PostgreSQL, created a user, and configured the database server to accept remote connections from other devices on your local network.
