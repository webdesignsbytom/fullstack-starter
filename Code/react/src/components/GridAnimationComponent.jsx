import React, { useEffect, useRef } from 'react';

function GridAnimationComponent() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const gridSize = 8; // 8x8 grid

    // Function to draw the diagonal grid
    const drawGrid = () => {
      const cellWidth = canvas.width / gridSize;
      const cellHeight = canvas.height / gridSize;

      ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.lineWidth = 1;

      // Draw diagonal lines from top-left to bottom-right
      for (let i = 0; i <= gridSize; i++) {
        ctx.beginPath();
        ctx.moveTo(i * cellWidth, canvas.height);
        ctx.lineTo(canvas.width, canvas.height - i * cellHeight);
        ctx.stroke();
      }

      // Draw diagonal lines from bottom-left to top-right
      for (let i = 0; i <= gridSize; i++) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height - i * cellHeight);
        ctx.lineTo(i * cellWidth, 0);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(canvas.width, i * cellHeight);
        ctx.lineTo(canvas.width - i * cellWidth, canvas.height);
        ctx.stroke();
      }
    };

    // Set the canvas size to a fixed 600x600 and draw the grid
    canvas.width = 800;
    canvas.height = 800;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid();
  }, []);

  return (
    <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-10'>
      <div className='border border-gray-400 border-solid p-5 special_1'>
        <canvas ref={canvasRef} width={800} height={800} />
      </div>
    </div>
  );
}

export default GridAnimationComponent;
