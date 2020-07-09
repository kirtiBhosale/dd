var express = require('express');
var app = express();
var http = require('http').Server(app);
require('dotenv').config();

express.static('public')

app.get('/', function(req, res){
  res.sendFile('../AppPages' + '/MyPage.html');
});
app.post('/', function(req, res) {
    var item = req.body.userSearchInput;
    console.log(item);
});

http.listen(process.env.port, function(){
  console.log('listening on *:3000');
});
