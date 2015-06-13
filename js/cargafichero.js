/* Funcion utilizada para la carga del fichero, los parametros de entrada
son el nombre del fichero y el nombre del trigger que queremos levantar */

function cargarfichero(nombrejson,eventtrigger){
	$.getJSON("json/"+nombrejson).success(function(data) {
		// Si ha ido bien se levanta un trigger
		$("*").trigger(eventtrigger,[eventtrigger,data])
	}).error(function(){
		//En caso de error levanto el evento de gráfica mal pintada
		alert("No se ha podido cargar el fichero: "+nombrejson)
	});
}