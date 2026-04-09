import React, { useId } from 'react'

const MyUseid = () => {
    const id = useId();
  return (
    <div>
      <input type="checkbox" id={id} />
      <label htmlFor={id}>Check me</label>
    </div>
  )
}

export default MyUseid
