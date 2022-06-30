// concatenar
/* concatenar nos permite unir un string con otro mediante el operador de + */

let nombre = "jesus"
let apellido = "sanchez"
let nombreCompleto = nombre + " " + apellido

console.log(nombreCompleto) // jesus sanchez

// template String
/* es una manera de incrustar nuestras variables en una cadena de texto sin usar el operador + */

let mensaje = `hola mi nombre es ${nombre} ${apellido}`
console.log(mensaje)

// otrade las caracteristicas de las comillas invertidas es que permite saltos de linea
let comillasInvertidas = `hola este
es un
mensaje con
saltos de
linea`
console.log(comillasInvertidas)