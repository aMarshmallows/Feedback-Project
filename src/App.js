// ----General Notes----
// do npm run start instead of npm start
// rfce to get the boilerplate react code
//  passing props dow several levels is called prop drilling
// used context api instead so don't have to do this
// make sure you're inside the same directory as the package.json and db.json when running npm start

// ----How this application works----
// all pages are in pages. All components are in the components folder, sorted by shared or single
// this application uses a global css sheet - index.css
// db.json is our json server database
// App.js is our main file from which we call everything else.
// index.js just exists and calls App.js
// context includes all the pieces of state and functions related to our database so we don't need to prop drill
// just call the pieces of state and functions we need in each function from context
//
// ----Components names meaning----
// feedback form is the card that takes in input from the user to create a new feedback item
// feedback list holds and displays all the previous feedback items
// feedback items are cards displaying each feedback including text, rating etc
// feedback stats is the bar right below feedback input that shows how many feedback items we have and the average rating

import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header text="Feedback"></Header>
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm></FeedbackForm>
                  <FeedbackStats></FeedbackStats>
                  <FeedbackList></FeedbackList>
                </>
              }
            ></Route>
            {/* this route passes in the aboutpage as a component */}
            <Route path="/about" element={<AboutPage></AboutPage>}>
              This is the about route
            </Route>
          </Routes>
          <AboutIconLink></AboutIconLink>
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
