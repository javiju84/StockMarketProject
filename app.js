var express = require ("express");
var app = express();
var request = require("request");

var url = "https://www.quandl.com/api/v3/datasets/YAHOO/INDEX_IBEX.json"

request({
	url: url,
	json:true
}, function (error, response, body){

	if (!error && response.statusCode === 200) {
		console.log(body.dataset.data[200]);
	}
});



app.listen(8080);
console.log("Servidor conectado  puerto 8080")