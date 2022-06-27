// Tipos de Datos

//String o cadenas de texto -> es todo aquello que se encuentre encerrado entre comillas ya sea ''(simples), ""(dobles) e ``(invertidas)
const producto = "Monitor de 20 Pulgadas"
const producto2 = String("Monitor de 30 Pulgadas")
const producto3 = new String("Monitor de 40 Pulgadas")

console.group("Strings")
console.log(producto)
console.log(producto2)
console.log(producto3)

const producto4 = "Monitor de \"50\" Pulgadas" // escapar caracteres
const producto5 = "Monitor de \n\"60\" Pulgadas" 

console.log(producto4)
console.log(producto5)
console.groupEnd()

// Metodos y Funciones para Strings

const tweet = "aprendiendo js con desarrollo web completo"
const producto7 = "Monitor HD"
const email = "pepito23@gmail.com"

console.group("Metodos y Funciones de Strings")
console.log(tweet.length) // nos dice la cantidad de caracteres del String
console.log(producto7)

//indexOf() - retorna la posicion de la busqueda segun exista o no
console.log(tweet.indexOf("js"))
console.log(producto7.indexOf("tablet")) // si no eciste la busqueda regresa un valor menos de cero -1

//includes() - retorna true o false segun exite o no la busqueda
console.log(tweet.includes("js"))
console.log(tweet.includes("javascript"))
console.log(email.includes("@")) // se solia usar para validar emails

console.groupEnd()

// Number o numericos - los numeros no se encierran entre comillas solo se coloca el numero
// js no tiene un dato especial para Flotantes, Number es para enteros y flotantes

const numero1 = 100
const numero2 = 200
const noEsUnNumero = "300"

console.group("Number")
console.log(numero1)
console.log(numero2)
console.log(noEsUnNumero)
console.log(numero1 + numero2) // suma - podemos realizar operaciones matematicas con los numeros
console.log(numero1 - numero2) // resta
console.log(numero1 * numero2) // multiplicaion
console.log(numero1 / numero2) // Divicion
console.log(numero1 % numero2) // modulo devuelve el residuo

console.groupEnd()

//metodos para numeros
console.group("metodos para NUmeros con el Objeto Math()")

let pi = Math.PI // devuelve el valor de PI
let redondeoNeutro = Math.round(2.2) // devuelve un numero redondeado al entero mas sercano
let redondeoPositivo = Math.ceil(2.1) // devuelve un numero redondeado hacia arriba
let redondeoNegativo = Math.floor(5.9) // devuelve un numero redondeado hacia abajo
let raizCuadrada = Math.sqrt(144) // devuelve la raiz cuadrada del numero pasado
let negativoAPositivo = Math.abs(-200) //devuelve un valor negativo en positivo
let numeroMinimo = Math.min(5,3,4,6,9) // devuelve el valor mas pequeño de los pasados
let numeroMaximo = Math.max(5,3,4,6,9) // devuelve el valor mas alto de los pasados
let numeroAleatorio = Math.random() // devuelbe un valor aleatorio de 0 a 1 pero sin incluir 1 (0 - 0.999)
let numeroAleatorio2 = Math.floor( Math.random() * 100 ) // de este modo podemos tener numeros aleatorios mayores a 1


console.log(pi)
console.log(redondeoNeutro)
console.log(redondeoPositivo)
console.log(redondeoNegativo)
console.log(raizCuadrada)
console.log(negativoAPositivo)
console.log(numeroMinimo)
console.log(numeroMaximo)
console.log(numeroAleatorio)
console.log(numeroAleatorio2)

console.groupEnd()

// Orden de las operaciones

console.group("Orden de las operaciones")
// JS respeta la precedencia de los operadores
let resultado = 20 + 33 * 2 // primero se realiza la multiplicacion

console.groupEnd()

// Incremento y Decremento

console.group("Incremento y Decremento")

let puntaje = 2

puntaje++ // incrementa el valore de puntaje en 1 es lomismo que puntaje = puntaje + 1
console.log(puntaje)


puntaje-- // Decrementa el valor de puntaje en 1 es lomismo que puntaje = puntaje - 1
console.log(puntaje)

let mostrarPuntos = puntaje++ // pos-incremente primero asigna y despues incrementa
console.log(mostrarPuntos)

mostrarPuntos = ++puntaje // pre-incremento primero incrementa y despues asigna
console.log(mostrarPuntos)

console.groupEnd()

// Concatenacion y Template String

const miNombre = "emmanuel"
const miApellido = "sanchez"

console.log(miNombre)
console.log(miApellido)
//concatenacion
console.log(miNombre + " " + miApellido)
//template String
console.log(`Nombre del cliente: ${miNombre}\nApellido del cliente: ${miApellido}\nNombre y apellido del cliente: ${miNombre} ${miApellido}`)