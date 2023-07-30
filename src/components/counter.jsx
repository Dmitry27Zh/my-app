import React from 'react'

const Counter = () => {
  const count = 0
  const formatCount = () => {
    return count === 0 ? 'empty' : count
  }
  const getBageClasses = () => {
    let classes = 'badge m-2 '
    classes += count === 0 ? 'text-bg-warning' : 'text-bg-primary'

    return classes
  }
  const handleClick = () => {
    console.log('Click!!!')
  }

  return (
    <>
      <span className={getBageClasses()}>{formatCount()}</span>
      <button className="btn btn-primary btn-sm m-2" onClick={handleClick}>
        +
      </button>
    </>
  )
}

export default Counter
