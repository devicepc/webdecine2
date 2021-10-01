


function getData(){
    let Peli = document.getElementById("SelectFIn").value;
    let Salas = document.getElementById("salas").value;
    let FechaPeli = document.getElementById("FechaPeli").value;
    let horaroisF = document.getElementById("horaroisF").value; 

    
function convertDateFormat(string) {
  var info = string.split('-');
  return info[2] + '/' + info[1] + '/' + info[0];
}
    
     fechapeliCambio = convertDateFormat(FechaPeli);
    
    /* var CasiCompraEntradas = "La pelicula es : "+Peli +" La sala es:  "+Salas+  " br "+"La Fecha de su compra es: "+fechapeliCambio+ " La hora selecccionada es: "+horaroisF;
    console.log(CasiCompraEntradas); 
    document.getElementById("entradasp").innerHTML = CasiCompraEntradas;*/
    document.getElementById("entradasp2").innerHTML = `La pelicula que seleccionaste es: ${Peli}<br> La sala es : ${Salas}<br> La fecha de la funcion : ${fechapeliCambio}<br> Horario: ${horaroisF}`
   

    
}

// prueba imprimir var global
function ImprGlob(){
   Pelisa = document.getElementById("TituloPeli").textContent;
  document.getElementById("entradas2").innerHTML = "esra es la prueba2: "+Pelisa;
}


// fin de prueba comida 


function comprovarSala(){
   
   var selectSala = document.getElementById('salas');
   value = selectSala.value, //El valor seleccionado
   text = selectSala.options[selectSala.selectedIndex].innerText; //El texto de la opción seleccionada
   if (value === ""){
     alert("ingresa una sala");
     console.log("No definste sala, no te gustan nuestros cines? :");
     document.getElementById("entradas").innerHTML = "";
   }else{
    //getData();
   }

}

function borrarentradas(){
  document.getElementById("entradas").innerHTML="";
}



function CompararFechas(){
  var Fecha = new Date();
   FechaPeliCom = document.getElementById("FechaPeli").value;
  var mes = (Fecha.getMonth()+1).toString();
  if (mes.length <= 1){
    mes = "0"+mes;
  }
  var dia = Fecha.getDate().toString();
  if (dia.length <= 1){
    dia ="0"+dia;
  }
  fechaActual = Fecha.getFullYear()+"-"+mes+"-"+dia;
    


  if (FechaPeliCom > fechaActual){
    console.log("la fecha input es mayor");
    getData();
    mostrarentardasCompra();
  }else if(FechaPeliCom == fechaActual){
    console.log("La fecha elegida es la del dia de hoy elige otra");
    borrarentradas();
  }else if (FechaPeliCom < fechaActual){
    
    (function borrarentradas2(){
      document.getElementById("entradas").innerHTML="";
      console.log("se ejecuto sola??");
    }());
    console.log("No puedes comprar entradas para esta fecha ya que es menor al dia de hoy");
  }
 	
}
function CompararHoraios(){
  var selecthorario = document.getElementById('horaroisF');
  value = selecthorario.value, //El valor seleccionado
  text = selecthorario.options[selecthorario.selectedIndex].innerText; //El texto de la opción seleccionada
  if (value === " "){
    alert("ingresa una horario");
    console.log("No definste horario, no te gustan nuestros cines? :");
    
  }else{
  // getData();
  }
}



function comprobacionesEInicio(){
 
  //ImprGlob();
  comprovarSala();
  CompararFechas();
  CompararHoraios();
  mostrarentardasCompra();
  // ocultarInfoSalas2();
  ExecuteScript();
  // create();
}

// mostar div de entradas


function mostrarentardasCompra() {
  var x = document.getElementById("entradas");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}

var filaPeli, asientoPeli, c=0;

