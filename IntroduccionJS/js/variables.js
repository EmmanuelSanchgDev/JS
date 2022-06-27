// variables
var nombreDeVariable = "valor"

// variables con let - nueva forma de declarar variables

let nombreDeVariable2 = "valor"
nombreDeVariable2 = "este es otro valor"
let _variable = true
console.log(_variable)

// variables con const - su valor no cambia

const NoVariable = 'hola mundo'
console.log(NoVariable)

//podemos declarar variables de 3 maneras

// var - let y const

// -var- es la manera antigua y se recomienda no usarla mas
// en lugar de usar var se utiliza -let-, let es la manera moderna de declarar variables
let nombre = 'emmanuel'
// como se be se usa la palabra reservada let, seguido del nombre de la variable, el operador de asignacion (=) y el valor de la variable
// let nombreVariable = 'valorDeVariable'

// una variables como su nombre indica puede cambiar, por lo que a lo largo del; programa podemos
// reasignar el valor de una variable
nombre = "pepito23"
// al reasignar una variable que ya existe ya no se utiliza la palabra reservada -let-

// a diferencia de -let- la palabra -const- define una constante que como su nombre indica siempre tendra el mismo valor por lo que una ves declarada ya no se puede rasignar su valor
// const fechaNacimiento = "1996/10/18"

//otra diferencia de let y const es que let se puede declarar sin asignar un valor para mas adelante ser asignado
// let gustoPersona;
// y en cambio const cuando se declara se debe asignar si valor en ese mismo momento, se debe delarar eh inicializar
// const paisDeNacimiento = "mexico"

// para nombrar variables se deben respetar 3(o mas) reglas y son...
// el nombre debe comenzar con letras
// _(guiones bajos)
// o $(signo de dolar)
// y no puede iniciar con numeros(1nombre) o llebar entre medio signos diferentes a los anteriores(nombre+apellido-persona) ni espacios en blanco entre palabras(nombre completo)