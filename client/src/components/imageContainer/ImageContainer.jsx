import React, { useState } from 'react'
import './imageContainer.css'
import { sliderOptions } from '../../utils/ImageLocations';

function ImageContainer() {
  const displayImagesArray = sliderOptions;

    const [imageArray, setImageArray] = useState(displayImagesArray)
    const [imageIndex, setImageIndex] = useState(0)

    const nextImage = () => {
      setImageIndex(prev => prev + 1)
    }

  return (
    <>
    <div className='imageContainer__container'>
        <div className="main__container">
            <div className="image__container">
              <img src={displayImagesArray[imageIndex]} alt="Array" />
            </div>
        </div>
    <button onClick={nextImage}>NEXT</button>
    </div>
    </>
  )
}

export default ImageContainer