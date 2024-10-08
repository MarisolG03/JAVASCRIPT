function suma(numero1, numero2){
   let resultado= numero1 + numero2; 
   return resultado;
}

let rdoSuma= suma(4, 10);
console.log(rdoSuma);

let rdoSuma1= suma(10, 10); //nos evitamos escrubir todo de nuevo
console.log(rdoSuma1);

function resta(numero1, numero2){
    let resultado = numero1 - numero2;
    return resultado;
}

let rdoResta = resta(8, 5);
console.log(rdoResta);


function multiplicar(numero1, numero2){
    return numero1 * numero2; //para ahorrar espacio en la memoria
}

let rdoMultiplicación = multiplicar(10, 10);
console.log(rdoMultiplicación);



function division(numero1, numero2){
    if(numero2==0){
        return "No se puede dividir ente cero";
    }
    else{
        return numero1/numero2;
    }
}

let rdoDivision=division(10,2);
let rdoDivision2=division(10,0);

//console.log(rdoDivision);
console.log(rdoDivision2);