// import MyClassComponent from './ReactLifeCycle/MyClassComponent'
// import MyFunctionaComponent from './ReactLifeCycle/MyFunctionaComponent'
// import './App.css'
// import { useState } from 'react'
// import MyStateComponent from './Hooks/MyStateComponent';
import { useState } from 'react';
import { UserContext, UserContextProvider } from './context/UserContext';
import MyUseEffect from './Hooks/UseEffect/MyUseEffect';
import Parent from './Hooks/UseEffect/Parent';
import MyUseRef from './Hooks/UseRef/MyUseRef';
import Counter from './Hooks/useReducer/Counter';
import User from './Hooks/useReducer/User';
import MYUseMemo from './Hooks/UseMemo/MYUseMemo';
import MyUseid from './Hooks/UseID/MyUseid';
import MyUseTranslation from './Hooks/UseTranslation/MyUseTranslation';

function App() { 
  // const [show, setShow] = useState(true);
  const [name, setName] = useState("Vijay")
  return (
    <>
      {/* <MyClassComponent /> */} 
      {/* <button onClick={()=>{setShow(!show)}}>Toggle karo Component ko</button> */}
      {/* {show && <MyFunctionaComponent />} */}
      {/* <MyStateComponent /> */}
      <MyUseEffect />
      <hr></hr>
      <MyUseRef />
      <hr></hr>
      <UserContextProvider userDetails={{name:name, setName:setName}}>
        <Parent />
        <hr></hr>
        <Counter />
        <hr></hr>
        <User />
        <hr></hr>
        <MYUseMemo />
        <MyUseid />
        <MyUseTranslation />
      </UserContextProvider>
    </>
  )
}

export default App
