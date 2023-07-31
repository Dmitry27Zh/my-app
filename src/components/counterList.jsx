import React from 'react'
import Counter from './counter'

const CounterList = () => {
  const counters = [{ id: 0 }, { id: 1 }, { id: 2 }]

  return (
    <div>
      {counters.map((count, index) => (
        <Counter key={index}></Counter>
      ))}
    </div>
  )
}

export default CounterList
