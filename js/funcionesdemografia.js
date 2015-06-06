	// Funcion para saber los periodos que vamos a tener
	// devuelve los periodos en los que se va a dividir
	function cuentaperiodos(data,diasporperiodos) {
		var mayor = 0;
		for(f=0;f<=data.persons.age.length;f++)
		{	
			// Buscamos el numero mayor de dias
			if (parseInt(data.persons.age[f]) >= mayor){
				mayor = parseInt(data.persons.age[f])
			}
		}
		// Una vez obtenido el mayor dividimo entre los dias que vamos
		// a querer dividir
		var periodo = Math.round((mayor/diasporperiodos))
		return periodo
	}
			
	// Funcion crear un array con n posiciones y en cada posicion
	// otro array ya que el primero es para los periodos y otro para cada
	// trabajador
	function creararraydatos(periodos) {
		array = []
		for(f=0;f < periodos;f++)
		{
			array[f] = []
		}
		return array
	}
			
	// Funcion para crear un array con n posiciones todas inicializadas a
	// 0 ya que va a ser un contador
	function creararraycontador(periodos) {
		array = []
		for(f=0;f < periodos;f++)
			{
				array[f] = 0;
			}
		return array
	}
			
	// Funcion para extrader datos del json y colocarlos en el array.
	function colocadatos(data,array,contador) {
		for(f=0;f<data.persons.age.length;f++)
		{
			resto = Math.round((parseInt(data.persons.age[f])/180))
			if ((resto == 1) | (resto < 1)){
				// Creamos un array para almacenar nombre e identificador
				array[(0)][contador[0]] = []
				// Obtengo el nombre
				array[(0)][contador[0]][0] = data.persons.name[f]
				// Obtengo el id de la persona
				array[(0)][contador[0]][1] = data.persons.id[f]
				contador[0] = contador[0] + 1
			}
			else{
				// Creamos un array para almacenar nombre e identificador
				array[(resto-1)][contador[(resto-1)]] = []
				// Obtengo el nombre
				array[(resto-1)][contador[(resto-1)]][0] = data.persons.name[f]
				// Obtengo el id de la persona
				array[(resto-1)][contador[(resto-1)]][1] = data.persons.id[f]
				contador[(resto-1)] = contador[(resto-1)] + 1
			}
		}
		return array
	}
			
	// Funcion para enviar datos a la grafica, obtiene la cantidad de trabajadores
	// en cada periodo y los ordena segun nos los pide hichart
	function datosgrafrica(array) {
		arraydatos = []
		for(f=0;f < array.length;f++)
		{
			arraydatos[f] = array[f].length;
		}
		// Invierte un array
		arraydatos.reverse();
		return arraydatos
	}
			
	// Funcion crear un array de contador inicializado a 0
	function buscarsemanas(json) {
		var indice = 0;
		for(f=0;f < json.commits.length;f++)
		{
			if (json.commits[f] != 0){
				indice = f;
				f = json.commits.length
			}
		}
		return indice
	}
	
	// Con esta funcion creamos nuestra variable options
	// que se la pasaremos a nuestro Highchart para pintar
	// l grafica
	function crearpiramide(numerografica,titulo){
		//Valor empleado para el contenedor principal
		//Le damos mas margen para que el el chart
		//entre dentro sin problemas
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
				renderTo: numerografica,
				type: 'bar'
			},
			title: {
				text: titulo,
				x: -20
			},
			xAxis: {
				categories: ['4.5 Years', '4 Years', '3.5 Years', '3 Years','2.5 Years', '2 Years', '1.5 Years', '1 Year', '0.5 Year'],
			},
			yAxis: {
				title: {
					text: 'Personas Trabajando'
				},
				plotLines: [{
					value: 0,
					width: 1,
					color: '#808080'
				}]
			},
			legend: {
				layout: 'vertical',
				align: 'right',
				verticalAlign: 'middle',
				borderWidth: 0
		
			},
			series: [],
			
			plotOptions: {
	
			},
		};
		return options;
	}