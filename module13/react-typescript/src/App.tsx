// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

import MyButton from "./Components/MyButton"

function App() { 

  return (
    <>
      <h1>React with TypeScript</h1>
      <MyButton title={1} onClick={()=>{
          alert("Button clicked!")
      }}/>
      <MyButton title="Click me!"/>
    </>
  )
}

export default App
