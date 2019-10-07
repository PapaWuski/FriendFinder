const data = require("../data/friends.js");

const getData = (req, res) => {
  res.json(data.data);
};

const Friend = (name, url, score) => {
  this.name = name;
  this.url = url;
  this.score = score;
};

const addData = (req, res) => {
  const { name, url, score } = req.body;
  const friend = new Friend(name, url, score);
  data.data.push(friend);
  res.json({ success: "true" });
};

module.exports = { getData, addData };
