const getSubNames = async (posts) => {
  let subNames = [];
  posts.forEach(post => {
    subNames.push(post.subName);
  });
  subNames = [...new Set(subNames)];
  return subNames;
}

module.exports = getSubNames;