import React from 'react'
import Counter from './counter'

const CounterList = () => {
  const counters = [
    { id: 0, value: 0, name: 'name 1' },
    { id: 1, value: 0, name: 'name 2' },
    { id: 2, value: 3, name: 'name 3' },
  ]

  return (
    <div>
      {counters.map((count) => (
        <Counter key={count.id} value={count.value}>
          <h1>{count.name}</h1>
        </Counter>
      ))}
    </div>
  )
}

export default CounterList
