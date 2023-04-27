const bodyContainer = document.getElementById('bodycon')
const ArrayContainer = document.getElementById('arrayContainer')
const alphabetSampleArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const lettersSampleArray = [
    'a',
    'B',
    'A',
    'C',
    'A',
    'D',
    'E',
    'B',
    'F',
    'C',
    'E',
    'A',
    'C',
    'D',
    'A',
];

let state = {
    gameLetter: 0,
    maxScore: 26
}

// alphabetSampleArray.forEach((letter, index) => {
//     const letterContainer = document.createElement('h3')
//     letterContainer.innerText = letter
//     letterContainer.id = `${letter}`
//     bodyContainer.appendChild(letterContainer)

//     letterContainer.addEventListener("click", () => {
//         console.log('clicky click')
//         if (index === state.gameLetter) {

//             letterContainer.style.color = 'red'
//             state.gameLetter++
//         }
//     })
// })

alphabetSampleArray.forEach((letter, index) => {
    const letterContainer = document.createElement('h3')
    letterContainer.innerText = letter
    letterContainer.id = `${letter}`
    bodyContainer.appendChild(letterContainer)

    bodyContainer.addEventListener("keydown", (event) => {
        if (event.key === letter && index === state.gameLetter) {
            console.log(`letter WINNNER ${letter}`)
            letterContainer.style.color = 'red'
            state.gameLetter++
            if (state.gameLetter === state.maxScore) {
                letterContainer.style.color = 'red'
                setTimeout(() => {

                    alert('You win')
                }, 100)
            }
        }
    })

})


// bodyContainer.addEventListener("click", myScript)
// function myScript() {
//     console.log('Active')
// }

// ArrayContainer.addEventListener("click", newClick)
// function newClick() {
//     console.log('New Click')
// }

// bodyContainer.addEventListener("keydown", keyDownPress)
// function keyDownPress(event) {
//     console.log('keyDownPress', event.key)
//     if (event.key === 'k') {
//         console.log('K pressed')
//     }
// }

