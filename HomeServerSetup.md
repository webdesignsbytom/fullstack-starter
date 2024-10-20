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

1. `sudo apt install fail2ban` secure from dodgy ip
