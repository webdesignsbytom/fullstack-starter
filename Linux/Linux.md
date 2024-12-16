# Linux Information

## General 

`wsl --install` Will install the latest Ubuntu package on windows via the termial
`wsl --list --online` check versions installed
`wsl --set-default-version <Version>`

## Ubuntu 

## Bash script

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


## Linux Stuff

1. Volumes - hard memory drives, attached storage - `mount [Name of device]`
