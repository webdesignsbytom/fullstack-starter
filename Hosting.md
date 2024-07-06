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
6. `apt-get install nginx`
7. `npm install pm2@latest -g` to keep server alive
8. `git clone 'your repo link'`
9. cd into and `npm ci`
10. `pm2 start src/server.js --name server`
11. `nano /etc/nginx/sites-available/default`

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
14. `systemctl status nginx`
15. Go to your server `http://3.9.178.161` and it will have your node home page
16. `apt install certbot python3-certbot-nginx`
17. `certbot --nginx -d api.myecoapp.org`
18. `cat /etc/nginx/sites-enabled/default`

Custom api folder

1. `rm -rf /etc/nginx/sites-available/default && rm -rf /etc/nginx/sites-enabled/default`
2. `ln -s /etc/nginx/sites-available/api.myecoapp.org /etc/nginx/sites-enabled/`
3. `service nginx restart`
4. `systemctl status nginx`
5. `sudo certbot --nginx -d api.myecoapp.org`

`sudo apt install ffmpeg`
`ffmpeg -version`


### Pm2

`pm2 restart app_name`
`pm2 reload app_name`
`pm2 stop app_name`
`pm2 delete app_name`
`pm2 start cat_app_server/src/server.js -n api` start with name
`pm2 startup` restart if crashed generates a code to set 
`sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u ubuntu --hp /home/ubuntu` example of code generated