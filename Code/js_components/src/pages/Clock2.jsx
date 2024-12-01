import React, { useEffect, useRef } from 'react';

function Clock2() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const container = document.getElementById('container');

    const { width, height } = container.getBoundingClientRect();

    // Set canvas dimensions
    canvas.width = width;
    canvas.height = height;

    ctx.translate(canvas.width / 2, canvas.height / 2);
    
    let radius = canvas.height / 2;
    radius = radius * 0.9;

    function drawClock() {
      drawFace(ctx, radius);
      drawNumbers(ctx, radius);
      drawTime(ctx, radius);
    }

    // drawClock();
    setInterval(drawClock, 1000);
  }, []);

  function drawFace(ctx, radius) {
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'silver';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(0, 0, 15, 0, 2 * Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
    ctx.closePath();
  }

  function drawNumbers(ctx, radius) {
    ctx.font = radius * 0.15 + 'px arial';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';

    for (let num = 1; num < 13; num++) {
      let angle = (num * Math.PI) / 6;
      ctx.rotate(angle);
      ctx.translate(0, -radius * 0.85);
      ctx.rotate(-angle);
      ctx.fillText(num.toString(), 0, 0);
      ctx.rotate(angle);
      ctx.translate(0, radius * 0.85);
      ctx.rotate(-angle);
    }
  }

  function drawTime(ctx, radius) {
    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    // Hour
    hour =
      (hour % 12) * (Math.PI / 6) +
      (minute * Math.PI) / (6 * 60) +
      (second * Math.PI) / (360 * 60);
    drawHand(ctx, hour, radius * 0.5, radius * 0.07, '#333'); // Black for the hour hand

    // Minute
    minute = (minute * Math.PI) / 30 + (second * Math.PI) / (30 * 60);
    drawHand(ctx, minute, radius * 0.8, radius * 0.07, '#333'); // Black for the minute hand

    // Second
    second = (second * Math.PI) / 30;
    drawHand(ctx, second, radius * 0.9, radius * 0.02, 'red'); // Red for the second hand
  }

  function drawHand(ctx, pos, length, width, color) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = 'round';
    ctx.strokeStyle = color; // Set the color dynamically
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
  }

  return (
    <div id='container' className='grid h-screen max-h-screen bg-[#d49d9d]'>
      <canvas
        ref={canvasRef}
        className='w-full h-full'
        style={{ backgroundColor: '#333' }}
      />
    </div>
  );
}

export default Clock2;
