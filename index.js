const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const path = require("path");
const bodyParser = require('body-parser');
const app = express();
const httpserver = http.Server(app);
const io = socketio(httpserver);


app.set('io', io);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {

    res.render("index.html");

});

httpserver.listen(3000);