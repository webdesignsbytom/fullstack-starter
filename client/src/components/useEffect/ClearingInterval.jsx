import React, { useEffect, useState } from 'react';

function ClearingInterval() {
  const [number, setNumber] = useState(0);

  // this would provide and infinite loop updating the number
  // use update smarter state update
  // useEffect(() => {
  //     console.log('effect');
  //     setInterval(() => {
  //         setNumber(number + 1)
  //     }, 1000)
  // }, [number])

  // still runs too many times
  // runs every second
  // remove number
  //  useEffect(() => {
  //     console.log('effect');
  //     setInterval(() => {
  //         setNumber(prev => prev + 1)
  //     }, 1000)
  // }, [number])

  // if you change info on the page such as cleaing time it breaks the count
  // add a cleanu up
  // useEffect(() => {
  //     console.log('effect');
  //     setInterval(() => {
  //         setNumber(prev => prev + 1)
  //     }, 1000)
  // }, [])

  useEffect(() => {
    console.log('effect');
    const interval = setInterval(() => {
      setNumber((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>{number} Cleaning time</div>;
}

export default ClearingInterval;
