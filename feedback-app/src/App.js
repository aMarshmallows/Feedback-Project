import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/feedbackData';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <div>
      <Header text="Feedback"></Header>
      <div className="container">
        <FeedbackList feedback={feedback}></FeedbackList>
      </div>
    </div>
  );
}

export default App;
