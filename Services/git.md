# GIT

## WHat is GIT

Git is a version control system.
It records the changes made over time to a repository. It records who and when changes were made. It can be backed up and restored to previous points.

- Centralized - all teams connection to a single repo
- Distributed - all members have the history

  Git is free, open source and scalable.

  
## Commands

 `git config --global -e` edit your user settings for git
`git config --global core.editor "code --wait" open code in IDE and wait for close to disconnect
`git diff --staged` compare changes

## Workflow

Directory
- Repository - store snapshots or code
- Staging area (index) what we are getting ready for next commit


$ git diff --staged
diff --git a/file2.txt b/file2.txt
new file mode 100644
index 0000000..31e0fce
--- /dev/null                   # previous commit did not have the file
+++ b/file2.txt
@@ -0,0 +1 @@                   # Changes
+helloworld                      # Changes
