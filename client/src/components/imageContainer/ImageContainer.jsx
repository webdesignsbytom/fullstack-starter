import React, { useState } from 'react'
import './imageContainer.css'
function ImageContainer() {
    const [imageArray, setImageArray] = useState([])

  return (
    <div className='imageContainer__container'>
        <div className="main__container">
            image
        </div>
    </div>
  )
}

export default ImageContainer