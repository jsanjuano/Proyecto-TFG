function cargarfichero(nombrejson,eventtrigger){
	$.getJSON("json/"+nombrejson).success(function(data) {
	//actualizo mi estado a terminado
		$("*").trigger(eventtrigger,[eventtrigger,data])
	}).error(function(){
	//En caso de error levanto el evento de gráfica mal pintada
		alert("No se ha podido cargar el fichero: "+nombrejson)
	});
}