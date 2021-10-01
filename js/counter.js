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
    } else if(integer <= 0){
        alert("El numero minimo de entradas es 0");
        document.getElementById('number').innerHTML = "0";
    }
}

