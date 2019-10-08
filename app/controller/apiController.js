const data = require("../data/friends.js");

const getData = (req, res) => {
  res.json(data);
};

const Friend = function(name, url, score){
  this.name = name;
  this.url = url;
  this.score = score;
};

const addData = (req, res) => {
  const { name, url, score } = req.body;
  const friend = new Friend(name, url, score.map(val => parseInt(val)));


  let bestMatch = {
    name: "",
    url: "",
    friendScore: 1000
  }

  const ffScore = friend.score;

  let scoreDifference = 0;

  for (let i = 0; i < data.length; i++) {
    scoreDifference = 0;

    for (let j = 0; j < data[i].score.length; j++){
      scoreDifference += Math.abs(parseInt(data[i].score[j]) - parseInt(ffScore[j])); 
    }
    if (scoreDifference <= bestMatch.friendScore){
      bestMatch.name = data[i].name;
      bestMatch.url = data[i].url;
      bestMatch.friendScore = scoreDifference;
    }
  }
  console.log(bestMatch)
  data.push(friend);
  res.json(bestMatch);  
};

module.exports = { getData, addData };
