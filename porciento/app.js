"use strict";

function calcularDescuento(precioInicial, descuento) {
  let result = (precioInicial * (100 - descuento)) / 100;
  return result;
}

function resultCalculo(precioFinal) {
  let resultPantalla = document.getElementById("precioFinal_");
  resultPantalla.innerText = `el Precio Final a pagar es: ${precioFinal}`;
}

function realizaAccionUsuario() {
  let precioInput = document.getElementById("precio");
  let precioInicial = precioInput.value;
  Number(precioInicial);

  let descuentoInput = document.getElementById("descuento");
  let descuento = descuentoInput.value;
  Number(descuento);

  let precioFinal = calcularDescuento(precioInicial, descuento);
  resultCalculo(precioFinal);
}
