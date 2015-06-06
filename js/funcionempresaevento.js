/*Esta funcion se utiliza cuando lanzamos el evento en la seccion
de empresa, al clickar en uno de los quesos nos muestra
todos los datos de las empresa

Entrada: empresa: nombre de la empresa clickeada*/

function eventoempresa(empresa){
	//Mostramos el contendor
	$("[id^='showBusinessEvent']").css("display", "block")
	cargarfichero(empresa+"-scm-com-evolutionary.json",'eventDemographicEvent1')
	$("#drawDemographicEvent1").on("eventDemographicEvent1",function(event,trigger,data){
		arraycommits =datossimples(data,"Committs de "+empresa, "commits")
		options = pintargeneralempreaunica(arraycommits,"drawDemographicEvent1")
		var chart = new Highcharts.Chart(options);
	})
 	cargarfichero(empresa+"-scm-com-evolutionary.json",'eventDemographicEvent2')
	$("#drawDemographicEvent2").on("eventDemographicEvent2",function(event,trigger,data){
		arraycommits =datossimples(data,"Autores de "+empresa, "authors")
		options = pintargeneralempreaunica(arraycommits,"drawDemographicEvent2")
		var chart = new Highcharts.Chart(options);
	}) 
 	cargarfichero(empresa+"-scr-com-evolutionary.json",'eventDemographicEvent3')
	$("#drawDemographicEvent3").on("eventDemographicEvent3",function(event,trigger,data){
		arraymerged =datossimples(data,"Reviews submitted vs. Reviews merged de "+empresa, "merged")
		arraysubmitters =datossimples(data,"Reviews submitted vs. Reviews merged de "+empresa, "submitters")
		options = pintargeneralempreaunica(arraymerged,"drawDemographicEvent3",arraysubmitters)
		var chart = new Highcharts.Chart(options);
	})
	cargarfichero(empresa+"-its-com-evolutionary.json",'eventDemographicEvent4')
	$("#drawDemographicEvent4").on("eventDemographicEvent4",function(event,trigger,data){
		arrayclosed =datossimples(data,"Closed vs. Opened de "+empresa, "closed")
		arrayopened =datossimples(data,"Closed vs. Opened de "+empresa, "opened")
		options = pintargeneralempreaunica(arrayclosed,"drawDemographicEvent4",arrayopened)
		var chart = new Highcharts.Chart(options);
	})
	cargarfichero(empresa+"-its-com-evolutionary.json",'eventDemographicEvent5')
	$("#drawDemographicEvent5").on("eventDemographicEvent5",function(event,trigger,data){
		arrayclosers =datossimples(data,"Closers vs. Openers de "+empresa, "closers")
		arrayopeners =datossimples(data,"Closers vs. Openers de "+empresa, "openers")
		options = pintargeneralempreaunica(arrayclosers,"drawDemographicEvent5",arrayopeners)
		var chart = new Highcharts.Chart(options);
	})
	cargarfichero(empresa+"-mls-com-evolutionary.json",'eventDemographicEvent6')
	$("#drawDemographicEvent6").on("eventDemographicEvent6",function(event,trigger,data){
		arraysent =datossimples(data,"Mailing List Sent de "+empresa, "sent")
		options = pintargeneralempreaunica(arraysent,"drawDemographicEvent6")
		var chart = new Highcharts.Chart(options);
	})
	cargarfichero(empresa+"-mls-com-evolutionary.json",'eventDemographicEvent7')
	$("#drawDemographicEvent7").on("eventDemographicEvent7",function(event,trigger,data){
		arraysenders =datossimples(data,"Mailing List Senders de "+empresa, "senders")
		options = pintargeneralempreaunica(arraysenders,"drawDemographicEvent7")
		var chart = new Highcharts.Chart(options);
	}) 
}