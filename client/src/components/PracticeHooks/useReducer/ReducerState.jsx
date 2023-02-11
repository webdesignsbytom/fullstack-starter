import React, { useState } from 'react'
import './style.css'

function ReducerState() {

    const [product, setProduct] = useState({
        title: '',
        desc: '',
        price: 0,
        category: '',
        tags: [],
        images: {
            sm: '',
            md: '',
            lg: '',
        },
        quantity: 0,
    })

    const handleChange = (event) => {
        event.preventDefault()
        const { title, desc, price, cat, tags, quantity } = event.target
        
    }
    console.log('product', product);
    

  return (
    <div>
        <h2>Form State</h2>

        <form className='form'>
            <input type='text' name='title' onChange={handleChange} placeholder='title' />
            <input type='text' name='desc' onChange={handleChange} placeholder='desc' />
            <input type='number' name='price' onChange={handleChange} placeholder='price' />
            <p>Category</p>
            <select id='cat'>
                <option value='sneakers'>Sneakers</option>
                <option value='tshirts'>Tshirts</option>
                <option value='jeans'>Jeans</option>
            </select>
            <p>Tags:</p>
            <textarea name='tags' placeholder='Seperate tags with commas'></textarea>
            <div className="quanity">
                <button>-</button>
                <span>Quantity {product.quantity}</span>
                <button>+</button>
            </div>
        </form>
    </div>
  )
}

export default ReducerState