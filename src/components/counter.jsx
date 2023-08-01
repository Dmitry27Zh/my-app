import React, { useState } from 'react'

const Counter = (props) => {
  const { value } = props
  const formatCount = () => {
    return value === 0 ? 'empty' : value
  }
  const getBageClasses = () => {
    let classes = 'badge m-2 '
    classes += value === 0 ? 'text-bg-warning' : 'text-bg-primary'

    return classes
  }

  return (
    <div>
      <h3>{props.name}</h3>
      <span className={getBageClasses()}>{formatCount()}</span>
      <button className="btn btn-primary btn-sm m-2" onClick={() => props.onIncrement(props.id)}>
        +
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={() => props.onDecrement(props.id)}>
        -
      </button>
      <button className="btn btn-danger btn-sm m-2" type="button" onClick={() => props.onDelete(props.id)}>
        Delete
      </button>
    </div>
  )
}

export default Counter
