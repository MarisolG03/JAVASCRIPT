//Validador de contraseña

let contraseña="12345";

function validarContraseña(contraseñaRecibida){
    if(contraseñaRecibida === contraseña){
        console.log ("Contraseña válida");
    }
    else{
        console.log("Contraseña no válida")
    }
}

validarContraseña("12345");

//Calculadora de índice de Masa Corporal
/*
bajo peso <=18.5
peso normal 18.5-24.9
sobrepeso 25-29.9
obesidad >=30

imc=peso/(estatura)2*/

function Resultadoimc(peso, estatura){
    let imc= peso / (estatura*estatura);

    if(imc<=18.5){
        console.log("Usted está bajo de peso");
    }
    else if(imc<=24.9){
        console.log("Usted está en su peso normal");
    }
    else if(imc<=29.9){
        console.log("Usted tiene sobrepeso");
    }
    else if(imc>=30){
        console.log("Usted tiene obesidad");
    }
    else{
        console.log("Datos incorrectos, introduzca el peso en kg y la estatura en m");
    }
}

Resultadoimc(50,1.5);

//Conversor de monedas