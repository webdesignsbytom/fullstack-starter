import React, { useState } from 'react'

function Initialization() {
    // we are trying to get a user property in html that does not exist
    // can fix in html or add data trype to the state. ie object for name, email and images
    // const [user, setUser] = useState()
    // const [user, setUser] = useState({})
    // to work with images array. declaire element types first
    const [user, setUser] = useState({
        username: '',
        email: '',
        images: []
    })


    // user:{
    //     name: 'John',
    //     email: 'john@email.com',
    //     images: ['profile.png', 'cover.png']
    // }


  return (
    <div>
        <h2>Initialization</h2>
        {/* {user && <span>Username is: {user.name}</span>} */}
        {/* <span>Username is: {user?.name}</span> */}
        {/* <span>Username is: {user && user.name}</span> */}
        <span>Username is: {user.name}</span>
        <span>Images are: {user.images[1]}</span>

    </div>
  )
}

export default Initialization