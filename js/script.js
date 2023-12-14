import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { IMC, notNumber } from "./utils.js"

const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

form.onsubmit = (e) => {
  e.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const showAlertError = notNumber(weight) || notNumber(height)

  if (showAlertError) {
    AlertError.open()
    return
  }

  AlertError.close()

  const result = IMC(weight, height)
  const message = `Seu IMC é ${result}`

  Modal.message.innerText = message
  Modal.open()
}