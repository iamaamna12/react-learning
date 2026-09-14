import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("")

  return (
    <>
    <div>
     <h1>Character Counter with React</h1>

     <textarea
     rows={8}
     cols={50}
     typeof='text'
     placeholder='Start Typing...'
     value={text}
    onChange={(e)=>{setText(e.target.value)}}
    ></textarea>
    <p>{text.length}/200 Characters</p>
    {text.length>200 ? <p style={{color:'red'}} >Character Limit Exceeded</p> : null}

    </div>
    <footer bottom={0} style={{textAlign:'center', marginTop:'20px'}}>
      Made with ❤️ by <a href="https://aamnashahab.com" target="_blank">Aamna Shahab</a>
    </footer>    
    </>
  )
}

export default App
