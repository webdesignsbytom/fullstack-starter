import React from 'react';
// Icons
import PlusIconReg from '../../img/plusIconReg.svg';
import HeartIcon from '../../img/heart.svg';

function AddFavBar() {
    
  return (
    <section className='flex justify-end'>
      <div>
        <img
          className='w-5 cursor-pointer m-1 transition duration-200 ease-in-out select-none focus:scale-125 hover:scale-125 active:scale-125'
          src={PlusIconReg}
          alt='favorite icon'
        />
      </div>
      <div>
        <img
          className='w-5 cursor-pointer m-1 transition duration-200 ease-in-out select-none focus:scale-125 hover:scale-125 active:scale-125'
          src={HeartIcon}
          alt='favorite icon'
        />
      </div>
    </section>
  );
}

export default AddFavBar;
