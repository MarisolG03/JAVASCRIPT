//tradicional vs ternario
let numero = 10;

if (numero > 0){
    console.log ("Es positivo");
}
else{
    console.log("es negativo");
}

(numero >0) ? console.log("Es positivo") : console.log("Es negativo") ; //ternario


//asignación a variable
let edad = 30;
let mensaje = "";

if (edad >= 18){
    mensaje = "Es mayor";
}
else{
    mensaje = "Es menor";
}
console.log(mensaje);

//ternario
mensaje = (edad >= 18) ? "Es mayor":"Es menor" ;
console.log(mensaje);


//más de una instrucción
let edad2 =20;
let mensaje2 = "";
let categoria = "";

/*if (edad2 >=18){
    mensaje2 = "Es mayor de edad!";
    categoria = "Adulto";
    console.log("Felicidades eres Mayor de edad!");
}
else{
    mensaje2 = "Es menor de edad";
    categoria = "Menor";
    console.log("Felicidades eres Menor de edad!");
}
console.log(mensaje2);
console.log(categoria);*/

//ternario
(edad2 >= 18) ? (
    mensaje2 = "Es mayor de edad!",
    categoria = "Adulto",
    console.log("Felicidades eres Mayor de edad!")
) : 
 (
    mensaje2 = "Es menor de edad",
    categoria = "Menor",
    console.log("Felicidades eres Menor de edad!")
);

console.log(mensaje2);
console.log(categoria);