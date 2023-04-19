import './App.css';
import React, { useState } from "react";

function App() {
  console.log('Hello!');
  const [count, setCount] = useState(0);//스테이트 생성
  return (
    <div className="App">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
function Nav() {
  const [text, setText] = useState("asdf");//스테이트 생성
  const handleTextChange =(event)=>{
    setText(event.target.value)
  }
  return (
    <div className="Nav">
      <input type='text' value={text} onChange={handleTextChange}/>
    </div>
  );
}

export {App,Nav};
