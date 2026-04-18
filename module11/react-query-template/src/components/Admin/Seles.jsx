import React from 'react'
import  useTodos  from "../../hooks/useTodos";
import Loader from "../common/Loader";

const Seles = () => {
  const { data: todos, error, isLoading } = useTodos();
  return (
    <> 
      <h3>Todos Page</h3>
      {isLoading && <Loader />}
      {error && <em>{error.message}</em>}
      {todos?.map((todo)=>(
        <p key={todo.id}>{todo.title}</p>
      ))}
    </>
  )
}

export default Seles
