import React, { useState } from 'react'
import './style.css'
function FormState() {

    const [user, setUser] = useState({
        name: '',
        surname: '',
        username: '',
        email: '',
        password: '',
        country: '',
        city: '',
        address: '',
    })

    const handleChange = (event) => {
        const { value, name } = event.target;

        setUser({
            ...user,
            [name]: value
        })
    }

    console.log('user', user);

  return (
    <div>
        <h2>Form State</h2>

        <form className='form'>
            <input type='text' name='name' onChange={handleChange} placeholder='name' />
            <input type='text' name='surname' onChange={handleChange} placeholder='surname' />
            <input type='text' name='username' onChange={handleChange} placeholder='username' />
            <input type='text' name='email' onChange={handleChange} placeholder='email' />
            <input type='text' name='password' onChange={handleChange} placeholder='password' />
            <input type='text' name='country' onChange={handleChange} placeholder='country' />
            <input type='text' name='city' onChange={handleChange} placeholder='city' />
            <input type='text' name='address' onChange={handleChange} placeholder='address' />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default FormState