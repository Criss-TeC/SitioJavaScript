//def funcion
function saludar(){
    //def variable
    debugger;
    var nombre = document.getElementById("username");

}

// Ejemplos js
function javaScriptBegin(){
    // Definicion de variables
    var variable1; // definir variables en bloque y globales
    let variable2; // definir variables en bloques
    const CONSTANTE_1 = 1; // definir constante y no se cambia

    // arreglos
    let lista = ['valor 1', 'valor 2', 'valor 3'];
    // acceder elemento
    console.log(lista[0]);
    //aniadir elemento
    lista.push('valor 4');
    //eliminar ultimo elemento
    lista.pop();
    delete(lista[2])

    const coordenadas = [10, 20] // simulando tupla
    Object.freeze(coordenadas)   // haciendo a la tupla inmutable

    //ciclos o bucles
    // ciclo for 1 - 10

    for(let i = 1; i <= 10; i++){
        console.log(i);
    }

    lista.forEach(function (x) {
        console.log(x);
    });
}
let a = 1
while (a <= 10){
    a++
}

// objetos
let persona = {
    nombre: "Pedro",
    apellido: "Rojas",
    emal: "pedro@sucorreo.cl"
};

persona.nombre

var objeto2 = "{nombre:\"pedro\"}"
var objeto3 = JSON.parse(objeto2);
var salida = JSON.stringify(persona);
