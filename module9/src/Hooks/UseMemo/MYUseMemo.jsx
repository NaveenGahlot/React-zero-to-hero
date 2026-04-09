import React, { useCallback, useMemo, useState, useTransition } from 'react'
import PrintTable from './PrintTable';

function expensiveFunction(num) {
    console.log("Calculating...");
    // let result = 0;
    for(let i = 0; i < 1000000000; i++){}
    return num * 3;
}

const MYUseMemo = () => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    const [pending, startTransition] = useTransition();
    const cssstyle = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black"
    }

    const calculateTable = useCallback(()=>{
      return [(number * 1), (number * 2), (number * 3), (number * 4), (number * 5), (number * 6), (number * 7), (number * 8), (number * 9), (number * 10)];
    }, [number])

    // const calculateTable = () =>{
    //   return [(number * 1), (number * 2), (number * 3), (number * 4), (number * 5), (number * 6), (number * 7), (number * 8), (number * 9), (number * 10)];
    // }

    const calculatedValue = useMemo(()=>{
        return expensiveFunction(number);
    }, [number])

    // const calculatedValue = expensiveFunction(number);

  return (
    <div style={cssstyle}>
      <input type="number" value={number} onChange={(e)=> startTransition(()=> setNumber(e.target.valueAsNumber))} />
      {pending ? <h3>Calculating...</h3> : <h3>Calculate: {calculatedValue}</h3>}
      {/* <h3>Calculate:- {calculatedValue}</h3> */}
      <PrintTable calculateTable={calculateTable} />
        <button onClick={() => setDark(prev => !prev)}>Toggle Theme</button>
    </div>
  )
}

export default MYUseMemo
