//Crear un array
let edades = [24,37,18,59,7];
let nombres= ["Juana","Raúl","Alan","Edgar"];
let booleanos= [true,false,false,true];
let combinados= [15,"HEY",true];

//Acceder a un elemento despecífico de un array
console.log(booleanos[0]);

//Recorrer un array (ingresar a un arreglo y pasar por lodos los elementos)
for(let i=0; i< nombres.length ; i++){
    console.log(nombres[i]);
}

/*console.log(nombres.length);*/

//Modificar cada uno de sus elementos a un array e imprimirlos
let numeros= [10,20,30,40,50];

/*para modificar todo el arreglo*/
for(let i=0; i < numeros.length ; i++){
    numeros[i] = i+1;
}

/*para modificar un elemento del arreglo*/
numeros[1]=44;

for(let i=0; i< numeros.length; i++){
    console.log(numeros[i]);
}

//Agregar elementos a un array

let notas =[8,4,10,6];
notas[notas.length]=7;

for(let i=0; i< notas.length; i++){
    console.log(notas[i]);
}

//Extrer elemento de un array a una variable
let nombres1= ["Pedro","Adriana","Javier"];
let nombreSeleccionado = nombres1[1];

console.log(nombreSeleccionado);

//Extraer todos los elementos para algo específico
let numeros2= [10,20,30,40,50];
let sumaNumeros=0;

for(let i=0 ; i<numeros2.length ; i++){
    sumaNumeros=sumaNumeros + numeros2[i];
    //sumaNumeros += numeros[i];
}
let promedio = sumaNumeros/numeros2.length;
console.log(promedio);

//Encontrar el mayor o menor
let num=[1,48,7,52,19];

let menor=num[0];

for(let i=0; i<num.length; i++){
    if(num[i] < menor){
        menor=num[i];
    }
}

console.log(menor);