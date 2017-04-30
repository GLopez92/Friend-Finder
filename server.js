var express = require("express");
var bodyPaser = require("bodyPaser");
var path = require("path");

var app = express();

var PORT = 3000;

app.use(bodyPaser.json());

app.use('/', require('./app/routing/htmlRoutes'));
app.use('/api', require('./app/routing/apiRoutes'));

app.listen(PORT, () => {
	 console.log('Listen to Port: ' + PORT);
})