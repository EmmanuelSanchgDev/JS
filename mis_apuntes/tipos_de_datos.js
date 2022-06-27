// Primitivos

// Strings
let _string = "emmanuel";
let _string2 = "sanchez";
let _string3 = new String(`peluche`);

console.group("Strings");
console.log(_string, _string2, _string3);
console.groupEnd();

// Number
let edad = 18;
let pesos = 98.68;
console.group("Number")
console.log(edad, "-", pesos)
console.groupEnd();

// NaN
let _nan = NaN
console.group("NaN")
console.log(_nan)
console.groupEnd();

// undefined
let mascota;
console.group("undefined")
console.log(mascota)
console.groupEnd();

//null
let cliente = null
console.group("null")
console.log(cliente)
console.groupEnd();

//Boolean
let es_mayor = false
let es_ninna = true
console.group("Boolean")
console.log(es_mayor, "-", es_ninna)
console.groupEnd();

// Compuestos O Complejos

// arrays
const lista = ["papas", "tomates", "chiles", "pollo"]
console.group("arrays")
console.log(lista[0])
console.groupEnd();

//objetos
const auto = {
    llantas : 4,
    puertas : 2,
    gasolina : "full"
}
console.group("Object")
console.log(auto.gasolina)
console.groupEnd();