const prompt = require("prompt-sync")({ sigint: true }); 

/*
Para recibir datos como números
let numero = parseInt(prompt("Por favor ingrese un número: "));
console.log("El número que ha seleccionado es: ", numero);*/


function suma(numero1, numero2){
    let resultado= numero1 + numero2; 
    return resultado;
 }
 
 
 function resta(numero1, numero2){
     let resultado = numero1 - numero2;
     return resultado;
 }
 
 
 
 function multiplicar(numero1, numero2){
     return numero1 * numero2; //para ahorrar espacio en la memoria
 }
 
 
 function division(numero1, numero2){
     if(numero2==0){
         return "No se puede dividir ente cero";
     }
     else{
         return numero1/numero2;
     }
 }
 
console.log("Bienvenido a su calculadora digital");
console.log("1. Suma");
console.log("2. Resta");
console.log("3. Multiplicación");
console.log("4. División");

// npm i prompt-sync (instalación en la terminal)

let opcion =parseInt(prompt("Indique la operación que desea realizar: "));
let numero1;
let numero2;
let resultado;


switch (opcion) {
    case 1:
        numero1=parseInt(prompt("Indique el primer número a sumar: "));
        numero2=parseInt(prompt("Indique el segundo número a sumar: "));
        resultado=suma(numero1, numero2);
        console.log("El resultado de la suma es: " + resultado);
        break;
    case 2:
        numero1=parseInt(prompt("Indique el primer número a restar: "));
        numero2=parseInt(prompt("Indique el segundo número a restar: "));
        resultado=resta(numero1, numero2);
        console.log("El resultado de la resta es: " + resultado);
        break;
    case 3:
        numero1=parseInt(prompt("Indique el primer número a multiplic)ar: "));
        numero2=parseInt(prompt("Indique el segundo número a multipli)car: "));
        resultado=multiplicar(numero1, numero2);
        console.log("El resultado de la multiplicación es: " + resultado);
        break;
    case 4:
        numero1=parseInt(prompt("Indique el primer número a dividir: "));
        resultado=division(numero1, numero2);
        numero2=parseInt(prompt("Indique el segundo número a dividir: "));
        if(typeof resultado == "string"){
            console.log(resultado);
        }
        else{
        console.log("El resultado de la división es: " + resultado);
        }
        break;
        
    default:
        console.log("Ingresó una opción no válida");
        break;
}



/*Para saber el tipo de dato
let numero=5;
let mensaje ="Hola";
console.log(typeof mensaje); */

