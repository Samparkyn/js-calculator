document.addEventListener("DOMContentLoaded", startApp)

let numbers
let operators
let clearButton
let equalsButton
let decimalButton
let displayNum = ''
let currentNum = ''
let oldNum = ''
let storedOperator = ''
let resultNum
let storedEntriesArray = []

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
  decimalButton = document.getElementById('decimal')
  addListeners()
}


function addListeners() {
  clearButton.addEventListener('click', clearScreen)
  equalsButton.addEventListener('click', calculate)
  decimalButton.addEventListener('click', handleDecimalClick)
  numbers.map(number => number.addEventListener('click', handleNumberClick))
  operators.map(number => number.addEventListener('click', handleOperatorClick))
}


function handleNumberClick (e) {
  const numClicked = e.target.value
  currentNum += numClicked
  displayNum += numClicked
  storedEntriesArray.push(numClicked)
  console.log('currentNum inside number click', currentNum)
  displayValue()
}


function handleOperatorClick(e) {
  const operator = e.target.value
  storedOperator = operator
  
  if (resultNum) {
    oldNum = resultNum
  } else {
    oldNum = currentNum
  }

  storedEntriesArray.push(operator)
  console.log('old num indside operater click', oldNum)
  currentNum = ''
  displayNum = ''
  displayOperator()
}


function handleDecimalClick(e) {
  let displayScreen = document.getElementById('display')
  displayScreen.value = e.target.value
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
  displayNum = ''
  currentNum = ''
  storedOperator = ''
  storedEntriesArray = []
  displayScreen.value = displayNum
  console.log(displayNum)
}

function calculate() {
  let displayScreen = document.getElementById('display')
  if (currentNum && oldNum) {
    oldNum = parseFloat(oldNum);
    currentNum = parseFloat(currentNum);
    resultNum = operatorFunctions[storedOperator](oldNum, currentNum)
    displayScreen.value = resultNum
    oldNum = resultNum
    console.log('= was pressed')
    console.log('oldNum & currentNum', oldNum, storedOperator, currentNum)
    console.log('displayNum', displayNum)
    console.log('resultNum', resultNum)
    console.log('stored entries arry', storedEntriesArray)
    return resultNum
  } else {
    displayNum = currentNum
    resultNum = currentNum
  }

  
}

