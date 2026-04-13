// import './App.css'
import Navbar from "./components/Navbar/Navbar"
import AllRoutes from "./components/Routes/AllRoutes" 
function App() {  
  return (
    <>
      <div>
        <Navbar />
        <main className="app_main">
          <AllRoutes />
        </main>
      </div>
    </>
  )
}

export default App
