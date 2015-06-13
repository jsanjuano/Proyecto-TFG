/* Funcion que actualiza las tablas para que cargen los estilos
y activen todas sus funciones */

function update(identTabla){
		function AllTables(){
		TestTable3(identTabla);
			LoadSelect2Script(MakeSelect2);
		}
		function MakeSelect2(){
			$('select').select2();
			$('.dataTables_filter').each(function(){
				$(this).find('label input[type=text]').attr('placeholder', 'Search');
			});
		}
		// Load Datatables and run plugin on tables 
		LoadDataTablesScripts(AllTables);
		// Add Drag-n-Drop feature
		WinMove();
	}
	
function update2(identTabla){
		function AllTables(){
		TestTable2(identTabla);
			LoadSelect2Script(MakeSelect2);
		}
		function MakeSelect2(){
			$('select').select2();
			$('.dataTables_filter').each(function(){
				$(this).find('label input[type=text]').attr('placeholder', 'Search');
			});
		}
		// Load Datatables and run plugin on tables 
		LoadDataTablesScripts(AllTables);
		// Add Drag-n-Drop feature
		WinMove();
	}
	
/* Funcion utilizada cuando se hace click en la pestaña GENERAL, destro de ella
se realizan la obtencion del fichero, el parseo de los datos y la representacion */
	
