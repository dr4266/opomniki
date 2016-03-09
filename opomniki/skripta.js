window.addEventListener('load', function() {
	//stran nalozena
		
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			if (cas > 0) {
				casovnik.innerHTML = cas-1;
			} else {
				var naziv = document.querySelector(".naziv_opomnika").innerHTML;
				window.alert("Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!");
				document.querySelector("#opomniki").removeChild(opomnik);
			}
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
	//izvaja prijavo
	var izvediPrijavo = function(event) {
		var uporabnik = document.querySelector("#uporabnisko_ime").value;
		document.getElementById("uporabnik").innerHTML = uporabnik;
		document.querySelector(".pokrivalo").style.visibility = "hidden";
	}
	document.querySelector("#prijavniGumb").addEventListener('click', izvediPrijavo);
	
	//dodaj opomnike
	var dodajOpomnik = function(event) {
		var naziv = document.getElementById("naziv_opomnika").value;
		var cas = document.getElementById("cas_opomnika").value;
		document.querySelector("#naziv_opomnika").value = "";
		document.querySelector("#cas_opomnika").value = "";
		
		document.getElementById("opomniki").innerHTML += "<div class='opomnik'><div class='naziv_opomnika'>"+naziv+"</div> <div class='cas_opomnika'> Opomnik čez <span>"+cas+"</span> sekund.</div></div>"
		
	}
	document.querySelector("#dodajGumb").addEventListener('click', dodajOpomnik);
	
});