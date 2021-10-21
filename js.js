 function conso_elec(){
	    	let PA = document.getElementById("elec_PA").value;
	    	let PL = document.getElementById("elec_PL").value;
	    	let PO = document.getElementById("elec_PO").value;
	    	let HA = document.getElementById("elec_HA").value;
	    	let HL = document.getElementById("elec_HL").value;
	    	let HO = document.getElementById("elec_HO").value;

	    	document.getElementsByClassName("elec")[0].innerHTML =

	    		"Ordinateur = " + ((((30/100*(PA*HA+PL*HL+PO*HO)/7)*365/1000 + ((1-30/100)*(PA*(HA+HL)+PO*HO)/7)*365/1000)/10000)*24*30*12).toFixed(2) + " kgCO2e";}

	    function conso_telephone(){
	    	let telephone_age = document.getElementById("telephone_age").value;
	    	document.getElementsByClassName("telephone")[0].innerHTML =

	    		"Téléphone = " + (39.1/(telephone_age+1)).toFixed(2) + " kgCO₂e / an";}

	    function conso_tv(){
	    	let tv_age = document.getElementById("tv_age").value;	    	
	    	document.getElementsByClassName("tv")[0].innerHTML =

	    		"Télévision = " + (0.01/(tv_age+1)).toFixed(2) + " kgCO₂e / an";}

	    		function conso_internet(){
	    	let temps_internet = document.getElementById("temps_internet").value;	    	
	    	document.getElementsByClassName("internet")[0].innerHTML =

	    		"Internet = " + ((0.01*temps_internet)*365).toFixed(2) + " kgCO₂e / an";}

	    function conso_bus(){
	    	let bus_h = document.getElementById("bus_h").value;
	    	let bus_sem = document.getElementById("bus_sem").value;
	    	document.getElementsByClassName("bus")[0].innerHTML =

	    		"Bus = " + (bus_h*bus_sem*2).toFixed(2) + " kgCO₂e / an";}

	    function conso_voiture(){
	    	let age_voiture = document.getElementById("age_voiture").value;
	    	let km_an = document.getElementById("km_an_v").value;
	    	document.getElementsByClassName("voiture")[0].innerHTML =

	    		"Voiture = " + (((age_voiture < 10 ? 5600*5/100 : 0) + km_an*0.2)/1.2).toFixed(2) + " kgCO₂e / an";}

	    function conso_train(){
	    	let km_an = document.getElementById("km_an_t").value;
	    	document.getElementsByClassName("train")[0].innerHTML =

	    		"Train = " + (km_an*0.01).toFixed(2) + " kgCO₂e / an";}

	    function conso_totale() {
	    	let telephone_age = document.getElementById("telephone_age").value;
	    	let tv_age = document.getElementById("tv_age").value;
	    	let temps_internet = document.getElementById("temps_internet").value;
	    	let bus_h = document.getElementById("bus_h").value;
	    	let bus_sem = document.getElementById("bus_sem").value;
	    	let age_voiture = document.getElementById("age_voiture").value;
	    	let km_an = document.getElementById("km_an_v").value;
	    	let km_an_ = document.getElementById("km_an_t").value;
	    	let PA = document.getElementById("elec_PA").value;
	    	let PL = document.getElementById("elec_PL").value;
	    	let PO = document.getElementById("elec_PO").value;
	    	let HA = document.getElementById("elec_HA").value;
	    	let HL = document.getElementById("elec_HL").value;
	    	let HO = document.getElementById("elec_HO").value;

	    	var startTime = new Date().getTime();
			var elapsedTime = 0;

			document.getElementsByClassName("total")[0].innerHTML =

	    		"Total = "
	    		+ ((((30/100*(PA*HA+PL*HL+PO*HO)/7)*365/1000 + ((1-30/100)*(PA*(HA+HL)+PO*HO)/7)*365/1000)/10000)*24*30*12
	    		+ 39.1/(telephone_age+1)
	    		+ 0.01/(tv_age+1)
	    		+ (0.01*temps_internet)*365
	    		+ bus_h*bus_sem*2
	    		+ ((age_voiture < 10 ? 5600*5/100 : 0) + km_an*0.2)/1.2
	    		+ km_an*0.01

	    		).toFixed(2) + " kgCO₂e / an";

			elapsedTime = new Date().getTime() - startTime;

			document.getElementsByClassName("temps_execution")[0].innerHTML = "Temps d'exécution : " + elapsedTime;

	    	}
