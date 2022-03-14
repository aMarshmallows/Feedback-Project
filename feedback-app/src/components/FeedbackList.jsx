import React from 'react'
import FeedbackItem from './FeedbackItem'

function FeedbackList({feedback}) {
    if (!feedback || feedback.length === 0) {
        return <p>No Feedback</p>
    }

  return (
    <div className='feedback-list'>
         {/* for every item in feedback items, 'item' is an iterator */}
        {feedback.map((item) => (
            // passing in key and item params to the feedback item component
            <FeedbackItem key={item.id} item={item}></FeedbackItem>
        ))}
    </div>
  )
}

export default FeedbackList