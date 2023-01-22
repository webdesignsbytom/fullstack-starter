const resultsContainer = document.getElementById('form__results__container')
const nameIn = document.getElementById('nameIn')
const nameVar = document.getElementById('name')
const emailIn = document.getElementById('emailIn')
const emailVar = document.getElementById('email')
const passwordIn = document.getElementById('passwordIn')
const passwordVar = document.getElementById('password')
const colourIn = document.getElementById('colourIn')
const colourVar = document.getElementById('colour')

nameIn.addEventListener('input', (event) => {
    nameVar.innerText = `Name: ` + event.target.value
})
emailIn.addEventListener('input', (event) => {
    emailVar.innerText = `Email: ` + event.target.value
})
passwordIn.addEventListener('input', (event) => {
    passwordVar.innerText = `Password: ` + event.target.value
})
colourIn.addEventListener('input', (event) => {
    colourVar.innerText = `Colour: ` + event.target.value
})
