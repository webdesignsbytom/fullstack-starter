import { useState } from 'react';
import './app.css';
import { BsArrowsFullscreen } from 'react-icons/bs';

function ReactCanvas() {
  const [height, setHeight] = useState(window.innerHeight / 2.5);
  const [width, setWidth] = useState(window.innerWidth / 2.5);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [cssStyle, setCssStyle] = useState('canvas-container');

  const fullscreenMode = () => {
    setIsFullscreen(!isFullscreen);

    if (!isFullscreen) {
      console.log('fullscreen mode');
      setCssStyle('canvas-container2');
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    } else {
      setCssStyle('canvas-container');
      setHeight(window.innerHeight / 2.5);
      setWidth(window.innerWidth / 2.5);
    }
  };

  return (
    <div id='canvasContainer' className='canvasContainer'>
      <canvas
        id='canvas'
        className={cssStyle}
        width={width}
        height={height}
      ></canvas>
      
      <button
        id='enlarge-btn'
        className='enlarge-btn'
        onClick={() => fullscreenMode()}
      >
        {BsArrowsFullscreen()}
      </button>
    </div>
  );
}

export default ReactCanvas;
