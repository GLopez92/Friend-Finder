var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var friends = [];

module.exports = function setupRoutes(app,express){
	console.log(__dirname);
	app.use(express.static('../public/home.html'))

	app.get("/", (req,res)  => {
		res.sendFile(path.join(__dirname,"../public/home.html"));

	})

	app.get("/survey", (req,res)  => {
		res.sendFile(path.join(__dirname,"../public/home.html"));

	})
}
