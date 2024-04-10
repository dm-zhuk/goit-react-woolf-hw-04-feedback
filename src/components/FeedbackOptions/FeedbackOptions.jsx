import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div
      className="Feedback"
      style={{
          display: 'flex',
          padding: '20px 0',
      }}
    >
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onLeaveFeedback(option)}
          style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            textTransform: 'capitalize',
            fontWeight: 'bolder',
            padding: '8px',
            margin: 'auto 12px',
            border: '1px solid lightblue',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
