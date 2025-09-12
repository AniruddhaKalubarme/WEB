import './App.css';
import {useEffect, useState} from 'react';

function App()
{
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      console.log("first");
      setCount((count) => count + 1);
    }, 1000);

    return () => {
    console.log("second");
    clearTimeout(timer)
  }},[]);

  return <h1>I've rendered {count} times!</h1>;
}

function App1() {
  const [text, setText] = useState('');
  const [name, setName] = useState('Aniruddha');

  // useEffect( () => {
  //   console.log("UI rendered");
  // })

  // useEffect( () => {
  //   console.log("UI rendered");
  // },[])

  // useEffect( () => {
  //   console.log("UI rendered");
  // },[name])

  function changeHandler(event)
  {
    setText(event.target.value);
    console.log(text);
  }

  return (
    <div className="App">
      <input type="text" onChange={changeHandler} /> 
    </div>
  );
}

export default App;
