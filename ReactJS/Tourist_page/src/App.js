import React, {useState} from "react";
import data from './Data';
import Tours from './Component/Tours';

const App = () => {
  const [tours, setTours] = useState(data);

  function removeTour(id)
  {
    const newTour = tours.filter(tour => tour.id !== id);
    setTours(newTour);
  }

  if(tours.length === 0)
  {
    return(
      <div className="flex flex-col justify-center items-center px-4 py-2 gap-10 m-10 text-4xl font-mono">
        <h2>No more data</h2>
        <button className="btn px-4 py-2 border-2 border-black rounded-lg bg-blue-300" onClick={() => setTours(data)}> Refresh </button>
      </div>
    )
  }

  return (
    <div className="p-4 pl-5 w-full"> 
      <h1 className="font-bold place-self-center px-4 py-2 text-4xl border-dashed border-[5px] border-orange-600 w-fit"> Plan With Aniruddha </h1>
      <div>
        <Tours tours={tours} removeTour={removeTour}></Tours>
      </div>
    </div>
  )
};

export default App;
