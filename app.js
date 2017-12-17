var express = require("express");
var path = require("path");
var logger = require("morgan")
var http = require("http");

var app = express();
var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.use(logger("short"));

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", function(request, response) {
  response.render("index", {
    title: "Home"
  });
});

http.createServer(app).listen(3000);
