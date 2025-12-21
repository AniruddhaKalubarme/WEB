import './App.css';
import Name from "./Products/Name";
import AddProduct from "./Products/AddProduct"


function App() {
    function DemoFun(obj)
    {
        console.log("Inside the App.js",obj);
    }

    return(
        <div>
            <AddProduct></AddProduct>
            <Name AppDemo = {DemoFun}></Name>
            <div className='App'>
                <Name name = "Nirma"></Name>
                <Name name = "SurfExcel"></Name>
                <Name name = "Ariel"></Name>
                <Name name = "Ghadi"></Name>
            </div>
        </div>
    );
}

export default App;
