"use strict"

let num1 = prompt("ingresa un 1er Numero")
let num2 = prompt("ingresa un 2do Numero")

if(num1 > num2){
    console.log(`num1: ${num1}, es mayor`)
} else if(num2 > num1){
    console.log(`num2: ${num2}, es mayor`)
} else {
    console.log(`num1: ${num1} y num2: ${num2}, son dos numeros iguales`)
}