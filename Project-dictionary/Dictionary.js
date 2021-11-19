var express = require('express');

var app = express();
var port = 2021

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.listen(port, () => console.log("Server start on port: " + port))

app.get('/', (req, res) => {

  var word= req.query.word;
  // fetch the data and put it to res to send it back to client requesting it
  var query= require('./word');
  query.queryWord(word, res);
  
})