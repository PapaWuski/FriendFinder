const express = require("express");
const path = require("path");
const routes = require("./app/routing");
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  express.static(path.join(__dirname, "app/public"), { extensions: ["html"] })
);

app.use(routes)

// Handle 404
app.use(function(req, res) {
    res.status(404).sendFile(path.join(__dirname, "app/public/404.html"))
  });

app.listen(PORT, () => {
  console.log("connected");
});
