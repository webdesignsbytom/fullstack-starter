# Server Set up

Used for BTS1
API server and postgres database

## Install and set up process

1. `apt-get update`
2. `apt-get upgrade`
   1. `apt-get update && upgrade -y`
3. change root user password `sudo passwd`
4. set up a non root user - principle of least priviledges `adduser tom`
5. set password different to the root user
6. add the user to the sudo group `usermod -aG sudo tom` - check with `groups tom`.
