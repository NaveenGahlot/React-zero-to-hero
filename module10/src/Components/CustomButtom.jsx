import React from 'react'
import { useFormState } from 'react-dom';

const CustomButtom = () => {
    const { pending, data, method, action } = useFormState();
  return (
    <div>
        <button type='submit' disabled={pending}>
            {pending ? "Logging in..." : "Login"}
            <p>{data ? `Requesting.. ${data.get("email")}` : ""}</p>
            {/* <p>Method: {method}</p>
            <p>Action: {action}</p> */}
        </button>
    </div>
  )
}

export default CustomButtom
