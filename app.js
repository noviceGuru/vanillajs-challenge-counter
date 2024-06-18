const plusButton = document.getElementById('plusButton')
const minusButton = document.getElementById('minusButton')
const counterNumber = document.getElementById('counterNumber')

let number = 0

plusButton.onclick = () => {
    number++
    counterNumber.innerText= number
}

minusButton.onclick = () => {
    number--
    counterNumber.innerText= number
}