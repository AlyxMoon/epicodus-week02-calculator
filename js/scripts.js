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

$(document).ready(function () {

  $('form').submit(function (event) {
    event.preventDefault()

    const id = '#' + $(this).attr('id')
    
    const num1 = parseInt($(id + ' .number1').val())
    const num2 = parseInt($(id + ' .number2').val())

    let result
    if (id === '#add') {
      result = add(num1, num2)
    }
    if (id === '#subtract') {
      result = subtract(num1, num2)
    }
    if (id === '#multiply') {
      result = multiply(num1, num2)
    }
    if (id === '#divide') {
      result = divide(num1, num2)
    }

    const selector = id + ' .output'
    $(selector).text(result)
  })

})
