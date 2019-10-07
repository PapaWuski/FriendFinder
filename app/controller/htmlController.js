const path = require("path");

const index = (req,res) => {
    res.sendFile(path.join(__dirname,"../public/index.html"))
}

const survey = (req,res) => {
    res.sendFile(path.join(__dirname,"../public/survey.html"))
}

const result = (req,res) => {
    res.sendFile(path.join(__dirname,"../public/result.html"))
}

module.exports = {index,survey,result}