import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/navbar/Navbar';
import './login.css'

function Login() {
  return (
    <>
      <Nav />
      <div className='login__page'>
        <div className='login__form__container'>
          <div className='title__container'>
            <h2>LOGIN</h2>
          </div>

          <form action='' className='login__form'>
            <label htmlFor='email'>
              Email
              <input type='email' name='email' />
            </label>

            <label htmlFor='password'>
              Password
              <input type='password' name='password' />
            </label>

            <div className='submit__container'>
              <input type='submit' className='btn' value='Submit!' />
            </div>
          </form>

          <div className='register__link'>
            <Link to='/register'>Not a member? Register Now</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
