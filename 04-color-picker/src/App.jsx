import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("white");

  return (
    <>
      <div
      style={{
        backgroundColor: color,
        minHeight: "100vh",
        padding: "5px",
      }}
        >
        <h1>Color Picker with React</h1>
        <button onClick={()=>{setColor("red")}}>Click for Red</button>
        <button onClick={()=>{setColor("green")}}>Click for Green</button>
        <button onClick={()=>{setColor('blue')}}>Click for Blue</button>
        <p>Current Color: {color}</p>
      </div>

      <footer>
        Made with ❤️ by <a href="https://aamnashahab.com" target="_blank" rel="noopener noreferrer">Aamna Shahab</a>
      </footer>
    </>
  )
}

export default App
