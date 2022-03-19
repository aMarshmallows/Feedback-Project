import React from 'react'
import FeedbackItem from './FeedbackItem'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList() {

    const {feedback} = useContext(FeedbackContext)
    // if no feedback was passed in, do this
    if (!feedback || feedback.length === 0) {
        return <p>No Feedback</p>
    }

  return (
    <div className='feedback-list'>
         {/* for every item in feedback items ('item' is an iterator) */}
        {feedback.map((item) => (
            // passing in key and item params to the feedback item component
            //  handle delete is now a prop passed into feedbackItem
            <FeedbackItem 
            key={item.id} 
            item={item} >
            </FeedbackItem>
        ))}
    </div>
  )
}


export default FeedbackList