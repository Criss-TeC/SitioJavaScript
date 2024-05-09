//def funcion
function saludar() {
  //def variable
  debugger;
  var nombre = document.getElementById("username");
}

// Ejemplos js
function javaScriptBegin() {
  // Definicion de variables
  var variable1; // definir variables en bloque y globales
  let variable2; // definir variables en bloques
  const CONSTANTE_1 = 1; // definir constante y no se cambia

  // arreglos
  let lista = ["valor 1", "valor 2", "valor 3"];
  // acceder elemento
  console.log(lista[0]);
  //aniadir elemento
  lista.push("valor 4");
  //eliminar ultimo elemento
  lista.pop();
  delete lista[2];

  const coordenadas = [10, 20]; // simulando tupla
  Object.freeze(coordenadas); // haciendo a la tupla inmutable

  //ciclos o bucles
  // ciclo for 1 - 10

  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

  lista.forEach(function (x) {
    console.log(x);
  });
  let a = 1;
  while (a <= 10) {
    a++;
  }

  // objetos
  let persona = {
    nombre: "Pedro",
    apellido: "Rojas",
    emal: "pedro@sucorreo.cl",
  };

  persona.nombre;
  // serializacion

  var objeto2 = '{nombre:"pedro"}';
  var objeto3 = JSON.parse(objeto2);
  var salida = JSON.stringify(persona);

  // bloque de conicion

  // == es para igualdad
  // === es para igualdad estricta
  // && es para and
  // || es para or
  // !== para distinto
  // ! es para not

  if (1 == 2) {
    //bloque de codigo verdadero
  } else {
    //bloque de codigo falso
  }

  // trabajando con objetos

  let objeto1 = {
    id: 1,
    nombre: "Angela",
    apellido: "Castro",
    showFullName: function () {
      console.log(`${nombre} ${apellido}`);
    },
  };

  objeto1.showFullName();

  class Persona {
    constructor(nombre, apellido) {
      this.nombre = nombre;
      this.apellido = apellido;
    }

    saludar() {
      console.log(`Hola, mi nombre es ${this.nombre}`);
    }
  }

  class Empleado extends Persona {
    constructor(nombre, apellido, edad, puesto) {
      super(nombre, apellido);
      this.edad = edad;
      this.puesto = puesto;
    }

    presentar() {
      console.log(`Hola, mi nombre es ${th.nombre} y soy ${this.puesto}`);
    }
  }

  // Encapsulamiento: principio de ocultar detalles internos de un obljeto,
  // y exponer solo lo necesario.
  class CuentaBancaria {
    #saldo; // # resguarda datos

    constructor(saldoInicial) {
      this.#saldo = saldoInicial;
    }

    depositar(cantidad) {
      if (cantidad > 0) {
        this.#saldo += cantidad;
      }
    }

    verSaldo() {
      console.log(`El saldo actual es ${this.#saldo}`);
    }
  }
  let cuenta1 = new CuentaBancaria(100000);

  // polimorfismo: permite que diferentes clases tenfan merodos con el nombre
  // pero con comportamientos diferentes

  class Animal {
    hablar() {
      console.log("Un sonido de animal");
    }
  }

  class Perro extends Animal {
    hablar() {
      console.log("guau guau");
    }
  }

  // arrow function
  const suma = (a, b) => {
    total = a + b;
    return total;
  };

  const suma2 = (a, b) => a + b;

  // los operadores ternarios
  const resultado = a === b ? "Si" : "No";
}

// asignar evento a un elemento o contro del documento web

let botonSumar = document.getElementById("boton_sumar");

console.log(botonSumar);

botonSumar.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('Hice Click!!!')
});