const prompt = require("prompt-sync")({ sigint: true }); 

//Array para almacenar las tareas
let tareas=[];

//Función para agregar una nueva tarea al array
function agregarTarea(nombreRecibido, fechaLimiteRecibida = null){
    tareas.push({ nombre:nombreRecibido, completada:false, fechaLimite:fechaLimiteRecibida,  });
}

//Eliminar una tarea en específico
function eliminarTarea(indice){

    if(indice >= 0 && indice <tareas.length){
        tareas.splice(indice, 1);
        console.log("Tarea eliminada correctamente");
    }else{
        console.log("Índice de tarea inexistente");
    }
}

//Completar una tarea
function completarTarea(indice){
    if(indice>=0 && indice<tareas.length){
        tareas[indice].completada=true;
        console.log("Tarea marcada como correcta");
    }else{
        console.log("Índice de tarea inválido");
    }
}

//Función para modificar una tarea específica
function modificarTarea(indice, nuevoNombre, nuevaFechaLimite =null){
    if(indice>=0 && indice<tareas.length){
        tareas[indice].nombre=nuevoNombre;
        if(nuevaFechaLimite!==null){
            tareas[indice].fechaLimite=nuevaFechaLimite;
        }
        console.log("Tarea modificada con éxito!");
    }else{
        console.log("Índice de tarea inválido");
    }
}


//Función para mostrar el menú de opciones
function mostrarMenu(){
    console.log("--- Menú ---");
    console.log("1. Agregar tarea");
    console.log("2. Eliminar tarea");
    console.log("3. Marcar tarea como completada");
    console.log("4. Modificar una tarea");
    console.log("5. Mostrar todas las tareas");
    console.log("0. Salir");
}


// Función para interactuar con el usuario
function interactuarConUsuario(){
    let opcion= -1;

    while(opcion !=0){
        mostrarMenu();
        opcion= parseInt(prompt("Ingrese la opción seleccionada: "));

        switch (opcion) {
            case 1:
                let nombreTareaNueva=prompt("Ingrese el nombre de la tarea a cargar: ");
                agregarTarea(nombreTareaNueva);
                break;
            case 2:
                let indiceAeliminar=prompt("Ingrese el nombre de la tarea a eliminar: ");
                eliminarTarea(indiceAeliminar);
                break;
            case 3:
                let indiceACompletar=parseInt(prompt("Ingrese el índice de la tarea a completar: "));
                eliminarTarea(indiceACompletar);
                break;
            case 4:
                let indice=parseInt(prompt("Ingrese el índice a modificar: "));
                let nuevoNombre=prompt("Ingrese el nuevo nombre de su tarea: ");

                modificarTarea(indice, nuevoNombre);
                break;
            case 5:
                console.log("-- LISTA DE TAREAS --");
                console.log(tareas);
                break;


            default:
                console.log("Opción inválida");
                break;
        }
    }
}

interactuarConUsuario();