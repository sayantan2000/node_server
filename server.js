const { json } = require('express');
var express = require('express');

var app = express();
var str={
    "hello":"bye",
};
var PORT = 3000;

app.get('/', function(req, res) {
    res.status(200).send('Hello world');
});
app.post('/', function(req, res) {

   // console.log(req.hostname);
   console.log(req.query);
    res.setHeader('Content-Type', 'application/json');
    console.log(req.query["user"].split(","));
    res.status(200).send(JSON.stringify(str,null,3));
});

app.listen(PORT, function() {
    console.log('Server is running on PORT:',PORT);
});