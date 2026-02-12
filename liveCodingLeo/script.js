//se crea la clase usuario
class Usuario {

  //se crea el constructor con los parametros solicitados
  constructor(nombre, correo) {
    this.nombre = nombre;
    this.correo = correo;
  }

  //se crea la funcion para mostrar informacion
  mostrarInfo() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Correo: ${this.correo}`);
  }
}

//se crea la clase administrador
class Administrador extends Usuario {
#permiso
  //se crea el constructor con los parametros solicitados y heredados de la clase padre
  constructor(nombre, correo, permiso = true) {
    super(nombre, correo);
    this.#permiso = permiso

  }
  
  //se crea la funcion para mostrar informacion modificando la clase anterior
  mostrarInfo() {
    super.mostrarInfo();
    console.log(`Permiso: ${this.#permiso ? "Si" : "No"}`);
  }
}

//se crean las instancias con los argumentos solicitados para las clases
const user = new Usuario("Juan", "zV4xS@example.com");
const admin = new Administrador("pedro", "zV4xS@example.com");


// se muestran los resultados
console.log("------------ user ------------");
user.mostrarInfo();

console.log("------------ adm ------------");

admin.mostrarInfo();
