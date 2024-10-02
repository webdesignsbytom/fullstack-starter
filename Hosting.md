# Hosting website and server

## Table of contents

- [Hosting website and server](#hosting-website-and-server)
  - [Table of contents](#table-of-contents)
  - [FRONTEND HOSTING](#frontend-hosting)
    - [Where to host](#where-to-host)
    - [Hosting platforms](#hosting-platforms)
    - [Hosting software](#hosting-software)
    - [Records](#records)
    - [Sub Domains](#sub-domains)
    - [PreLaunch Steps](#prelaunch-steps)
    - [Factors](#factors)
    - [Build](#build)
    - [Blazor Hosting](#blazor-hosting)
    - [CDN](#cdn)
    - [Cloudflare](#cloudflare)
  - [BACKEND HOSTING](#backend-hosting)
    - [Create instance](#create-instance)
    - [Set up](#set-up)
    - [Logs](#logs)
    - [Pm2](#pm2)
    - [Security](#security)
    - [PostgreSQL](#postgresql)
    - [Nginx](#nginx)
    - [Fancy text](#fancy-text)
    - [Load Balancing](#load-balancing)
    - [Double hosting servers](#double-hosting-servers)
  - [Docker hosting](#docker-hosting)
  - [JUNK](#junk)
  - [Setting up a server](#setting-up-a-server)
    - [Steps](#steps)

## FRONTEND HOSTING

### Where to host

- Inmotion
- Kyrstal

### Hosting platforms

cpanel - cpanel is an appache server UI
Apache handles the HTTP requests
Runs on a linux machines

- Runs using Perl
  Perl is a high perfomance, cross platform text processing.
  The code is compiled at run time.
  Its used for automated scripting tasks.
  It was created to dynamic web pages simuilar to python and php.

### Hosting software

FTP manager - uploading files directly to the host server

### Records

- DNS - Domain name system record
  - A, MX, NS, CNAME
  - The A record links your IP to a Domain name
  - MX link domains to email addresses
  -
- NameServer - a physical server that stores the DNS records for a domain.
  - An NS record will usualy start as a subdomain ns2.dreamhost.com
  - A second nameserver is used for redudancy
- A Records
  - Maps a domain to an IP address
  - CNAME, maps domain name to other domain names
  - Can be used to create subdomains

* CloudFlare is where you give both your host and domain the same cloudflair NS records.

1. Visit a site
   - www.site.com is a A record pointing to 8.8.8.8
   - site.com is a A record pointing to 8.8.8.8
2. The sites NameServes Ns1. will point to where to find the A records

- CNAME - map domain names to other domain names
  - Also know as a canonnical record
  - Maps one domain name to another and must always be a name not an ip
  - Not great for subdomaining becuase it has to do two DNS lookups.
  - Create record and enter subdomain or full domain including sub

### Sub Domains

To create a sub domain:

1. Go to DNS settings
2. Create a New A record. Enter the subdomain name you want. For the IP value add the record for the web hosting IP address.

### PreLaunch Steps

1. Create a sitemap.xml
2. Create a robots.txt file
3. Create a .htaccess file
4. Create a license file
5. Update meta data in index.html
6. Update the site manifest

### Factors

1. Content Security Policy CSP

Used to prevent Cross Site Scripting attacks XSS

### Build

- `npm run build`

### Blazor Hosting

1. Create an FTP account on your host.
2. Download the config file.
3. Go to Visual Studio and click 'Publish' on your project.
4. Select a new profile and select FTP.
5. Add the following to the file
   - Server: Will the the host record - ftp.xxx.com
   - Site path: blank
   - username: username or email from ftp config 'user'
   - FTP passive mode: true
   - password: password

### CDN

Content Delivery Networks.
They host your website on world wide servers. Providing a local server for each country to download the website from.
Reducing latency for distant servers around the world.
They also provide security for DDoS attacks.

### Cloudflare

Traffic will run though cloudflare and check it for dangers and cache files for quick access.

Steps:

1. Host a site as normal
2. Connect a domain to CloudFlare
   1. Enter details into cloudflare
   2. Update nameservers on domain provider
3. Ensure that the a cetifcate points to the hosting providers ip address for your site

`A - webdesignsbytom.com - 144.0.0.0 - Proxied - Auto` Point to host and have a cloud saying proxied.

These redirect rules in .htaccess will confilt with cloudflare and cause too many redirects.
Comment them out or remove them.

<!-- # # Redirect to HTTPS
# RewriteEngine On
# RewriteCond %{HTTPS} !on
# RewriteCond %{REQUEST_URI} !^/[0-9]+\..+\.cpaneldcv$
# RewriteCond %{REQUEST_URI} !^/\.well-known/pki-validation/[A-F0-9]{32}\.txt(?:\ Comodo\ DCV)?$
# RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301] -->

- Argo Smart Routing 

This can speed up loading times and bandwidth costs.

- Basic Load Balancing
Allows you to load balance & failover across up to 2 endpoints from 1 geographic region. Cloudflare will automatically check the health of your servers every 60 seconds.

## BACKEND HOSTING

1. AWS

### Create instance

1. Create a server instance. Usually ubuntu
2. Generate a key pair
3. chmod 400 "keypair.pem"
4. ssh -i "keyapir.pem" ubuntu@ec2-3-9-178-161.eu-west-2.compute.amazonaws.com // add ip

### Set up

1. `sudo su`
2. `apt-get update`
3. `apt-get upgrade`
   1. `apt-get update && upgrade -y`
4. change root user password `sudo passwd`
5. set up a non root user - principle of least priviledges `adduser tom`
6. set password different to the root user
7. add the user to the sudo group `usermod -aG sudo tom` - check with `groups tom` 
8. Generate an ssh key on your main machine not server
9. `apt install nodejs` // this line installs node
10. `apt install npm`
11. `apt-get install nginx`
12. `npm install pm2@latest -g` to keep server alive
13. `git clone 'your repo link'`
14. cd into and `npm ci`
15. `nano /etc/nginx/sites-available/api.cat-app.app`
16. `ln -s /etc/nginx/sites-available/api.cat-app.app /etc/nginx/sites-enabled/`

    ```md
    server {
    listen 80;
    server_name <name>;

        location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        }

    }
    ```

17. `nginx -t` check syntax
18. `service nginx restart`
19. `systemctl restart nginx`
20. `systemctl status nginx`
21. Go to your server `http://3.9.178.161` and it will have your node home page
22. `apt install certbot python3-certbot-nginx`
23. `certbot --nginx -d api.myecoapp.org`
24. `cat /etc/nginx/sites-enabled/default`
25. `pm2 start src/server.js --name server`

Custom api folder

1. `rm -rf /etc/nginx/sites-available/default && rm -rf /etc/nginx/sites-enabled/default`
2. `ln -s /etc/nginx/sites-available/api.cat-app.app /etc/nginx/sites-enabled/`
3. `service nginx restart`
4. `systemctl status nginx`
5. `sudo certbot --nginx -d api.cat-app.app`
6. `sudo certbot renew --dry-run` verify renewal process

`sudo apt install ffmpeg`
`ffmpeg -version`

### Logs

`sudo tail -f /var/log/nginx/access.log`
`sudo tail -f /var/log/nginx/error.log`

### Pm2

`pm2 restart app_name`
`pm2 reload app_name`
`pm2 stop app_name`
`pm2 delete app_name`
`pm2 start cat_app_server/src/server.js -n api` start with name
`pm2 startup` restart if crashed generates a code to set
`sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u ubuntu --hp /home/ubuntu` example of code generated

### Security

DDOS protection
`sudo apt install fail2ban -y`
`sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local` create local config
`sudo systemctl restart fail2ban` reset

```sh
bantime  = 600
findtime  = 600
maxretry = 5
```

```sh
[sshd]
enabled = true
port    = ssh
filter  = sshd
logpath = /var/log/auth.log
maxretry = 5
```

### PostgreSQL

`sudo apt install postgresql postgresql-contrib`
`sudo systemctl start postgresql`
`sudo systemctl enable postgresql`
`sudo -i -u postgres`
`psql`

CREATE USER myuser WITH PASSWORD 'mypassword';

CREATE DATABASE mydatabase;
GRANT ALL PRIVILEGES ON DATABASE mydatabase TO myuser;

### Nginx

Nginx is a reverse proxy that can communicate with the system and the outside world through por

`-s` to use a nginx command
`nginx -s start`

### Fancy text

`apt-get install -y figlet`
Edit the .bashrc file and add: `figlet serverpi` replace serverpi with text
`source ~/.bashrc`

### Load Balancing

Servers can be load balanced with nginx using several methods such as

1. round robin

With Nginx you must define a group of servers with the `upstream` directive placed in the http context

### Double hosting servers

1. Normal set up
2. Cloned streaming app on local:3000 api.webdesignsbytom.com
3. Cloned ec2-deploy local:4000 for tom.cat-app.app

```md
server {
listen 80;
server_name api.webdesignsbytom.com www.api.webdesignsbytom.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    location /be1/ {
        rewrite ^/be1/(.*)$ /$1 break;
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

}

server {
listen 80;
server_name tom.cat-app.app www.tom.cat-app.app;

    location / {
        proxy_pass http://localhost:4000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    location /be2/ {
        rewrite ^/be2/(.*)$ /$1 break;
        proxy_pass http://localhost:4000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

}
```

4. created this file

## Docker hosting

1. `apt get install docker.io`
2. `docker pull techdesigntavistock/trading-card-game`
3. `docker run -d --name moncards-instance1 --restart unless-stopped -p 5001:5000 techdesigntavistock/trading-card-game:latest`
   `docker run -d --name moncards-instance2 --restart unless-stopped -p 5002:5000 techdesigntavistock/trading-card-game:latest`
   `docker run -d --name moncards-instance3 --restart unless-stopped -p 5003:5000 techdesigntavistock/trading-card-game:latest`

```md
upstream myproject {
server localhost:5001;
server localhost:5002;
server localhost:5003;
}

server {
listen 80;

    server_name docker.webdesignsbytom.com;

    location / {
        proxy_pass http://myproject;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

}
```

`sudo ln -s /etc/nginx/sites-available/docker.webdesignsbytom.com.conf /etc/nginx/sites-enabled/`
`systemctl restart nginx`

## JUNK

server {
server_name api.webdesignsbytom.com www.api.webdesignsbytom.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    location /be1/ {
        rewrite ^/be1/(.*)$ /$1 break;
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/api.webdesignsbytom.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/api.webdesignsbytom.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}
server {
if ($host = api.webdesignsbytom.com) {
        return 301 https://$host$request_uri;
} # managed by Certbot

    listen 80;
    server_name api.webdesignsbytom.com www.api.webdesignsbytom.com;
    return 404; # managed by Certbot

}

GNU nano 7.2 /etc/nginx/sites-available/docker.webdesignsbytom.com.conf
upstream myproject {
server localhost:5001;
server localhost:5002;
server localhost:5003;
}

server {
listen 80;

    server_name docker.webdesignsbytom.com;

    location / {
        proxy_pass http://myproject;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

}


## Setting up a server

Laptop using docker for the code

### Steps

for testing im installing `sudo apt install timeshift` for a restore backup
`sudo timeshift --create`
`sudo timeshift --restore`

1. install headless ubunutu on the laptop
2. update and upgrade the system
3. install vim, docker, docker-compose, git and bash
    - `sudo apt install vim`
    - `sudo apt-get install docker.io` + `sudo systemctl enable docker` - test `sudo docker run hello-world`
    - `sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose` 
    - `sudo chmod +x /usr/local/bin/docker-compose` test - `docker-compose --version`
    - `sudo apt install git`


root@computer:/home/tom# sudo chown tom:tom CatApp/
sudo chown -R tom:tom /home/tom/PERN-STACK-DEPLOYMENT