function asientos(){
    mat1 = new Array(2);
    for (var i = 0; i<2; i++)
       mat1[i] =new Array(40);
    for (var i =0; i<2; i++ )
      for(var j =0; j<40; j++)
      mat1[i][j]=0;

    if (c<=80){
      /* filaPeli = parseInt(prompt("Ingrese la fila que desea [1 o 2]: "));
      asientoPeli = parseInt(prompt("Ingrese el aciento que desea : [1 al 40]")); */
      filaPeli = parseInt(prompt("Ingrese la fila que desea [1 o 2]: "));
      asientoPeli = parseInt(prompt("Ingrese el aciento que desea : [1 al 40]"));

      if((filaPeli >0 && filaPeli <=2) &&(asientoPeli >0 && asientoPeli<= 40)){
        if (mat1 [(filaPeli -1)][(asientoPeli -1)] ==0){
          mat1[(filaPeli -1)][(asientoPeli -1)]= 1;
          c = c+1;
          console.log("Resreva existosa !!");
          document.getElementById("Infoasientos").innerHTML=("Reserva exitosa. <br>La fila elegida es: "+filaPeli +"<br> Y el asiento es: "+asientoPeli);
          var preciomasreserva = precioEntrada *1.3;
     console.log("el precio de la entarda mas porcentaje es: "+ preciomasreserva);
        // document.getElementById("preciomasseleccion").innerHTML = ("el precio de la entrada mas porcentaje  masma es: "+ preciomasreserva);
     
          document.getElementById("precio").innerHTML = ("El precio de sus entradas es : "+ preciomasreserva );

          // document.getElementById("MostrarAsientos").innerHTML=("La fila elegida es: "+filaPeli +"<br> Y el asiento es: "+asientoPeli);
           console.log("la fila es: "+filaPeli + "y el asiento es: "+asientoPeli);
          


        }else {
          console.log("Asiento Ocupado !! <br>");
          document.getElementById("Infoasientos").innerHTML = ("Asiento ocupado. ");
        }
      
  
      }else{
        console.log("Favor ingresar un asiento valido. ");
        document.getElementById("Infoasientos").innerHTML=("Favor ingresar un asiento valido. ");
      }
    }
    for (var i = 0; i<2; i++){
      for(var j = 0; j <40; j++){
        console.log(mat1[i][j], "\t")
      }
    }
}
function asientos2(){
  mat1 = new Array(2);
  for (var i = 0; i<2; i++)
     mat1[i] =new Array(40);
  for (var i =0; i<2; i++ )
    for(var j =0; j<40; j++)
    mat1[i][j]=0;

  if (c<=80){
    /* filaPeli = parseInt(prompt("Ingrese la fila que desea [1 o 2]: "));
    asientoPeli = parseInt(prompt("Ingrese el aciento que desea : [1 al 40]")); */
    filaPeli = parseInt(prompt("Ingrese la fila que desea [1 o 2]: "));
    asientoPeli = parseInt(prompt("Ingrese el aciento que desea : [1 al 40]"));

    if((filaPeli >0 && filaPeli <=2) &&(asientoPeli >0 && asientoPeli<= 40)){
      if (mat1 [(filaPeli -1)][(asientoPeli -1)] ==0){
        mat1[(filaPeli -1)][(asientoPeli -1)]= 1;
        c = c+1;
        console.log("Resreva existosa !!");
        document.getElementById("Infoasientos2").innerHTML=("Reserva exitosa. <br>La fila elegida es: "+filaPeli +"<br> Y el asiento es: "+asientoPeli);

        // document.getElementById("MostrarAsientos2").innerHTML=("La fila elegida es: "+filaPeli +"<br> Y el asiento es: "+asientoPeli);
        console.log("la fila es: "+filaPeli + "y el asiento es: "+asientoPeli);
        
        // imprimr el precio de dos entradas con recargo por seleccion
        var preciomasreserva = precioEntrada *1.3;
        var preciomasreservados = preciomasreserva *2;
        console.log("el precio de la entarda mas porcentaje es: "+ preciomasreservados);

           document.getElementById("preciomasseleccion").innerHTML = ("el precio de la entrada mas porcentaje  masma es: "+ preciomasreservados);
        
             document.getElementById("precio").innerHTML = ("El precio de sus entradas es falta algo: "+ preciomasreservados );
        entradasListas();

      }else {
        console.log("Asiento Ocupado !! <br>");
        document.getElementById("Infoasientos2").innerHTML = ("Asiento ocupado. ");
      }
    

    }else{
      console.log("Favor ingresar un asiento valido. ");
      document.getElementById("Infoasientos2").innerHTML=("Favor ingresar un asiento valido. ");
    }
  }
  for (var i = 0; i<2; i++){
    for(var j = 0; j <40; j++){
      console.log(mat1[i][j], "\t")
    }
  }
}

