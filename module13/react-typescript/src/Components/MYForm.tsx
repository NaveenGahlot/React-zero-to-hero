import React, { useState } from 'react'

const MYForm = () => {
    const [value, setValue] = useState<string>("")
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }   
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert(`Form submitted with value: ${value}`)
    }
  return (
    <div>
        <h1>MYForm</h1>
        <p>Value: {value}</p>
        <form onSubmit={handleSubmit}>
            <input type="text" name="" id="" onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default MYForm
