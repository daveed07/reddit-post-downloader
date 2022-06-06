const r = require("./config.js");

const fetchSavedPosts = async ({ sub = "all", limit = 1 }) => {
  try {
    const user = await r.getMe();
    let savedPosts = await user.getSavedContent({ limit: limit });

    if (sub !== "all") {
      savedPosts = savedPosts.filter((post) => {
        return post.subreddit.display_name === sub;
      });
    }

    let posts = [];

    savedPosts.forEach((post) => {
      let subName = post.subreddit.display_name;
      let postTitle = post.title;
      let postUrl = post.url;
      let datePosted = post.created_utc;

      posts.push({
        subName,
        postTitle,
        postUrl,
        datePosted,
      });
    });
    return posts;
  } catch (err) {
    throw err;
  }
};

module.exports = fetchSavedPosts;
