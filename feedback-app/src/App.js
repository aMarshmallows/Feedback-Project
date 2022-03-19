import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// used to generate ids for objects
import { v4 as uuidv4 } from 'uuid'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/feedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
// do npm run start instead of npm start
// rfce to get the boilerplate react code
//  passing props dow several levels is called prop drilling
// will use context api later so don't have to do this

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

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
    <Router>
      <Header text="Feedback"></Header>
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback}></FeedbackForm>
                <FeedbackStats feedback={feedback}></FeedbackStats>
                {/*  passes in the data we got from the feedback file as a prop */}
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                ></FeedbackList>
              </>
            }
          ></Route>
          {/* this route passes in the aboutpage as a component */}
          <Route path="/about" element={<AboutPage></AboutPage>}>
            This is the about route
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
