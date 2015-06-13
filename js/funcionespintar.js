/* Funcion para pintar donde le pasamos un array con todos los datos
y un numero de grafica para que la pueda colocar en un div

Entrada: retorno: el array devuelto por als funciones de datos
		numerograficas: el numero del div donde queremos representarla
		retorno2: parametro opcional, por si queremos meter dos sereies juntas
		
Devuelve: option: Variable entendida por HighChart*/
		
function pintargeneralempreaunica (retorno,numerograficas,retorno2){
	if (retorno2 == undefined)
	{
		var options = {
			chart: {   
				events: {
					click: function (event) {
						$("#informacion").show(1);
							setTimeout(function(){
								$("#informacion").fadeOut(5000);
								}, 7000);
					}
				},
				zoomType: 'x',
				panning: true,
				panKey: 'shift',
				renderTo: numerograficas,
			},
			title: { 
				text: retorno[2],
				x: -20
			},
			xAxis: {
				type: 'datetime',	 
			},
			plotOptions: {
				series: {
					pointStart: Date.UTC(retorno[5], retorno[4], 0),
					pointInterval: (24*3600*1000)*6 // one day
				}
			},
			yAxis: {
				title: {
					text: ''
				},
				min: 0,
				plotLines: [{
					value: 0,
					width: 1,
					color: '#808080'
				}]
			},
			legend: {
				enabled: false,
				layout: 'vertical',
				align: 'right',
				verticalAlign: 'middle',
				borderWidth: 0

			},
			 series: [{
				name: retorno[6],
				data: retorno[0]
			}]				
		};
	}
	else {
		var options = {
			chart: {   
				events: {
					click: function (event) {
						$("#informacion").show(1);
							setTimeout(function(){
								$("#informacion").fadeOut(5000);
								}, 7000);
					}
				},
				zoomType: 'x',
				panning: true,
				panKey: 'shift',
				renderTo: numerograficas,
			},
			title: { 
				text: retorno[2],
				x: -20
			},
			xAxis: {
				type: 'datetime',	 
			},
			plotOptions: {
				series: {
					pointStart: Date.UTC(retorno[5], retorno[4], 0),
					pointInterval: (24*3600*1000)*6 // one day
				}
			},
			yAxis: {
				title: {
					text: ''
				},
				min: 0,
				plotLines: [{
					value: 0,
					width: 1,
					color: '#808080'
				}]
			},
			legend: {
				enabled: false,
				layout: 'vertical',
				align: 'right',
				verticalAlign: 'middle',
				borderWidth: 0

			},
			series: [{
				name: retorno[6],
				data: retorno[0]
				},{
				name: retorno2[6],
				data: retorno2[0]
			}]				
		};
	}
	return options
}

/* Funcion para pintar donde le pasamos un array con todos los datos
y un numero de grafica para que la pueda colocar en un div

Entrada: retorno: el array devuelto por als funciones de datos
		numerograficas: el numero del div donde queremos representarla
		
Devuelve: option: Variable entendida por HighChart*/

function pintargeneral (retorno,numerograficas){
	var options = {
		chart: {   
			events: {
				click: function (event) {
					$("#informacion").show(1);
						setTimeout(function(){
							$("#informacion").fadeOut(5000);
							}, 7000);
				}
			},
			zoomType: 'x',
            panning: true,
            panKey: 'shift',
			renderTo: numerograficas
			//renderTo: 'pintar'+numerograficas,
		},
		title: { 
			text: retorno[2],
			//text: "",
			x: -20
		},
		xAxis: {
			type: 'datetime',	 
		},
		plotOptions: {
            series: {
				pointStart: Date.UTC(retorno[5], retorno[4], 0),
                pointInterval: (24*3600*1000)*6 // one day
            }
        },
		yAxis: {
			title: {
				text: ''
			},
			min: 0,
			plotLines: [{
				value: 0,
				width: 1,
				color: '#808080'
			}]
		},
		legend: {
			enabled: false,
			layout: 'vertical',
			align: 'right',
			verticalAlign: 'middle',
			borderWidth: 0

		},
		 series: [{
			name: retorno[6],
			data: retorno[0]
		}]				
	};
	return options
}
/* Funcion para pintar empresa donde le pasamos un array con todos los datos
y un numero de grafica para que la pueda colocar en un div

Entrada: retorno: el array devuelto por als funciones de datos
		numerograficas: el numero del div donde queremos representarla
		
Devuelve: option: Variable entendida por HighChart*/


