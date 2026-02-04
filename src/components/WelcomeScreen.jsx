import React from 'react';

const WelcomeScreen = ({ onSuggestionClick }) => {
  const suggestions = [
    { icon: '🤖', text: 'Artificial Intelligence', question: 'What is artificial intelligence?' },
    { icon: '🌱', text: 'Science & Nature', question: 'How does photosynthesis work?' },
    { icon: '🍳', text: 'Cooking & Recipes', question: 'What are some healthy breakfast ideas?' },
    { icon: '⚛️', text: 'Technology', question: 'Explain quantum computing simply' }
  ];

  return (
    <div className="welcome-screen">
      <div className="welcome-content">
        <div className="welcome-icon">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2>Welcome to AI Assistant</h2>
        <p>Your intelligent companion for answering questions and having conversations</p>
        <div className="quick-actions">
          <h3>Try asking me about:</h3>
          <div className="suggestion-grid">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                className="suggestion-card"
                onClick={() => onSuggestionClick(suggestion.question)}
              >
                <span className="suggestion-icon">{suggestion.icon}</span>
                <span>{suggestion.text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
