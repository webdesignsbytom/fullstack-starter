import React from 'react'

function Form({ heading, inputs, handleSubmit }) {
  return (
    <div>
      {heading}

      <form onSubmit={handleSubmit}>
        {inputs}
        
        <input type='submit' value='Submit!' />
      </form>
    </div>
  )
}

export default Form