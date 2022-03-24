import React, {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
    const {feedback} = useContext(FeedbackContext)
    // calculate ratings average
    //  higher state react functions like reduce and filter look like this
    //  reduce returns the sum, and its then divided by the length
    // acc is accuulator, cur is current number we're on
    let average = (feedback.reduce((acc, cur) =>{
        return acc + cur.rating
        // the toFixed makes it have 1 decimal place, but the replace expression removed the decimal if its equal to zero
        // aka 8.0 becomes 8
    }, 0) / feedback.length).toFixed(1).replace(/[.,]0$/,'')

    return (
    <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        {/*  if average is NaN because feedback.length = 0, return 0 instead of NaN */}
        <h4>Average Rating: {isNaN(average) ? 0: average }</h4>
    </div>
  )
}


export default FeedbackStats