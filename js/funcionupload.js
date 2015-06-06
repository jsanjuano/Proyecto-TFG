function parseador (json){
	$("#formulario").append('Seleccione los parametros que quiere representar:<br>')
	var date = false;
	$.each( json, function( key, val ) {
		$("#formulario").append('<input type="checkbox" name="'+key+'" value="'+key+'"> '+key+'<br>')
		if (key == 'date'){
			date =true;
		}
	}) 
	if (!date){
		alert("El fichero no contiene no es un fichero evolutiornary o no aparece la clave date\n, no podra representar el fichero")
	}
	$("#formulario").append('<input id="representar" type="button" value="Representar">')
	$('#formulario').css("display", "block")
}