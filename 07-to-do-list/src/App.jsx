import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1>To-Do List with React</h1>
    </div>
    <footer style={{position: "fixed", bottom: "0", width: "100%", textAlign: "center"}}>
      <p>Made with ❤️ by <a href="https://aamnashahab.com" target="_blank" rel="noopener noreferrer">Aamna Shahab</a></p>
    </footer>
    </>
  )
}

export default App
