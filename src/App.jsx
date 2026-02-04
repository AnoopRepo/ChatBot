import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SettingsModal from './components/SettingsModal';
import ContactModal from './components/ContactModal';
import WelcomeScreen from './components/WelcomeScreen';
import ChatMessages from './components/ChatMessages';
import InputArea from './components/InputArea';
import { useChatState } from './hooks/useChatState';
import { useAPIService } from './hooks/useAPIService';
import './App.css';

function App() {
  const {
    apiKey,
    model,
    messages,
    saveApiKey,
    saveModel,
    addMessage,
    clearHistory,
    getMessagesForAPI
  } = useChatState();

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [notification, setNotification] = useState(null);

  const { sendMessage } = useAPIService(apiKey, model, getMessagesForAPI);

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleSaveSettings = (newApiKey, newModel) => {
    if (!newApiKey) {
      showNotification('Please enter an API key', 'error');
      return;
    }
    saveApiKey(newApiKey);
    saveModel(newModel);
    setIsSettingsOpen(false);
    showNotification('Settings saved successfully!', 'info');
  };

  const handleNewChat = () => {
    if (messages.length > 0) {
      if (window.confirm('Are you sure you want to start a new chat? This will clear the current conversation.')) {
        clearHistory();
        showNotification('New chat started!', 'info');
      }
    }
  };

  const handleSendMessage = async (message) => {
    if (!message.trim()) return;

    if (!apiKey) {
      showNotification('Please set your API key in settings first', 'error');
      setIsSettingsOpen(true);
      return;
    }

    // Add user message
    addMessage('user', message);
    setIsTyping(true);

    try {
      // Get AI response
      const response = await sendMessage(message);
      addMessage('assistant', response);
    } catch (error) {
      console.error('Error:', error);
      showNotification(error.message, 'error');
      // Remove the user message from state if request failed
      // Note: This would require implementing a removeLastMessage function
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="container">
      <Header
        onSettingsClick={() => setIsSettingsOpen(true)}
        onContactClick={() => setIsContactOpen(true)}
        onNewChatClick={handleNewChat}
      />

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        apiKey={apiKey}
        model={model}
        onSave={handleSaveSettings}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        onNotification={showNotification}
      />

      <main className="chat-container">
        {messages.length === 0 ? (
          <WelcomeScreen onSuggestionClick={handleSendMessage} />
        ) : (
          <ChatMessages messages={messages} isTyping={isTyping} />
        )}
      </main>

      <InputArea
        onSendMessage={handleSendMessage}
        disabled={isTyping}
      />

      {notification && (
        <div
          className={`notification notification-${notification.type}`}
          style={{
            position: 'fixed',
            top: '80px',
            right: '20px',
            background: notification.type === 'error' ? '#ef4444' : '#667eea',
            color: 'white',
            padding: '1rem 1.5rem',
            borderRadius: '12px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
            zIndex: 1001,
            animation: 'slideIn 0.3s ease',
            maxWidth: '300px',
          }}
        >
          {notification.message}
        </div>
      )}
    </div>
  );
}

export default App;
