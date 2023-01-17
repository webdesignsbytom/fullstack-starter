import React from 'react'

function Input({ type, name, handleChange }) {
  return (
    <div>
        <label htmlFor={name}>{name}</label>
        <input name={name} type={type} onChange={handleChange} />
    </div>
  )
}

export default Input