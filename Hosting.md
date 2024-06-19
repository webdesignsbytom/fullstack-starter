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

1. `sudo apt-get update`
2. `sudo apt-get upgrade`
3. this line installs curl on the Ubuntu server `sudo apt-get install curl`
4. `sudo apt install nodejs` // this line installs node
5. `sudo apt install npm`
6. `sudo npm install pm2@latest -g` to keep server alive
7. `git clone 'your repo link'`
8. cd into and `npm ci`
9. `pm2 start src/server.js --name server`
10. In AWS go to security for you instance and edit the inbound rules
11. Add a custom tcp with your port i.e. 4001
12. Anywhere ip4
13. Go to your server `http://3.9.178.161:4001/`
