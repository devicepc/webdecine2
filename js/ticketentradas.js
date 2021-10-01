// numero de orden

function generarAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
        
      }
      generarAleatorio()
     
/* function fechaActualTicket(){
    var Fechaticket = new Date();
    document.getElementById("fechaticket").innerHTML = ("La fecha de expedicion de entradas : "+ Fechaticket );
    
} 
fechaActualTicket();*/

// quitar objetos antes de crear pdf
function quitarantespdf(){
    document.getElementById("btndosEntradas").setAttribute('disabled','disabled');
}
// habilitar botones y div informativo
function habdiv(){
    document.getElementById("")
}