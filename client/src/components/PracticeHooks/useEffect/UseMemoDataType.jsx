import React, { useEffect, useMemo, useState } from 'react';

function UseMemoDataType() {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState({
    name: '',
    selected: false,
    city: '',
  });

  const user = useMemo(() => ({
    name: state.name,
    selected: state.selected,
  }));

  useEffect(() => {
    console.log('the state has changed so useEffect runs');
  }, [user]);

  const handleAdd = () => {
    setState((prev) => ({ ...prev, name }));
  };

  const handleCity = () => {
    setState((prev) => ({ ...prev, city }));
  };

  const handleSelect = () => {
    setState((prev) => ({ ...prev, selected: !prev.selected }));
  };

  return (
    <section>
      <h2>DataType useMemo</h2>
      <p>Name</p>
      <input type='text' onChange={(e) => setName(e.target.value)} />
      <button onClick={handleAdd}>Add Name</button>
      <p>City</p>
      <input type='text' onChange={(e) => setCity(e.target.value)} />
      <button onClick={handleCity}>Add City</button>
      <p>Selected toggle</p>
      <button onClick={handleSelect}>Select</button>
<br />
      {`{
            name: ${state.name},
            selected: ${state.selected.toString()},
            city: ${state.city}
        }`}
    </section>
  );
}

export default UseMemoDataType;
