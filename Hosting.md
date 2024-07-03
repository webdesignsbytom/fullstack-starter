# Hosting

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
6. `npm install pm2@latest -g` to keep server alive
7. `git clone 'your repo link'`
8. cd into and `npm ci`
9. `pm2 start src/server.js --name server`
10. `nano /etc/nginx/sites-available/default`

    ```md
    server {
        listen 80;
        server_name localhost;

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

11. `nginx -t` check syntax
12. `service nginx restart`
13. `systemctl status nginx`
14. Go to your server `http://3.9.178.161` and it will have your node home page
15. `apt install certbot python3-certbot-nginx`
16. `certbot --nginx -d api.myecoapp.org`


`pm2 restart app_name`
`pm2 reload app_name`
`pm2 stop app_name`
`pm2 delete app_name`