// funcion de sacar dos entradas
function entradasListas(){
  var entrada2Lista = document.getElementById("Infoasientos2").value;
  var entrada1Lista = document.getElementById("Infoasientos").value;
  if(entrada1Lista != ""){
     document.getElementById("pdfexport").style.display="block";
    document.getElementById("slect1asiento").setAttribute('disabled','disabled');
    console.log("intento desh btn 1");
  } else if (entrada2Lista != ""){
    document.getElementById("btndosEntradas").setAttribute('disabled','disabled');
    document.getElementById("slect1asiento").setAttribute('disabled','disabled');
    
    console.log("deshabilitado");
  }
  else{
    document.getElementById("btndosEntradas").removeAttribute('disabled');
    // document.getElementById("pdfexport").style.display="block";
    console.log("cacac");
    
  }
  
}


 // funcion Pagar

var precioEntrada = 300;
 var InfoasientosEntrada = document.getElementById('Infoasientos');
var InfoasientosEntradados = document.getElementById("Infoasientos2");
//var FechaPeliCom2 = FechaPeliCom;

  // agregar entradas
  let add = document.getElementById("increment");
  let remove = document.getElementById('decrement');
  
  let int = document.getElementById('number');
  let integer =0;
  
  
  function addMas(){
      integer +=1;
      // int.innerHTML = integer;
      document.getElementById('number').innerHTML = integer;
      contarentradas();
  }
  
  function decMenos(){
      integer +=-1;
      // int.innerHTML = integer;
      document.getElementById('number').innerHTML = integer;
      contarentradas();
  }
  
  function contarentradas(){
      if (integer >= 20){
          alert("si necesitas tantas entradas comunicate con nuestra parte de corporativos");
          document.getElementById('number').innerHTML = "20";
          deshabpdfexport1()
      } else if(integer <= 0){
          alert("El numero minimo de entradas es 0");
          document.getElementById('number').innerHTML = "0";
          deshabpdfexport1()
      }else if (integer >= 1 && integer <= 19){
        
        
      }
  }
  
  function pagar(){
      var total= integer *precioEntrada ;
      var totalMensage = "Sus entradas cuestan : $ "+ total ;
      alert(totalMensage );
     // document.getElementById("precio").innerHTML = totalMensage;
      console.log("el dia de la peli es: "+ fechapeliCambio)
      console.log("nueva prueba de el dia de la peli : "+FechaPeliCom);
      console.log("el precio sin elegir asientos es: "+ precioEntrada);
       //  document.getElementById("preciomasseleccion").innerHTML = ("No selecionaste asientos tu entrada cuesta : "+ precioEntrada);
         
         // ingresardatosticket();
         mostarpSinres();
         habAviso1();
      document.getElementById("Preciosinseleccion").innerHTML = ("No selecionaste asientos, tus "+ integer + " entrada/s cuesta/n : $"+ total);
     
      // ocultarInfoSalas2();
  }
  


  // calcular precio 2??

  function calcPrecio(){
    if(InfoasientosEntrada !=" "){
      var precioTotal = precioEntrada ;
      console.log("las entadas valen : "+precioTotal);
      console.log("le precioo es : "+InfoasientosEntrada.value);
      alert("la entada vale : "+precioTotal);
    } else if(InfoasientosEntrada === ""){
      alert("la entada valess : "+precioTotal);
      alert("elige un asiento");
  
    } else if(InfoasientosEntradados != ""){
  
        var precioTotal2 = precioEntrada *2
        console.log("las entrdas valen : "+precioTotal2);
        alert("las entrdas valen : "+precioTotal2);
    }
  
    }

    var clic = 1;
    function selecseats(){

   if(clic==1){

   document.getElementById("divselectseat").style.display = "block";

   clic = clic + 1;

   } else{

       document.getElementById("divselectseat").style.display = "none";      

    clic = 1;

   }   

}
// mostar p de pagar sin entradas 
function mostarpSinres(){
  document.getElementById("Preciosinseleccion").style.display="block";
}
    
 
// pagar con resreva de asientos
function reservaasientos(){
  var preciomasreserva = precioEntrada *1.3;
  console.log("el precio de la entarda mas porcentaje es: "+ preciomasreserva);
}

    // pagar mas por fin de semana (no funciona)
  /*   function Isweekend(){
      if(!(fechapeliCambio.getDay() % 6)) alert(' paga mas por fin de semana Weekend!');
    }
    function showDay(FechaPeliCom) {
      return ["weekday", "weekend"][parseInt(FechaPeliCom.getDay() / 6)];
  }
  
  console.log(showDay(new Date())); */

