import React from 'react'
import {useState, useContext, useEffect} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function RatingSelect({select}) {
    const [selected, setSelected] = useState(1)
    const {feedbackEdit} = useContext(FeedbackContext)

    useEffect(() => {
        if (feedbackEdit.edit === true){
            setSelected(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

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
        <li>
            <input
                type='radio' id='num6' name='rating' value='6' onChange={handleChange} checked={selected === 6}
            ></input>
            <label htmlFor='num6'>6</label>
        </li>
        <li>
            <input
                type='radio' id='num7' name='rating' value='7' onChange={handleChange} checked={selected === 7}
            ></input>
            <label htmlFor='num7'>7</label>
        </li>
        <li>
            <input
                type='radio' id='num8' name='rating' value='8' onChange={handleChange} checked={selected === 8}
            ></input>
            <label htmlFor='num5'>8</label>
        </li>
        <li>
            <input
                type='radio' id='num9' name='rating' value='9' onChange={handleChange} checked={selected === 9}
            ></input>
            <label htmlFor='num9'>9</label>
        </li>
        <li>
            <input
                type='radio' id='num10' name='rating' value='10' onChange={handleChange} checked={selected === 10}
            ></input>
            <label htmlFor='num10'>10</label>
        </li>
   
        
    </ul>
  )
}

export default RatingSelect