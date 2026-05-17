import React, { useState } from 'react'
import './App.css'

function App() { 
  const [name, setName] = useState("");

  return (
    <>
      <div>
          <h1 data-testid="heading">React Testing</h1>
          <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
          <button onClick={()=>{console.log("click console.log")}}>Click me</button>
      </div>
    </>
  )
}

export default App
