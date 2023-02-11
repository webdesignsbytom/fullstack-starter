import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Nav from '../../components/nav/Navbar';
import './login.css'

function Login() {
  // TO redirect after log in
  let navigate = useNavigate();

  const [successLogin, setSuccessLogin] = useState({
    data: { token: '', user: {} },
  });
  // Form Data
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    event.preventDefault();
    const { value, name } = event.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {}

  return (
    <>
      <Nav />
      <div className='login__page'>
        <div className='login__form__container'>
          <div className='title__container'>
            <h2>LOGIN</h2>
          </div>

          <form onSubmit={handleSubmit} className='login__form'>
            <label htmlFor='email'>
              Email
              <input type='email' name='email' onChange={handleChange} />
            </label>

            <label htmlFor='password'>
              Password
              <input type='password' name='password' onChange={handleChange} />
            </label>

            <div className='submit__container'>
              <input type='submit' className='btn' value='Submit!' />
            </div>
          </form>

          <p>Status: {successLogin.status}</p>

          <div className='register__link'>
            <Link to='/register'>Not a member? Register Now</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