function showGeneral(){
		/////-----------------------------SCM------------------------------------------------------/////
		cargarfichero('scm-evolutionary.json','eventScmCommitsGeneral')
		$("#drawScmCommitsGeneral").on("eventScmCommitsGeneral",function(event,trigger,data){
			arraycommits = datossimples(data,"", "commits") 
			options = pintargeneral(arraycommits,"drawScmCommitsGeneral")
			var chart = new Highcharts.Chart(options);
		})
		
		cargarfichero('scm-evolutionary.json','eventScmAuthorsGeneral')	
		$("#drawScmAuthorGeneral").on("eventScmAuthorsGeneral",function(event,trigger,data){
			arrayauthorss =datossimples(data,"", "authors")
			options = pintargeneral(arrayauthorss,"drawScmAuthorGeneral")
			var chart2 = new Highcharts.Chart(options);
		})	
			
		cargarfichero('scm-companies-commits-summary.json','eventScmCommitsPerCompanyGeneral')
		$("#drawScmCommitsPerCompanyGeneral").on("eventScmCommitsPerCompanyGeneral",function(event,trigger,data){
			arrayempresasauthors = datosempresapie(data,'')
			options = pintarauthors3d(arrayempresasauthors,'drawScmCommitsPerCompanyGeneral')
			var chart10 = new Highcharts.Chart(options);
		})
		
		var json =[];
		$.when(
			$.getJSON('json/scm-demographics-birth.json').success(function(data) {
				json[0] = data;
			}),
			$.getJSON('json/scm-demographics-aging.json').success(function(data) {
				json[1] = data;
			})
		).done(function() {
			//Levantamos un trigger
			$("*").trigger("eventScmDemographicGeneral",["eventScmDemographicGeneral",json])
		}).fail(function(){
			//en caso de equivocarnos no nos olvidemos de colocar todo a 0
			alert("Error al cargar el fichero")
		})
		
		$("#drawScmDemographicGeneral").on("eventScmDemographicGeneral",function(event,trigger,json){
			// Para la parte de demografia de source code managament
			options = pintardemografia(json[0],json[1],'drawScmDemographicGeneral','')
			var chart = new Highcharts.Chart(options);	
		}) 
		
		/////-----------------------------SCR-----------------------------------------------------/////
		cargarfichero('scr-evolutionary.json','eventScrReviewsMergedGeneral')	
		$("#drawScrReviewsMergedGeneral").on("eventScrReviewsMergedGeneral",function(event,trigger,data){
			arraymerged =datossimples(data,"", "merged")
			options = pintargeneral(arraymerged,"drawScrReviewsMergedGeneral")
			var chart3 = new Highcharts.Chart(options);
		}) 
		cargarfichero('scr-evolutionary.json','eventScrReviewsSubmmittersGeneral')	
		$("#drawScrReviewsSubmmittersGeneral").on("eventScrReviewsSubmmittersGeneral",function(event,trigger,data){
			arrayasubmitters =datossimples(data,"", "submitters")
			options = pintargeneral(arrayasubmitters,"drawScrReviewsSubmmittersGeneral")
			var chart4 = new Highcharts.Chart(options);
		}) 	
		
		/////-----------------------------ITS-----------------------------------------------------/////
		cargarfichero('its-evolutionary.json','eventItsClosedGeneral')	
		$("#drawItsClosedGeneral").on("eventItsClosedGeneral",function(event,trigger,data){
			arrayclosed =datossimples(data, "", "closed")
			options = pintargeneral(arrayclosed,"drawItsClosedGeneral")
			var chart5 = new Highcharts.Chart(options);
		}) 
		cargarfichero('its-evolutionary.json','eventItsCloserGeneral')	
		$("#drawItsCloserGeneral").on("eventItsCloserGeneral",function(event,trigger,data){
			arrayclosers =datossimples(data,"", "closers")
			options = pintargeneral(arrayclosers,"drawItsCloserGeneral")
			var chart6 = new Highcharts.Chart(options);
		}) 
		cargarfichero('its-closed-companies-summary.json','eventItsTickedClosedPerComanyGeneral')
		$("#drawItsTickedClosedPerComanyGeneral").on("eventItsTickedClosedPerComanyGeneral",function(event,trigger,data){
			arrayempresasauthors = datosempresapie(data,'')
			options = pintarauthors3d(arrayempresasauthors,"drawItsTickedClosedPerComanyGeneral")
			var chart10 = new Highcharts.Chart(options);
		})
		var json =[];
		$.when(
			$.getJSON('json/its-demographics-birth.json').success(function(data) {
				json[0] = data;
			}),
			$.getJSON('json/its-demographics-aging.json').success(function(data) {
				json[1] = data;
			})
		).done(function() {
			//si lo hemos conseguido actualizamos nuestros datos
			$("*").trigger("eventItsDemographicGeneral",["eventItsDemographicGeneral",json])
		}).fail(function(){
			//en caso de equivocarnos no nos olvidemos de colocar todo a 0
			alert("Error al cargar el fichero")
		})
		
		$("#drawItsDemographicGeneral").on("eventItsDemographicGeneral",function(event,trigger,json){
			// Para la parte de demografia de source code managament
			options = pintardemografia(json[0],json[1],'drawItsDemographicGeneral','')
			var chart = new Highcharts.Chart(options);	
		}) 
		/////-----------------------------QAM-----------------------------------------------------/////
		cargarfichero('qaforums-evolutionary.json','eventQamQuestionPostedGeneral')	
		$("#drawQamQuestionPostedGeneral").on("eventQamQuestionPostedGeneral",function(event,trigger,data){
			arrayqsent =datossimples(data,"", "qsent")
			options = pintargeneral(arrayqsent,"drawQamQuestionPostedGeneral")
			var chart7 = new Highcharts.Chart(options);
		}) 
		cargarfichero('scr-evolutionary.json','eventQamPersonsPostingQuestionsGeneral')	
		$("#drawQamPersonsPostingQuestionsGeneral").on("eventQamPersonsPostingQuestionsGeneral",function(event,trigger,data){
			arrayqsenders =datossimples(data,"", "qsenders")
			options = pintargeneral(arrayqsenders,"drawQamPersonsPostingQuestionsGeneral")
			var chart8 = new Highcharts.Chart(options)
		})
			/////-----------------------------MLS------------------------------------------------------/////
		cargarfichero('mls-evolutionary.json','eventMLSCompaniesGeneral')
		$("#drawMLSCompaniesGeneral").on("eventMLSCompaniesGeneral",function(event,trigger,data){
			arraycommits = datossimples(data,"", "companies") 
			options = pintargeneral(arraycommits,"drawMLSCompaniesGeneral")
			var chart = new Highcharts.Chart(options);
		})	
		cargarfichero('mls-evolutionary.json','eventMLSRepositoriesGeneral')	
		$("#drawMLSRepositoriesGeneral").on("eventMLSRepositoriesGeneral",function(event,trigger,data){
			arrayauthorss =datossimples(data,"", "repositories")
			options = pintargeneral(arrayauthorss,"drawMLSRepositoriesGeneral")
			var chart2 = new Highcharts.Chart(options);
		})			
		cargarfichero('mls-companies.json','eventMLSSenderPerComapnyGeneral')
		$("#drawMLSSenderPerComapnyGeneral").on("eventMLSSenderPerComapnyGeneral",function(event,trigger,data){
			arrayempresascommits = datosempresapiecompanies(data,'','senders_365','name')
			options = pintarauthors3d(arrayempresascommits,"drawMLSSenderPerComapnyGeneral")
			var chart9 = new Highcharts.Chart(options);
		})
		var json =[];
		$.when(
			$.getJSON('json/mls-demographics-birth.json').success(function(data) {
				json[0] = data;
			}),
			$.getJSON('json/mls-demographics-aging.json').success(function(data) {
				json[1] = data;
			})
		).done(function() {
			//si lo hemos conseguido actualizamos nuestros datos
			$("*").trigger("eventMLSDemographicGeneral",["eventMLSDemographicGeneral",json])
		}).fail(function(){
			//en caso de equivocarnos no nos olvidemos de colocar todo a 0
			alert("Error al cargar el fichero")
		})
		
		$("#drawMLSDemographicGeneral").on("eventMLSDemographicGeneral",function(event,trigger,json){
			// Para la parte de demografia de source code managament
			options = pintardemografia(json[0],json[1],'drawMLSDemographicGeneral','')
			var chart = new Highcharts.Chart(options);	
		})  
}
/* Funcion utilizada cuando se hace click en la pestaña SCM, dentro de ella
se realizan la obtencion del fichero, el parseo de los datos y la representacion 
admite tres parametros por dependiendo de cual queramos activar para representar */

