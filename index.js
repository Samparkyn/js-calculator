document.addEventListener("DOMContentLoaded", startApp)

let numbers
let operators
let clearButton
let displayNum = ''
let currentNum = ''
let oldNum = ''
let storedOperator = ''
let storedEntriesArray = []
let resultNum
let equalsButton

const operatorFunctions = {
  '+': function(a, b) { return parseFloat(a) + parseFloat(b) }, // add
  '-': function(a, b) { return parseFloat(a) - parseFloat(b) }, // subtract
  '*': function(a, b) { return parseFloat(a) * parseFloat(b) }, // multiply
  '/': function(a, b) { return parseFloat(a) / parseFloat(b) }, // division
};

function startApp() {
  numbers = Array.from(document.getElementsByClassName('number'))
  operators = Array.from(document.getElementsByClassName('operator'))
  clearButton = document.getElementById('clear')
  equalsButton = document.getElementById('equals')
  addListeners()
}


function addListeners() {
  clearButton.addEventListener('click', clearScreen)
  equalsButton.addEventListener('click', calculate)
  numbers.map(number => number.addEventListener('click', handleNumberClick))
  operators.map(number => number.addEventListener('click', handleOperatorClick))
}


function handleNumberClick (e) {
  const numClicked = e.target.value
  if (resultNum) { 
    currentNum = numClicked
    resultNum = ''
  } else { 
    currentNum += numClicked
  }

  displayNum += numClicked
  storedEntriesArray.push(numClicked)
  console.log('currentNum inside number click', currentNum)
  displayValue()
}


function handleOperatorClick (e) {
  const operator = e.target.value
  storedOperator = operator
  oldNum = currentNum
  storedEntriesArray.push(operator)
  console.log('old num indside operater click', oldNum)
  currentNum = ''
  displayNum = ''
  displayOperator()
}


function displayValue() {
  let displayScreen = document.getElementById('display')
  displayScreen.value = displayNum
}

function displayOperator() {
  let displayScreen = document.getElementById('display')
  displayScreen.value = storedOperator
  console.log('op', storedOperator)
}


function clearScreen() {
  let displayScreen = document.getElementById('display')
  displayNum = []
  storedOperator = []
  displayScreen.value = displayNum
  console.log(displayNum)
}

function calculate() {
  let displayScreen = document.getElementById('display')
  oldNum = parseFloat(oldNum);
  currentNum = parseFloat(currentNum);
  resultNum = operatorFunctions[storedOperator](oldNum, currentNum)
  displayNum = resultNum
  displayScreen.value = displayNum
  console.log('oldNum', oldNum)
  console.log('currentNum', currentNum)
  console.log('operater used', storedOperator)
  console.log('displayNum', displayNum)
  console.log('resultNum', resultNum)
  console.log('stored entries arry', storedEntriesArray)
  return resultNum
}

