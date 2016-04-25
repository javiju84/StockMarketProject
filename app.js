var express = require ("express");
var app = express();
var Database = require("./models/index_ibex35").Database;//llamamos al Schema,librerias
var request = require("request");

var url = "https://www.quandl.com/api/v3/datasets/YAHOO/INDEX_IBEX.json"

request({
	url: url,
	json:true
}, function (error, response, body){

	if (!error && response.statusCode === 200) {
			console.log(body.dataset.data); /*obtener todos los datos de date*/
			//console.log(body.dataset.dataset_code);/*obtener el nombre de la tabla 'INDEX_IBEX'*/
			//console.log(body.dataset.data[0]);/*obetener solo un valor*/
		var parseo = body.dataset.data;

	var jsonString=[];
		for (var i=0; i < parseo.leght; i++){
			var jsonDato = {};
			jsonDato.fecha = parseo[i][0];
			jsonDato.apertura = parseo[i][1];
			jsonDato.alto = parseo[i][2];
			jsonDato.bajo = parseo[i][3];
			jsonDato.cierre = parseo[i][4];
			jsonDato.volumen = parseo[i][5];
			jsonDatp.ajuste_cierre = parseo[i][6];
			jsonString.push(jsonDato);
		} 
		var jsonArray = JSON.parse(JSON.stringify(jsonString));
		console.log(jsonArray);

	/*	parseo.save( function(err, data){
			res.json(data);
		});*/
	}
});


app.listen(8080);
console.log("Servidor conectado  puerto 8080")