import { AlertError } from "./alert-error.js"
import { calculateIMC, notNumber, displayResultMessage } from "./utils.js"

const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

form.onsubmit = (event) => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrheightIsNotANumber = notNumber(weight) || notNumber(height)

  if (weightOrheightIsNotANumber) {
    AlertError.open()
    return
  }

  AlertError.close()

  const result = calculateIMC(weight, height)
  displayResultMessage(result)

  const tableRows = document.querySelectorAll(".table tr")
  tableRows.forEach((row) => {
    row.classList.remove(
      "highlightOne",
      "highlightTwo",
      "highlightThree",
      "highlightFour",
      "highlightFive"
    )
  })

  if (result < 18.49) {
    tableRows[3].classList.add("highlightOne")
  } else if (result >= 18.5 && result < 24.99) {
    tableRows[4].classList.add("highlightTwo")
  } else if (result >= 25 && result < 29.99) {
    tableRows[5].classList.add("highlightThree")
  } else if (result >= 30 && result < 39.99) {
    tableRows[6].classList.add("highlightFour")
  } else {
    tableRows[7].classList.add("highlightFive")
  }

  inputWeight.value = ""
  inputHeight.value = ""
}