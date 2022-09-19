import UserForm from './UserForm';
// import client from '../../utils/client';

import './style.css';

import React, { useState } from 'react';

function RegistrationPage() {
  const [user, setUser] = useState('');

  const registerUser = async (event) => {
    event.preventDefault();
    console.log('wokring');

    const { email, name } = user;
    console.log('email,name', user);

    const res = await fetch('http://localhost:4000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, name }),
    });

    const value = await res.json();
    console.log('value', value);
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { value, name } = event.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div>
      <UserForm
        handleChange={handleChange}
        handleSubmit={registerUser}
        user={user}
      />
    </div>
  );
}

export default RegistrationPage;
