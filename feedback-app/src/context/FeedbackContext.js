import { createContext, useState } from 'react'
// used to generate ids for objects
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  //  global states
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This item is rom context',
      rating: 10,
    },
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  // delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm('are you sure you want to delete?')) {
      // filter is an array method that is O(n)
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  // add feedback
  const addFeedback = (newFeedback) => {
    // generates an id for this new object
    newFeedback.id = uuidv4()
    // makes a copy of the current feedback items using the spread operator '...'
    // and adds the newFeedback object at the front of the array
    // does this because strings are immutable - different ofc if using a real database
    setFeedback([newFeedback, ...feedback])
  }

  // set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true })
  }

  const updateFeedback = (id, updItem) => {
    setFeedback(
      // feedback.map iterates over all items in feedback and asks
      //  is this item.id equal to the id we want to update?
      //  if so update it and return updated item
      //  otherwise return the item unchanged
      //  results in recreating feedback with the updated item
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    )
    setFeedbackEdit({ item: {}, edit: false })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        // editFeedback is the function that sets which item to edit
        // feedbackEdit is the piece of global state with the item and boolean
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