function showBusiness(scm,its,mls){
	//Para SCM
	if (scm == true){
		cargarfichero('scm-companies-commits-summary.json','eventScmCommitsPerComanyBusiness')
		$("#drawScmCommitsPerComanyBusiness").on("eventScmCommitsPerComanyBusiness",function(event,trigger,data){
			arrayempresascommits = datosempresapie(data,'')
			options = pintarempesa(arrayempresascommits,"drawScmCommitsPerComanyBusiness")
			var chart9 = new Highcharts.Chart(options);
		})	
		cargarfichero('scm-companies.json','eventScmAuthorPerComapnyBusiness')
		$("#drawScmAuthorPerComapnyBusiness").on("eventScmAuthorPerComapnyBusiness",function(event,trigger,data){
			arrayempresasauthors = datosempresapiecompanies(data,'','authors_365','name')
			options = pintarauthors3d(arrayempresasauthors,'drawScmAuthorPerComapnyBusiness')
			Highcharts.setOptions({
				plotOptions: {
					series: {
						cursor: 'pointer',
							events: {
							click: function (event) {
								empresa = event.point.name;
								eventoempresa(empresa)
							}
						}
					} 
				}
			})	
			var chart10 = new Highcharts.Chart(options);
		})
		cargarfichero('scm-evolutionary.json','eventScmActiveCompaniesBusiness')
		$("#drawScmActiveCompaniesBusiness").on("eventScmActiveCompaniesBusiness",function(event,trigger,data){
			arraycompanies =datossimples(data,"", "companies")
			options = pintarempresa(arraycompanies,'drawScmActiveCompaniesBusiness')
			var chart2 = new Highcharts.Chart(options);
		})
	}
	if (its == true){
		//Para ITS
		cargarfichero('its-closed-companies-summary.json','eventItsCommitsPerCompanyBusiness')
		$("#drawItsCommitsPerCompanyBusiness").on("eventItsCommitsPerCompanyBusiness",function(event,trigger,data){
			arrayempresascommit = datosempresapie(data,'')
			options = pintarempesa(arrayempresascommit,"drawItsCommitsPerCompanyBusiness")
			var chart12 = new Highcharts.Chart(options);
		})	
		cargarfichero('its-companies.json','eventItsClosedPerCompanyBusiness')
		$("#drawItsClosedPerCompanyBusiness").on("eventItsClosedPerCompanyBusiness",function(event,trigger,data){
			arrayempresasauthors = datosempresapiecompanies(data,'','closed_365','name')
			options = pintarauthors3d(arrayempresasauthors,"drawItsClosedPerCompanyBusiness")
			Highcharts.setOptions({
				plotOptions: {
					series: {
						cursor: 'pointer',
							events: {
							click: function (event) {
								empresa = event.point.name;
								eventoempresa(empresa)
							}
						}
					} 
				}
			})	 
			var chart10 = new Highcharts.Chart(options);
		})
		cargarfichero('its-evolutionary.json','eventItsCompaniesBusiness')
		$("#drawItsCompaniesBusiness").on("eventItsCompaniesBusiness",function(event,trigger,data){
			arraycompanies =datossimples(data,"", "companies")
			options = pintarempresa(arraycompanies,"drawItsCompaniesBusiness")
			var chart2 = new Highcharts.Chart(options);
		})
	}
	if (mls == true){
		//Para MLS
		cargarfichero('mls-companies.json','eventMlsSendersPerCompanyBusiness')
		$("#drawMlsSendersPerCompanyBusiness").on("eventMlsSendersPerCompanyBusiness",function(event,trigger,data){
			arrayempresascommits = datosempresapiecompanies(data,'','senders_365','name')
			options = pintarauthors3d(arrayempresascommits,"drawMlsSendersPerCompanyBusiness")
			 Highcharts.setOptions({
				plotOptions: {
					series: {
						cursor: 'pointer',
							events: {
							click: function (event) {
								empresa = event.point.name;
								eventoempresa(empresa)
							}
						}
					} 
				}
			})
			var chart9 = new Highcharts.Chart(options);
		})	
		
		cargarfichero('mls-evolutionary.json','eventMlsActiveCompaniesBusiness')
		$("#drawMlsActiveCompaniesBusiness").on("eventMlsActiveCompaniesBusiness",function(event,trigger,data){
			arraycompanies =datossimples(data,"", "companies")
			options = pintarempresa(arraycompanies,"drawMlsActiveCompaniesBusiness")
			var chart2 = new Highcharts.Chart(options);
		})
	 }
}
/* Funcion utilizada cuando se hace click en la pestaña DEMOGRAPHIC, dentro de ella
se realizan la obtencion del fichero, el parseo de los datos y la representacion 
admite tres parametros por dependiendo de cual queramos activar para representar */

