import { useState } from 'react'
import './App.css'

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (item.trim() === "") return; //if blank, nothing is returned

    if (items.includes(item.trim())) return ; //already exists
    setItems([...items,item]); //old items + new item, ... is the spread operator
    setItem(""); //new item will be set to blank
  }

  return (
    <>
  <div>
    <h1> Shopping List with React</h1>
    <input
    type='text'
    value={item}
    placeholder='Add an item'
    onChange={(e)=>setItem(e.target.value)}
    onKeyDown={(e)=> e.key === "Enter" && addItem()} 
    //onKeyDown -> runs whenever a key is pressed
    //e.key === "Enter" -> will check if the pressed key is Enter
    //&& addItem() -> if it's true, call addItem()
    > 
    </input>
    <button onClick={addItem}>Add</button>
    <ul style={{ listStyle: "none", padding:0}}>
      {items.map((item,index) => (
        <li key={index}>{item}</li>
        // map() goes through every item in an array
        //key={index} means, react needs a way to recognize each list item, here we are using the item's position
      ))}
    </ul>
    <h2>Total Items: {items.length} </h2> 
    {/* .length will be shown how many products are there */}
    
  </div>
  <footer style={{position: "fixed", bottom: "0", width: "100%", textAlign: "center"}}>
      <p>Made with ❤️ by <a href="https://aamnashahab.com" target="_blank" rel="noopener noreferrer">Aamna Shahab</a></p>
    </footer>
    </>
  )
}

export default App
