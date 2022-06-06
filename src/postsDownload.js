const fs = require("fs");
const download = require("image-downloader");

const postsDownload = async (posts) => {
  const directory = "savedPosts";
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }

  posts.forEach(post => {
    if (post.postUrl.match(/\.(jpe?g|png|gif)$/)) {
      const url = post.postUrl;
      const destination = `${directory}/${post.subName}`;

      if (!fs.existsSync(destination)) {
        fs.mkdirSync(destination);
      }
      const options = {
        url: url,
        dest: `./../../${destination}`,
      };
      download
        .image(options)
        .then(({ filename }) => {
          filename = filename.split("/").pop();
          console.log(`${filename} downloaded!`);
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  });
};

module.exports = postsDownload;
