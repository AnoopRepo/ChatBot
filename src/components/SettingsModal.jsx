import React, { useState, useEffect } from 'react';

const SettingsModal = ({ isOpen, onClose, apiKey, model, onSave }) => {
  const [localApiKey, setLocalApiKey] = useState(apiKey);
  const [localModel, setLocalModel] = useState(model);

  useEffect(() => {
    setLocalApiKey(apiKey);
    setLocalModel(model);
  }, [apiKey, model, isOpen]);

  const handleSave = () => {
    onSave(localApiKey, localModel);
  };

  if (!isOpen) return null;

  return (
    <div className={`modal ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Settings</h2>
          <button className="close-btn" onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label htmlFor="apiKey">Groq API Key</label>
            <input
              type="password"
              id="apiKey"
              placeholder="Enter your Groq API key"
              value={localApiKey}
              onChange={(e) => setLocalApiKey(e.target.value)}
            />
            <small>
              Get your free API key from{' '}
              <a href="https://console.groq.com" target="_blank" rel="noopener noreferrer">
                console.groq.com
              </a>
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="modelSelect">AI Model</label>
            <select
              id="modelSelect"
              value={localModel}
              onChange={(e) => setLocalModel(e.target.value)}
            >
              <option value="llama-3.3-70b-versatile">Llama 3.3 70B Versatile (Recommended)</option>
              <option value="llama-3.1-8b-instant">Llama 3.1 8B Instant (Fastest)</option>
              <option value="gemma2-9b-it">Gemma 2 9B</option>
              <option value="qwen/qwen3-32b">Qwen 3 32B</option>
            </select>
          </div>

          <button className="save-btn" onClick={handleSave}>
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
