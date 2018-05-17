document.addEventListener("DOMContentLoaded", startApp)

let numbers
let operators
let clearButton
let entries = []

function startApp() {
  numbers = Array.from(document.getElementsByClassName('number'))
  operators = Array.from(document.getElementsByClassName('operator'))
  clearButton = document.getElementById('clear')

  addListeners()
}


function addListeners() {
  clearButton.addEventListener('click', clearEntries)
  numbers.map(number => number.addEventListener('click', handleNumberClick))
  operators.map(number => number.addEventListener('click', handleOperatorClick))
}


export function calculate(entries) {
  return 5
}


function handleNumberClick (e) {
  const number = e.target.value
  entries.push(number)
  printQueue()
}


function handleOperatorClick (e) {
  const operator = e.target.value
  entries.push(operator)
  printQueue()
}


function printQueue() {
  let displayScreen = document.getElementById('display')
  displayScreen.value = entries.join(' ')
}


function clearEntries(entries) {
  let displayScreen = document.getElementById('display')
  entries = []
  displayScreen.value = entries
  console.log(entries)
}


