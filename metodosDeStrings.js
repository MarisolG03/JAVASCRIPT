//Strings y accesos únicos
let saludo="Hola";
console.log(saludo[0]);

// .length (propiedad retorna la cantidad de caracteres)
let miSerie ="Mad Men";
console.log(miSerie.length);

let arrayNombres=["Brat","Lisa","Moe"];
console.log(arrayNombres.length);
console.log(arrayNombres[0].length);

// .indexOf()
let saludo1 = "¡Hola! Estamos programando";
console.log(saludo1.indexOf("o"));
console.log(saludo1.indexOf("Estamos"));
console.log(saludo1.indexOf("Vamos"));

// .slice()
let frase="¡Hola! ¿Cómo estas?";
// Opción 1
console.log(frase.slice(6,11));

