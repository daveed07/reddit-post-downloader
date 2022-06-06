const fs = require("fs");
const getSubNames = require ("./getSubNames.js");

const fileWriter = async (posts) => {
  const subNames = await getSubNames(posts);
  const directory = "savedPosts";
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }
  subNames.forEach(sub => {
    const fileName = `${directory}/${sub}.json`;
    const file = fs.createWriteStream(fileName, { flags: "a" });
    file.write(JSON.stringify(posts.filter(post => {
      return post.subName === sub;
    })), (err) => {
      if (err) {
        console.log(err);
      }
    });
    file.end();
  });
}

module.exports = fileWriter;