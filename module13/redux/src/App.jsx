import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./features/Counter/countrSlice"

function App() { 
  const { value } = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  return (
    <> 
      <div>
        <h1>Redux + Thunk</h1>
        <h2>Counter: {value}</h2>
        <button onClick={()=> dispatch(increment())}>+1</button>
        <button onClick={()=> dispatch(decrement())}>-1</button>
      </div>  
    </>
  )
}

export default App
