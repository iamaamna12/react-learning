import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div>
        <h1> Password Toggle with React </h1>
        <input 
        type={showPassword ? "text" : "password" }
        placeholder='Enter password'
        onChange={(e) => setCount(e.target.value)} >
        </input> 

        <br></br>
        <button onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Hide" : "Show"} Password
        </button>
        
      


      </div>
    </>
  )
}

export default App
