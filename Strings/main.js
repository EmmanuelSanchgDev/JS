// Strings
"use strict"
/*un String es todo aquello que se encuentra entre comillas, ya sea simplea, dobles e invertidas*/

let nombre = "jesus";
let mensaje = 'hola mundo';
let nombreMascota = `   peluche   `;
let str = new String("NUEVO STRING") // este es otra manera de crear un string
// todos estos son Strings

console.log(typeof nombre) // string
console.log(typeof mensaje) // string
console.log(typeof nombreMascota) //string
console.log(typeof str) //string

//! NOTA!!
/*propiedades y objetos
    - una propiedad te da informacion de un objeto -> .length -> da la longitud
    - un metodo realiza una accion en el objeto, todos los metodos terminan en parentecis () -> 
*/

console.log( nombre.length ) // 5
console.log( mensaje.toUpperCase() ) // HOLA MUNDO -> devuelve el estring en MAYUSCULAS
console.log( str.toLowerCase() ) // nuevo string -> devuelve el estring en minusculas
console.log( mensaje.includes("mundo") ) // true -> busca una palabra en el string y devuelve un boolean si existe o no
console.log( nombreMascota.trim() ) // peluche -> retirar los espacios en blanco que hay al inicio y final de un string
console.log( mensaje.split(" ") ) // ["hola", "mundo"] -> parte un string cada que se encuentra con el separador asignado y lo devuelve en un array