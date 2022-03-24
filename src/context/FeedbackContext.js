import React, { createContext, useState, useEffect } from 'react'
// used to generate ids for objects

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  //  global states
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  useEffect(() => {
    fetchFeedback()
  }, [])

  const fetchFeedback = async () => {
    // the ?_sort=id&order=desc results in the data being ordered by descending id number
    // can do just this because we added a proxy in package.json
    const response = await fetch('/feedback?_sort=id&order=desc')
    const data = await response.json()
    setFeedback(data)
    setIsLoading(false)
  }

  // delete feedback
  const deleteFeedback = async (id) => {
    if (window.confirm('are you sure you want to delete?')) {
      // filter is an array method that is O(n)
      // setFeedback(feedback.filter((item) => item.id !== id))
      // when doing fetch with variable elements, remeber to use backticks!
      await fetch(`/feedback/${id}`, {
        method: 'DELETE',
      })

      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  // add feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    })

    const data = await response.json()

    // makes a copy of the current feedback items using the spread operator '...'
    // and adds the new Feedback object at the start of the array
    // does this because strings are immutable
    setFeedback([data, ...feedback])
  }

  // set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true })
  }

  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updItem),
    })

    const data = await response.json()

    setFeedback(
      feedback.map((item) =>
        item.id === id
          ? {
              ...item,
              ...data,
            }
          : item
      )
    )
    // feedback.map iterates over all items in feedback and asks
    //  is this item.id equal to the id we want to update?
    //  if so update it and return updated item
    //  otherwise return the item unchanged
    //  results in recreating feedback with the updated item
    // feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    setFeedbackEdit({ item: {}, edit: false })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
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
