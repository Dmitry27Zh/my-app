import React, { useState } from 'react'

const Counter = (props) => {
  const [value, setValue] = useState(props.value)
  const formatCount = () => {
    return value === 0 ? 'empty' : value
  }
  const getBageClasses = () => {
    let classes = 'badge m-2 '
    classes += value === 0 ? 'text-bg-warning' : 'text-bg-primary'

    return classes
  }
  const handleIncrement = () => {
    setValue((prevState) => prevState + 1)
  }
  const handleDecrement = () => {
    setValue((prevState) => prevState - 1)
  }

  return (
    <div>
      {props.children}
      <span className={getBageClasses()}>{formatCount()}</span>
      <button className="btn btn-primary btn-sm m-2" onClick={handleIncrement}>
        +
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={handleDecrement}>
        -
      </button>
    </div>
  )
}

export default Counter
