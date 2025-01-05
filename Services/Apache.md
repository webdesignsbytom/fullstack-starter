# Apache

Apache2 is a webserver

## Install

`sudo apt install apache2`
`sudo ufw allow 'Apache'`

you can now follow your ip to the Apache default page

## Commands

sudo systemctl stop apache2

sudo systemctl start apache2

sudo systemctl restart apache2

sudo systemctl reload apache2

sudo systemctl disable apache2

sudo systemctl enable apache2


## Serve multiple sites

sudo mkdir /var/www/your_domain

sudo chown -R $USER:$USER /var/www/your_domain