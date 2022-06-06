const r = require("./config.js");

const unsavePosts = async ({ sub="all", limit=1 }) => {
  const user = await r.getMe();
  const savedPosts = await user.getSavedContent({ limit: limit });

  if (sub !== "all") {
    savedPosts = savedPosts.filter(post => {
      return post.subreddit.display_name === sub;
    });
  }

  savedPosts.forEach(post => {
    post.unsave();
  })
}

module.exports = unsavePosts;