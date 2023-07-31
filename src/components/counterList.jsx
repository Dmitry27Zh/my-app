import React, { useState } from 'react'
import Counter from './counter'

const CounterList = () => {
  const [counters, setCounters] = useState([
    { id: 0, value: 0, name: 'name 1' },
    { id: 1, value: 0, name: 'name 2' },
    { id: 2, value: 3, name: 'name 3' },
  ])
  const handleDelete = (id) => {
    const newCounters = counters.filter((counter) => counter.id !== id)
    setCounters(newCounters)
  }

  return (
    <div>
      {counters.map((count) => (
        <Counter key={count.id} id={count.id} value={count.value} name={count.name} onDelete={handleDelete}></Counter>
      ))}
    </div>
  )
}

export default CounterList