// nueva funcion
/* function findeSemana() {
  
  var dateValue = fechapeliCambio.getDay(); 
  if(dateValue == 0 || dateValue == 6)
      return true;
  else 
      return false;  
} */
// ingresar datos en la div ticketentradas
/* function ingresardatosticket(){
  document.getElementById("peliticket").innerHTML = new Date();
  document.getElementById("Salaticket").innerHTML = Salas;
  document.getElementById("fechaPeliticket").innerHTML = FechaPeliCom;
  document.getElementById("Horapeliticket").innerHTML = horaroisF;
}
 */

// habilitar aviso1
function habAviso1(){
  document.getElementById("aviso1").style.display ="block";
}

// deshab btn pdfexport1
function deshabpdfexport1(){
  
  $('#pdfexport1').attr("disabled");
}

// Entadas abajo


function getData2(){
  let Peli = document.getElementById("SelectF2").value;
  let Salas = document.getElementById("salas2").value;
  let FechaPeli = document.getElementById("FechaPeli2").value;
  let horaroisF = document.getElementById("horaroisF2").value;
  console.log("La pelicula  es : "+Peli +"la sala es "+Salas+ " la Fecha de su compra es: "+FechaPeli+ " la hora selecccionada es: "+horaroisF);

function convertDateFormat(string) {
  var info = string.split('-');
  return info[2] + '/' + info[1] + '/' + info[0];
}
    
     fechapeliCambio = convertDateFormat(FechaPeli);
    
    /* var CasiCompraEntradas = "La pelicula es : "+Peli +" La sala es:  "+Salas+  " br "+"La Fecha de su compra es: "+fechapeliCambio+ " La hora selecccionada es: "+horaroisF;
    console.log(CasiCompraEntradas); 
    document.getElementById("entradasp").innerHTML = CasiCompraEntradas;*/
    document.getElementById("entradasp2").innerHTML = `La pelicula que seleccionaste es: ${Peli}<br> La sala es : ${Salas}<br> La fecha de la funcion : ${fechapeliCambio}<br> Horario: ${horaroisF}`
    
}


function comprobacionesEInicio2(){
 
  
  comprovarSala2();
  CompararFechas2();
  CompararHoraios2();
  mostrarentardasCompra2();
  // create();
}

function comprovarSala2(){
   
  var selectSala = document.getElementById('salas2');
  value = selectSala.value, //El valor seleccionado
  text = selectSala.options[selectSala.selectedIndex].innerText; //El texto de la opción seleccionada
  if (value === ""){
    alert("ingresa una sala");
    console.log("No definste sala, no te gustan nuestros cines? :");
    document.getElementById("entradas").innerHTML = "";
  }else{
   //getData();
  }

}


