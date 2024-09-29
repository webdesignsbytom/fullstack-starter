# Set up home server

## Table of contents

- [Set up home server](#set-up-home-server)
  - [Table of contents](#table-of-contents)
  - [Equipment](#equipment)
  - [Set up](#set-up)
  - [Process](#process)
    - [Installing OS](#installing-os)
    - [Initializing](#initializing)
    - [SSH and Security Setup](#ssh-and-security-setup)
    - [Securing Connection](#securing-connection)

## Equipment

1. Asus X553S
2. 8Gb Ram 1TB storage
3. Ubunutu 22 server LTS
4. Ethernet Cable
5. Home Router

## Set up

1. Give the server a unassuming name i.e 'computer'
2. Complete safety set up removing root users

## Process

### Installing OS

1. Install Ubuntu or similar OS, deselect any LVM install to prevent partitions
2. Create a user name and password for the machine
3. Agree to install OpenSSH if offered

### Initializing

1. Run update and upgrade
2. `sudo nano /etc/systemd/logind.conf` turn off screen
3. `sudo bash -c "echo 1 > /sys/class/backlight/*/bl_power"` or `sudo bash -c "echo 0 > /sys/class/backlight/*/bl_power"`

### SSH and Security Setup

1. If you have been issued a password for root then change it
2. If your system does not have disabled root login as default
   1. Create a user
   2. Disable root login `sudo nano /etc/ssh/sshd_config` `PermitRootLogin no`

### Securing Connection
