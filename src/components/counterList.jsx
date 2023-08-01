import React, { useState } from 'react'
import Counter from './counter'

const CounterList = () => {
  const initialState = [
    { id: 0, value: 0, name: 'name 1' },
    { id: 1, value: 0, name: 'name 2' },
    { id: 2, value: 3, name: 'name 3' },
  ]
  const updatedState = [
    { id: 0, value: 33, name: 'name 1' },
    { id: 1, value: 33, name: 'name 2' },
    { id: 2, value: 33, name: 'name 3' },
  ]
  const [counters, setCounters] = useState(initialState)
  const handleDelete = (id) => {
    const newCounters = counters.filter((counter) => counter.id !== id)
    setCounters(newCounters)
  }
  const handleReset = () => {
    setCounters(initialState)
  }
  const handleChange = () => {
    setCounters(updatedState)
  }
  const handleIncrement = (id) => {
    const newCounters = counters.map((counter) => {
      if (counter.id === id) {
        counter.value++
      }

      return counter
    })
    setCounters(newCounters)
  }
  const handleDecrement = (id) => {
    const newCounters = counters.map((counter) => {
      if (counter.id === id) {
        counter.value--
      }

      return counter
    })
    setCounters(newCounters)
  }

  return (
    <div>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...count}
        ></Counter>
      ))}
      <button className="btn btn-primary btn-sm m-2" type="button" onClick={handleReset}>
        Reset
      </button>
      <button className="btn btn-primary btn-sm m-2" type="button" onClick={handleChange}>
        Change state
      </button>
    </div>
  )
}

export default CounterList