function showDemographic(scm,its,mls){

	var json =[];
// Para la parte de SCM
	if (scm == true){
		$.when(
			$.getJSON('json/scm-demographics-birth.json').success(function(data) {
				json[0] = data;
			}),
			$.getJSON('json/scm-demographics-aging.json').success(function(data) {
				json[1] = data;
			})
		).done(function() {
			//Levantamos el trigger
			$("*").trigger("eventScmDemographic",["eventScmDemographic",json])
		}).fail(function(){
			alert("Error al cargar el fichero")
		})
		
		$("#drawScmSourCodeDevelopmentDemographic").on("eventScmDemographic",function(event,trigger,json){
			// Para la parte de demografia de source code managament
			options = pintardemografia(json[0],json[1],"drawScmSourCodeDevelopmentDemographic",'')
			Highcharts.setOptions({
				plotOptions: {
					series: {
						cursor: 'pointer',
						events: {
							click: function (event) {
								demografialista(this.name,event.point.category,event.point.x,json[0],json[1],'ScmDemographic')
								update('tableScmDemographic');
							}
						}
					}
				}
			})	
			var chart = new Highcharts.Chart(options);	
		}) 
		//Evento de la tabla de autores que dispara la informacion de un autor
		$( document ).on( "click", "#tableScmDemographic td", function(){
			identificador = $(this).closest("tr").find('td:eq(1)').html();
			nombre = $(this).closest("tr").find('td:eq(2)').html();
			cargarfichero('people-'+identificador+'-scm-evolutionary.json','eventScmAuthorTableDemographic')
			$("#drawScmAuthorTableDemographic").on("eventScmAuthorTableDemographic",function(event,trigger,data){
				arrayautor = datossimples(data,'Commit de '+nombre,'commits')
				options = pintargeneral(arrayautor,"drawScmAuthorTableDemographic")
				var chart = new Highcharts.Chart(options);	
				$("[id^='showDemograpgicSCMRowEvent']").css("display", "block")
			})
		})	
	}
	if (its == true){
		// Para la parte de ITS
		$.when(
			$.getJSON('json/its-demographics-birth.json').success(function(data) {
				json[0] = data;		
			}),
			$.getJSON('json/its-demographics-aging.json').success(function(data) {
				json[1] = data;
			})
		).done(function() {
			//Levantamos un trigger
			$("*").trigger("eventItsDemographic",["eventItsDemographic",json])
		}).fail(function(){
			alert("Error al cargar el fichero para la demografia de Tickets")
		})
		$("#drawItsTicketsParticipantsDemographic").on("eventItsDemographic",function(event,trigger,json){
			//Para la parte de demografica its
			options = pintardemografia(json[0],json[1],'drawItsTicketsParticipantsDemographic','')
			Highcharts.setOptions({
				plotOptions: {
					series: {
						cursor: 'pointer',
						events: {
							click: function (event) {
								demografialista(this.name,event.point.category,event.point.x,json[0],json[1],'ItsDemographic')		
								update('tableItsDemographic');
							}
						}
					}
				}
			})
			var chart = new Highcharts.Chart(options);
		})
		
		$( document ).on( "click", "#tableItsDemographic td", function(){
			identificador = $(this).closest("tr").find('td:eq(1)').html();
			nombre = $(this).closest("tr").find('td:eq(2)').html();
			cargarfichero('people-'+identificador+'-its-evolutionary.json','eventItsAuthorTableDemographic')
			$("#drawItsAuthorTableDemographic").on("eventItsAuthorTableDemographic",function(event,trigger,data){
				arrayautor = datossimples(data,'Ticket Closed de '+nombre,'closed')
				options = pintargeneral(arrayautor,"drawItsAuthorTableDemographic")
				var chart = new Highcharts.Chart(options);
			    $("[id^='showDemograpgicITSEvent']").css("display", "block")
			})
			
		})
	}
	if (mls == true){
		// Para la parte de MLS
		$.when(
			$.getJSON('json/mls-demographics-birth.json').success(function(data) {
				json[0] = data;		
			}),
			$.getJSON('json/mls-demographics-aging.json').success(function(data) {
				json[1] = data;
			})
		).done(function() {
			//Levantamos el trigger
			$("*").trigger("eventMlsDemographic",["eventMlsDemographic",json])
		}).fail(function(){
			alert("Error al cargar el fichero para la demografia de Tickets")
		})
		$("#drawMlsDemographic").on("eventMlsDemographic",function(event,trigger,json){
			//Para la parte de demografica its
			options = pintardemografia(json[0],json[1],'drawMlsDemographic','')
			Highcharts.setOptions({
				plotOptions: {
					series: {
						cursor: 'pointer',
						events: {
							click: function (event) {
								demografialista(this.name,event.point.category,event.point.x,json[0],json[1],'MlsDemographic');
								update('tableMlsDemographic');
							}
						}
					}
				}
			})
			var chart = new Highcharts.Chart(options);
		})

		$( document ).on( "click", "#tableMlsDemographic td", function(){
			identificador = $(this).closest("tr").find('td:eq(1)').html();
			nombre = $(this).closest("tr").find('td:eq(2)').html();
			cargarfichero('people-'+identificador+'-mls-evolutionary.json','eventMlsAuthorTableDemographic')
			$("#drawMlsAuthorTableDemographic").on("eventMlsAuthorTableDemographic",function(event,trigger,data){
				arrayautor = datossimples(data,'MLS de '+nombre,'sent')
				options = pintargeneral(arrayautor,"drawMlsAuthorTableDemographic")
				var chart = new Highcharts.Chart(options);	
				$("[id^='showDemograpgicMLSEvent']").css("display", "block")
			})	
		})
	}
}
/* Funcion utilizada cuando se hace click en la pestaña SCM, dentro de ella
se realizan la obtencion del fichero, el parseo de los datos y la representacion*/

