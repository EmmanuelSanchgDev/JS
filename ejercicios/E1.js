"use strict"

function inputNumbers(){
    let num1 = prompt("ingresa un 1er Numero")
    let num2 = prompt("ingresa un 2do Numero")

    verificaNumbers(num1, num2)
}

function verificaNumbers(num1, num2){
    if( isNaN(num1) || isNaN(num2) ){
        console.log("parece que no ingresaste un numero valido, vuelve a intentarlo...")
        inputNumbers()
    } else if( (num1 <= 0) || (num2 <= 0) ){
        console.log("solo aceptamos numeros mayores a cero, vuelve a intentarlo...")
        inputNumbers()
    } else {
        compararNumbers(num1, num2)
    }
}

function compararNumbers(num1, num2){
    if(num1 > num2){
        console.log(`num1: ${num1}, es mayor`)
    } else if(num2 > num1){
        console.log(`num2: ${num2}, es mayor`)
    } else {
        console.log(`num1: ${num1} y num2: ${num2}, son dos numeros iguales`)
    }
}

inputNumbers()