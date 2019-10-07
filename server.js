const express = require("express");
const path = require("path");
const routes = require("./app/routing");
const PORT = process.env.PORT || 3000;

const app = express();
app.use(routes)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(
//   express.static(path.join(__dirname, "app/public"), { extensions: ["html"], fallthrough:false })
// );


// Handle 404
app.use(function(req, res) {
    res.status(404).send('404: Page not Found')
  });
  
  // Handle 500
  app.use(function(error, req, res, next) {
    res.status(500).send('500: Internal Server Error')
  });
  
app.listen(PORT, () => {
  console.log("connected");
});