function showSCM(){
	cargarfichero('scm-evolutionary.json','eventScmCommitsSCM')
		$("#drawScmCommitsSCM").on("eventScmCommitsSCM",function(event,trigger,data){
			arraycommits =datossimples(data,"", "commits")
			options = pintargeneral(arraycommits,"drawScmCommitsSCM")
			var chart3 = new Highcharts.Chart(options);	
		})
	cargarfichero('scm-evolutionary.json','eventScmAuthorSCM')
		$("#drawScmAuthorSCM").on("eventScmAuthorSCM",function(event,trigger,data){	
			arrayaauthors =datossimples(data,"", "authors")
			options = pintargeneral(arrayaauthors,"drawScmAuthorSCM")
			var chart4 = new Highcharts.Chart(options);
		})
	cargarfichero('scm-evolutionary.json','eventScmFilesSCM')
		$("#drawScmFilesSCM").on("eventScmFilesSCM",function(event,trigger,data){	
			arrayfiles  =datossimples(data,"", "files")
			options = pintargeneral(arrayfiles,"drawScmFilesSCM")
			var chart5 = new Highcharts.Chart(options);
		})
		
	cargarfichero('scm-evolutionary.json','eventScmGeneralSituationSCM')
		$("#drawScmGeneralSituationSCM").on("eventScmGeneralSituationSCM",function(event,trigger,data){	
			// Obtenemos los datos de la tabla
			retorno = datostabla(data)
			// Rellenamos la tabla
			rellenatabla(retorno,"SCM","Tags Source Code Management")
			//Actualizamos la tabla
			update('tableSCM')
			// Pintamos la grafica 
			options = pintargraficoqueso(retorno,"drawScmGeneralSituationSCM")
			var chart9 = new Highcharts.Chart(options);
			})
			
	cargarfichero('scm-evolutionary.json','eventScmAddedLinesRemovedLinesSCM')
		$("#drawScmAddedLinesRemovedLinesSCM").on("eventScmAddedLinesRemovedLinesSCM",function(event,trigger,data){				
			arrayadded_lines =datossimples(data,"", "added_lines")
			arrayremoved_lines =datossimples(data,"", "removed_lines")
			options = pintargeneralempreaunica(arrayadded_lines,'drawScmAddedLinesRemovedLinesSCM',arrayremoved_lines)
			var chart6 = new Highcharts.Chart(options);
		})
		
		// Creamos un una grafica para tenerla visible para el futuro para evento dela tabla
		arrayqam =datossimplesconcargafichero('json/scm-evolutionary.json',"" , "authors")
		options = pintargeneral(arrayqam,"drawScmTagsSCM")
		var chart10 = new Highcharts.Chart(options);
		//Disparamos un evento al pinchar en la tabla
		$( document ).on( "click", "#tableSCM td", function(e){
			identificador = $(this).closest("tr").find('td:eq(1)').html();
			if (e.ctrlKey){
				// Estamos pinchando con el control por lo tanto añadimos al chart a nuestra serie
				// Para poder compararlas
				arrayopened =datossimplesconcargafichero('json/scm-evolutionary.json',"", identificador)
				chart10.addSeries({
					data: arrayopened[0],
					name: arrayopened[6]
				})
			}
			else{
				//Borramos todo lo existente porque al pinchar solo con el click, solo queremos
				// esa propiedad 
				//Obtenemos el total de las series menos uno por empiezan en 0
				var i = chart10.series.length - 1;
				while (i >= 0){
					//Vamos borrando las series.
					chart10.series[i].remove();
					i = i-1;
				}
				//Añadimos la nueva serie que queremos 
				arrayopened =datossimplesconcargafichero('json/scm-evolutionary.json',"", identificador)
				chart10.addSeries({
					data: arrayopened[0],
					name: arrayopened[6]
				})
			}
			$("[id^='showSCMOnlyEvent']").css("display", "block")
		})
}
/* Funcion utilizada cuando se hace click en la pestaña ITS, dentro de ella
se realizan la obtencion del fichero, el parseo de los datos y la representacion*/

function showITS(){
	cargarfichero('its-evolutionary.json','eventItsClosedvsOpendITS')
		$("#drawItsClosedvsOpendITS").on("eventItsClosedvsOpendITS",function(event,trigger,datas){	
			arrayclosed =datossimples(datas,"", "closed")
			options = pintargeneral(arrayclosed,"drawItsClosedvsOpendITS")
			var chart3 = new Highcharts.Chart(options);
			arrayopened =datossimples(datas,"Closed vs. Opened", "opened")
			chart3.addSeries({
				data: arrayopened[0],
				name: arrayopened[6]
				})
		})
	cargarfichero('its-evolutionary.json','eventItsPeopleClosingTicketsITS')
		$("#drawItsPeopleClosingTicketsITS").on("eventItsPeopleClosingTicketsITS",function(event,trigger,data){			
			arrayclosed =datossimples(data,"", "closed")
			options = pintargeneral(arrayclosed,"drawItsPeopleClosingTicketsITS")
			var chart3 = new Highcharts.Chart(options); 
		})
	cargarfichero('its-evolutionary.json','eventItsPeopleSubmittingTicketsITS')
		$("#drawItsPeopleSubmittingTicketsITS").on("eventItsPeopleSubmittingTicketsITS",function(event,trigger,data){	
			arrayclosed =datossimples(data,"", "closed")
			options = pintargeneral(arrayclosed,"drawItsPeopleSubmittingTicketsITS")
			var chart3 = new Highcharts.Chart(options);
		})
	cargarfichero('its-evolutionary.json','eventItsGeneralSituationITS')
		$("#drawItsGeneralSituationITS").on("eventItsGeneralSituationITS",function(event,trigger,data){	
			// Obtenemos los datos de la tabla
			retorno = datostabla(data)
			// Rellenamos la tabla
			rellenatabla(retorno,"ITS","Tags ITS")
			//Actualizamos la tabla
			update('tableITS')
			// Pintamos la grafica 
			options = pintargraficoqueso(retorno,"drawItsGeneralSituationITS")
			var chart9 = new Highcharts.Chart(options);	
		})
		
		// Creamos un una grafica para tenerla visible para el futuro
		arrayqam =datossimplesconcargafichero('json/its-evolutionary.json',"" , "Confirmed")
		options = pintargeneral(arrayqam,"drawItsTagsITS")
		var chart10 = new Highcharts.Chart(options);
		//Disparamos un evento al pinchar en la tabla
		$( document ).on( "click", "#tableITS td", function(e){
			identificador = $(this).closest("tr").find('td:eq(1)').html();
			if (e.ctrlKey){
				// Estamos pinchando con el control por lo tanto añadimos al char nuestra serie
				// Para poder compararlas
				arrayopened =datossimplesconcargafichero('json/its-evolutionary.json',"", identificador)
				chart10.addSeries({
					data: arrayopened[0],
					name: arrayopened[6]
				})
			}
			else{
				//Borramos todo lo existente porque al pinchar solo con el click, solo queremos
				// esa propiedad 
				//Obtenemos el total de las series menos uno por empiezan en 0
				var i = chart10.series.length - 1;
				while (i >= 0){
					//Vamos borrando las series.
					chart10.series[i].remove();
					i = i-1;
				}
				//Añadimos la nueva serie que queremos 
				arrayopened =datossimplesconcargafichero('json/its-evolutionary.json',"", identificador)
				chart10.addSeries({
					data: arrayopened[0],
					name: arrayopened[6]
				})	
			}
			$("[id^='showITSOnlyEvent']").css("display", "block")
		})

}
/* Funcion utilizada cuando se hace click en la pestaña QAM, dentro de ella
se realizan la obtencion del fichero, el parseo de los datos y la representacion*/

