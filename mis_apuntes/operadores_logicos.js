let dato = 10
if(dato <= 10 && dato > 0) {
    console.log("tu numero esta entre el 0 y el 10")
} else if(dato > 10 || dato < 15) {
    console.log("tu numero esta por debajo de 15")
}
// estos operadores combierten los valores a booleano y los compraran
// && (and) todas las condiciones deben ser verdaderas para que que devuelva true
// || (or) minimo una de las condicones deve ser verdadera para que devuelva true
// ! (not) invierte el valor del dato (true se vuelve false y visebersa)