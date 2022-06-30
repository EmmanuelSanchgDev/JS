// Number
/* algo que debemos saber de entradaes que en JS no existen un tipo de dato especial para cada numeros que son "enteros" y "flotantes", para JS ambos son del tipo Number */
// los numeros nos sirve para realizar calculos y operaciones matematicas
"use strict"

let num1 = 10;
let num2 = 15.2345678;
let nan = "2"
console.log( typeof num1 ) // number
console.log( typeof num2 ) // number

// propiedades y metodos
// el metodo toFixed() tiene varias caracteristicas
console.log( num2.toFixed() ) // 15 -> si no agregamos un argumento, nos redondea un flotante al entero mas cercano
console.log( num2.toFixed(2) ) // 15.23 -> si agregamos un rgumento nos limita la cantidad de decimales que tendra nuestro flotante
console.log( parseInt(num2) ) // 15 -> parseInt() devuelve un valor numerico del tipo Entero
console.log( typeof parseInt(nan) ) // 2 -> tambien nos ayuda a convertir una entrada del usuario a tipo number
console.log( parseFloat(num2) ) // tambien tiene su parte flotante que conservara los decimales
console.log("-------")

// operaciones
console.log( num1 + num2 ) // suma
console.log( num1 - num2 ) // resta
console.log( num1 / num2 ) // divicion
console.log( num1 * num2 ) // multiplicacion
console.log( num2 % num1 ) // modulo
// en esta operacion no pasa lo que esperamos
console.log( num1 + nan ) // concatena - > esto pasa porque si en la operacion hay un String en automatico JS nos convierte el tipo number a tipo string y concatena los strings
console.log( num1 + num2 + nan ) // aqui como la suma ba de izq a der primero suma los dos tipo number y cuando llega al string concatena el resultado de la primer suma con el string

