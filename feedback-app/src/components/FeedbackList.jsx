import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types';

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

// defining this makes our code more robust. Could also use Typescript
FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired, 
            text: PropTypes.string.isRequired, 
            rating: PropTypes.number.isRequired, 

        })
    )
}
export default FeedbackList