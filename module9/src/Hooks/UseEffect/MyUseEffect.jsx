import React, { useEffect, useLayoutEffect, useState } from 'react'

const MyUseEffect = () => {
    console.log("Rendering..");
    const [width, setWitdth] = useState(300);
    useLayoutEffect(()=>{
        console.log("Hello UseEffect", width)
        setWitdth(600)
    }, [width])
  return (
    <div style={{width: `${width}px`, backgroundColor: "blue", height: "100px", transition: 'width 1s'}}>
      MyUseEffect
    </div>
  )
}

export default MyUseEffect
