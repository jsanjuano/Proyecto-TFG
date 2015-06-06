/* Funcion utilizada para lanzar el evento de demografia el cual 
rellena la lista de los autores en un determinado periodo
de tiempo
Entrada: seleccionado: si es atracted o retainded
		 periodo: es el periodo d ela grafica que corresponde 4,4.5 años..
		 eventpoint: fila de la tabla*/
function demografialista(seleccionado,periodo,eventpoint,birth,aging,numerografica){
	// Al pedir una nueva representacion limpiamos la anterior
	$('#tableBody'+numerografica).empty();
	$('#titleTable'+numerografica).empty();
	// Añadimos el nuvo titulo
	$('#titleTable'+numerografica).append(seleccionado + ' Workers during ' + periodo);							
	count = 1;
	if (seleccionado == "Attracted"){
		// Es necesario volver a añadir el codigo porque si no tengo
		// acceso a las varibles que se manejan
		periodos = cuentaperiodos(birth,dias)
		usuarios = creararraydatos(periodos)
		contador = creararraycontador(periodos)
		trabajadores = colocadatos(birth,usuarios,contador)
		datosgrafica = datosgrafrica(trabajadores)
		
		// Para el fichero aging
		var periodos = cuentaperiodos(aging,dias)
		usuarios2 = creararraydatos(periodos)
		contador2 = creararraycontador(periodos)
		trabajadores2 = colocadatos(aging,usuarios2,contador2)
		datosgrafica2 = datosgrafrica(trabajadores2)		
		for(f=0;f<trabajadores[((periodos-1)-eventpoint)].length;f++)
		{
			var comprobar = -1;
			var encontrado = false;
			for(i=0;i<trabajadores2[((periodos-1)-eventpoint)].length;i++){
				if (trabajadores[((periodos-1)-eventpoint)][f][0] == trabajadores2[((periodos-1)-eventpoint)][i][0])
				{
					comprobar = 1;
				}
			}
			//var comprobar = trabajadores2[((periodos-1)-event.point.x)].indexOf(trabajadores[((periodos-1)-event.point.x)][f][0]);
			 if (comprobar == '-1'){
				//$('#lista'+numerografica).append('<li id="'+ trabajadores[((periodos-1)-eventpoint)][f][1] +'" class="efectolista">'+trabajadores[((periodos-1)-eventpoint)][f][0]+'</li> No sigue en el proyecto<br><br>');
				$('#tableBody'+numerografica).append('<tr class="odd"><td class="  sorting_1">'+count+'</td><td class=" ">'+ trabajadores[((periodos-1)-eventpoint)][f][1] +'</td><td class=" ">'+trabajadores[((periodos-1)-eventpoint)][f][0]+'</td><td class=" ">No sigue en el proyecto</td></tr>');
				count++;
			}
			else {
				//$('#lista'+numerografica).append(' <li id="'+ trabajadores[((periodos-1)-eventpoint)][f][1] +'" class="efectolista">'+trabajadores[((periodos-1)-eventpoint)][f][0]+'</li> Sigue en el proyecto<br><br>');
				$('#tableBody'+numerografica).append('<tr class="odd"><td class="  sorting_1">'+count+'</td><td class=" ">'+ trabajadores[((periodos-1)-eventpoint)][f][1] +'</td><td class=" ">'+trabajadores[((periodos-1)-eventpoint)][f][0]+'</td><td class=" ">Sigue en el proyecto</td></tr>');
				count++;
			}											
		}
	}
	else if (seleccionado == "Retained"){
		// Es necesario volver a añadir el codigo porque si no tengo
		// acceso a las varibles que se manejan
		periodos = cuentaperiodos(aging,dias)
		usuarios2 = creararraydatos(periodos)
		contador2 = creararraycontador(periodos)
		trabajadores2 = colocadatos(aging,usuarios2,contador2)
		datosgrafica2 = datosgrafrica(trabajadores2)		
		for(f=0;f<trabajadores2[((periodos-1)-eventpoint)].length;f++)
		{
			//$('#lista'+numerografica).append('<li id="'+ trabajadores2[((periodos-1)-eventpoint)][f][1] +'" class="efectolista">'+trabajadores2[((periodos-1)-eventpoint)][f][0]+'</li><br><br>');	
			$('#tableBody'+numerografica).append('<tr class="odd"><td class="  sorting_1">'+count+'</td><td class=" ">'+ trabajadores2[((periodos-1)-eventpoint)][f][1] +'</td><td class=" ">'+trabajadores2[((periodos-1)-eventpoint)][f][0]+'</td><td class=" ">Sigue en el proyecto</td></tr>');
			count++;
		}
	}
}
