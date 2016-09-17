'use strict'

var express = require('express');

var app = express();

app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/css', express.static(__dirname + '/public_html/css'));
app.use('/example_data', express.static(__dirname + '/example_data'));
app.use('/js', express.static(__dirname + '/public_html/js'));

var path = require('path');
 


app.get('/',function(req,res){
	res.sendFile('index.html',{'root':__dirname + '/public_html'});
})
app.listen('3000', function(){
	console.log('Server running at http://localhost:3000 !!')
})

// app.use('/', express.static(__dirname + '/public_html'));
// app.use('/node_modules', express.static(__dirname + '/node_modules'));

// app.get('/',function(req,res){
// 	res.sendFile('index.html',{'root':__dirname + '/public_html'});
// })

// app.listen('3000',function(){
// 	console.log('Server running at http://localhost:3000 !!')
// })