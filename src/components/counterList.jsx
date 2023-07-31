import React from 'react'
import Counter from './counter'

const CounterList = () => {
  const counters = [
    { id: 0, value: 0 },
    { id: 1, value: 0 },
    { id: 2, value: 3 },
  ]

  return (
    <div>
      {counters.map((count) => (
        <Counter key={count.id} value={count.value}></Counter>
      ))}
    </div>
  )
}

export default CounterList
