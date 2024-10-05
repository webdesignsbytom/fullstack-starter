import React from 'react';
import Image1 from '../assets/images/dragon_1.jpg';

function Display1() {
  return (
    <div className='grid relative w-full min-h-screen h-full justify-center items-center'>
      <div class='slider absolute'>
        <div class='item'>
          <img src={Image1} alt='xxx' />
        </div>
        <div class='item'>
          <img src={Image1} alt='xxx' />
        </div>
        <div class='item'>
          <img src={Image1} alt='xxx' />
        </div>
        <div class='item'>
          <img src={Image1} alt='xxx' />
        </div>
        <div class='item'>
          <img src={Image1} alt='xxx' />
        </div>
        <div class='item'>
          <img src={Image1} alt='xxx' />
        </div>
        <div class='item'>
          <img src={Image1} alt='xxx' />
        </div>
        <div class='item'>
          <img src={Image1} alt='xxx' />
        </div>
        <div class='item'>
          <img src={Image1} alt='xxx' />
        </div>
        <div class='item'>
          <img src={Image1} alt='xxx' />
        </div>
      </div>
    </div>
  );
}

export default Display1;
