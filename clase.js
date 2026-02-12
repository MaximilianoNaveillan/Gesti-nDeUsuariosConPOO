//************ Encapsulamiento ********
/* Consiste en ocultar detalles internos de un Obj  */
/* Permite acceso a sus datos solo atraves de métodos controlados */
/* 
    .- Proteger la información interna
    .- Evitar modificaciones indebidas
    .- Controlar cómo se usan los datos
*/

//estructura: class nombreDeClass {  constructor(props...){} ... métodos()  }

class CuentaBancaria {
  #saldo; // propiedad privada
  constructor(saldoInicial) {
    this.#saldo = saldoInicial;
  }

  depositar(monto) {
    if (monto > 0) {
      this.#saldo += monto;
    }
  }

  verSaldo() {
    return this.#saldo;
  }
}

const cuenta = new CuentaBancaria(1000);
cuenta.depositar(500);

const cuenta2 = new CuentaBancaria(0);
cuenta2.depositar(10000);

console.log(cuenta.verSaldo());
console.log(cuenta2.verSaldo());
//console.log(cuenta.#saldo); ✖️ ERROR PROPIEDAD PRIVADA. --> no se puede acceder fuera de la clase

//************ Herencia ***************
/* Es un principio que permite que una clase reutilice propiedades y métodos de otra clase  */
/*  
    .- Clase Padre (Superclase)
    .- Clase Hijo (Subclase) -> Usar lo heredado tal como está --> agregar nuevas funciones --> modificar comportamiento existente 
    .- es importante usar la palabra recervada EXTENDS

*/

class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hacerSonido() {
    return '.....';
  }
}

class Perro extends Animal {
  hacerSonido() {
    return 'Guau, guau 🐶';
  }
}

const miPerro = new Perro('Teo');

console.log(miPerro.hacerSonido());

//*************Polimorfismo*************
// Es un principio de la POO que permite que diferentes clases respondan al mismo método de manera distintas
// Mismo método --> diferente comportamiento
// clase base
class Figuras {
  calcularArea() {
    return 'Area no definida';
  }
}

// clase hija: Circulo
class Circulo extends Figuras {
  constructor(radio) {
    super(); // hereda el constructor
    this.radio = radio;
  }

  calcularArea() {
    return Math.PI * this.radio ** 2;
  }
}

const figura = new Figuras();
const circulo = new Circulo(5);

console.log(figura.calcularArea()); //Area no definida
console.log(circulo.calcularArea()); // 78...

//**************Abstracción**************
// es un principio de la POO que consiste en mostrar solo lo esencial y ocultar los detalles internos de su funcionamiento.
/* No necesitas entender el motor, solo necesitas cómo encender el auto */

class Automovil {
  // define la estructura general --> obliga a que cualquier tipo de auto tenga los métodos encencer() y apagar()
  constructor() {
    if (this.constructor === Automovil) {
      throw new Error('No se puede intanciar Automovil directamente');
    }
  }
  encender() {
    throw new Error('El método encender() debe implementarse');
  }
  apagar() {
    throw new Error('El método apagar() debe implementarse');
  }
}

class AutoBencina extends Automovil {
  encender() {
    return 'Encendiendo motor a combustión...';
  }
  apagar() {
    return 'Apagando motor a combustión';
  }
}

const miAuto = new AutoBencina();
console.log(miAuto.encender()); // se ve la abstracciónsolo al invocar los metodos
console.log(miAuto.apagar());

// ******************* Prototype *********************

//El prototype es el mecanismo que permite la herencia entre Objetos

function Persona(nombre) {
  this.nombre = nombre;
}

Persona.prototype.saludar = function () {
  console.log(`Hola soy ${this.nombre}`);
};

let juan = new Persona('Juan');
let Leo = new Persona('Leo');
juan.saludar();
Leo.saludar();
//. Todos los ojetos en JS heredan de un prototipo
// los métos definidos en prototypes se comprten entre instancias
// Se pueden agregar nuevos métodos al prototipo en cualquier momento
