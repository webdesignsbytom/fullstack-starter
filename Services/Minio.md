Setting Up MinIO on Ubuntu and Allowing Access from Other Devices
Prerequisites

    Ubuntu Server (or any Linux distribution)
    Access to the terminal with sudo privileges
    UFW (Uncomplicated Firewall) for managing firewall rules

1. Install MinIO
Download MinIO

bash

wget https://dl.min.io/server/minio/release/linux-amd64/minio

Make MinIO Executable

bash

chmod +x minio

Move MinIO to /usr/local/bin/

bash

sudo mv minio /usr/local/bin/

2. Set Up MinIO Data Directory
Create a directory for MinIO data

bash

mkdir -p /data/minio

This directory will be used to store objects and metadata.
3. Run MinIO
Start MinIO with a Specific Address Binding

To make MinIO accessible from other devices on your network, bind it to 0.0.0.0:

bash

minio server --address "0.0.0.0:9000" /data/minio

Example Output

You will see output similar to this:

bash

API: http://0.0.0.0:9000
   RootUser: minioadmin
   RootPass: minioadmin

WebUI: http://192.168.1.227:9000

By default, MinIO uses minioadmin:minioadmin as credentials, but you should change them for security purposes.
4. Change MinIO Default Credentials

Before running MinIO, set environment variables to specify a new root username and password.

bash

export MINIO_ROOT_USER=dist1bucket
export MINIO_ROOT_PASSWORD=Dist110/Bucket10

Then run MinIO again:

bash

minio server --address "0.0.0.0:9000" /data/minio

5. Configure Firewall (UFW)
Allow Port 9000 in UFW

To allow external access to MinIO on port 9000:

bash

sudo ufw allow 9000/tcp

If needed, allow any other necessary ports, such as for the MinIO Web UI or APIs.
Disable UFW (Optional)

If you want to temporarily disable UFW for testing:

bash

sudo ufw disable

Check UFW Status

bash

sudo ufw status

Ensure that the firewall allows connections on port 9000.
6. Run MinIO in the Background (Detached Mode)

To run MinIO in detached mode so it continues running even after you close the terminal, use nohup:

bash

nohup minio server --address "0.0.0.0:9000" /data/minio > minio.log 2>&1 &

    nohup: Ensures that the process continues running after the terminal is closed.
    minio.log: The output is redirected to the minio.log file.
    &: Runs the command in the background.

You can check the logs at any time:

bash

tail -f minio.log

7. Access MinIO from Other Devices

Once MinIO is running, you can access it from other devices on your local network using:

arduino

http://<your-server-ip>:9000

Web UI

You can manage MinIO using its web interface available at:

arduino

http://<your-server-ip>:9000

8. Set Up MinIO Client (mc)

To interact with your MinIO server using the command-line MinIO Client (mc), you can install mc and configure it:

bash

wget https://dl.min.io/client/mc/release/linux-amd64/mc
chmod +x mc
sudo mv mc /usr/local/bin/

Add MinIO Alias

bash

mc alias set myminio http://0.0.0.0:9000 dist1bucket Dist110/Bucket10

Now you can use mc to interact with your MinIO server.
9. Stopping MinIO

If you need to stop MinIO, you can simply kill the process using its PID:

bash

sudo pkill minio

Or, if you are using systemd, you can stop and disable the MinIO service:

bash

sudo systemctl stop minio
sudo systemctl disable minio