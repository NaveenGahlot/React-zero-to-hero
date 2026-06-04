import React from 'react'

interface MyButtonProps {
    title: string | number
    onClick?: () => void
}

const MyButton: React.FC<MyButtonProps> = ({ title, onClick }) => {
  return (
    <div>
      <button onClick={onClick}>{title}</button>
    </div>
  )
}

export default MyButton
