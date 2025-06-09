# Linux Ubuntu

## Install

### WSL

`wsl --install` Will install the latest Ubuntu package on windows via the termial
`wsl --list --online` check versions installed
`wsl --set-default-version <Version>`

## Processes

### Create User / User

- `sudo adduser tom` add user
- `sudo passwd tom` change password if needed
- `sudo usermod -aG sudo tom` grant privileges to sudo
- `cat /etc/passwd` get all users in a awkward way as root

## Commads

`uname` - get machine name 'Linux'
`uname -a` get all machine name data
`mount` get list of mounted library files
`date` get date
`uptime` get time used
`echo` print whats after echo `echo tom` = `tom`
`echo "some text" > file.txt` add text to file
`info=$(uname -a)` set info as command `echo $info`
`cd ../../..` path travesal
`tree` get directory tree
`cat` concatinate docuemnt
`touch` create file
`mv file1.txt ../` move a filecd .
`mv file1.txt file2.txt` move and rename
`find / -oerm -u=x` find all where permision for user = x
`find / -type f -perm -u=x` find files with user x permissions
`chmod` change mode
`deluser johnsmith` delete user
`groupdel johnsmith` delete group user is in

`tail [options] <file>` tail is used to show the last lines of a file `tail /var/log/apache2/access.log`
`tail -n 20 /var/log/apache2/access.log` for extra lines us 20
`tail -f /var/log/apache2/error.log` to follow updates as they happen
`tail -f /var/log/apache2/access.log /var/log/apache2/error.log` multiple files followed

### Script

`--all` - Includes all items or options, without excluding any.
`--archive` - Archives files, preserving their attributes and structure.
`--backup` - Creates backups of files before modifying them.
`--checksum` - Verifies file integrity using checksums.
`--compare-dest` - Compares files with those in another directory.
`--compress` - Compresses data during transfer.
`--contimeout` - Sets a timeout for connection attempts.
`--copy-dest` - Copies files from another directory if they exist there.
`--delay-updates` - Delays updates until the end of the operation.
`--delete` - Deletes specified files or directories.
`--delete-after` - Deletes files after completing the main operation.
`--delete-before` - Deletes files before starting the main operation.
`--delete-during` - Deletes files during the main operation.
`--dry-run` - Simulates the execution of the command without making any changes.
`--exclude` - Excludes specified files or directories from the command's operation.
`--existing` - Applies the command only to existing files.
`--files-from` - Reads the list of files to operate on from a specified file.
`--follow` - Follows symbolic links to files or directories.
`--force` - Forces the command to execute, ignoring any warnings or errors.
`--help` - Displays a help message with usage information for the command.
`--human-readable` - Formats output in a human-readable way, often used with sizes.
`--ignore` - Ignores specified files or conditions.
`--ignore-existing` - Ignores files that already exist.
`--include` - Includes specified files or directories in the command's operation.
`--interactive` - Prompts the user for input or confirmation during execution.
`--link-dest` - Uses hard links to files in another directory if possible.
`--log-file` - Writes log messages to a specified file.
`--long` - Provides a detailed or extended output format.
`--no-dereference` - Does not follow symbolic links.
`--no-preserve-root` - Allows the command to operate on the root directory.
`--numeric-ids` - Uses numeric user and group IDs instead of names.
`--one-file-system` - Restricts the command to a single file system.
`--partial` - Keeps partially transferred files.
`--partial-dir` - Stores partially transferred files in a specified directory.
`--preserve-root` - Prevents the command from operating on the root directory.
`--print` - Outputs the results or actions taken by the command.
`--prune` - Removes or skips directories or files that match certain criteria.
`--quiet` - Suppresses most output, making the command run silently.
`--recursive` - Applies the command recursively to directories and their contents.
`--relative` - Uses relative paths instead of absolute paths.
`--short` - Uses a brief or condensed output format.
`--skip-compress` - Skips compression for specified file types.
`--stats` - Displays statistics about the command's execution.
`--strip-trailing-slashes` - Removes trailing slashes from file or directory names.
`--suffix` - Adds a specified suffix to backup files.
`--temp-dir` - Uses a specified directory for temporary files.
`--timeout` - Sets a timeout for network operations.
`--update` - Updates files only if the source is newer than the destination.
`--verbose` - Enables detailed output, showing more information about what the command is doing.
`--version` - Shows the version information of the command or tool.

