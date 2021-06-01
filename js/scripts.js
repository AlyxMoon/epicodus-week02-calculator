function add (num1, num2) {
  return num1 + num2;
}

function subtract (num1, num2) {
  return num1 - num2;
}

function multiply (num1, num2) {
  return num1 * num2;
}

function divide (num1, num2) {
  return num1 / num2;
}

const num1 = parseInt(prompt('enter first number'));
const num2 = parseInt(prompt('enter second number'));

const resultAdd = add(num1, num2);
const resultSubtract = subtract(num1, num2);
const resultMultiply = multiply(num1, num2);
const resultDivide = divide(num1, num2);

alert('Added: ' + resultAdd);
alert('Subtracted: ' + resultSubtract);
alert('Multiplied: ' + resultMultiply);
alert('Divided: ' + resultDivide);