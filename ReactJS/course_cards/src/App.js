import './App.css';
import {useEffect, useState} from 'react';
import Cards from "./Components/Cards";
import Filter from "./Components/Filter";
import {FilterData, apiURL} from "./Components/data";
import {toast} from "react-toastify";
import Loading from "./Components/Loading"

function App()
{
  const [loading, setLoading] = useState(false);
  const [result, setData] = useState(' ');
  const [category, setCategory] = useState('All');

  useEffect( () => {
    const fetchData = async() => {
      try
      {
        const res = await fetch(apiURL);
        const result = await res.json();

        setData(result.data);
      }
      catch(error)
      {
        toast.error("Something went wrond");
      }

      setLoading(true);
    }

    fetchData();
  }, [])

  return(
    <div class="container">
      <h2 className="NavBar">Top Courses</h2>

      <div className="bg">
        <Filter FilterData = {FilterData} category={category} setCategory={setCategory}></Filter>
        {
          loading ? <Cards result={result} category={category}></Cards> : <Loading></Loading>  
        } 
      </div>
      
    </div> 
  )
}


export default App;
