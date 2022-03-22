import React from 'react'
import {useState, useContext, useEffect} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
    const[text, setText] = useState('')
    const[rating, setRating] = useState(10)
    const[btnDisabled, setBtnDisabled] = useState(true)
    const[message, setMessage] = useState('')

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    // second arg is array of dependencies
    // if any of those dependencies change, this function will run
    //  if left empty, the function will only run when this FeedbackForm component loads
    useEffect(() => {
        if (feedbackEdit.edit === true){
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } 
        // if text after trimming whitespace is less than 10 characters
        else if (text !== '' && text.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage('Text must be at least 10 characters')
        }
        else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        // used to prveent default behaviour which is subnitting to actual file
        e.preventDefault()
        // double check if length of input is correct because there are ways around the client side to 
        // still submit even if not valid eg disabling the 'disabled' class using inspect
        if (text.trim().length > 10) {
            const newFeedback = {
                text: text, rating: rating
            }
            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            }
            else {
                addFeedback(newFeedback)
            }
            
            setText('')
        }
    }


    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                {/* passing in prop 'select' which is actually a function */}
                <RatingSelect  select={(rating) => setRating(rating)}></RatingSelect>
                <div className="input-group">
                    <input 
                    onChange={handleTextChange} 
                    type="text" 
                    placeholder="Write a review" 
                    value={text}/>
                    {/* here the children passed into Button is 'Send */}
                    <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                </div>
                {/* if there's a message, display it */}
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm