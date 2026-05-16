import React from 'react'
import './App.css'

function App() { 

  return (
    <>
      <div>
          <h1 data-testid="heading">React Testing</h1>
          <button onClick={()=>{console.log("click console.log")}}>Click me</button>
      </div>
    </>
  )
}

export default App
