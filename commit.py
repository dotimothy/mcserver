import os
import datetime

#initalizing commit message using date
date = datetime.datetime.now()
commit = "Auto-Commit mcserver on " + date.strftime("%x")

#git commits.
os.system("git pull")
os.system("git add *")
os.system("git commit -m \"" + commit + "\"")
os.system("git push")

