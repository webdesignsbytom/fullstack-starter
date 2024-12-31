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
`git diff` unstaged changes
`git diff --staged` compare changes
` git config --global diff.tool vscode` set vscode as defualt diff tool
` git config --global difftool.vscode.cmd "code --wait --diff $LOCAL $REMOTE"` Local abd renote are placeholders for old and new files
`git log` get logs
`git log --oneline` get one line logs
` git log --oneline --reverse` reverse order
`git show fe1a5d5` show data from a commit
`git show HEAD~1` git show number of commit back from HEAD
`git show HEAD~1:[folderpath]` see changes in a file
`git ls-tree HEAD~1` see what files are in a commit 
`git clean -f` remove local changes
`git tag 1.0.0` add a tag
`git push origin --tags` push tags
`git push origin --delete launch-portfolio-version` delete tag from origin

## Workflow

Directory
- Repository - store snapshots or code
- Staging area (index) what we are getting ready for next commit

  # Terms

  1. HEAD - Current bracnch
  2. File = blob
  3. Directory = tree


$ git diff --staged
diff --git a/file2.txt b/file2.txt
new file mode 100644
index 0000000..31e0fce
--- /dev/null                   # previous commit did not have the file
+++ b/file2.txt
@@ -0,0 +1 @@                   # Changes
+helloworld                      # Changes
