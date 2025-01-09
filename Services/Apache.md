# Apache

Apache2 is a webserver

## Install

`sudo apt install apache2`
`sudo apt install apache2-doc`
`sudo apt install apache2-utils`

`sudo apt install apache2 apache2-doc apache2-utils` quick install

Create a folder for your site in /var/www or var/www/html
Create a config file for you site in /etc/apache2/sites-available/
Add DocumentRoot /var/www/NAME
Add ServerName example.com
Activate the config sudo a2ensite example.com

```py
<VirtualHost *:80>
        # The ServerName directive sets the request scheme, hostname and port that
        # the server uses to identify itself. This is used when creating
        # redirection URLs. In the context of virtual hosts, the ServerName
        # specifies what hostname must appear in the request's Host: header to
        # match this virtual host. For the default virtual host (this file) this
        # value is not decisive as it is used as a last resort host regardless.
        # However, you must set it for any further virtual host explicitly.
        #ServerName www.example.com

        ServerAdmin webmaster@localhost
        DocumentRoot /var/www/cat-app.app
        ServerName cat-app.app
        # Available loglevels: trace8, ..., trace1, debug, info, notice, warn,
        # error, crit, alert, emerg.
        # It is also possible to configure the loglevel for particular
        # modules, e.g.
        #LogLevel info ssl:warn

        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined

        # For most configuration files from conf-available/, which are
        # enabled or disabled at a global level, it is possible to
        # include a line for only one particular virtual host. For example the
        # following line enables the CGI configuration for this host only
        # after it has been globally disabled with "a2disconf".
        #Include conf-available/serve-cgi-bin.conf
</VirtualHost>

```

## Firewall

`sudo ufw allow 'Apache'`

you can now follow your ip to the Apache default page

## Commands

`sudo systemctl stop apache2`
`sudo systemctl start apache2`
`sudo systemctl restart apache2`
`sudo systemctl reload apache2`
`sudo systemctl disable apache2`
`sudo systemctl enable apache2`

`sudo a2ensite 000-default.conf` enable default connection
`sudo cp -r /etc/apache2 /etc/apache2.bak` backup apache
`sudo tail -f /var/log/apache2/mynewdomain_error.log` check logs

## Hosting

`sudo mkdir -p /var/www/html/mynewdomain.com` create the folders with -p if a dir doesnt exist
`sudo nano /etc/apache2/sites-available/mynewdomain.com.conf` create a config file

## Serve multiple sites

`sudo mkdir /var/www/your_domain`
`sudo chown -R $USER:$USER /var/www/your_domain`

```md
<VirtualHost _:80> 
# This defines a Virtual Host that listens on port 80 (HTTP). # The '_' means it applies to all network interfaces of the server.

    ServerName mynewdomain.com
    # The primary domain name for this virtual host. Apache uses this
    # to match incoming requests to this configuration.

    ServerAlias www.mynewdomain.com
    # Additional domain names or subdomains that should point to this
    # virtual host. For example, 'www.mynewdomain.com' will resolve here.

    DocumentRoot /var/www/html/mynewdomain.com
    # The root directory of the website's files. This is where Apache looks
    # for the files to serve for requests to this domain.

    <Directory /var/www/html/mynewdomain.com>
        # Directory-specific settings for the DocumentRoot.

        AllowOverride All
        # Enables the use of .htaccess files in this directory, allowing
        # overrides to server configuration for things like URL rewrites.

        Require all granted
        # Allows access to this directory from all clients. This is necessary
        # for the site to be publicly accessible.
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/mynewdomain_error.log
    # Defines the file where errors specific to this virtual host are logged.
    # ${APACHE_LOG_DIR} typically resolves to /var/log/apache2/.

    CustomLog ${APACHE_LOG_DIR}/mynewdomain_access.log combined
    # Defines the file for logging all access requests to this virtual host.
    # The "combined" format includes detailed information such as client IP,
    # HTTP status codes, and user agents.

</VirtualHost>
```

`sudo a2ensite mynewdomain.com.conf` enable site
`sudo systemctl reload apache2` reload
`curl -I http://mynewdomain.com` test

![alt text](image.png)

## Config code

1. <VirtualHost \*:80>

   This line specifies that this configuration applies to HTTP requests (port 80).
   The _ means it will listen on all network interfaces.
   If you were configuring HTTPS, you'd use <VirtualHost _:443> instead.

2. ServerName mynewdomain.com

   This specifies the primary domain name for this virtual host.
   Requests matching this domain will be routed to this configuration.

3. ServerAlias www.mynewdomain.com

   This allows the virtual host to respond to additional domain names or subdomains.
   Here, it ensures www.mynewdomain.com is treated as equivalent to mynewdomain.com.

4. DocumentRoot /var/www/html/mynewdomain.com

   This defines the directory where your website files are stored.
   Apache serves files from this location when someone accesses the domain.

5. <Directory /var/www/html/mynewdomain.com>

   This block configures permissions and behavior for the directory specified in DocumentRoot.

a. AllowOverride All

    This enables .htaccess files in the directory to override global Apache settings.
    Commonly used for custom URL rewrites, authentication, or enabling modules like mod_rewrite.

b. Require all granted

    Grants access to all users.
    For stricter configurations, you might replace it with:
        Require local (restrict access to the server itself).
        Require ip xxx.xxx.xxx.xxx (allow specific IPs).

6. ErrorLog ${APACHE_LOG_DIR}/mynewdomain_error.log

   Specifies the file where Apache logs errors for this domain.
   The ${APACHE_LOG_DIR} variable typically resolves to /var/log/apache2/.

7. CustomLog ${APACHE_LOG_DIR}/mynewdomain_access.log combined

   Specifies the file where Apache logs access requests (e.g., IPs, URLs, timestamps).
   The combined format includes detailed request information such as:
   Remote host
   Request method
   Requested URL
   HTTP status code
   User agent string (browser, bot, etc.).

Example Workflow

    Client Request: When someone visits http://mynewdomain.com, Apache:
        Checks if a virtual host matches the ServerName or ServerAlias.
        If found, serves the files from the DocumentRoot.
    Error Handling: If something goes wrong (e.g., missing files), Apache logs it to mynewdomain_error.log.
    Access Logging: Every visit is recorded in mynewdomain_access.log for analysis.