function showQAM(){
	cargarfichero('qaforums-evolutionary.json','eventQamQuestionPostedQAM')
		$("#drawQamQuestionPostedQAM").on("eventQamQuestionPostedQAM",function(event,trigger,data){	
			arrayqsent =datossimples(data,"", "qsent")
			options = pintargeneral(arrayqsent,"drawQamQuestionPostedQAM")
			var chart3 = new Highcharts.Chart(options);
		})
	cargarfichero('qaforums-evolutionary.json','eventQamPersonPostingQuestionsQAM')
		$("#drawQamPersonPostingQuestionsQAM").on("eventQamPersonPostingQuestionsQAM",function(event,trigger,data){	
			arrayclosed =datossimples(data,"", "qsenders")
			options = pintargeneral(arrayclosed,"drawQamPersonPostingQuestionsQAM")
			var chart3 = new Highcharts.Chart(options);
		})
	cargarfichero('qaforums-evolutionary.json','eventQamAnswersPostedQAM')
		$("#drawQamAnswersPostedQAM").on("eventQamAnswersPostedQAM",function(event,trigger,data){	
			arrayclosed =datossimples(data,"", "asent")
			options = pintargeneral(arrayclosed,"drawQamAnswersPostedQAM")
			var chart3 = new Highcharts.Chart(options);
		})
	cargarfichero('qaforums-evolutionary.json','eventQamGeneralSituationQAM')
		$("#drawQamGeneralSituationQAM").on("eventQamGeneralSituationQAM",function(event,trigger,data){			
			// Obtenemos los datos de la tabla
			retorno = datostabla(data)
			// Rellenamos la tabla
			rellenatabla(retorno,"QAM","Tags QAM")
			//Actualizamos la tabla
			update('tableQAM')
			// Pintamos la grafica 
			options = pintargraficoqueso(retorno,"drawQamGeneralSituationQAM")
			var chart9 = new Highcharts.Chart(options);
		})
		// Creamos un una grafica para tenerla visible para el futuro
		arrayqam =datossimplesconcargafichero('json/qaforums-evolutionary.json',"" , "qsenders")
		options = pintargeneral(arrayqam,"drawQamTagsQAM")
		var chart10 = new Highcharts.Chart(options);
		
		//Disparamos un evento al pinchar en la tabla
		$( document ).on( "click", "#tableQAM td", function(e){
			identificador = $(this).closest("tr").find('td:eq(1)').html();
			if (e.ctrlKey){
				// Estamos pinchando con el control por lo tanto añadimos al char nuestra serie
				// Para poder compararlas
				arrayopened =datossimplesconcargafichero('json/qaforums-evolutionary.json',"", identificador)
				chart10.addSeries({
					data: arrayopened[0],
					name: arrayopened[6]
				})
			}
			else{
				//Borramos todo lo existente porque al pinchar solo con el click, solo queremos
				// esa propiedad 
				//Obtenemos el total de las series menos uno por empiezan en 0
				var i = chart10.series.length - 1;
				while (i >= 0){
					//Vamos borrando las series.
					chart10.series[i].remove();
					i = i-1;
				}
				//Añadimos la nueva serie que queremos 
				arrayopened =datossimplesconcargafichero('json/qaforums-evolutionary.json',"", identificador)
				chart10.addSeries({
					data: arrayopened[0],
					name: arrayopened[6]
				})
			}
			$("[id^='showQAMOnlyEvent']").css("display", "block")
		})

}
/* Funcion utilizada cuando se hace click en la pestaña MLS, dentro de ella
se realizan la obtencion del fichero, el parseo de los datos y la representacion */

