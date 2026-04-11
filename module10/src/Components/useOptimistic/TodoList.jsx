import React, { useOptimistic, useState } from 'react'

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [optimisticTodos, setOptimisticTodos] = useOptimistic(todos, (oldTodos, newTodo) => [...oldTodos, { id: Date.now(), text: newTodo, pending: true }]);

    const handleAddTodo = async (formData) => {
        // event.preventDefault(); // No longer needed with action prop
        const  newTodo = formData.get('todo');
        setOptimisticTodos(newTodo);
        if (newTodo.trim() === '') return;
        const tempId = Date.now(); // Temporary ID for optimistic update
        // setTodos((prevTodos) => [...prevTodos, { id: tempId, text: newTodo }]);
        try {
            // Simulate API call to add todo
            await new Promise((resolve) => setTimeout(resolve, 5000));
            // In a real app, you would replace the temp ID with the ID from the server response
            setTodos((currentTodos)=>[
                ...currentTodos,
                {id: tempId, text: newTodo, pending: false}
            ]);
        } catch (error) {
            // Handle error (e.g., show error message, revert optimistic update)
            setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== tempId));
        }
    };

  return (
    <div>
        <h2>Todo List</h2>
        <form action={handleAddTodo}>
            <input type="text" name="todo" placeholder='Enter a new todo' />
            <button type='submit'>Add Todo</button>
        </form>
        <ul>
            {optimisticTodos.map((todo) => (
                <li key={todo.id}>{todo.text}
                {todo.pending && <span style={{ color: 'orange' }}><pre>Adding...</pre></span>}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList
