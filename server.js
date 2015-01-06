var express = require('express');
var path = require('path');
var Bourne = require('bourne');


var app = express()

var posts = new Bourne("blogPosts.json");
var comments = new Bourne("blogComments.json");


app.configure(function(){
    app.use(express.json());
    app.use(express.static(path.join(__dirname, 'public')))
})