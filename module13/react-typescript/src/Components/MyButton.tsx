import React, { useState } from 'react'

interface MyButtonProps {
    title: string | number
    onClick?: () => void
    isValid?: boolean;
}

interface Book {
    title: string;
    price: number;
}


const MyButton: React.FC<MyButtonProps> = (props) => {
  const {title, onClick, isValid} = props;
  const [value, setValue] = useState<Book>({
    title: "The Great Gatsby",
    price: 10.99,
  })
  return (
    <div>
      <h1>{value.title}</h1>
      <p>${value.price.toFixed(2)}</p>
      <button onClick={()=>{setValue({title: "New Title", price: 520})}}>{title}</button>
    </div>
  )
}

export default MyButton
