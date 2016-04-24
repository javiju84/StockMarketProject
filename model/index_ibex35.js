var mongoose = require("mongoose");
var Schema = mongoose.Schema;//constructor para poder generar los esquemas

/*conexion MongoDB*/
mongoose.connect("mongodb://localhost/ibex35");

var index_ibex35_schema = new Schema({
	fecha: Date,
	apertura: String,
	alto: String,
	bajo: String,
	cierre: String,
	volumen: String,
	ajuste_cierre: String,
});
/*
model => es el constructor que genera los modelos
Index_Ibex35 => es el nombre del modelo
*/
var Index_Ibex35 = mongoose.model("Index_Ibex35",index_ibex35_schema);

module.exports.Index_Ibex35 = Index_Ibex35;