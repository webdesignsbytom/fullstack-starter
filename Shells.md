# Shells

## SSH

Secure Shell

Not a shell language but a transmission controller. With encryption.

Used for

1. File transfer
2. Tunneling
3. Executing commands

### SSH Key Components

SSH Client: A software that initiates the SSH connection (e.g., OpenSSH client).
SSH Server: A software that listens for incoming SSH connections (e.g., OpenSSH server).
Public/Private Key Pair: Used for secure authentication in public key-based authentication.
Session Key: Temporary key used to encrypt the communication during the session.

### Process

1. You open a tcp or udp connection between the two machines. using `ssh ...` over port 22
2. Tcp is unencrypted
3. A 3 way handshake is performed.
4. SSH sends the data packets to the machiens.
5. Encrypt the payload and padding of the packet
6. The two devices share information on what versions of software like ssh they are running and their decryption algorithms.
7. Checks if the machine is known
8. Key exchange - create a key to encrypt the channel.
9. Host key verification - Check the know host list
10. Generate session keys - short lived
11. Authenticate the user by password or keygen.
12. Check if they key is authorized with public private keys
13. Challenged with random data to decrypt to prove they have the key without sending it.
14. Accept connection and open.

### Config

.ssh config file.
Use you can log into using a keygen or a password

```sh
Host github.com
  HostName github.com
  PreferredAuthentications publickey
  IdentityFile ~/.ssh/githubkeys

Host camerapi
  User camerapi
  HostName 192.168.1.8
```
