import React, { useEffect, useState } from 'react'

const PrintTable = ({calculateTable}) => {
    const [rows, setRows] = useState([]);
    useEffect(()=>{
      console.log("Calculating Table...");
        setRows(calculateTable());
    }, [calculateTable])
  return (
    <div>
      {rows.map((row, index) => (
        <div key={index}>{row}</div>
      ))}
    </div>
  )
}

export default PrintTable