`-a` - Stands for "all" and is often used to include all items or options.
`-b` - Specifies a buffer size or block size in some commands.
`-c` - Can be used to specify a command to run.
`-d` - Specifies a directory or provides debugging information.
`-e` - Enables interpretation of backslash escapes or exists on error.
`-f` - Forces the command to execute, often overriding warnings.
`-g` - Used to specify a group or pattern in some commands.
`-h` - Displays help information for the command.
`-i` - Specifies an input file or makes the command interactive.
`-j` - Used for specifying a number of jobs or threads.
`-k` - Keeps certain elements or settings.
`-l` - Provides a long listing format.
`-m` - Specifies a message or mode.
`-n` - Disables certain features or specifies a number.
`-o` - Specifies an output file or option.
`-p` - Specifies a port, path, or makes the command prompt interactively.
`-q` - Makes the command run quietly, suppressing output.
`-r` - Recursively applies the command to directories and their contents.
`-s` - Sorts output or sets a specific setting.
`-t` - Specifies a time or format.
`-u` - Specifies a user or uploads something.
`-v` - Enables verbose mode, providing more detailed output.
`-w` - Specifies a width or waits for something.
`-x` - Enables debugging or excludes certain items.
`-y` - Answers "yes" to all prompts automatically.
`-z` - Tests for an empty string or compresses data.

## UFW

Uncomplicated FireWall

`sudo ufw app list` list apps that use ports

`sudo ufw status`
`sudo ufw status verbose`
`sudo ufw enable`
`sudo ufw disable`
`sudo ufw reset`

`sudo ufw allow http`
`sudo ufw allow https`
`sudo ufw allow 8080`
`sudo ufw deny 8080`
`sudo ufw allow 443/tcp`
`sudo ufw allow in ssh`
`sudo ufw deny out 80`

`sudo ufw allow from 192.168.1.100`
`sudo ufw allow from 192.168.1.100 to any port 22`
`sudo ufw deny from 192.168.1.100`
`sudo ufw allow from 192.168.1.0/24`
`sudo ufw deny from 192.168.1.0/24`

- Delete Rules
  `sudo ufw status numbered`
  `sudo ufw delete 1`

- Loggin Rules
  `sudo ufw logging on`
  `sudo ufw logging off`

## Fail2Ban

Prevents and bans dodgy ips

`sudo apt update`
`sudo apt install fail2ban`
`sudo systemctl start fail2ban`
`sudo systemctl enable fail2ban`
`sudo systemctl status fail2ban`


`sudo fail2ban-client status`
`sudo fail2ban-client set sshd unbanip <IP_ADDRESS>`

```md
[sshd]
enabled = true
port = ssh
logpath = /var/log/auth.log
maxretry = 3
bantime = 600
findtime = 600
mode = aggressive
backend = auto
allowipv6 = false
```

## PM2

Keep servers alive

`npm install pm2@latest -g`

`pm2 start <app.js>` start
`pm2 start <app.js> --name <name>` start with custom name
`pm2 restart <app.js|name|id>` restart
`pm2 stop <app.js|name|id>` stop
`pm2 delete <app.js|name|id>` delete

`pm2 list` list all
`pm2 monit` monitor logs and metrics
`pm2 logs` view logs
`pm2 logs <name|id>` logs for a specified file
`pm2 start/stop/reload all` do x to all

PM2 can automatically restart your application when a file is modified in the current directory or its subdirectories:
`pm2 start app.js --watch`

Launch on start up of server
`pm2 startup` get command to run start up
`run command` run that commands
`pm2 save` save after starting all the servers you want

## Linux Stuff

1. Volumes - hard memory drives, attached storage - `mount [Name of device]`