function CompararFechas2(){
  var Fecha = new Date();
   FechaPeliCom = document.getElementById("FechaPeli2").value;
  var mes = (Fecha.getMonth()+1).toString();
  if (mes.length <= 1){
    mes = "0"+mes;
  }
  var dia = Fecha.getDate().toString();
  if (dia.length <= 1){
    dia ="0"+dia;
  }
  fechaActual = Fecha.getFullYear()+"-"+mes+"-"+dia;
    


  if (FechaPeliCom > fechaActual){
    console.log("la fecha input es mayor");
    getData2();
    mostrarentardasCompra2();
  }else if(FechaPeliCom == fechaActual){
    console.log("La fecha elegida es la del dia de hoy elige otra");
    borrarentradas2();
  }else if (FechaPeliCom < fechaActual){
    
    (function borrarentradas2(){
      document.getElementById("entradas").innerHTML="";
      console.log("se ejecuto sola??");
    }());
    console.log("No puedes comprar entradas para esta fecha ya que es menor al dia de hoy");
  }
 	
}
function CompararHoraios2(){
  var selecthorario = document.getElementById('horaroisF2');
  value = selecthorario.value, //El valor seleccionado
  text = selecthorario.options[selecthorario.selectedIndex].innerText; //El texto de la opción seleccionada
  if (value === " "){
    alert("ingresa una horario");
    console.log("No definste horario, no te gustan nuestros cines? :");
    
  }else{
  // getData();
  }
}


function mostrarentardasCompra2() {
  var x = document.getElementById("entradas");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}

var filaPeli, asientoPeli, c=0;

