var http = require('http');
var express = require('express');

var app = express();

var cors = require('cors')

app.use(cors());
app.options('*', cors());

app.post("/", function(req, res) {
    console.log(req.body.username);
    res.send("success");
});

app.post("/auth", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.get("/nextjs", (req, res) => {
    res.send("100000000");
});

app.get("/contactus", function(req, res) {
    console.log(req);
    var array = ["success", "info", "state"];
    res.send(JSON.stringify(array));
});

app.listen(5000);

console.log("127.0.0.1:5000");