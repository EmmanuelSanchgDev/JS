function verificar(n1, n2) {
  let num1 = n1;
  let num2 = n2;
  let result;

  if (num1 > num2) {
    result = `${num1} es mayor a ${num2}`;
  } else if (num1 < num2) {
    result = `${num1} es menor a ${num2}`;
  } else if (num1 === num2) {
    result = `${num1} es igual a ${num2}`;
  }
  return result;
}

function run() {
  let inputNum1 = prompt("ingresa el 1er numero");
  let inputNum2 = prompt("ingresa el 2do numero");
  let comparacion;

  if (!isNaN(inputNum1) && !isNaN(inputNum2)) {
    comparacion = verificar(inputNum1, inputNum2);
    console.log(comparacion);
  } else if (
    isNaN(inputNum1) ||
    isNaN(inputNum2) ||
    inputNum1 <= 0 ||
    inputNum2 <= 0
  ) {
    run();
  }
}

run();