function asientos(){
    mat1 = new Array(2);
    for (var i = 0; i<2; i++)
       mat1[i] =new Array(40);
    for (var i =0; i<2; i++ )
      for(var j =0; j<40; j++)
      mat1[i][j]=0;

    if (c<=80){
      /* filaPeli = parseInt(prompt("Ingrese la fila que desea [1 o 2]: "));
      asientoPeli = parseInt(prompt("Ingrese el aciento que desea : [1 al 40]")); */
      filaPeli = parseInt(prompt("Ingrese la fila que desea [1 o 2]: "));
      asientoPeli = parseInt(prompt("Ingrese el aciento que desea : [1 al 40]"));

      if((filaPeli >0 && filaPeli <=2) &&(asientoPeli >0 && asientoPeli<= 40)){
        if (mat1 [(filaPeli -1)][(asientoPeli -1)] ==0){
          mat1[(filaPeli -1)][(asientoPeli -1)]= 1;
          c = c+1;
          console.log("Resreva existosa !!");
          document.getElementById("Infoasientos").innerHTML=("Reserva exitosa. <br>La fila elegida es: "+filaPeli +"<br> Y el asiento es: "+asientoPeli);
          var preciomasreserva = precioEntrada *1.3;
     console.log("el precio de la entarda mas porcentaje es: "+ preciomasreserva);
        // document.getElementById("preciomasseleccion").innerHTML = ("el precio de la entrada mas porcentaje  masma es: "+ preciomasreserva);
     
          document.getElementById("precio").innerHTML = ("El precio de sus entradas es : "+ preciomasreserva );

          // document.getElementById("MostrarAsientos").innerHTML=("La fila elegida es: "+filaPeli +"<br> Y el asiento es: "+asientoPeli);
           console.log("la fila es: "+filaPeli + "y el asiento es: "+asientoPeli);
          


        }else {
          console.log("Asiento Ocupado !! <br>");
          document.getElementById("Infoasientos").innerHTML = ("Asiento ocupado. ");
        }
      
  
      }else{
        console.log("Favor ingresar un asiento valido. ");
        document.getElementById("Infoasientos").innerHTML=("Favor ingresar un asiento valido. ");
      }
    }
    for (var i = 0; i<2; i++){
      for(var j = 0; j <40; j++){
        console.log(mat1[i][j], "\t")
      }
    }
}
function asientos2(){
  mat1 = new Array(2);
  for (var i = 0; i<2; i++)
     mat1[i] =new Array(40);
  for (var i =0; i<2; i++ )
    for(var j =0; j<40; j++)
    mat1[i][j]=0;

  if (c<=80){
    /* filaPeli = parseInt(prompt("Ingrese la fila que desea [1 o 2]: "));
    asientoPeli = parseInt(prompt("Ingrese el aciento que desea : [1 al 40]")); */
    filaPeli = parseInt(prompt("Ingrese la fila que desea [1 o 2]: "));
    asientoPeli = parseInt(prompt("Ingrese el aciento que desea : [1 al 40]"));

    if((filaPeli >0 && filaPeli <=2) &&(asientoPeli >0 && asientoPeli<= 40)){
      if (mat1 [(filaPeli -1)][(asientoPeli -1)] ==0){
        mat1[(filaPeli -1)][(asientoPeli -1)]= 1;
        c = c+1;
        console.log("Resreva existosa !!");
        document.getElementById("Infoasientos2").innerHTML=("Reserva exitosa. <br>La fila elegida es: "+filaPeli +"<br> Y el asiento es: "+asientoPeli);

        // document.getElementById("MostrarAsientos2").innerHTML=("La fila elegida es: "+filaPeli +"<br> Y el asiento es: "+asientoPeli);
        console.log("la fila es: "+filaPeli + "y el asiento es: "+asientoPeli);
        
        // imprimr el precio de dos entradas con recargo por seleccion
        var preciomasreserva = precioEntrada *1.3;
        var preciomasreservados = preciomasreserva *2;
        console.log("el precio de la entarda mas porcentaje es: "+ preciomasreservados);

           document.getElementById("preciomasseleccion").innerHTML = ("el precio de la entrada mas porcentaje  masma es: "+ preciomasreservados);
        
             document.getElementById("precio").innerHTML = ("El precio de sus entradas es falta algo: "+ preciomasreservados );
        entradasListas2();

      }else {
        console.log("Asiento Ocupado !! <br>");
        document.getElementById("Infoasientos2").innerHTML = ("Asiento ocupado. ");
      }
    

    }else{
      console.log("Favor ingresar un asiento valido. ");
      document.getElementById("Infoasientos2").innerHTML=("Favor ingresar un asiento valido. ");
    }
  }
  for (var i = 0; i<2; i++){
    for(var j = 0; j <40; j++){
      console.log(mat1[i][j], "\t")
    }
  }
}

// funcion de sacar dos entradas
function entradasListas2(){
  var entrada2Lista = document.getElementById("Infoasientos2").value;
  var entrada1Lista = document.getElementById("Infoasientos").value;
  if(entrada1Lista != ""){
     document.getElementById("pdfexport").style.display="block";
    document.getElementById("slect1asiento").setAttribute('disabled','disabled');
    console.log("intento desh btn 1");
  } else if (entrada2Lista != ""){
    document.getElementById("btndosEntradas").setAttribute('disabled','disabled');
    document.getElementById("slect1asiento").setAttribute('disabled','disabled');
    
    console.log("deshabilitado");
  }
  else{
    document.getElementById("btndosEntradas").removeAttribute('disabled');
    // document.getElementById("pdfexport").style.display="block";
    console.log("cacac");
    
  }
  
}


/* function ocultarInfoSalas2(){
  // document.getElementById("InfoSalas2").style.visibility = 'hidden';
  // document.getElementById("InfoSalas2").style.height = "0px";
  if(document.getElementById("InfoSalas2").style.display=='block') {
    document.getElementById("div").style.display='none';
} 
} */


function ExecuteScript() {
  window.scrollTo(0, 1700);
  }