import React, { useEffect, useRef } from 'react';

const ChatMessages = ({ messages, isTyping }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const formatMessage = (content) => {
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code>$1</code>')
      .replace(/\n/g, '<br>');
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="messages active">
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.role === 'user' ? 'user' : 'ai'}`}>
          <div className="message-avatar">
            {message.role === 'user' ? 'You' : 'AI'}
          </div>
          <div className="message-content">
            <div dangerouslySetInnerHTML={{ __html: formatMessage(message.content) }} />
            <div className="message-time">{formatTime(message.timestamp)}</div>
          </div>
        </div>
      ))}
      
      {isTyping && (
        <div className="typing-indicator active">
          <div className="typing-dot"></div>
          <div className="typing-dot"></div>
          <div className="typing-dot"></div>
        </div>
      )}
      
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;
