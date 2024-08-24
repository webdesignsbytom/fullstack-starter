import React, { useState } from 'react'


function InitialState() {
    const [input, setInput] = useState('')
    const [user, setUser] = useState({
        username: 'John',
        email: 'john@email.com',
        images: ['profile.png', 'cover.png']
    })

const changeUsername = () => {
    setUser({
        ...user,
        username: input
    })
}

console.log('user', user);

  return (
    <div>
        <h2>Initial State</h2>
        <input placeholder='enter a new name' onChange={(e) => {setInput(e.target.value)}} />
        <button onClick={changeUsername} >Change username</button>
        <span>Username is: {user.username}</span>
    </div>
  )
}


export default InitialState