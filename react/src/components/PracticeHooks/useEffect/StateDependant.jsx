import React, { useEffect, useState } from 'react';

function Use1() {
  const [number, setNumber] = useState(0);

  console.log('component rendered');
  console.count('component rendered');

  // run this function at the begining
  // and then again if number is set and rerenders
  useEffect(() => {
    console.count('useEffect runs');
    document.title = `You clicked ${number} times`
  }, [number])

  const log = () => {
    console.log('log');
  } 

  return (
    <section>
      <h2>State Dependant</h2>
      <span> You clicked {number} times </span>
      <button onClick={() => setNumber((prev) => prev + 1)}>Increase</button>
      <button onClick={log}>Log</button>
    </section>
  );
}

export default Use1;
