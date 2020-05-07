## How to setup
**git clone [repo address]**
cd herekoCha
add new files in the _posts folder follow the filename style **year-month-day-Name.markdown**
For starter just copy from the other posts that i have put in place
```yaml
---
copy this content from the other folder and change accordingly as the name descriptions tags and 
For images download it and add that to _assets/images/ folder and put the location like done in other file
---

put your content here

```
For this too work install bundler for that you should have ruby installed
once done 
```bash
gem install bundler
bundler install
bundler exec jenkins build
```
git add .
git comment -m 'your comment'
git push
