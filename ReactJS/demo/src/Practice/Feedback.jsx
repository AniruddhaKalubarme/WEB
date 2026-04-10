import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './Feedback.css'

export default function Feedback () {
    const [rate, setRate] = useState('0');

    function setRatings(e){
        console.log(e);
        setRate(e.target.value)
    }

  return (
    <div>
        <label for='rate-1'>1</label>
        <input type="radio" name="rating" id='rate-1' value={1} className='Ratinginputs' onClick={setRatings}/>
        <input type="radio" name="rating" value={2} className='Ratinginputs' onClick={setRatings}/>
        <input type="radio" name="rating" value={3} className='Ratinginputs' onClick={setRatings}/>
        <input type="radio" name="rating" value={4} className='Ratinginputs' onClick={setRatings}/>
        <input type="radio" name="rating" value={5} className='Ratinginputs' onClick={setRatings}/>
        <input type="radio" name="rating" value={6} className='Ratinginputs' onClick={setRatings}/>

        <div>Pressed input is: {rate}</div>
        <br/>
        <br/>

        <Link to={{
            pathname: './about',
            search: '?sort=name',
            hash: '#aniruddha',
        }}>
            Herte
        </Link>
    </div>
  )
}
