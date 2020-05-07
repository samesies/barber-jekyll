## How to setup
### Git setup first time
* Git installation in your computer [Git link](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* Git ssh setup from your computer [ssh link](https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh)
* Git first time setup [setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)

### Regular work
```bash
git clone git@github.com:jungeebah/herekoCha.git
cd herekoCha
```
* add new files in the _posts folder follow the filename style **year-month-day-Name.markdown**
For starter just copy from the other posts that i have put in place
```yaml
---
copy this content from the other folder and change accordingly as the name descriptions tags and 
For images download it and add that to _assets/images/ folder and put the location like done in other file
---

put your content here

```
For this too work install bundler for that you should have ruby installed linked
[ruby installation](https://www.ruby-lang.org/en/documentation/installation/)
* once done 
```bash
gem install bundler
bundler install
bundler exec jekyll build
```
``` bash
git add .
git comment -m 'your comment'
git push
```
