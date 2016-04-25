var express = require ("express");
var http = require ("http");
var app = express();
var mongo = require ("mongoskin");
var db = mongo.db("mongodb://localhost/zakazka", {native_parser : true});

var request = require("request");



var site = "http://www.vsechnyzakazky.cz/api/v1/zakazka/?format=json&limit=2";

function getData(cb){
	http.get(site,function(res){
		res.setEncoding("utf-8");

		var body = " ";
		res.on("data",function(d){
			body += d;
		});

		res.on("end", function(){
			try {
				var parsed = JSON.parse(body);
			} catch (err) {
				console.error("Unable to parse response as JSON", err);
				return cb(err);
			}

			cb(
				parsed.objects
				);
		});
	}).on("error", function(err){
		console.error("Error with the request:", err.message);
		cb(err);
	});
}

function writeData (data, allGood){
	console.log("writing");
	console.log(typeof data);
	console.log(data);

	db.collection("zakazky").insert(data, function(error,record){
		if (error) throw error;
		console.log("data saved")
	});
}

function allGood(){console.log("all done");}

getData(writeData);


app.listen(8080);
console.log("Servidor conectado  puerto 8080")