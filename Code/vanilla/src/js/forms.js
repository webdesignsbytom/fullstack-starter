const resultsContainer = document.getElementById('form__results__container')
const nameIn = document.getElementById('nameIn')
const nameVar = document.getElementById('name')
const emailIn = document.getElementById('emailIn')
const emailVar = document.getElementById('email')
const passwordIn = document.getElementById('passwordIn')
const passwordVar = document.getElementById('password')
const colourIn = document.getElementById('colourIn')
const colourVar = document.getElementById('colour')
const dobIn = document.getElementById('dobIn')
const dobVar = document.getElementById('dob')
const fileIn = document.getElementById('fileIn')
const fileVar = document.getElementById('file')
// TESTING
const testContainer = document.getElementById('test__form__container')
const testFormContainer = document.getElementById('forms__test')
const testInputContainer = document.getElementById('test__inputs')
const testResultContainer = document.getElementById('test__results')


function listenForEvents() {

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
    dobIn.addEventListener('input', (event) => {
        dobVar.innerText = `DOB: ` + event.target.value
    })
    fileIn.addEventListener('input', (event) => {
        console.log('event: ', event.target)
        fileVar.innerText = `File name: ` + event.target.value
    })

}

const nameArray = ['name', 'email']
console.log(nameArray)

function generateForms() {

    for(let i = 0; i < nameArray.length; i++) {
        console.log('name: ', nameArray[i])
    
        const label = document.createElement('label')
        const input = document.createElement('input')
        
        label.innerText = nameArray[i] + `: `
    
        input.type = nameArray[i]
        input.name = nameArray[i]
        console.log(input, i)
    
        testInputContainer.appendChild(label)
        testInputContainer.appendChild(input)
    }

    for(let i = 0; i < nameArray.length; i++) {
        console.log('name: ', nameArray[i])
    
        const label = document.createElement('label')
        
        label.innerText = nameArray[i] + `: `
        
        testResultContainer.appendChild(label)
    }
}




function run() {
    listenForEvents()
    generateForms()
}

run()