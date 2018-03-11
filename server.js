var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/',function(req,res){
    res.sendFile(__dirname+'/'+"index.html");
})
app.get('/index',function(req,res){
    res.sendFile(__dirname+'/'+"index.html");
})
app.get('/p',function(req,res){
    res.sendFile(__dirname+'/'+"p.html");
})


var server = app.listen(8094,'0.0.0.0',function(){
    var host = server.address().address
    var port = server.address().port

    console.log('host:',host,'port:',port);
})
