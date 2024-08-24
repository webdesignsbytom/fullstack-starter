import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import ButtonComponent from '../global/ButtonComponent';
// Data
import {
  portfolioWebImagesArray,
  portfolioAppImagesArray,
  portfolioCircuitImagesArray,
} from '../../utils/PortfolioDataUtils';
import ComponentTitles from '../global/ComponentTitles';

function Portfolio() {
  const articleRefs = useRef([]);
  const sectionRef = useRef(null); // Reference for the section
  const [portfolioImages, setPortfolioImages] = useState(
    portfolioWebImagesArray
  );
  const [displayType, setDisplayType] = useState('web'); // Track the display type
  const [webFirstView, setWebFirstView] = useState(true); // Track if the web portfolio has been viewed
  let navigate = useNavigate();

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const imgContainer = entry.target.querySelector('.image-container');
          if (imgContainer) {
            // Check if imgContainer is not null and it's the web portfolio's first view
            if (webFirstView && displayType === 'web') {
              imgContainer.classList.add('start-scrolling');
              imgContainer.scrollTo({
                top: imgContainer.scrollHeight,
                behavior: 'smooth',
              });
            }
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    });

    articleRefs.current.forEach((article) => {
      if (article) observer.observe(article);
    });

    return () => {
      observer.disconnect();
    };
  }, [displayType, webFirstView]);

  const navigateToPage = (page) => {
    navigate(page, { replace: true });
  };

  const displayTypes = ['web', 'app', 'circuit'];

  const setDisplayContents = (type) => {
    console.log(window.innerWidth)
    console.log('type: ' + type);
    setDisplayType(type); // Set the display type
    if (type === displayTypes[0]) {
      setPortfolioImages(portfolioWebImagesArray);
      if (webFirstView) {
        setWebFirstView(false); // Set to false after the first view
      }
    } else if (type === displayTypes[1]) {
      setPortfolioImages(portfolioAppImagesArray);
    } else if (type === displayTypes[2]) {
      setPortfolioImages(portfolioCircuitImagesArray);
    }
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getStyle = () => {
    if (displayType === 'web') {
      return 'rounded-bl-lg rounded-br-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] h-full w-full scrollbar-hidden image-container overflow-x-hidden overflow-y-auto';
    } else if (displayType === 'app') {
      return 'rounded-bl-lg rounded-br-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] h-full w-full overflow-hidden';
    } else if (displayType === 'circuit') {
      return 'rounded-bl-lg rounded-br-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] h-full w-full overflow-hidden';
    } else {
      return '';
    }
  };

  const getImgStyle = () => {
    if (displayType === 'web') {
      return 'h-auto w-full';
    } else if (displayType === 'app') {
      return 'h-full w-full object:contain sm:object-cover';
    } else if (displayType === 'circuit') {
      return 'h-auto w-full';
    } else {
      return '';
    }
  };

  const getContainerStyle = () => {
    if (displayType === 'web') {
      return 'grid overflow-hidden h-[400px] lg:h-[450px] px-2 py-6 lg:px-6 opening-animation';
    } else if (displayType === 'app') {
      return 'grid overflow-hidden py-6 h-[325px] lg:h-[400px] max-w-[190px] lg:max-w-[300px] mx-auto lg:px-6 opening-animation';
    } else if (displayType === 'circuit') {
      return 'grid overflow-hidden py-6 h-[400px] px-2 lg:px-6 opening-animation';
    } else {
      return '';
    }
  };

  const getMainContainerStyle = () => {
    if (displayType === 'web') {
      return 'grid md:grid-cols-3 h-fit gap-8 mt-2';
    } else if (displayType === 'app') {
      return 'grid grid-cols-3 h-fit gap-2 lg:gap-4 mt-2';
    } else if (displayType === 'circuit') {
      return 'grid md:grid-cols-3 h-fit gap-8 mt-2';
    } else {
      return '';
    }
  };

  return (
    <section
      ref={sectionRef}
      id='portfolio-section'
      className='grid relative h-full min-h-screen lg:max-h-screen mt-10'
    >
      <div className='grid h-full w-full'>
        <div className='grid grid-rows-reg h-full'>
          <section className='my-8 h-fit'>
            <ComponentTitles
              title={'Developer Products'}
              subtitle={'Portfolio and Demos'}
            />

            <article className='mt-8 grid'>
              <div className='grid w-full px-4 sm:px-8 lg:px-0 lg:w-1/2 mx-auto'>
                <p className='text-text-main poppins_text'>We have prepared a number of sample product for you to view and be inspired by. Use the buttons to navigate between the device types. Hover over or use your mouse to scroll over any website image. Click on any image to be taken to a live example.</p>
              </div>
            </article>
          </section>

          <section className='grid h-full w-[85%] mx-auto'>
            <section className='grid h-fit w-full'>
              <div className='grid md:justify-end'>
                <div className='grid grid-cols-3 bg-gray-300 gap-2 p-2 w-full md:w-fit mt-6'>
                  <ButtonComponent
                    label='Websites'
                    onClick={() => setDisplayContents(displayTypes[0])}
                    type={
                      displayType === displayTypes[0]
                        ? 'selected'
                        : 'unselected'
                    }
                  />
                  <ButtonComponent
                    label='Apps'
                    onClick={() => setDisplayContents(displayTypes[1])}
                    type={
                      displayType === displayTypes[1]
                        ? 'selected'
                        : 'unselected'
                    }
                  />
                  <ButtonComponent
                    label='Circuits'
                    onClick={() => setDisplayContents(displayTypes[2])}
                    type={
                      displayType === displayTypes[2]
                        ? 'selected'
                        : 'unselected'
                    }
                  />
                </div>
              </div>
            </section>

            <div key={displayType} className={getMainContainerStyle()}>
              {portfolioImages.map((image, index) => {
                return (
                  <article
                    key={index}
                    className={getContainerStyle()}
                    ref={(el) => (articleRefs.current[index] = el)}
                  >
                    <div className={getStyle()}>
                      <img
                        src={image.image}
                        alt={image.alt}
                        className={getImgStyle()}
                      />
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