function showMLS(){
	cargarfichero('mls-evolutionary.json','eventMlsSentMLS')
		$("#drawMlsSentMLS").on("eventMlsSentMLS",function(event,trigger,data){	
			arrayqsent =datossimples(data,"", "sent")
			options = pintargeneral(arrayqsent,"drawMlsSentMLS")
			var chart3 = new Highcharts.Chart(options);
		})
		
	cargarfichero('mls-evolutionary.json','eventMlsSendersMLS')
		$("#drawMlsSendersMLS").on("eventMlsSendersMLS",function(event,trigger,data){	
			arrayqsent =datossimples(data,"", "senders")
			options = pintargeneral(arrayqsent,"drawMlsSendersMLS")
			var chart3 = new Highcharts.Chart(options);
		})
		
	cargarfichero('mls-evolutionary.json','eventMlsSentResponseSendersResponseMLS')
		$("#drawMlsSentResponseSendersResponseMLS").on("eventMlsSentResponseSendersResponseMLS",function(event,trigger,data){
			arraypending =datossimples(data,"Sent Responde vs Senders Response", "sent_response")
			options = pintargeneral(arraypending,"drawMlsSentResponseSendersResponseMLS")
			var chart3 = new Highcharts.Chart(options);
			arraymerged =datossimples(data,"", "merged")
			arrayabandoned =datossimples(data,"Reviews submitted vs. Reviews merged vs. Reviews abandoned", "senders_response")
			chart3.addSeries({
				data: arraymerged[0],
				name: arraymerged[6],
				})
			chart3.addSeries({
				data: arrayabandoned[0],
				name: arrayabandoned[6],
				})
		})
		
	cargarfichero('mls-evolutionary.json','eventMlsGeneralSituationMLS')
		$("#drawMlsGeneralSituationMLS").on("eventMlsGeneralSituationMLS",function(event,trigger,data){			
			// Obtenemos los datos de la tabla
			retorno = datostabla(data)
			// Rellenamos la tabla
			rellenatabla(retorno,"MLS","Tags MLS")
			//Actualizamos la tabla
			update('tableMLS')
			// Pintamos la grafica 
			options = pintargraficoqueso(retorno,"drawMlsGeneralSituationMLS")
			var chart9 = new Highcharts.Chart(options);
		})
		
		// Creamos un una grafica para tenerla visible para el futuro
		arraymls =datossimplesconcargafichero('json/mls-evolutionary.json',"" , "sent")
		options = pintargeneral(arraymls,"drawMlsTagsMLS")
		var chart10 = new Highcharts.Chart(options);
		//Disparamos un evento al pinchar en la tabla
		$( document ).on( "click", "#tableMLS td", function(e){
			identificador = $(this).closest("tr").find('td:eq(1)').html();
			if (e.ctrlKey){
				// Estamos pinchando con el control por lo tanto añadimos al char nuestra serie
				// Para poder compararlas
				arrayopened =datossimplesconcargafichero('json/mls-evolutionary.json',"", identificador)
				chart10.addSeries({
					data: arrayopened[0],
					name: arrayopened[6]
				})
			}
			else{
				//Borramos todo lo existente porque al pinchar solo con el click, solo queremos
				// esa propiedad 
				//Obtenemos el total de las series menos uno por empiezan en 0
				var i = chart10.series.length - 1;
				while (i >= 0){
					//Vamos borrando las series.
					chart10.series[i].remove();
					i = i-1;
				}
				//Añadimos la nueva serie que queremos 
				arrayopened =datossimplesconcargafichero('json/mls-evolutionary.json',"", identificador)
				chart10.addSeries({
					data: arrayopened[0],
					name: arrayopened[6]
				})
			}
			$("[id^='showMLSOnlyEvent']").css("display", "block")
		})
}
/* Funcion utilizada cuando se hace click en la pestaña SCR, dentro de ella
se realizan la obtencion del fichero, el parseo de los datos y la representacion */

function showSCR(){
	cargarfichero('scr-evolutionary.json','eventScrReviewsPendingSCR')
		$("#drawScrReviewsPendingSCR").on("eventScrReviewsPendingSCR",function(event,trigger,data){	
			arraypending =datossimples(data,"", "pending")
			options = pintargeneral(arraypending,"drawScrReviewsPendingSCR")
			var chart3 = new Highcharts.Chart(options); 
		})
	cargarfichero('scr-evolutionary.json','eventScrReviewsSubmittedVsMergedVsAbandonedSCR')
		$("#drawScrReviewsSubmittedVsMergedVsAbandonedSCR").on("eventScrReviewsSubmittedVsMergedVsAbandonedSCR",function(event,trigger,data){
			arraypending =datossimples(data,"", "submitted")
			options = pintargeneral(arraypending,"drawScrReviewsSubmittedVsMergedVsAbandonedSCR")
			var chart3 = new Highcharts.Chart(options);
			arraymerged =datossimples(data,"Reviews submitted vs. Reviews merged vs. Reviews abandoned", "merged")
			arrayabandoned =datossimples(data,"Reviews submitted vs. Reviews merged vs. Reviews abandoned", "abandoned")
			chart3.addSeries({
				data: arraymerged[0],
				name: arraymerged[6],
				})
			chart3.addSeries({
				data: arrayabandoned[0],
				name: arrayabandoned[6],
				})
		})

	cargarfichero('scr-evolutionary.json','eventScrGetDataSCR')
		$("#tableSCR").on("eventScrGetDataSCR",function(event,trigger,data){
			// Obtenemos los datos de la tabla
			retorno = datostabla(data)
			// Rellenamos la tabla
			rellenatabla(retorno,"SCR","Tags SCR")
			//Actualizamos la tabla
			update('tableSCR')
		})
		
		// Creamos un una grafica para tenerla visible para el futuro
		arrayqam =datossimplesconcargafichero('json/scr-evolutionary.json',"" , "qsenders")
		options = pintargeneral(arrayqam,"drawScrTagsSCR")
		var chart10 = new Highcharts.Chart(options); 
		//Disparamos un evento al pinchar en la tabla
		$( document ).on( "click", "#tableSCR td", function(e){
			identificador = $(this).closest("tr").find('td:eq(1)').html();
			
			if (e.ctrlKey){
				// Estamos pinchando con el control por lo tanto añadimos al char nuestra serie
				// Para poder compararlas
				arrayopened =datossimplesconcargafichero('json/scr-evolutionary.json',"", identificador)
				chart10.addSeries({
					data: arrayopened[0],
					name: arrayopened[6]
				})
			}
			else{
				//Borramos todo lo existente porque al pinchar solo con el click, solo queremos
				// esa propiedad 
				//Obtenemos el total de las series menos uno por empiezan en 0
				var i = chart10.series.length - 1;
				while (i >= 0){
					//Vamos borrando las series.
					chart10.series[i].remove();
					i = i-1;
				}
				//Añadimos la nueva serie que queremos 
				arrayopened =datossimplesconcargafichero('json/scr-evolutionary.json',"", identificador)
				chart10.addSeries({
					data: arrayopened[0],
					name: arrayopened[6]
				})
			}
			$("[id^='showSCROnlyEvent']").css("display", "block")
		})


}
/* Funcion utilizada cuando se hace click en la pestaña ABSTRACT, dentro de ella
se realizan la obtencion del fichero, el parseo de los datos y la representacion 
admite seis parametros por dependiendo de cual queramos activar para representar */