function pintarempresa (retorno,numerograficas){
	var options = {
		chart: {   
			events: {
				click: function (event) {
					$("#informacion").show(1);
						setTimeout(function(){
							$("#informacion").fadeOut(5000);
							}, 7000);
				}
			},
			zoomType: 'x',
            panning: true,
            panKey: 'shift',
			renderTo: numerograficas,
		},
		title: { 
			text: retorno[2],
			x: -20
		},
		xAxis: {
			type: 'datetime',	 
		},
		plotOptions: {
            series: {
				pointStart: Date.UTC(retorno[5], retorno[4], 0),
                pointInterval: (24*3600*1000)*6 // one day
            }
        },
		yAxis: {
			title: {
				text: ''
			},
			min: 0,
			plotLines: [{
				value: 0,
				width: 1,
				color: '#808080'
			}]
		},
		legend: {
			enabled: false,
			layout: 'vertical',
			align: 'right',
			verticalAlign: 'middle',
			borderWidth: 0

		},
		 series: [{
			name: retorno[2],
			data: retorno[0]
		}]				
	};
	return options
}
/* Funcion para pintar un queso utilizada para las funciones de empresa

Entrada: retorno: el array devuelto por las funciones de datos
		numerograficas: el numero del div donde queremos representarla
			
Devuelve: option: Variable entendida por HighChart*/

function pintarempesa(retorno,numerografica){
	var options = {
		chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
			renderTo: numerografica,
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            },
			series: {
                cursor: 'pointer',
                events: {
                    click: function (event) {
						empresa = event.point.name;
						eventoempresa(empresa)
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Commits',
            data: retorno[0]
        }]
    };
	return options
}
/* Funcion para pintar un queso en 3d utilizada para las funciones de empresa

Entrada: retorno: el array devuelto por las funciones de datos
		numerograficas: el numero del div donde queremos representarla 
		
Devuelve: option: Variable entendida por HighChart*/
function pintarauthors3d(retorno,numerografica){

	var options = {
		chart: {
			type: 'pie',
			renderTo: numerografica,
			options3d: {
				enabled: true,
				alpha: 45
			}
		},
		title: {
			text: retorno[1]
		},
		plotOptions: {
			pie: {
				innerSize: 100,
				depth: 45
			},
		},
		series: [{
			name: 'Delivered amount',
			data: retorno[0]
		}]
	}
	return options
}

/* Funcion para pintar una piramide de poblacion utilizada para las funciones de demografia */

function pintardemografia(birth, aging,numerografica,titulo){
	//Recogemos el valor del campo dias
	dias = 180;
	options = crearpiramide(numerografica,titulo)

	//Parte de Birth
	periodos = cuentaperiodos(birth,dias)
	usuarios = creararraydatos(periodos)
	contador = creararraycontador(periodos)
	trabajadores = colocadatos(birth,usuarios,contador)
	datosgrafica = datosgrafrica(trabajadores)
	options.series.push({name: 'Attracted', data: datosgrafica})
	
	// Parte de Aging			
	periodos = cuentaperiodos(aging,dias)
	usuarios2 = creararraydatos(periodos)
	contador2 = creararraycontador(periodos)
	trabajadores2 = colocadatos(aging,usuarios2,contador2)
	datosgrafica2 = datosgrafrica(trabajadores2)		
	options.series.push({name: 'Retained', data: datosgrafica2})
	return options
}

function pintargraficoqueso(retorno,numerografica){
	var options = {
		chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
			renderTo: numerografica,
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            },
        },
        series: [{
            type: 'pie',
            data: retorno
        }]
    };
	return options
}
/* Funcion para rellenar con datos una tabla.

Entrada: array: array con los datos a rellenar
		 numerografica: En este caso seria el identificador de la grafica
		 titulo: Titulo de la tabla */
		 
function rellenatabla(array,numerografica,titulo){

	$('#tableBody'+numerografica).empty();
	$('#titleTable'+numerografica).empty();
	// Añadimos el nuvo titulo
	$('#titleTable'+numerografica).append(titulo);			
	
	//$('#'+identificadortabla).empty()
	//$('#'+identificadortabla).append('<tr><td><strong>Orden</strong></td><td><strong>Category</strong></td><td><strong>Total</strong></td></tr>')
	
	
	for (i = 0; i < array.length; i++){
		//$('#'+identificadortabla).append('<tr><td id="'+array[i][0]+'">'+(i+1)+'</td><td id="'+array[i][0]+'">'+array[i][0]+'</td><td id="'+array[i][0]+'">1'+array[i][1]+'</td></tr>');
		$('#tableBody'+numerografica).append('<tr class="odd"><td class="  sorting_1">'+(i+1)+'</td><td class=" ">'+array[i][0]+'</td><td class=" ">'+array[i][1]+'</td></tr>');
	}
}

/* Funcion para pintar el apartado Resumen.

Entrada: array: array con los datos a rellenar
		 titulo: Titulo de la tabla
		 numerografica: En este caso seria el identificador de la grafica*/
		 
function pintarresumen(datos,titulo,numerografica){

	var options = {
		chart: {
			renderTo: numerografica,
			zoomType: 'x',
			panning: true,
            panKey: 'shift',
		},
		legend: {
			enabled: false
		},
		 title: {
            text: titulo
        },
        xAxis: {
            categories: ['Total']
        },
        series: datos
    }
	return options
}
