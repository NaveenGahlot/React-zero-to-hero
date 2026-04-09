import React, { useContext, useRef, useState } from 'react'
import Custominput from './Custominput'
import { UserContext, useUserDetails } from '../../context/UserContext';

const Parent = () => {
  // const {name, setName} = useContext(UserContext);
  const {name, setName} = useUserDetails();
  const inputEle = useRef("")
        console.log(inputEle.current)
  return (
    <div>
        hello, {name}
      <Custominput myref={inputEle} changeName={(e) => {
        setName(e.target.value)
      }}/>
      {/* <button onClick={()=>{inputEle.current.focus()}}>Focus Input</button>
      <button onClick={()=> {inputEle.current.value = ""}}>Clear Input</button> */}
      <button onClick={()=>{inputEle.current.focusInput()}}>Focus Input</button>
      <button onClick={()=> {inputEle.current.clearInput()}}>Clear Input</button>
    </div>
  )
}

export default Parent
