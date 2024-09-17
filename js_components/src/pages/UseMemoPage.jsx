import React, { useState, useMemo } from 'react';

function UseMemoPage() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // Use useMemo to memoize the result of slowFunction
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'black' : 'white',
  };

  return (
    <div>
      <div>UseMemoPage</div>

      <div>
        <input
          type='number'
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button onClick={() => setDark((prevDark) => !prevDark)}>
          Change theme
        </button>
        <div style={themeStyles}>{doubleNumber}</div>
      </div>
    </div>
  );
}

function slowFunction(num) {
  console.log('SLOW FUNCTION');
  for (let i = 0; i < 1000000000; i++) {} // Simulating a slow computation
  return num * 2;
}

export default UseMemoPage;
