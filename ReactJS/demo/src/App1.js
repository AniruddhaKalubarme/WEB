import './App.css';
import Item from "./Components/Item"
import {Sec, Third} from "./Components/Second"
import Date from "./Components/Date"
import Hide from "./Components/Hide"

function App() {
  const response = [31 , "January" , 1975]
  let object = [
    {
      item:"niraj",
      day:21,
      month:"december",
      year:2000,
    },
    {
      item:"shiv",
      day:22,
      month:"June",
      year:2013,
    }
  ];
  
  return (
    <div>
      <Item> </Item>
      <Item item='Aniruddha'> </Item>
      <div className="App">
        Hello, This is the First project.
      </div>
      <Sec/>
      <Third/>
      <Date day = "30" month="December" year="2005">
        This is the Children Item.
      </Date>

      <br></br>
      <br></br>
      <Hide>
        <Item item={object[0].item}> </Item>
        <Date day = {object[0].day} month={object[0].month} year={object[0].year}></Date>

        <Item item={object[1].item}> </Item>
        <Date day = {object[1].day} month={object[1].month} year={object[1].year}></Date>
      </Hide>

    </div>
  );
}

export default App;
