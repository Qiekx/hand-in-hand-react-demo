var express = require('express');
var app = express();
var port = require('./config.js').port

app.get('/api',function(req,res){
  res.send('api works!')
})

app.listen(port,function(){
  console.log('running on port '+ port +'....')
})
