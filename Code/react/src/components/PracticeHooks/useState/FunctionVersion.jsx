import React, { useState } from 'react'

function FunctionVersion() {
const [number, setNumber] = useState(0)

const increace = () => {
    setNumber(number + 1)
}

// this will cause out of sync adding
// const increaceAsync = () => {
//     setTimeout(() => {
//         setNumber(number + 1)
//     }, 2500)
// }

// we are updating the current number in memory not the state
const increaceAsync = () => {
    setTimeout(() => {
        setNumber(currentNumber => currentNumber + 1)
    }, 2500)
}

  return (
    <div>
        <h2>State</h2>
        <button onClick={increace}>Increace</button>
        <button onClick={increaceAsync}>Increace async</button>
        <h3>{number}</h3>
    </div>
  )
}

export default FunctionVersion