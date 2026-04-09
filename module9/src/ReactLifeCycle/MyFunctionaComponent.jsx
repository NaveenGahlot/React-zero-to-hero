import React, { useEffect, useState } from 'react'

const MyFunctionaComponent = () => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log("UseEffect: Mounting");
    }, []);
    useEffect(()=>{
        console.log("UseEffect: Re-render");
        return () =>{
            console.log("Removed Component from DOM");
        }
    }, [count]);
  return (
    <div>
      <h2>Count: { count }</h2>
      <button onClick={()=>{setCount(count + 1)}}>Add karo</button>
    </div>
  )
}

export default MyFunctionaComponent
