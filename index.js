document.addEventListener("DOMContentLoaded", startApp)

let numbers
let operators
let clearButton
let equalsButton
let decimalButton
let displayScreen
let operationScreen
let displayNum = ''
let lastNumClicked = ''
let storedNum = ''
let storedOperator = ''
let resultNum
let storedEntries = []

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
  displayScreen = document.getElementById('display')
  operationScreen = document.getElementById('operations')
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

  if (resultNum) {
    storedNum = resultNum
    lastNumClicked += numClicked
    displayNum += numClicked
    displayScreen.value = displayNum
    storedEntries.push(numClicked)
    operationScreen.value = storedEntries.join(' ')
  } else {
    lastNumClicked += numClicked
    displayNum += numClicked
    displayScreen.value = displayNum
    storedEntries.push(numClicked)
    operationScreen.value = storedEntries.join(' ')
    console.log('lastNumClicked inside number click', lastNumClicked)
    console.log('displayNum inside number click', displayNum)
    // displayValue()
  }
}


function handleOperatorClick(e) {
  const operator = e.target.value

  if (storedOperator) {
    //if an op has already been pressed, calculate the 2 stored nums
    calculate()
    storedOperator = operator
    storedEntries.push(operator)
    operationScreen.value = storedEntries.join(' ')
    displayNum = ''
  } else {
    storedOperator = operator
    storedNum = lastNumClicked 
    lastNumClicked = ''
    displayNum = ''
    storedEntries.push(operator)
    operationScreen.value = storedEntries.join(' ')
    console.log(storedOperator)
    displayOperator()
  }
}


function handleDecimalClick(e) {
  displayScreen.value = e.target.value
}


// function displayValue() {
//   let displayScreen = document.getElementById('display')
//   displayScreen.value = displayNum
// }

function displayOperator() {
  displayScreen.value = storedOperator
  console.log('op', storedOperator)
}

function resetValues() {
  displayNum = ''
  lastNumClicked = ''
  storedNum = ''
  resultNum = ''
  storedOperator = ''
  storedEntries = []
}


function clearScreen() {
  resetValues()
  displayScreen.value = displayNum
  operationScreen.value = storedEntries
  console.log(displayNum)
}

function calculate() {
  if (storedNum && lastNumClicked) {
    resultNum = operatorFunctions[storedOperator](storedNum, lastNumClicked)
    console.log('storedNum & lastNumClicked', storedNum, storedOperator, lastNumClicked)
    storedNum = resultNum
    lastNumClicked = ''
    displayScreen.value = resultNum 

    console.log('= was pressed')
    console.log('displayNum', displayNum)
    console.log('resultNum', resultNum)
    // console.log('stored entries arry', storedEntriesArray)

  } else {
    displayScreen.value = lastNumClicked
  }

  
}

