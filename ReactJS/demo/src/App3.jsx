import './App.css';
import {useState} from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [bgColor, setColor] = useState("rgb(0,0,0)");
  
  function changeColor()
  {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  function buttonHandler(e)
  {
    e.stopPropagation();
    changeColor();
  }

  return (
    <div className="wrapper">
      <p>Toatal clicks : <span style={{ color: bgColor }}> {counter} </span></p>
      <div className="outer" onClick={() => {setCounter(counter+1)}} style={{ backgroundColor: bgColor }}>
        
        <div className="inner">
          <button onClick={buttonHandler}>chagne color</button>
        </div>
          
      </div>
    </div>
  )
}

export default App
