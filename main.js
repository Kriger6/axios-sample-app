var express = require('express');
var app = express();
var fs = require("fs");
var axios = require('axios');
var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT")
   res.header("Access-Control-Allow-Headers", "append, delete, entries, foreach, get, has, keys, set, values, Authorization")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.json())

var data = [
  'nov korisnik', 'nov korisnik 2'
]

app.get('/users', function (req, res) {
   // data = JSON.stringify(data);
   res.send(data)
   
})

app.post('/', urlencodedParser, function (req, res) {
   data.push(req.body.payload)
   res.send(req.body)
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})