import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
const [name, setName] = useState("");
  return (
    <>
    <div>
      <h1> Name Greeter </h1>
      <input type="text" 
      placeholder='Enter your name'
      value={name}
      onChange={(e)=>{
        setName(e.target.value)
      }}
      >
      </input>
      <h2>Hello {name || "Stranger"}!</h2>
    </div>
    <footer>
      <p>Made with ❤️ by <a href="https://aamnashahab.com" target="_blank">Aamna Shahab</a></p>
    </footer>
    </>
  )
}

export default App
