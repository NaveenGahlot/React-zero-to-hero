import React, { useReducer } from 'react'

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
        return { count: state.count + 1 };
    case 'decrement':
        return { count: state.count - 1 };
    case 'reset':
        return initialState;
    default:
        return state;
  }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState) // it takes two arguments, first is reducer function and second is initial state
  return (
    <div>
      <h1>Count is:- {state.count}</h1>
      <button onClick={()=> {dispatch({type: "increment"})}}>+</button>
      <button onClick={()=> {dispatch({type: "decrement"})}}>-</button>
      <button onClick={()=> {dispatch({type: "reset"})}}>Reset</button>
    </div>
  )
}

export default Counter
