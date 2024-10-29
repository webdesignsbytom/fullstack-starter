# Electric Boogaloo

## Hardware

1. Connected I2MM ethernet
2. Connected Device ethernet
3. Power up

## BIOS Setup

1. F1 for BIOS
2. Device settings and set the ip to static
3. Check drives are connected
4. Set up RAID
5. When to configuration manager and selected "Unconfigured Good"
6. Selected the drives available for a RAID system
7. Created a 'Virtual drive' using the 2 drives
8. Select the drives FROM,
9. Save config
10. Reboot
11. Press N to skip
12. Install from USB linux server
13. Install linux as usual.

## Software Setup

1. apt update
2. apt upgrade
3. apt install figlet for fancy text intro
4. Disabled root ssh login `PermitRootLogin no` in 
5. set up ufw with SSH on local network only `sudo ufw allow from 192.168.1.0/24 to any port 22`
6. 
