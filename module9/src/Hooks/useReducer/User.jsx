import React, { useReducer } from 'react'

const initialState = {
    name: "",
    email: "",
    age: ""
}

function reducer(state, action) {
    switch (action.type) {
        case "CHANGE_INPUT":
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        case "RESET":
            return initialState;
        default:
            return state;
    }
}

const User = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const handleChange = (e) => {
        dispatch({
            type: "CHANGE_INPUT", 
            payload: {
                name: e.target.name, 
                value: e.target.value
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        console.log("Current State:", state);
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={state.name} placeholder='Enter your Name' onChange={handleChange}/>
        <input type="email" name="email" value={state.email} placeholder='Enter your Email' onChange={handleChange}/>
        <input type="number" name="age" value={state.age} placeholder='Enter your age' onChange={handleChange}/>
        <button>Submit</button>
        <button onClick={() => {dispatch({type: "RESET"})}}>Reset</button>
      </form>
    </div>
  )
}

export default User
