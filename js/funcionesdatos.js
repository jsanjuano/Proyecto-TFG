
/*Funcion que pasandole la urljson, el titulo de la grafica
y el parametros que queremos buscar, nos devuelve un array
con lo necesariop para poder llamar a la funcion pintar
scm-evolutionary.json 
Entrada: urljson: scm-evolutionario.json(por ejemplo)
		titulo: titulo de la grafica
		parametro: key del json que queremos obtener

Devuelve: El array con los qsenders [0]
          El total de los qsenders [1]
		  El titulo de la grafica [2]
		  El eje de tiempo [3]
		  Primer mes [4]
		  Primer mes [5]
		  parametro [6]
*/
function datossimples(json,titulo,parametro){

	retorno = [];
	$.each( json, function( key, val ) {
		if (key == parametro){
			auxilar = val;
		}

	})
	//Guardamos los datos principales 
	retorno[0] = auxilar;
	total = 0;
	for (var i = 0; i<auxilar.length; i++){
		total = total + auxilar[i];
	}
	// Guardamos la suma de los commits
	retorno[1] = total;
	//Guaramos el titulo
	retorno[2] = titulo
	//Guardamos el eje de tiempo
	retorno[3] = json.date; 
	// Nos quedamos con la primera fecha
	primera = retorno[3][0];
	//Parseamos por los espacios
	mes = primera.split(" ");
	//Array de mes para sacar el indice
	var month=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	//Buscamos el indice
	var indice = (month.indexOf(mes[0])) + 1;
	// Guardamos en el array a devolver el indice
	retorno[4] = indice;
	//El año
	retorno[5] = mes[1]
	//Guardamos el paramerto que hemos buscado
	retorno[6] = parametro

	return retorno
}

/*Funcion para poder obtener los datos para los graficos de
en forma de queso, empleados en la seccion de empresas
*/
function datosempresapie(json, titulo){
	retorno = [];
	contador = 0;
	auxilar = new Array();
	$.each( json, function( key, val ) {
		if ((key != 'Others') && (key != 'date') && (key != 'id') && (key != 'unixtime') && (key != 'week')){
			total = 0;
			for (var i = 0; i<val.length; i++){
				total = total + val[i];
			}
			auxilar[contador] =  [key,total];
			contador = contador + 1;
		}
	})
	//Guardamos los datos principales 
	retorno[0] = auxilar;
	//Guaramos el titulo
	retorno[1] = titulo
	return retorno
}

function datostotales(array,titulo,numerografica){
	$('#titulototales'+numerografica).append(titulo)
	$('#numerototales'+numerografica).append(array[1])

}

function datostabla(json){
	retorno = [];
	contador = 0;
	$.each( json, function( key, val ) {
		total = 0
		if ((key != "date") && (key != "id") && (key != "unixtime") && (key != "week")){
			for (var i = 0; i < val.length; i++) {
				total = total + val[i]
			};
			retorno[contador] = [key,total]
			contador = contador + 1;
		}

	})
	return retorno
}

function datossimplesconcargafichero(urljson,titulo,parametro){
	retorno = [];
	var json = (function () {
		var json = null;
		$.ajax({
			'async': false,
			'global': false,
			'url': urljson,
			'dataType': "json",
			'success': function (data) {
				json = data;
			}
		})
		return json;
	})();
	$.each( json, function( key, val ) {
		if (key == parametro){
			auxilar = val;
		}

	})
	//Guardamos los datos principales 
	retorno[0] = auxilar;
	total = 0;
	for (var i = 0; i<auxilar.length; i++){
		total = total + auxilar[i];
	}
	// Guardamos la suma de los commits
	retorno[1] = total;
	//Guaramos el titulo
	retorno[2] = titulo
	//Guardamos el eje de tiempo
	retorno[3] = json.date; 
	// Nos quedamos con la primera fecha
	primera = retorno[3][0];
	//Parseamos por los espacios
	mes = primera.split(" ");
	//Array de mes para sacar el indice
	var month=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	//Buscamos el indice
	var indice = (month.indexOf(mes[0])) + 1;
	// Guardamos en el array a devolver el indice
	retorno[4] = indice;
	//El año
	retorno[5] = mes[1]
	//Guardamos el paramerto que hemos buscado
	retorno[6] = parametro
	
	return retorno
}
// Funcion utilizada para el tratamiento de otros tipo de fichero -companies
function datosempresapiecompanies(json, titulo,parametrodatos,parametrosnombre){
	retorno = [];
	contador = 0;
	auxilar = new Array();
	$.each( json, function( key, val ) {
		if ((key == parametrodatos)){
			$.each( json, function( key2, val2 ) {
				if ((key2 == parametrosnombre)){
					for (var i = 0; i<val.length; i++){
							auxilar[i] =  [val2[i],val[i]];
					}
				}
			})
		}
	})
	//Guardamos los datos principales 
	retorno[0] = auxilar;
	//Guaramos el titulo
	retorno[1] = titulo
	return retorno
}

function datosresumengrafica(json){
	retorno = [];
	//contador = 0;
	auxilar = new Array();
	$.each( json, function( key, val ) {
		if ((key != 'type') && (key != 'url')){
			arrayAux=[val]
			obj={
				type: 'column',
				name: key,
				data: arrayAux
			}
			auxilar.push(obj)
		}
		//auxilar[contador] =	{type: 'column',name: key, data: [val]}
		//contador++
		//}
	})
	//Guardamos los datos principales 
	retorno[0] = auxilar;
	return retorno
}

function datosresumentexto(json, titulo){
	retorno = [];
	//contador = 0;
	auxilar = new Array();
	$.each( json, function( key, val ) {
		if ((key != 'type') && (key != 'url')){
			arrayAux=[key, val]
			auxilar.push(arrayAux)
		}

	})
	//Guardamos los datos principales 
	retorno[0] = auxilar;
	retorno[1] = titulo;
	return retorno
}
