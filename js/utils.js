import { Modal } from "./modal.js"

function notNumber(value) {
  return isNaN(value) || value == ""
}

function calculateIMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}

function displayResultMessage(result) {
  const message = `Seu IMC é ${result}`

  Modal.message.innerText = message
  Modal.open()
}

export { notNumber, calculateIMC, displayResultMessage }
