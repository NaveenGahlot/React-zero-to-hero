import React, { useActionState, useState } from 'react'
import { loginUser } from '../api/user';
import CustomButtom from './CustomButtom';

const Login = () => {
    // const [user, setUser] = useState(null);
    // const [error, setError] = useState(null);
    // const [isPanding, setIsPending] = useState(false);
    
    const login = async(previousState, formData)=>{ 
        const email = formData.get('email');
        const password = formData.get('password');

        try{
            const res = await loginUser(email, password);
            return {error: null, data: res.data};
        }catch(err){
            return {...previousState, error: err.message}
        } 
    }
    
    const [user, submitAtction, isPanding] = useActionState(login, {
        error: null,
        data: null,
        // isPanding: false
    })
    console.log(user, isPanding);

  return (
    <form action={submitAtction}>
        <div>
            <label>Email</label>
            <input type="email" name='email' placeholder='Email' required/>
        </div>
        <div>
            <label>Password</label>
            <input type="password" name='password' placeholder='Password' required/>
        </div>
        {/* <button type='submit' disabled={isPanding}>
            {isPanding ? "Logging in..." : "Login"}
        </button> */}
        <CustomButtom />
        {user.data && <p style={{color: 'green'}}>Logged in:- {user.data.email}!</p>}
        {isPanding && <p>Logging in...</p>}
        {user.error && <p style={{color: 'red'}}>{user.error}</p>}
    </form>
  )
}

export default Login
