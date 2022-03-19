import { createContext, useState } from 'react'
// used to generate ids for objects
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This item is rom context',
      rating: 10,
    },
  ])

  const deleteFeedback = (id) => {
    if (window.confirm('are you sure you want to delete?')) {
      // filter is an array method that is O(n)
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback = (newFeedback) => {
    // generates an id for this new object
    newFeedback.id = uuidv4()
    // makes a copy of the current feedback items using the spread operator '...'
    // and adds the newFeedback object at the front of the array
    // does this because strings are immutable - different ofc if using a real database
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
