// import './App.css'

import { Route, Routes } from "react-router-dom"
import UserContainer from "./containers/UserContainer"
import useWindowSize from "./hooks/useWindowSize"
import Dashboard from "./components/Dashboard"
import UserProfile from "./components/UserProfile"
import userAuth from "./hoc/userAuth" 
function App() { 
  const {size} = useWindowSize();
  const CheckDashboard = userAuth(Dashboard);
  const CheckProfile  = userAuth(UserProfile)
  return (
    <>
      <div>
        <h1>Container Presentational Design Pattern</h1>
        <UserContainer />
        <div>
          window Size : {size.width} x {size.hight}
        </div>
      </div> 
      <hr></hr>
      <Routes>
        <Route path="/dashboard" element={<CheckDashboard />}/> 
        <Route path="userprofile" element={<CheckProfile />}/>
        <Route path="/" element={<div>HOC Components</div>} />
      </Routes>
    </>
  )
}

export default App
