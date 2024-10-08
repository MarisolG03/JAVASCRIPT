//Convertir monedas
//Opción
function convertirMoneda(cantidad, tipoCambio){
    let resultado = cantidad *tipoCambio;
    return resultado;
}

//let cantidad = convertirMoneda(100, 0.85);
//console.log("Cantidad en euros: " + cantidad);

//Opción 2
function convertirMoneda2(cantidad , monedaDestino){
    let tipoDeCambio;

    switch (monedaDestino) {
        case "dolar":
            tipoDeCambio= 1 //Tipo de cambio de dolar a si mismo
            break;
        
        case "real":
            tipoDeCambio= 5.5; //Tipo de cambio de dolar a real
            break;

        case "euro":
            tipoDeCambio=0.85;
            break;

        default:
            console.log("Moneda no soportada")
            return -1;
            break;
    }

    let resultado = cantidad * tipoDeCambio;
    console.log("Cantidad convertida a " + monedaDestino + " : " + resultado);
}

convertirMoneda2(100, "real");


//Evaluador de Rango de Edad
function evaluarEdad(edad){

    if(edad< 2){
        console.log("Bebé");
    }
    else if(edad < 12){
        console.log("Niño");
    }
    else if(edad <18){
        console.log("Adolescente");
    }
    else if(edad <30){
        console.log("Adulto joven");
    }
    else if (edad <70){
        console.log("Adulto");
    }
    else{
        console.log("Adulto mayor");
    }
}

evaluarEdad(20);


//Generador de mensajes personalizados

function generarMensajePersonalizado(nombre, momentoDelDia){

    let saludo = (momentoDelDia === "mañana") ? "Buenos días" : "Buenas tardes";
    console.log(`${saludo}, ${nombre}`);
}

generarMensajePersonalizado("Lautaro", "mañana");