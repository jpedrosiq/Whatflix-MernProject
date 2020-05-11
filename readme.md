
+_________________________ Git Workflow ______________________


- git branch feature1 -> creates a new branch, a clone of the master branch.
- git branch -> shows you which branch you’re on.
- git checkout feature1 -> switches you to that branch.

*useful command*
- git checkout -b feature1 -> creates a new branch and automatically switches you to that branch

do the changes to your code
remember to commit on every file you change, or every major change in that file

- git add -A -> adds all the files you’ve changed
- git commit -m “Message” -> commits your changes, remember to use Present tense instead of past or future. eg: “Create route util for user session”
- git checkout master -> goes back to the master branch
- git pull origin master -> pull any recent updates
- git checkout feature1 -> goes back to that branch you’re working on.
- git merge master -> merge changes from master, if nothing has changed in the master branch, you’ll see a message “Already up-to-date.”
- git push origin feature1 -> push this branch up to github and make a pull request so that way other members of our team can see what code we’ve written, and either approve or make some comments on our code before it actually gets put onto the master branch.

Go over to github, refresh the page, you can see the branch and all its changes.
The leader of the group will review it, adds some comments if necessary, then the leader will push that to the master branch.

After that is done, we can delete the branch by running:
- git branch -d feature-branch-name-that-was-approved
 