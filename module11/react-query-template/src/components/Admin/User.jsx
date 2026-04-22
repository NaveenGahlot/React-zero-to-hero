import React, { useState } from 'react'
import  useTodos  from "../../hooks/useTodos";
import Loader from "../common/Loader";
import useFetchUsers from '../../hooks/useFetchUsers';

const User = () => {
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const totalItems = 200; // Assuming there are 200 todos in total
   const totalPages = Math.ceil(totalItems / pageSize); 


  const { data: todos, error, isLoading } = useFetchUsers(page, pageSize);
  return (
    <>
      <h3>Users Page</h3>
      {isLoading && <Loader />}
      {error && <em>{error.message}</em>}
      {todos?.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
      >
        Previous
      </button>
      <button
        onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={page === totalPages}
      >
        Next
      </button>
    </>
  )
}

export default User
