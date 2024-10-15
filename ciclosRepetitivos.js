const prompt = require("prompt-sync")({ sigint: true }); 

console.log("1")
console.log("2")
console.log("3")
console.log("4")
 
//while
let contar=0;
while(contar<=5){
    console.log("El contador es: "+contar);
    contar++;
}


let control="si";
let sumaNotas=0;
let cant=0;
console.log("¡Bienvenido al registro de notas!");

while(control=="si"){
    console.log("Ingrese uana nota a sumar")
    nota=parseInt(prompt("Nota alumno: "));
    //ejemplo: 8
    //  8         0       8
    sumaNotas=sumaNotas+nota;
    //sumaNotas +=nota;
    cant++;

    control=prompt("Ingrese 'si' si desea agregar más notas o 'no' si no: ")
}
let promedio = sumaNotas/cant;
console.log("El promedio es: " + promedio);


//while 
let i =1;

while (i<=10) {
    console.log(i);

    i++;
}

//do while 
let j=15;

do{
    console.log(j);
    j++;
}while(j<=10);