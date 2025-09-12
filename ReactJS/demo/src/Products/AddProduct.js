import './AddProduct.css'
import Date from './Date'
import Name from './Name'
import React, {useState} from 'react'

function AddProduct()
{
    const [newTitle, setTitle] = useState('');
    const [newDate, setDate] = useState('');

    function AddItemHandler(event)
    {
        setTitle(event.target.value);
        // console.log(event.target.value);
    }
    
    function DateHandler(event)
    {
        setDate(event.target.value);
        // console.log(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        const obj = {
            Title:newTitle,
            Date:newDate
        };
        console.log(obj)
        setTitle('')
        setDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Item</label>
                <input type='text' value={newTitle} onChange={AddItemHandler}></input>
            </div>
            <div>
                <input type='date' value={newDate} min="2025-01-01" max="2025-12-31" onChange={DateHandler}></input>
            </div>
            <button type='submit'> SUBMIT </button>
        </form>
    );
}

export default AddProduct;