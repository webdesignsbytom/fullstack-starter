import React, { useState } from 'react'
import UserForm from './UserForm'

function LoginPage() {
    const [user, setUser] = useState('')

    // const handleChange = event => {
    //     event.preventDefault();
    //     const { value, name } = event.target;
    
    //     setUser({
    //       ...user,
    //       [name]: value,
    //     });
    //   };

  return (
    <div>
        <UserForm />
    </div>
  )
}

export default LoginPage