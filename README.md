# Reddit-post-downloader
## Settings
1. Create a `.env` file on root
2. Write this down on your file, replacing it with your own informartion:
```env
# you can get all of this on https://www.reddit.com/prefs/apps
USER_AGENT= # Example: OS:NAME-REDDIT-APP:VERSION (by /u/USERNAME)
CLIENT_ID=
USER_NAME=
PASSWORD=
```

## Usage
1. Run `node src/index.js` on your terminal on root directory of project
2. Follow the modals
3. It will first ask if you want to download posts, if yes, will ask for subreddit and limit (Defauts: sub="all", limit=1), and it will procede to download posts. Then it will save those downloaded images into directories named after their corresponding subreddit. Will also create `.json` files for each subreddit with data from post.
4. If you answer no to first modal, it will ask if you want to unsave posts, if yes, it will ask for subreddit and limit. If answer no to this modal, program will close.