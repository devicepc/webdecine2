 function pdfexport(){
  document.getElementById("pdfexport").addEventListener("click", ()=>{
    const invoice = this.document.getElementById("entradas");
    quitarbtnDescaCRes();
    console.log(invoice);
    console.log(window);
    var opt ={
      margin: 1,
      filename: 'entradasCinejlasf.pdf',
      image: { type:'jpeg', quality: 0.98},
      jsPDF: {unit:'in', format: 'letter', orientation:'portrait'}
    };
    html2pdf().from(invoice).set(opt).save();
  })
}


// boton pagar sin resreva 
window.onload = function(){
  document.getElementById("pdfexport1").addEventListener("click", ()=>{
    quitarbtnDesca();
    const invoice = this.document.getElementById("entradas");
    console.log(invoice);
    console.log(window);
    var opt ={
      margin: 1,
      filename: 'entradasCinejlasf.pdf',
      image: { type:'jpeg', quality: 0.98},
      jsPDF: {unit:'in', format: 'letter', orientation:'portrait'}
    };
    html2pdf().from(invoice).set(opt).save();
  })
}

// quitar y agregar para generar pdf sin reservas
function quitarbtnDesca(){
  document.getElementById("pdfexport1").style.display="none";
  document.getElementById("pagarsinreserva").style.display="none";
  document.getElementById("elejasientos").style.display="none";
  document.getElementById("qrvacio").style.display="block";
  document.getElementById("container").style.display="none";
  document.getElementById("h3pdf").style.display="none";
  document.getElementById("h3titleselectasientos").style.display="none";
  document.getElementById("slect1asiento").style.display="none";
  document.getElementById("btndosEntradas").style.display="none";
  //  document.getElementById("InfoSalas4").style.display="none";


}

// quitar y agregar para generar pdf con reservas
function quitarbtnDescaCRes(){
  document.getElementById("pdfexport1").style.display="none";
  document.getElementById("pagarsinreserva").style.display="none";
  document.getElementById("elejasientos").style.display="none";
  document.getElementById("qrvacio").style.display="block";
  document.getElementById("container").style.display="none";
  document.getElementById("h3pdf").style.display="none";
  // document.getElementById("InfoSalas4").style.display="none";


}

