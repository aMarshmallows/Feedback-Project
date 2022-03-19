import React from 'react'
import {useState} from 'react'

function RatingSelect({select}) {
    const [selected, setSelected] = useState(1)
    const handleChange = (e) => {
        // "+" changes the type from string to number
        setSelected(+e.currentTarget.value)
        // select is changed to correct value but can't use select(selected)
        // because change is not shown until next render
        //  this function exist in the feedbackForm, one level up
        select(+e.currentTarget.value)
    }
  return (
    <ul className='rating'>
        <li>
            <input
            // checked can be set to true or false, double checks that selected is equal to value we selected
                type='radio' id='num1' name='rating' value='1' onChange={handleChange} checked={selected === 1}
            ></input>
            <label htmlFor='num1'>1</label>
        </li>
        <li>
            <input
                type='radio' id='num2' name='rating' value='2' onChange={handleChange} checked={selected === 2}
            ></input>
            <label htmlFor='num2'>2</label>
        </li>
        <li>
            <input
                type='radio' id='num3' name='rating' value='3' onChange={handleChange} checked={selected === 3}
            ></input>
            <label htmlFor='num3'>3</label>
        </li>
        <li>
            <input
                type='radio' id='num4' name='rating' value='4' onChange={handleChange} checked={selected === 4}
            ></input>
            <label htmlFor='num4'>4</label>
        </li>
        <li>
            <input
                type='radio' id='num5' name='rating' value='5' onChange={handleChange} checked={selected === 5}
            ></input>
            <label htmlFor='num5'>5</label>
        </li>
   
        
    </ul>
  )
}

export default RatingSelect