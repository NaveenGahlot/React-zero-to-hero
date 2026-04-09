import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const Custominput =  forwardRef((props, ref) => {
    console.log("ajay", props )
    const inputEle = useRef()
    // useImperativeHandle is used to expose some functions to the parent component when we use forwardRef
    useImperativeHandle(ref, ()=>({  
          focusInput:()=>{
            inputEle.current.focus()
          },
          clearInput:()=>{
            inputEle.current.value = ""
          }  
    }))
  return (
    <div>
      <input type='text' ref={inputEle} onChange={props.changeName}/>
    </div>
  )
})

export default Custominput
