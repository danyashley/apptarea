$("#saludo").click(saludar);  /* = reemplaza a document.getElementById y addEventListener*/



function saludar() {
	
	alert("Hola");
	
	
	}
	
	
window.addEventListener('online', hay);
window.addEventListener('offline', nohay);	


function hay(){
	
	alert("hay internet");
	
	
	}
	
function nohay(){
	
	alert("no hay internet");
	
	
	}
	
	
	function guardar(){
		
		
		localStorage.setItem("nombre", "pepe");
		
		
		
		}
		
		
	function ver(){
	alert(localStorage.getItem("nombre"));
}
		
		
	
if(navigator.offline){
	alert("no hay señal")
	
	} else{
		
		alert("hay señal")
		
		};
	
	$("#btn_guardar").click(guardar);
	$("#btn_ver").click(ver);
	
