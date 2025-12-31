import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './features/Counter'
import { useState } from 'react';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  function handleIncrement()
  {
    dispatch(increment());
  }

  function handledecrement()
  {
    dispatch(decrement());
  }

  function handleAmount()
  {
    dispatch(incrementByAmount(amount));
  }

  return (
    <div>
    here
        <button onClick={handleIncrement}> + </button>
        <span> count: {count} </span>
        <button onClick={handledecrement}> - </button>
        <br></br>
        <br></br>
        <input
        type='number'
        placeholder='Enter the amount'
        value={amount}
        onChange={(e) => {setAmount(e.target.value)}}
        >
        </input>

        <button onClick={handleAmount}>incrementByAmount</button>

    </div>
  )
}

export default App
