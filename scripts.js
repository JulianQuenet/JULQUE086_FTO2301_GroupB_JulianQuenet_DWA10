const MAX_NUMBER= Infinity
const MIN_NUMBER= -Infinity
const STEP_AMOUNT= 1

const number = document.querySelector('[data-number]')
const subtract = document.querySelector('[data-subtract]') 
const add = document.querySelector('[data-add]') 
const reset = document.querySelector('[data-reset]')
const message = document.querySelector('[data-message]')
const overlay = document.querySelector('[data-overlay]')

const subtractHandler = () => {
  const newValue = parseInt(number.value) - STEP_AMOUNT
  number.value = newValue
 
  if(add.disabled === true) {
  add.disabled = false
  }
} 

const addHandler = () => {
  const newValue = parseInt(number.value) + STEP_AMOUNT
  number.value = newValue
 
  if(subtract.disabled === true) {
  subtract.disabled = false
  }

} 

  const resetHandler = () => {
    number.value = 0;
    overlay.show();
    setTimeout(() => {
      overlay.close();
    }, 1500);
  };
  




subtract.addEventListener('click', subtractHandler)
add.addEventListener('click', addHandler) 
reset.addEventListener('click', resetHandler)
