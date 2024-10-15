// .push() para agregar elementos al final del arreglo
let colores =["Rojo","Naranja","Azul"];

colores.push("Violeta");
console.log(colores);

colores.push("Gris","Dorado");
console.log(colores);

// .pop() eliminar el último elemento del arreglo (retorna el elemento eliminado)
let colorEliminado= colores.pop();
console.log(colores);
console.log(colorEliminado); //indica el elemento eliminado

// .shift() eliminar el primer elemento (retorna el elemento eliminado)
let primerColorEliminado= colores.shift();
console.log(colores);
console.log(primerColorEliminado);

// .unshift() elimina el primer elemento (retorna la cantidad de elementos)
let agregadoPrimer=colores.unshift("Plateado");
console.log(colores);
console.log(agregadoPrimer);
colores.unshift("Verde","Amarillo");
console.log(colores);

// .join() unidica elementos mediante un caracter (retorna un string)
let dias = ["Lunes","Martes","Miércoles"];
let separadosPorComa= dias.join();
console.log(separadosPorComa);

let separadosPorGuion=dias.join("-"); //se coloca el caractes que se usará para separ los elementos 
console.log(separadosPorGuion);

//.indexOf() busca la posición del elemento (retorna la posición)
let frutas=["Manzana","Banana","Frutilla"];

let indiceEncontrado=frutas.indexOf("Banana");
console.log(indiceEncontrado);

// .lastIndexOf() busca la posición de atrás para adelante (retorna la posición)
let clubes=["Racing","Boca","Lanus","Boca"];
let posicionEncontrada=clubes.lastIndexOf("Boca");
console.log(posicionEncontrada);

// .includes() busca elementos retornando un booleano
let verduras= ["Brócoli","Pepino","Aguacate"];
console.log(verduras.includes("Papa"));
