# Rocket.chat

## Image setup
1. Create a VM running rocket.chat 
2. http://<droplet-ip>:3000 


## Linux
1. Create a VM running rocket.chat install with sudo snap install rocketchat-server
2. Create an A record subdomain to the VM
3. Install nginx to handle http
`sudo apt update`
`sudo apt install nginx -y`
1. Create a new site config: `sudo nano /etc/nginx/sites-available/rocketchat`
2. 
server {
    listen 80;
    server_name chat.bytetoast-studio.co.uk;

    # Redirect HTTP to HTTPS
    return 301 https://$host$request_uri;
}
server {
    listen 443 ssl http2;
    server_name chat.bytetoast-studio.co.uk;

    ssl_certificate /etc/letsencrypt/live/chat.bytetoast-studio.co.uk/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/chat.bytetoast-studio.co.uk/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    location / {
        proxy_pass http://localhost:3000/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forward-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forward-Proto https;
        proxy_set_header X-Nginx-Proxy true;
        proxy_redirect off;
    }
}

1. Link the config to enable it: `sudo ln -s /etc/nginx/sites-available/rocketchat /etc/nginx/sites-enabled/rocketchat`
2. Delete default config to avoid conflicts: `sudo rm /etc/nginx/sites-enabled/default`
3. sudo nginx -t
4. sudo systemctl reload nginx

