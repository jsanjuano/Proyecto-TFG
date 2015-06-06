
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
*/
function datossimples(urljson,titulo,parametro){
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

/*Funcion para poder obtener los datos para los graficos de
en forma de queso, empleados en la seccion de empresas
*/
function datosempresapie(urljson, titulo){
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
			//alert(auxilar[0])
		}
	})
	//Guardamos los datos principales 
	retorno[0] = auxilar;
	//Guaramos el titulo
	retorno[1] = titulo
	return retorno
}
/*Esta funcion se disparara cuando lanzemos el evento de los chart
de los quesos*/

function eventoempresa(empresa){
	//Mostramos el contendor
	$('#containerempresaunica').css("display", "block")
	
	cargarfichero(empresa+"-scm-com-evolutionary.json",'empresaunica1')
	$("#empresaunica1").on("empresaunica1",function(event,trigger,data){
		arraycommits =datossimples(data,"Committs de "+empresa, "commits")
		options = pintargeneralempreaunica(arraycommits,1)
		var chart = new Highcharts.Chart(options);
	})
/* 	cargarfichero(empresa+"-scm-com-evolutionary.json",'empresaunica2')
	$("#empresaunica2").on("empresaunica2",function(event,trigger,data){
		arraycommits =datossimples(data,"Autores de "+empresa, "authors")
		options = pintargeneralempreaunica(arraycommits,2)
		var chart = new Highcharts.Chart(options);
	}) */
/* 	cargarfichero(empresa+"-scr-com-evolutionary.json",'empresaunica3')
	$("#empresaunica3").on("empresaunica3",function(event,trigger,data){
		arraymerged =datossimples(data,"Reviews submitted vs. Reviews merged de "+empresa, "merged")
		arraysubmitters =datossimples(data,"Reviews submitted vs. Reviews merged de "+empresa, "submitters")
		options = pintargeneralempreaunica(arraymerged,3,arraysubmitters)
		var chart = new Highcharts.Chart(options);
	})
	cargarfichero(empresa+"-its-com-evolutionary.json",'empresaunica4')
	$("#empresaunica4").on("empresaunica4",function(event,trigger,data){
		
		arrayclosed =datossimples(data,"Closed vs. Opened de "+empresa, "closed")
		arrayopened =datossimples(data,"Closed vs. Opened de "+empresa, "opened")
		options = pintargeneralempreaunica(arrayclosed,4,arrayopened)
		var chart = new Highcharts.Chart(options);
	})
	cargarfichero(empresa+"-its-com-evolutionary.json",'empresaunica5')
	$("#empresaunica5").on("empresaunica5",function(event,trigger,data){
		arrayclosers =datossimples(data,"Closers vs. Openers de "+empresa, "closers")
		arrayopeners =datossimples(data,"Closers vs. Openers de "+empresa, "openers")
		options = pintargeneralempreaunica(arrayclosers,5,arrayopeners)
		var chart = new Highcharts.Chart(options);
	})
	cargarfichero(empresa+"-mls-com-evolutionary.json",'empresaunica6')
	$("#empresaunica6").on("empresaunica6",function(event,trigger,data){
		arraysent =datossimples(data,"Mailing List Sent de "+empresa, "sent")
		options = pintargeneralempreaunica(arraysent,6)
		var chart = new Highcharts.Chart(options);
	})
	cargarfichero(empresa+"-mls-com-evolutionary.json",'empresaunica7')
	$("#empresaunica7").on("empresaunica7",function(event,trigger,data){
		arraysenders =datossimples(data,"Mailing List Senders de "+empresa, "senders")
		options = pintargeneralempreaunica(arraysenders,7)
		var chart = new Highcharts.Chart(options);
	}) */
}




