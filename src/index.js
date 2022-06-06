const readline = require('readline');
const fetchSavedPosts = require("./fetchSavedPosts");
const fileWriter = require("./fileWriter");
const postsDownload = require("./postsDownload");
const unsavePosts = require("./unsavePosts");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Do you want to download saved posts? (y/n) ", (answer) => {
  if (answer === "y") {
    rl.question('Enter a subreddit: ', (sub) => {
      rl.question('Enter a limit: ', (limit) => {
        fetchSavedPosts({ sub: sub, limit: parseInt(limit) })
        .then( async (posts) => {
          await fileWriter(posts);
          await postsDownload(posts);
        })
        .catch(err => {
          console.log(err);
        })
        .then(() => {
          console.log("Done!");
        })
        rl.close();
      })
    })
  } else {
    rl.question("Do you want to unsave saved posts? (y/n) ", (answer) => {
      if (answer === "y") {
        rl.question('Enter a subreddit: ', (sub) => {
          rl.question('Enter a limit: ', (limit) => {
            unsavePosts({ sub: sub, limit: parseInt(limit) })
            .then(() => {
              console.log("Done!");
            })
            .catch(err => {
              console.log(err);
            })
            .then(() => {
              rl.close();
            })
          })
        })
      } else {
        rl.close();
      }
    })
  }
})