function abstractInformation(scm,scr,its,qam,mls,irc){
	if (scm == true){
		cargarfichero('scm-static.json','eventScmAbstract')
		$("#drawScmAbstract").on("eventScmAbstract",function(event,trigger,data){	
			datos = datosresumengrafica(data)
			options = pintarresumen(datos[0],"Resumen SCM",'drawScmAbstract')
			chart9 = new Highcharts.Chart(options);
			datostexto = datosresumentexto(data,"aaa")
			rellenatabla(datostexto[0],"SCMAbstrac","Abstrac SCM")
			//Actualizamos la tabla
			update('tableSCMAbstrac')		
		})
	}
	if (scr == true){
		cargarfichero('scr-static.json','eventScrAbstract')
		$("#drawScrAbstract").on("eventScrAbstract",function(event,trigger,data){	
			datos = datosresumengrafica(data)
			options = pintarresumen(datos[0],"Resumen SCR",'drawScrAbstract')
			chart9 = new Highcharts.Chart(options);
			datostexto = datosresumentexto(data,"aaa")
			rellenatabla(datostexto[0],"SCRAbstrac","Abstrac SCR")
			//Actualizamos la tabla
			update('tableSCRAbstrac')		
		})
	}
	if (its == true){
		cargarfichero('its-static.json','eventItsAbstract')
		$("#drawItsAbstract").on("eventItsAbstract",function(event,trigger,data){	
			datos = datosresumengrafica(data)
			options = pintarresumen(datos[0],"Resumen ITS",'drawItsAbstract')
			chart9 = new Highcharts.Chart(options);
			datostexto = datosresumentexto(data,"aaa")
			rellenatabla(datostexto[0],"ITSAbstrac","Abstrac ITS")
			//Actualizamos la tabla
			update('tableITSAbstrac')	
		})
	}
	if (qam == true){
		cargarfichero('qaforums-static.json','eventQamAbstract')
		$("#drawQamAbstract").on("eventQamAbstract",function(event,trigger,data){	
			datos = datosresumengrafica(data)
			options = pintarresumen(datos[0],"Resumen QAM",'drawQamAbstract')
			chart9 = new Highcharts.Chart(options);
			datostexto = datosresumentexto(data,"aaa")
			rellenatabla(datostexto[0],"QAMAbstrac","Abstrac QAM")
			//Actualizamos la tabla
			update('tableQAMAbstrac')		
		})
	}
	if (mls == true){
		cargarfichero('mls-static.json','eventMlsAbstract')
		$("#drawMlsAbstract").on("eventMlsAbstract",function(event,trigger,data){	
			datos = datosresumengrafica(data)
			options = pintarresumen(datos[0],"Resumen MLS",'drawMlsAbstract')
			chart9 = new Highcharts.Chart(options);
			datostexto = datosresumentexto(data,"aaa")
			rellenatabla(datostexto[0],"MLSAbstrac","Abstrac MLS")
			//Actualizamos la tabla
			update('tableMLSAbstrac')		
		})
	}
	if (irc == true){
		cargarfichero('irc-static.json','eventIrcAbstract')
		$("#drawIrcAbstract").on("eventIrcAbstract",function(event,trigger,data){	
			datos = datosresumengrafica(data)
			options = pintarresumen(datos[0],"",'drawIrcAbstract')
			chart9 = new Highcharts.Chart(options);
			datostexto = datosresumentexto(data,"aaa")
			rellenatabla(datostexto[0],"IRCAbstrac","Abstrac IRC")
			//Actualizamos la tabla
			update('tableIRCAbstrac')		
		})
	}
}
/* Funcion utilizada cuando se hace click en la pestaña INFORMATION COMPANIES, dentro de ella
se realizan la obtencion del fichero, el parseo de los datos y la representacion */

function InformationCompanies(){
	$('#tableBodyCompanies').empty();
	// Diccionary para poder realizar el fill
	var myMappings = {
		key: ["com", "rep", "mls","scm","scr"],
		value: ["Company", "Repository", "Mailing List Send", "Source Code Management","Source Code Review"]
	};
	// Procedimiento para leear de un fichero .xml linea a linea
	var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "prueba.xml", false);
    rawFile.onreadystatechange = function ()
    {
		if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
				var lines = allText.split('\n');
				for(var line = 0; line < lines.length; line++){
					// Hacemos un fill en el dictionary para poner el nombre completo
					var prueba = lines[line].split('-');
					var indexTypeInformation = myMappings.key.indexOf(prueba[2]);
					prueba[2] = myMappings.value[indexTypeInformation];
					var indexTypeOfFile = myMappings.key.indexOf(prueba[1]);
					prueba[1] = myMappings.value[indexTypeOfFile];
					// Representamos en la grafica
					$('#tableBodyCompanies').append('<tr><td>'+prueba[2]+'</td><td>'+prueba[0]+'</td><td>'+prueba[1]+'</td><td>'+prueba[3]+'</td><td>'+lines[line]+'</td></tr>');	
				}
            }
        }
		
    }
	rawFile.send(null);
	//Acualizamos la tabla
	update2('tableCompanies')
	
	$( document ).on( "click", "#tableCompanies td", function(){
		filaName = $(this).closest("tr").find('td:eq(4)').html();
		type = $(this).closest("tr").find('td:eq(3)').html();
		//Mostramos el contenido del fichero
		window.location.href = 'json/' + filaName;
	})
}
