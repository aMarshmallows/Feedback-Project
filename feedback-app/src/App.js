import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'
// do npm run start instead of npm start
// rfce to get the boilerplate react code
//  passing props dow several levels is called prop drilling
// will use context api later so don't have to do this

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
                  {/*  passes in the data we got from the feedback file as a prop previously*/}
                  {/* no longer need to do that because of useContext */}
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
