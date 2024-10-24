//crear un objeto
let persona = {
    nombre: "Ezequiel",
    apellido: "Díaz",
    edad: "25",
    cloresFav: ["Azul","Morado","Amarillo"],
    saludar: function(){
        return "Hola cómo estás? Soy "+ this.nombre;
    }
};

//acceder a las propiedades de un objeto
console.log(persona.edad);
console.log(persona.cloresFav[0]);

//crear una nueva propiedad
persona.deporteFav="Natación";
persona.edad="26";
console.log(persona);

//eliminar una propiedad
delete persona.deporteFav;
console.log(persona);

//acceder a un método de un objeto
let saludoRecibido =persona.saludar();
console.log(saludoRecibido);
//this