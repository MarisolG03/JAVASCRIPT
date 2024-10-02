let diaSemana=10;
let mensaje ="";

switch(diaSemana){
    case 1:
        mensaje="Hoy es lunes";
        break;
    case 2:
        mensaje="Hoy es martes";
        break;
    case 3:
        mensaje="Hoy es miércoles";
        break;
    case 4:
        mensaje="Hoy es jueves";
        break;
    case 5:
        mensaje="Hoy es viernes";
        break;
    case 6:
        mensaje="Hoy es sábado";
        break;
    case 7:
        mensaje="Hoy es domingo";
        break;
    default:
        mensaje= "Ingresó un número incorrecto"
}

console.log(mensaje);


let fruta = "cereza";
let mensajeFruta=" ";

switch (fruta) {
    case "manzana":
        mensajeFruta= "Es una manzana"
        break;
    case "banana":
        mensajeFruta= "Es una banana"
        break;
    case "cereza":
        mensajeFruta= "Es una cereza"
        break;
    default:
        mensaje="Ha ingresado una fruta incorrecta"
        break;
}
console.log(mensajeFruta);