
/*Funcion que pasandole el json, el titulo de la grafica
y el parametro que queremos buscar, nos devuelve un array
con lo necesariop para poder llamar a la funcion pintar
scm-evolutionary.json 
Entrada: json: lo obtenio por la funcion cargarFichero()
		titulo: titulo de la grafica
		parametro: key del json que queremos obtener

Devuelve: El array con los datos [0]
          El total del array [1]
		  El titulo de la grafica [2]
		  El eje de tiempo [3]
		  Primer mes [4]
		  Primer mes [5]
		  El nombre del parametro [6]
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
	// Guardamos la suma
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

Entrada: json: lo obtenio por la funcion cargarFichero()
		titulo: titulo de la grafica

Devuelve: El array con los datos [0]
          El total del array [1]
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
/*Funcion para poder obtener los datos para las tablas

Entrada: json: lo obtenio por la funcion cargarFichero()

Devuelve: El array con los datos [0] en cada posicon tiene clave valor*/

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
/*Funcion con carga de Fichero incorporada para cuando estamos
dentro de un evento y queremos crear un chart dentro de ese evento, para el futro se perderia 
la varible del chart creada. La cabecera incluye la urlJson, el titulo de la grafica
y el parametro que queremos buscar, nos devuelve un array
con lo necesariop para poder llamar a las funciones de representacion

Entrada: urljson: Url de donde se encuentra el fichero JSON
		titulo: titulo de la grafica
		parametro: key del json que queremos obtener

Devuelve: El array con los datos [0]
          El total del array [1]
		  El titulo de la grafica [2]
		  El eje de tiempo [3]
		  Primer mes [4]
		  Primer mes [5]
		  El nombre del parametro [6]
*/
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
/*Funcion utilizada cuando se quiere representar un graficho de Pie,
dicha funcion obtiene como parametros el json, titulo, parametroDatos,
y parametrosNombre

Entrada: json: json con los datos
		titulo: titulo de la grafica
		parametro: key del json que queremos obtener
		nombre: key para un segundo filtro

Devuelve: El array con los datos [0]
          El total del array [1]
*/
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
/*Funcion utilizada cuando se quiere obtener los datos para
representar un resumen funcion obtiene como parametros el json, 
titulo.

Entrada: json: json con los datos

Devuelve: El array con los datos [0]
*/

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
/*Funcion utilizada cuando se quiere obtener los datos para
rellenar una tabla. 

Entrada: json: json con los datos
		 titilo: titulo de la tabla

Devuelve: El array con los datos [0]
		  El titulo asignado [1]
*/

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
