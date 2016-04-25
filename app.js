var express = require ("express");
var mongoose = require("mongoose");
var assert = require("assert");
var app = express();

mongoose.connect("mongodb://localhost/ibex35");

var Schema = mongoose.Schema;//constructor para poder generar los esquemas

var valoresSchema = new Schema({
	fecha: Date,
	apertura: Number,
	alto: Number,
	bajo: Number,
	cierre: Number,
	volumen: Number,
	ajuste_cierre: Number,
});

var Database = mongoose.model("Database",valoresSchema);

data = [
	{"fecha" :"2016-04-22"},
	{"apertura" : 9183.900391},
	{"alto" : 9244.400391},
	{"bajo" : 9161.599609},
	{"cierre" : 9232.799805},
	{"volumen" : 299600000.0},
	{"ajuste_cierre" : 9232.799805}
  ]

Database.collection.insertMany(data, function(err,r){
	assert.equal(null, err);
	assert.equal(7, r.insertedCount);

})
app.listen(8080);
console.log("Servidor conectado  puerto 8080")