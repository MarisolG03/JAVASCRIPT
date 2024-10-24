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
console.log(frase.slice(6,11)); //()indica dónde empieza y termina

// Opción 2
console.log(frase.slice(7));

//Opción 3
console.log(frase.slice(-10));

// .trim()

let nombreCompleto= "     Homero Simpson     ";
console.log(nombreCompleto.trim());

// .split()
let saludos="Hola ¿Cómo estás?";
console.log(saludos.split("")); //se indica el separador de elementos dentro de las comillas

// .replace(
let fracesita="Me encanta Java";
let fraseNueva=fracesita.replace("Java","Javascript");
console.log(fraseNueva);