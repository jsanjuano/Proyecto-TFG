$(document).ready(function(){
	var history = []
	var painted = []
	//Nada mas entrar cargarmos la pestañaa general
	history.push("MenushowGeneralRegress");
 	$("[id^='show']").css("display", "block")
/*	$("[id^='showMenuTabGeneral']").css("display", "block")
	$("[id^='showSCMGeneral']").css("display", "block")
	$("[id^='showSCRGeneral']").css("display", "block")
	$("[id^='showITSGeneral']").css("display", "block")
	$("[id^='showQAMGeneral']").css("display", "block")
	$("[id^='showMLSGeneral']").css("display", "block") */
	painted.push("MenushowGeneral")
	showGeneral() 
	showSCM()
	painted.push("moreInformationSCM")
	painted.push("MenushowSCM")
	showBusiness(true,true,true)
	painted.push("moreInformationSCMBusiness")
	painted.push("moreInformationITSusiness")
	painted.push("moreInformationMLSBusiness")
	painted.push("MenushowBusiness")
	showDemographic(true,true,true)
	painted.push("moreInformationSCMDemographic")
	painted.push("moreInformationITSDemographic")
	painted.push("moreInformationMLSDemographic")
	painted.push("MenushowDemographic")
	showSCR()
	painted.push("moreInformationSCR")
	painted.push("MenushowSCR")
	showITS()
	painted.push("moreInformationITS")
	painted.push("MenushowITS")
	showQAM()
	painted.push("moreInformationQAM")
	painted.push("MenushowQAM")
	showMLS()
	painted.push("moreInformationMLS")
	painted.push("MenushowMLS")
	abstractInformation(true,true,true,true,true,true)
	painted.push("moreInformationSCMAbstract")
	painted.push("moreInformationSCRAbstract")
	painted.push("moreInformationITSAbstract")
	painted.push("moreInformationQAMAbstract")
	painted.push("moreInformationMLSAbstract")
	painted.push("Menuabstract")
	InformationCompanies()
	painted.push("MenuCompInformation")
 	$("[id^='show']").css("display", "none")
	$("[id^='showMenuTabGeneral']").css("display", "block")
	$("[id^='showSCMGeneral']").css("display", "block")
	$("[id^='showSCRGeneral']").css("display", "block")
	$("[id^='showITSGeneral']").css("display", "block")
	$("[id^='showQAMGeneral']").css("display", "block")
	$("[id^='showMLSGeneral']").css("display", "block")
	ocultar()
	function ocultar(){
		if( $('#initialLoader').css('display') != 'none') $('#initialLoader').fadeOut("slow", function() {$(this).css("display", "none")});
	}
	
	// Inicializamos el lector de properties
	messageResource.init({
	// path to directory containing config.properties
	filePath : ''
	});
	
	//Funcion utilizada para mostrar los mensajes de informacion de la gráfica.
	$(".getPopPup").click(function(){
		var oID = $(this).attr("id");
		messageResource.load('config', function(){ 
			// load file callback 
			// get value corresponding  to a key from config.properties  
			var value = messageResource.get(oID, 'config');
			$('.modal-content').empty()
			$('.modal-content').append(value);
		});
    });
	
	
	$('#regress').click(function(){
		console.log("Longitud:" + history.length)
		if (history.length == 1){
		    //No hacemos nada el usuario no ha navegado
		}
		else{
		 	 history.pop();
			indice = history.length;
			eventRegress = history[indice-1]
			/* data = [] */
			console.log(eventRegress)
			$("*").trigger(eventRegress,[eventRegress])
			console.log("eventDespuesTrigger")

		}
	})
	//------------------------------------------------------------------------------------------------------
	//---------------------------------------------- GENERAL -----------------------------------------------
	//------------------------------------------------------------------------------------------------------ 
	
	$('#MenushowGeneral').click(function ejemplo(){
		
		history.push("MenushowGeneralRegress");
		$("[id^='show']").css("display", "none")
		$("[id^='showMenuTabGeneral']").css("display", "block")
		$("[id^='showSCMGeneral']").css("display", "block")
		$("[id^='showSCRGeneral']").css("display", "block")
		$("[id^='showITSGeneral']").css("display", "block")
		$("[id^='showQAMGeneral']").css("display", "block")
		$("[id^='showMLSGeneral']").css("display", "block")		
		if (painted.indexOf("MenushowGeneral") < 0 ){
			showGeneral()
		}
	})
	
	
	
	$('#moreInformationSCM').click(function(){
		history.push("moreInformationSCMRegress");
		$("[id^='show']").css("display", "none")
		$("[id^='show']").css("display", "none")
		$("[id^='showSCMOnly']").css("display", "block")
		$("[id^='showSCMOnlyEvent']").css("display", "none")
		if (painted.indexOf("moreInformationSCM") < 0 ){
			showSCM()
			painted.push("moreInformationSCM")
		}
		
	})
	
	$('#moreInformationSCMAbstract').click(function(){
		history.push("moreInformationSCMAbstractRegress");
		$("[id^='show']").css("display", "none")
		$("[id^='showAbstracSCM']").css("display", "block")
		if (painted.indexOf("moreInformationSCMAbstract") < 0 ){
			abstractInformation(true,false,false,false,false,false)
			painted.push("moreInformationSCMAbstract")
		}
	})
	
	$('#moreInformationSCMBusiness').click(function(){
		history.push("moreInformationSCMBusinessRegress");	
		$("[id^='show']").css("display", "none")
		$("[id^='showBusinessSCM']").css("display", "block")
		$("[id^='showBusinessEvent']").css("display", "none")
		if (painted.indexOf("moreInformationSCMBusiness") < 0 ){
			showBusiness(true,false,false)
			painted.push("moreInformationSCMBusiness")
		}
	})
	
	$('#moreInformationSCMDemographic').click(function(){
		history.push("moreInformationSCMDemographicRegress");
		$("[id^='show']").css("display", "none")
		$("[id^='showDemograpgicSCM']").css("display", "block")
		$("[id^='showDemograpgicSCMRowEvent']").css("display", "none")
		if (painted.indexOf("moreInformationSCMDemographic") < 0 ){
			showDemographic(true,false,false)
			painted.push("moreInformationSCMDemographic")
		}
	})
	
	$('#moreInformationSCR').click(function(){
		history.push("moreInformationSCRRegress");
		$("[id^='show']").css("display", "none")
		$("[id^='show']").css("display", "none")
		$("[id^='showSCROnly']").css("display", "block")
		$("[id^='showSCROnlyEvent']").css("display", "none")		
		if (painted.indexOf("moreInformationSCR") < 0 ){
			showSCR()
			painted.push("moreInformationSCR")
		}
	})
	
	$('#moreInformationSCRAbstract').click(function(){
		history.push("moreInformationSCRAbstractRegress");
		$("[id^='show']").css("display", "none")
		$("[id^='showAbstracSCR']").css("display", "block")
		if (painted.indexOf("moreInformationSCRAbstract") < 0 ){
			abstractInformation(false,true,false,false,false,false)
			painted.push("moreInformationSCRAbstract")
		}
	})
	
	
	$('#moreInformationITS').click(function(){
		history.push("moreInformationITSRegress");		
		$("[id^='show']").css("display", "none")
		$("[id^='show']").css("display", "none")
		$("[id^='showITSOnly']").css("display", "block")
		$("[id^='showITSOnlyEvent']").css("display", "none")		
		if (painted.indexOf("moreInformationITS") < 0 ){
			showITS()
			painted.push("moreInformationITS")
		}
	})
	
	$('#moreInformationITSAbstract').click(function(){
		history.push("moreInformationITSAbstractRegress");
		$("[id^='show']").css("display", "none")
		$("[id^='showAbstracITS']").css("display", "block")
		if (painted.indexOf("moreInformationITSAbstract") < 0 ){
			abstractInformation(false,false,true,false,false,false)
			painted.push("moreInformationITSAbstract")
		}
	})
	
	$('#moreInformationITSusiness').click(function(){
		history.push("moreInformationITSusinessRegress");
		$("[id^='show']").css("display", "none")
		$("[id^='showBusinessITS']").css("display", "block")
		$("[id^='showBusinessEvent']").css("display", "none")
		if (painted.indexOf("moreInformationITSusiness") < 0 ){
			showBusiness(false,true,false)
			painted.push("moreInformationITSusiness")
		}
	})
	
	$('#moreInformationITSDemographic').click(function(){
		history.push("moreInformationITSDemographicRegress");	
		$("[id^='show']").css("display", "none")
		$("[id^='showDemograpgicITS']").css("display", "block")
		$("[id^='showDemograpgicITSEvent']").css("display", "none")
		if (painted.indexOf("moreInformationITSDemographic") < 0 ){
			showDemographic(false,true,false)
			painted.push("moreInformationITSDemographic")
		}
	})
	
	$('#moreInformationQAM').click(function(){
		history.push("moreInformationQAMRegress");
		$("[id^='show']").css("display", "none")
		$("[id^='showQAMOnly']").css("display", "block")
		$("[id^='showQAMOnlyEvent']").css("display", "none")
		if (painted.indexOf("moreInformationQAM") < 0 ){
			showQAM()
			painted.push("moreInformationQAM")
		}
	})
	
	$('#moreInformationQAMAbstract').click(function(){
		history.push("moreInformationQAMAbstractRegress");
		$("[id^='show']").css("display", "none")
		$("[id^='showAbstracQAM']").css("display", "block")
		if (painted.indexOf("moreInformationQAMAbstract") < 0 ){
			abstractInformation(false,false,false,true,false,false)
			painted.push("moreInformationQAMAbstract")
		}
	})
		
	$('#moreInformationMLS').click(function(){
		history.push("moreInformationMLSRegress");	
		$("[id^='show']").css("display", "none")
		$("[id^='show']").css("display", "none")
		$("[id^='showMLSOnly']").css("display", "block")
		$("[id^='showMLSOnlyEvent']").css("display", "none")
		if (painted.indexOf("moreInformationMLS") < 0 ){
			showMLS()
			painted.push("moreInformationMLS")
		}
	})
	
	$('#moreInformationMLSAbstract').click(function(){
		history.push("moreInformationMLSAbstractRegress");
		$("[id^='show']").css("display", "none")
		$("[id^='showAbstracMLS']").css("display", "block")
		if (painted.indexOf("moreInformationMLSAbstract") < 0 ){
			abstractInformation(false,false,false,false,true,false)
			painted.push("moreInformationMLSAbstract")
		}
	})
	
	$('#moreInformationMLSBusiness').click(function(){
		history.push("moreInformationMLSBusinessRegress");
		$("[id^='show']").css("display", "none")
		$("[id^='showBusinessMLS']").css("display", "block")
		$("[id^='showBusinessEvent']").css("display", "none")	
		if (painted.indexOf("moreInformationMLSBusiness") < 0 ){
			showBusiness(false,false,true)
			painted.push("moreInformationMLSBusiness")
		}
	})
	
	$('#moreInformationMLSDemographic').click(function(){
		history.push("moreInformationMLSDemographicRegress");
		$("[id^='show']").css("display", "none")
		$("[id^='showDemograpgicMLS']").css("display", "block")
		$("[id^='showDemograpgicMLSEvent']").css("display", "none")
		if (painted.indexOf("moreInformationMLSDemographic") < 0 ){
			showDemographic(false,false,true)
			painted.push("moreInformationMLSDemographic")
		}
	})
	
	
	//------------------------------------------------------------------------------------------------------
	//----------------------------------------  PARTE DE BUSINESS ------------------------------------------
	//------------------------------------------------------------------------------------------------------ 
	$('#MenushowBusiness').click(function(){
		history.push("MenushowBusinessRegress");
		$("[id^='show']").css("display", "none")
		$("[id^='showMenuTabBusiness']").css("display", "block")
		$("[id^='showBusiness']").css("display", "block")
		$("[id^='showBusinessEvent']").css("display", "none")
		if (painted.indexOf("MenushowBusiness") < 0 ){
			showBusiness(true,true,true)
			painted.push("MenushowBusiness")
		}
	})
	
/* 	$('#tabSCMBusiness').click(function(){
		$("[id^='showBusiness']").css("display", "block")
		$("[id^='showBusinessEvent']").css("display", "none")
		$("[id^='showBusinessITS']").css("display", "none")
		$("[id^='showBusinessMLS']").css("display", "none")
		
	})
	
	$('#tabITSBusiness').click(function(){
		$("[id^='showBusiness']").css("display", "block")
		$("[id^='showBusinessEvent']").css("display", "none")
		$("[id^='showBusinessSCM']").css("display", "none")
		$("[id^='showBusinessMLS']").css("display", "none")
	})
	
	$('#tabMLSBusiness').click(function(){
		$("[id^='showBusiness']").css("display", "block")
		$("[id^='showBusinessEvent']").css("display", "none")
		$("[id^='showBusinessITS']").css("display", "none")
		$("[id^='showBusinessSCM']").css("display", "none")
	}) */
	
	//------------------------------------------------------------------------------------------------------
	//------------------------------------  PARTE DE DEMOGRAPHIC--------------------------------------------
	//------------------------------------------------------------------------------------------------------
	$('#MenushowDemographic').click(function(){
		history.push("MenushowDemographicRegress");
		$("[id^='show']").css("display", "none")
		$("[id^='showMenuTabDemographic']").css("display", "block")
		$("[id^='showDemograpgic']").css("display", "block")
		$("[id^='showDemograpgicSCMRowEvent']").css("display", "none")
		$("[id^='showDemograpgicMLSEvent']").css("display", "none")
		$("[id^='showDemograpgicITSEvent']").css("display", "none")
		if (painted.indexOf("MenushowDemographic") < 0 ){
			showDemographic(true,true,true)
			painted.push("MenushowDemographic")
		}
	})
	
	$('#MenushowSCM').click(function(){
		history.push("MenushowSCMRegress");
		$("[id^='show']").css("display", "none")
		$("[id^='showSCMOnly']").css("display", "block")
		$("[id^='showSCMOnlyEvent']").css("display", "none")
		if (painted.indexOf("MenushowSCM") < 0 ){
			showSCM()
			painted.push("MenushowSCM")
		}
	})
	
	$('#MenushowITS').click(function(){
		ocultar()
		history.push("MenushowITSRegress");
		$("[id^='show']").css("display", "none")
		$("[id^='showITSOnly']").css("display", "block")
		$("[id^='showITSOnlyEvent']").css("display", "none")	
		if (painted.indexOf("MenushowITS") < 0 ){
			showITS()
			painted.push("MenushowITS")
		}
	})
	
	$('#MenushowQAM').click(function(){
		history.push("MenushowQAMRegress");
		$("[id^='show']").css("display", "none")
		$("[id^='showQAMOnly']").css("display", "block")
		$("[id^='showQAMOnlyEvent']").css("display", "none")
		if (painted.indexOf("MenushowQAM") < 0 ){
			showQAM()
			painted.push("MenushowQAM")
		}
	})
	
	$('#MenushowMLS').click(function(){
		history.push("MenushowMLSRegress");
		$("[id^='show']").css("display", "none")
		$("[id^='showMLSOnly']").css("display", "block")	
		$("[id^='showMLSOnlyEvent']").css("display", "none")
		if (painted.indexOf("MenushowMLS") < 0 ){
			showMLS()
			painted.push("MenushowMLS")
		}
	})
	
	$('#MenushowSCR').click(function(){
		history.push("MenushowSCRRegress");
		$("[id^='show']").css("display", "none")
		$("[id^='showSCROnly']").css("display", "block")
		$("[id^='showSCROnlyEvent']").css("display", "none")
		
		if (painted.indexOf("MenushowSCR") < 0 ){
			showSCR()
			painted.push("MenushowSCR")
		}
	})
	 $("#Menuabstract").click( function () {
		history.push("MenuabstractRegress");
		$("[id^='show']").css("display", "none")
		$("[id^='showMenuTabAbstract']").css("display", "block")
		$("[id^='showAbstrac']").css("display", "block")	
		if (painted.indexOf("Menuabstract") < 0 ){
			abstractInformation(true,true,true,true,true,true)
			painted.push("Menuabstract")
		}
	}) 
	
	$("#MenuCompInformation").click( function () {
		history.push("MenuCompInformationRegress");
		$("[id^='show']").css("display", "none")
		$("[id^='showCompInformation']").css("display", "block")
		if (painted.indexOf("MenuCompInformation") < 0 ){
			InformationCompanies()
			painted.push("MenuCompInformation")
		}		
	})
		
	
	$('#pestana8').click(function(){
		$('#containergeneralempresas').css("display", "none")
		$('#containerempresaunica').css("display", "none")
		$('#containergeneraldemogradica').css("display", "none")
		$('#containerscm').css("display", "none")
		$('#containerscr').css("display", "none")
		$('#containerits').css("display", "none")
		$('#containergeneral').css("display", "none")
		$('#filaempresaqam').css("display", "none")
		$('#filaempresascm').css("display", "none")
		$('#filaempresascr').css("display", "none")
		$('#containerqam').css("display", "none")
		$('#containermls').css("display", "none")
		$('#containerresumen').css("display", "none")
		$('#containerupload').css("display", "block")
		$('#send').click(function(){
			//Obtenemos el contenido el input text area
			contenido = $('#json').val();
			//Limpiamos el formulario
			$("#formulario").empty()
			//Parseamos el json para darle formato
			try{
				var contenido = $.parseJSON(contenido);
				// Cargamos los checkboxes
				parseador(contenido)
				// Levantamos el evento para darle al boton representar
				$( document ).on( "click", "#representar", function(){

					//Recorremos el div para sacar los que estan marcados
					primeravez = false;
					var chart2;
					$("#formulario input[type='checkbox']:checked").each(function(){
						if (!primeravez){
							key = $(this).attr('value')
							titulo = $("#tittle").val()
							arrayfirst =datossimples(contenido,titulo, key)
							options = pintargeneral(arrayfirst,"pintarupload")
							primeravez = true;
							chart2 = new Highcharts.Chart(options);
							$('#filaupload').css("display", "block")
						}
						else {
							alert("entra segundo")
							key = $(this).attr('value')
							titulo = $("#tittle").val()
							arraysecond =datossimples(contenido,titulo, key)
							chart2.addSeries({
								data: arraysecond[0],
								name: arraysecond[6]
							})
						
						}
					})
				})
			}
			catch(e){
				alert("El fichero no es un json correcto, por favor compruebelo")
			}
		})
	})
	
	//------------------------------------------------------------------------------------------------------
	//------------------------PARTE PARA REALIZAR LA REGRESION A LA PESTAÑA ANTERIOR------------------------
	//------------------------------------------------------------------------------------------------------
	
	$("#regress").on("MenushowGeneralRegress",function(event,trigger){
		$("[id^='show']").css("display", "none")
		$("[id^='showMenuTabGeneral']").css("display", "block")
		$("[id^='showSCMGeneral']").css("display", "block")
		$("[id^='showSCRGeneral']").css("display", "block")
		$("[id^='showITSGeneral']").css("display", "block")
		$("[id^='showQAMGeneral']").css("display", "block")
		$("[id^='showMLSGeneral']").css("display", "block")		
		//showGeneral() 
	})

	$("#regress").on("moreInformationSCMRegress",function(event,trigger){
		$("[id^='show']").css("display", "none")
		$("[id^='show']").css("display", "none")
		$("[id^='showSCMOnly']").css("display", "block")
		$("[id^='showSCMOnlyEvent']").css("display", "none")
		//showSCM()
	})
	
	$("#regress").on("moreInformationSCMAbstractRegress",function(event,trigger){
		$("[id^='show']").css("display", "none")
		$("[id^='showAbstracSCM']").css("display", "block")
		//abstractInformation(true,false,false,false,false,false)
	})
	
	$("#regress").on("moreInformationSCMBusinessRegress",function(event,trigger){
		$("[id^='show']").css("display", "none")
		$("[id^='showBusinessSCM']").css("display", "block")
		$("[id^='showBusinessEvent']").css("display", "none")
		//showBusiness(true,false,false,false)
	})
	
	$("#regress").on("moreInformationSCMDemographicRegress",function(event,trigger){
		$("[id^='show']").css("display", "none")
		$("[id^='showDemograpgicSCM']").css("display", "block")
		$("[id^='showDemograpgicSCMRowEvent']").css("display", "none")
		//showDemographic(true,false,false)
	})
	
	$("#regress").on("moreInformationSCRRegress",function(event,trigger){
		$("[id^='show']").css("display", "none")
		$("[id^='show']").css("display", "none")
		$("[id^='showSCROnly']").css("display", "block")
		$("[id^='showSCROnlyEvent']").css("display", "none")
		//showSCR()
	})
	
	$("#regress").on("moreInformationSCRAbstractRegress",function(event,trigger){
		$("[id^='show']").css("display", "none")
		$("[id^='showAbstracSCR']").css("display", "block")
		//abstractInformation(false,true,false,false,false,false)
	})
	
	$("#regress").on("moreInformationITSRegress",function(event,trigger){
		$("[id^='show']").css("display", "none")
		$("[id^='show']").css("display", "none")
		$("[id^='showITSOnly']").css("display", "block")
		$("[id^='showITSOnlyEvent']").css("display", "none")
		//showITS()
	})
	
	$("#regress").on("moreInformationITSAbstractRegress",function(event,trigger){
		$("[id^='show']").css("display", "none")
		$("[id^='showAbstracITS']").css("display", "block")
		//abstractInformation(false,false,true,false,false,false)
	})

	$("#regress").on("moreInformationITSusinessRegress",function(event,trigger){
		$("[id^='show']").css("display", "none")
		$("[id^='showBusinessITS']").css("display", "block")
		$("[id^='showBusinessEvent']").css("display", "none")
		//showBusiness(false,true,false)
	})

	$("#regress").on("moreInformationITSDemographicRegress",function(event,trigger){
		$("[id^='show']").css("display", "none")
		$("[id^='showDemograpgicITS']").css("display", "block")
		$("[id^='showDemograpgicITSEvent']").css("display", "none")
		//showDemographic(false,true,false)
	})

	$("#regress").on("moreInformationQAMRegress",function(event,trigger){
		$("[id^='show']").css("display", "none")
		$("[id^='showQAMOnly']").css("display", "block")
		$("[id^='showQAMOnlyEvent']").css("display", "none")
		//showQAM()
	})
	
	$("#regress").on("moreInformationQAMAbstractRegress",function(event,trigger){
		$("[id^='show']").css("display", "none")
		$("[id^='showAbstracQAM']").css("display", "block")
		//abstractInformation(false,false,false,true,false,false)
	})
	
	$("#regress").on("moreInformationMLSRegress",function(event,trigger){
		$("[id^='show']").css("display", "none")
		$("[id^='show']").css("display", "none")
		$("[id^='showMLSOnly']").css("display", "block")
		$("[id^='showMLSOnlyEvent']").css("display", "none")
		//showMLS()
	})
		
	$("#regress").on("moreInformationMLSAbstractRegress",function(event,trigger){
		$("[id^='show']").css("display", "none")
		$("[id^='showAbstracMLS']").css("display", "block")
		//abstractInformation(false,false,false,false,true,false)
	})
	
	$("#regress").on("moreInformationMLSBusinessRegress",function(event,trigger){
		$("[id^='show']").css("display", "none")
		$("[id^='showBusinessMLS']").css("display", "block")
		$("[id^='showBusinessEvent']").css("display", "none")
		//showBusiness(false,false,true)
	})
	
	$("#regress").on("moreInformationMLSDemographicRegress",function(event,trigger){
		$("[id^='show']").css("display", "none")
		$("[id^='showDemograpgicMLS']").css("display", "block")
		$("[id^='showDemograpgicMLSEvent']").css("display", "none")
		//showDemographic(false,false,true)
	})

	$("#regress").on("MenushowBusinessRegress",function(event,trigger){
		$("[id^='show']").css("display", "none")
		$("[id^='showMenuTabBusiness']").css("display", "block")
		$("[id^='showBusiness']").css("display", "block")
		$("[id^='showBusinessEvent']").css("display", "none")
		//showBusiness(true,true,true)
	})
	
	$("#regress").on("MenushowDemographicRegress",function(event,trigger){
		$("[id^='show']").css("display", "none")
		$("[id^='showMenuTabDemographic']").css("display", "block")
		$("[id^='showDemograpgic']").css("display", "block")
		$("[id^='showDemograpgicSCMRowEvent']").css("display", "none")
		$("[id^='showDemograpgicMLSEvent']").css("display", "none")
		$("[id^='showDemograpgicITSEvent']").css("display", "none")
		//showDemographic(true,true,true)
	})

	$("#regress").on("MenushowSCMRegress",function(event,trigger){
		$("[id^='show']").css("display", "none")
		$("[id^='showSCMOnly']").css("display", "block")
		$("[id^='showSCMOnlyEvent']").css("display", "none")
		//showSCM()
	})

	$("#regress").on("MenushowITSRegress",function(event,trigger){
		$("[id^='show']").css("display", "none")
		$("[id^='showITSOnly']").css("display", "block")
		$("[id^='showITSOnlyEvent']").css("display", "none")
		//showITS()
	})

	$("#regress").on("MenushowQAMRegress",function(event,trigger){
		$("[id^='show']").css("display", "none")
		$("[id^='showQAMOnly']").css("display", "block")
		$("[id^='showQAMOnlyEvent']").css("display", "none")
		//showQAM()
	})

	$("#regress").on("MenushowMLSRegress",function(event,trigger){
		$("[id^='show']").css("display", "none")
		$("[id^='showMLSOnly']").css("display", "block")	
		$("[id^='showMLSOnlyEvent']").css("display", "none")
		//showMLS()
	})

	$("#regress").on("MenushowSCRRegress",function(event,trigger){
		$("[id^='show']").css("display", "none")
		$("[id^='showSCROnly']").css("display", "block")
		$("[id^='showSCROnlyEvent']").css("display", "none")
		//showSCR()
	})

	$("#regress").on("MenuabstractRegress",function(event,trigger){
		$("[id^='show']").css("display", "none")
		$("[id^='showMenuTabAbstract']").css("display", "block")
		$("[id^='showAbstrac']").css("display", "block")
		//abstractInformation(true,true,true,true,true,true)
	})

	$("#regress").on("MenuCompInformationRegress",function(event,trigger){
		$("[id^='show']").css("display", "none")
		$("[id^='showCompInformation']").css("display", "block")
		//InformationCompanies()
	})
})
