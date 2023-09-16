const value1 = document.querySelector('#value1');
const value2 = document.querySelector('#value2');
const operator = document.querySelector('#operator');
const calculate = document.querySelector('#calculate');
const resultField = document.querySelector('.result');
const warn1 = document.querySelector('.warn1');
const warn2 = document.querySelector('.warn2')

value1.addEventListener('focus', clearWarn);
value2.addEventListener('focus', clearWarn);

function clearWarn(){
  warn1.innerHTML = '';
  warn2.innerHTML = '';
}

calculate.addEventListener('click', () => {
  // only use valueAsNumber when input[type=number]
  let num1 = value1.valueAsNumber;
  let num2 = value2.valueAsNumber;
  let sign = operator.value;
  if (isNaN(num1)) {
    warn1.innerHTML = 'Please enter a number'
  } else if (isNaN(num2)) {
    warn2.innerHTML = 'Please enter a number'
  } else {
    let result = calculator(num1, num2, sign);
    console.log(typeof num1)
    resultField.innerHTML = result;
  }
})

function calculator(num1, num2, operator){
  switch (operator) {
    case '*':
      return num1 * num2;
      break;
    case '+':
      return num1 + num2;
      break;
    case '-':
      return num1 - num2;
      break;
    case '/':
      return num1 / num2;
      break;
    case '%':
      return num1 % num2;
  }

}