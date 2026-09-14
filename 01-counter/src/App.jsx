import { useState } from 'react'
import './App.css'


function App() {
  const [value, setValue] = useState(0);

  return (
    <>
    <div>
      <h1>React Counter</h1>
      <button onClick = {()=>{ setValue(value-1) }}> - </button>
      <span style={{margin: "0 20px", fontSize: "24px:"}}>{value}</span>
      <button onClick = {()=>{ setValue(value+1) }}> + </button>
      <br></br>
      <button onClick={() => setValue(0)}>Reset</button>

    </div>
    <footer style={{position: "fixed", bottom: "0", width: "100%", textAlign: "center"}}>
      <p>Made with ❤️ by <a href="https://aamnashahab.com" target="_blank" rel="noopener noreferrer">Aamna Shahab</a></p>
    </footer>
    </>
    
        
      
      
    )
}

export default App
