import React, { useState } from 'react'
import  useTodos  from "../../hooks/useTodos";
import Loader from "../common/Loader";

const Seles = () => {
  const [userId, setUserId] = useState(null);
  const { data: todos, error, isLoading } = useTodos(userId);
  return (
    <> 
      <h3>Todos Page</h3>
      <select onChange={(e) => setUserId(parseInt(e.target.value))} value={userId}>
        <option>Select Option</option>
        <option value="1">Select 1</option>
        <option value="2">Select 2</option>
        <option value="3">Select 3</option>
        <option value="4">Select 4</option>
      </select>
      {isLoading && <Loader />}
      {error && <em>{error.message}</em>}
      {todos?.map((todo)=>(
        <p key={todo.id}>{todo.title}</p>
      ))}
    </>
  )
}

export default Seles
