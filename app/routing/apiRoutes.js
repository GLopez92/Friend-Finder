var path = require("path");
var express = require("express");

var friends = [];

module.exports = function setupRoutes(app,express){
	console.log(__dirname);
	app.use(express.static('../public'))

	app.get('/api/friends', function(req,res){
		return res.josn(friends);
	})

	app.post("/api/friends", (req,res)  => {
		var newFriends = req.body;
		friends.push(newFriends);
		return res.json(friends);
	})
}
