const prompt = require("prompt-sync")({ sigint: true }); 

let nroAdivinar = 4;
let intento = 0;
let numero;

do {
    numero= parseInt(prompt("Ingrese un nro del 1 al 10:"));

    if (numero<nroAdivinar){
        console.log("Muy bajo intente nuevamente");
    }else if (numero>nroAdivinar){
        console.log("Muy alto, intente nuevamente");
    }else{
        console.log("¡Número correcto!");
    }

    intento++;

} while(numero != nroAdivinar);

console.log("Adivinaste el número correcto en " + intento + " intentos");