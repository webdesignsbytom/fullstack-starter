# Home server set up

## Hardware

1. Connected I2MM ethernet
2. Connected Device ethernet
3. Power up

## BIOS Setup

1. F1 for BIOS
2. Device settings and set the ip to static
3. Check drives are connected
4. Install from USB linux server
5. Install linux as usual

## Software Setup

1. apt update
2. apt upgrade
3. apt install figlet for fancy text intro
4. installed postgres and set up user
5. Checked the ports
6. `alias lsports='lsof -i -P -n'` added to bashrc so `lsports` list all ports
7. Installed minio and created a user account set as service on startup
8. Installed docker to run files without install node js or others
9. Installed node 22.8 and nvm
10. Installed netstat `sudo apt install net-tools`
11. Installed pm2
12. Installed DummyServer and ran exposed 4000 on ufw
13. Can connect to dummy server database but am getting errors
14. Set my UWF firewall to

```sh
To                         Action      From
--                         ------      ----
22/tcp                     ALLOW       Anywhere
80/tcp                     ALLOW       Anywhere
443                        ALLOW       Anywhere
5432                       ALLOW       192.168.1.0/24
9000                       ALLOW       192.168.1.0/24
4000                       ALLOW       192.168.1.0/24
4001                       ALLOW       192.168.1.0/24
22/tcp (v6)                ALLOW       Anywhere (v6)
80/tcp (v6)                ALLOW       Anywhere (v6)
443 (v6)                   ALLOW       Anywhere (v6)
```

15. Added a tunnel on buckets
16. Installed mc
17.

## Notes

1. Docker doesnt connect to localhost

## Potentially install

1.  `sudo apt install fail2ban` secure from dodgy ip

2.  Harden Security:

    SSH Security:
    Disable root login via SSH:

    `sudo nano /etc/ssh/sshd_config`

    Set PermitRootLogin no.
    Use key-based authentication for SSH instead of passwords.
    Change the default SSH port from 22 to something less common.
    Install and configure fail2ban to protect against brute-force attacks:

    `sudo apt install fail2ban`

    Firewall Tweaks:

    You already have ufw set up. Make sure you've allowed only essential ports:

    ```sh
    sudo ufw allow ssh
    sudo ufw allow 80/tcp
    sudo ufw allow 443/tcp
    sudo ufw enable
    ```

    Automatic Security Updates:
    Install and configure unattended upgrades for automatic security patches:

    `sudo apt install unattended-upgrades`
    `sudo dpkg-reconfigure --priority=low unattended-upgrades`

3.  Backups:

    Database Backup:
    For PostgreSQL, set up regular backups using tools like pg_dump or a more advanced solution like pgBackRest.

    MinIO Buckets Backup:
    Set up a backup strategy for MinIO, especially if you're using it for production storage.
    Consider tools like rclone to sync MinIO data to a remote location (e.g., AWS S3 or another MinIO instance).

    Server Backup:
    Create snapshots of the server using rsync or an external backup service.
    Consider implementing a disaster recovery plan for the entire server, especially if it's mission-critical.

4.  Container Management (Docker):

    Docker Compose:
    Since you have Docker, consider installing Docker Compose if you plan to manage multi-container applications:

    `sudo apt install docker-compose`

        Create a docker-compose.yml file to manage your services easily (e.g., PostgreSQL, Node.js, MinIO, etc.).

    Monitoring Docker:
    Set up Docker monitoring using cAdvisor or a more comprehensive tool like Prometheus with Grafana for visualizing your container metrics.

5.  Service Configuration:

    MinIO:
    Make sure MinIO is secured with access keys and that it uses HTTPS. If you haven't configured it for HTTPS yet, generate SSL certificates using Let's Encrypt or another provider.
    You can use Nginx or Caddy to proxy MinIO behind an SSL-enabled reverse proxy.

    PostgreSQL:
    Configure PostgreSQL for performance and security:
    Tune PostgreSQL settings (e.g., work_mem, shared_buffers, maintenance_work_mem) based on your server specs and workload.
    Secure PostgreSQL with strong passwords and consider enabling SSL connections to the database.

    Node.js:
    If you're planning to host Node.js applications, consider setting up a process manager like PM2 to handle app restarts, logging, and monitoring:

    `npm install pm2 -g`

6.  Monitoring & Logging:

    System Monitoring:
    Install monitoring tools like htop, nmon, or glances for real-time system metrics.
    Set up long-term monitoring with Netdata, Zabbix, or Prometheus to track resource usage over time.

    Centralized Logging:
    Consider setting up centralized logging for all services using a stack like ELK (Elasticsearch, Logstash, Kibana) or using a more lightweight tool like Graylog or Fluentd.

7.  SSL and HTTPS Setup:

    If you're hosting services (e.g., websites, APIs), set up SSL certificates to secure communications.
    You can use Let's Encrypt with Certbot to generate free SSL certificates:

`sudo apt install certbot python3-certbot-nginx`
`sudo certbot --nginx`

Ensure you have automatic renewal set up:

        `sudo systemctl status certbot.timer`

1.  Automation & CI/CD:

    If you plan on doing frequent deployments, set up a CI/CD pipeline using GitHub Actions, GitLab CI, Jenkins, or a similar tool to automate builds, tests, and deployments to your server.

2.  Resource Optimization:

    Use tools like tuned to automatically apply performance optimizations tailored to your hardware.
    Install sysstat to track performance metrics:

`sudo apt install sysstat`

If you run a lot of Docker containers, consider limiting their resources using CPU and memory constraints in your Docker Compose files.

1.  Web Server Configuration:

    Nginx or Apache:
    Install and configure Nginx or Apache as a reverse proxy for your services. Nginx is often preferred for performance.

```sh
sudo apt install nginx
```

10. Service Management:
    Use systemd to manage services like Node.js, PostgreSQL, and MinIO to ensure they restart on failure and after reboots:

```sh
sudo systemctl enable <service>
sudo systemctl start <service>
```

Optional: Explore Cloud-Native Features

If you're interested in cloud-native practices, you could:

    Kubernetes: If you're hosting a large number of containers, you might consider moving to Kubernetes for container orchestration. However, this requires more setup and might be overkill unless you're running many services.
    Service Mesh: Consider using something like Traefik or Istio if you're running microservices and need advanced routing and monitoring.

```

```
