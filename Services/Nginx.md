# Nginx

Server Proxy

## Install

`apt-get install nginx`

## Commands

`nginx -t` check syntax
`service nginx restart`
`systemctl restart nginx`
`systemctl status nginx`

## Hosting

`apt-get install nginx`
`npm install pm2@latest -g` to keep server alive
`git clone 'your repo link'`
cd into and `npm ci`

`nano /etc/nginx/sites-available/api.cat-app.app`
Delete the default file in sites-available
`ln -s /etc/nginx/sites-available/api.cat-app.app /etc/nginx/sites-enabled/`

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

`apt install certbot python3-certbot-nginx`
`certbot --nginx -d api.myecoapp.org`
