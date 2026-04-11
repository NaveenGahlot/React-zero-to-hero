// import './App.css'

import { Suspense } from "react"
import Post from "./Components/api-fetch"
// import Login from "./Components/Login"
// import TodoList from "./Components/useOptimistic/TodoList"

function App() { 

  return (
    <>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
        <h1>React 19</h1>
        {/* <Login /> */}
        {/* <TodoList /> */}
        <Post />
        </Suspense>
      </div>
    </>
  )
}

export default App
