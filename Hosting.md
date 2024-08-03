# Hosting

- [Fullstack Starter](#fullstack-starter)
  - [Table of contents](#table-of-contents)

## FRONTEND

## Where to host

Inmotion

## Hosting platforms

cpanel

## Hosting software

FTP manager - uploading files directly to the host server

## PreLaunch Steps

1. Create a sitemap.xml
2. Create a robots.txt file
3. Create a .htaccess file
4. Create a license file
5. Update meta data in index.html
6. Update the site manifest

## Factors

1. Content Security Policy CSP

Used to prevent Cross Site Scripting attacks XSS

## Build

- `npm run build`

## BACKEND

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
4. `apt install nodejs` // this line installs node
5. `apt install npm`
6. `apt-get install nginx`
7. `npm install pm2@latest -g` to keep server alive
8. `git clone 'your repo link'`
9. cd into and `npm ci`
10. `nano /etc/nginx/sites-available/api.cat-app.app`
11. `ln -s /etc/nginx/sites-available/api.cat-app.app /etc/nginx/sites-enabled/`

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

12. `nginx -t` check syntax
13. `service nginx restart`
14. `systemctl restart nginx`
15. `systemctl status nginx`
16. Go to your server `http://3.9.178.161` and it will have your node home page
17. `apt install certbot python3-certbot-nginx`
18. `certbot --nginx -d api.myecoapp.org`
19. `cat /etc/nginx/sites-enabled/default`
20. `pm2 start src/server.js --name server`

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

### PostgreSQL

`sudo apt install postgresql postgresql-contrib`
`sudo systemctl start postgresql`
`sudo systemctl enable postgresql`
`sudo -i -u postgres`
`psql`

CREATE USER myuser WITH PASSWORD 'mypassword';

CREATE DATABASE mydatabase;
GRANT ALL PRIVILEGES ON DATABASE mydatabase TO myuser;

## Nginx

Nginx is a reverse proxy that can communicate with the system and the outside world through por

`-s` to use a nginx command
`nginx -s start`

## Fancy text

`apt-get install -y figlet`
Edit the .bashrc file and add: `figlet serverpi` replace serverpi with text
`source ~/.bashrc`

## Load Balancing

Servers can be load balanced with nginx using several methods such as
1. round robin

With Nginx you must define a group of servers with the `upstream` directive placed in the http context

## Double hosting servers

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
3. `docker run -d --name moncards-instance1 -p 5001:5000 techdesigntavistock/trading-card-game:latest`
    `docker run -d --name moncards-instance2 -p 5002:5000 techdesigntavistock/trading-card-game:latest`
    `docker run -d --name moncards-instance3 -p 5003:5000 techdesigntavistock/trading-card-game:latest`

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




### JUNK

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




  GNU nano 7.2                           /etc/nginx/sites-available/docker.webdesignsbytom.com.conf
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




