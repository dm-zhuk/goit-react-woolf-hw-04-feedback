import React, { useState } from 'react';
// no changes fr. prevVersion in imported Components
import Statistics from 'components/Statistics/Statistics';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';

//  class App extends Component >> into Functional Component with `useState` Hook. `setFeedback`𝑓 - to update the feedback state when a feedback option isClicked
const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  //  The `handleLeaveFeedback`𝑓 is re-rend. to use the `setFeedback`𝑓 from `useState` hook to update the state
  const handleLeaveFeedback = option => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };

  //  G/N/B properties now destructured from `feedback` state object
  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;
  const positivePercentage = totalFeedback
    ? Math.round((good / totalFeedback) * 100)
    : 0;

  return (
    // no changes fr. prevVersion
    <div className="Feedback">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="No feedback given yet ☕️" />
        )}
      </Section>
    </div>
  );
};

export default App;
