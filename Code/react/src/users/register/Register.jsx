import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/nav/Navbar';
import './register.css';

function Register() {
  const [successRegisterUser, setSuccessRegisterUser] = useState('');
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event) => {
    const { value, name } = event.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {

  }
  
  return (
    <>
      <Nav />
      <div className='register__page'>
        <div className='register__form__container'>
          <div className='title__container'>
            <h2>REGISTER</h2>
          </div>

          <form onSubmit={handleSubmit} className='register__form'>
            <label htmlFor='email'>
              Email
              <input type='email' name='email' onChange={handleChange} required />
            </label>

            <label htmlFor='password'>
              Password
              <input type='password' name='password' onChange={handleChange} required />
            </label>

            <label htmlFor='confirmPassword'>
              Confirm Password:
              <input
                type='password'
                name='confirmPassword'
                id='confirmPassword'
                onChange={handleChange}
                required
              />
            </label>

            <div className='submit__container'>
              <input
                type='submit'
                className='btn'
                value='Submit!'
              />
            </div>
          </form>

          <p>Status: {successRegisterUser.status}</p>

          <div className='login__link'>
            <Link to='/'>Already a member? Login here!</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
