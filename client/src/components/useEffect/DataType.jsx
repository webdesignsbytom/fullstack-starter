import React, { useEffect, useState } from 'react'

function DataType() {
    const [name, setName] = useState('')
    const [state, setState] = useState({
        name: '',
        selected: false
    })

    useEffect(() => {
        console.log('the state has changed so useEffect runs');
    }, [state.name, state.selected])

    const handleAdd = () => {
        setState((prev) => ({ ...prev, name}))
    }

    const handleSelect = () => {
        setState((prev) => ({ ...prev, selected: (!prev.selected) }))
    }

  return (
    <section>
        <h2>DataType State</h2>
        <input type='text' onChange={(e) => setName(e.target.value)} />
        <button onClick={handleAdd}>Add Name</button>
        <button onClick={handleSelect}>Select</button>

        {`{
            name: ${state.name},
            selected: ${state.selected.toString()},
        }`}
    </section>
  )
}

export default DataType