import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setShowPassword(true); 

    setTimeout(() => {
      setShowPassword(false);
    }, 250);
  };
  

  return (
    <>
      <div>
        <h1> Password Toggle with React </h1>
        <input 
        type={showPassword ? "text" : "password" }
        value={password}
        onChange={handlePasswordChange}
        placeholder='Enter password'>
        </input> 
        <button onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Hide" : "Show"} Password
        </button>
      </div>

      <footer style={{position: "fixed", bottom: "0", width: "100%", textAlign: "center"}}>
      <p>Made with ❤️ by <a href="https://aamnashahab.com" target="_blank" rel="noopener noreferrer">Aamna Shahab</a></p>
    </footer>
    </>
  )
}

export default App
