# AI Assistant Chatbot

A beautiful, intelligent chatbot with a modern UI powered by Groq AI for answering questions and having conversations.

![AI Assistant](https://img.shields.io/badge/AI-Powered-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- 🎨 **Modern, Premium UI** - Beautiful dark theme with smooth animations and gradients
- 🤖 **AI-Powered** - Uses Groq's fast and free AI API
- 💬 **Natural Conversations** - Friendly, helpful responses to your questions
- 💾 **Chat History** - Automatically saves your conversations locally
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- ⚡ **Fast Responses** - Powered by Groq's ultra-fast inference
- 🎯 **Easy to Use** - Simple setup, just add your API key and start chatting

## 🚀 Quick Start

### 1. Get Your Free API Key

1. Visit [console.groq.com](https://console.groq.com)
2. Sign up for a free account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the key (you'll need it in step 3)

### 2. Open the Chatbot

Simply open `index.html` in your web browser:
- Double-click the file, or
- Right-click → Open with → Your browser

### 3. Configure Settings

1. Click the ⚙️ settings icon in the top-right corner
2. Paste your Groq API key
3. Select your preferred AI model (Mixtral 8x7B recommended)
4. Click "Save Settings"

### 4. Start Chatting!

- Type your question in the input box
- Press Enter or click the send button
- Get intelligent, helpful responses instantly

## 🎯 What Can You Ask?

The chatbot can help with:

- **General Knowledge** - "What is artificial intelligence?"
- **Science & Nature** - "How does photosynthesis work?"
- **Technology** - "Explain quantum computing simply"
- **Cooking & Recipes** - "What are some healthy breakfast ideas?"
- **Learning & Education** - "Teach me about the solar system"
- **Creative Writing** - "Help me brainstorm story ideas"
- **And much more!**

## 📁 Project Structure

```
ChatBot/
├── index.html      # Main HTML structure
├── styles.css      # Beautiful styling and animations
├── script.js       # Application logic and AI integration
└── README.md       # This file
```

## 🛠️ Technical Details

### Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with CSS variables, gradients, and animations
- **Vanilla JavaScript** - No frameworks, pure JS
- **Groq API** - Fast, free AI inference
- **LocalStorage** - Save chat history and settings

### Available AI Models

- **Llama 3.3 70B** (Recommended) - Best balance of speed and quality
- **Llama 3.1 8B** - Fastest responses
- **Llama 3.2 90B Vision** - Advanced with vision capabilities
- **Gemma 2 9B** - Efficient and accurate

### Features in Detail

#### State Management
- Saves API key and model preference
- Stores complete chat history
- Persists across browser sessions

#### UI/UX
- Smooth animations and transitions
- Typing indicator while AI is thinking
- Auto-scrolling to latest messages
- Auto-resizing input textarea
- Notification system for errors and confirmations

#### Message Formatting
- Supports **bold** text with `**text**`
- Supports *italic* text with `*text*`
- Supports `inline code` with backticks
- Automatic line break handling

## 🎨 Customization

### Change Color Scheme

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #667eea;  /* Main accent color */
    --secondary-color: #764ba2; /* Secondary accent */
    --bg-primary: #0f0f1e;     /* Main background */
    --bg-secondary: #1a1a2e;   /* Card backgrounds */
}
```

### Modify AI Personality

Edit the `SYSTEM_PROMPT` in `script.js` to change how the AI responds:

```javascript
SYSTEM_PROMPT: `You are a helpful, friendly assistant...`
```

### Add More Suggestion Cards

In `index.html`, add more quick-start suggestions:

```html
<button class="suggestion-card" data-question="Your question here">
    <span class="suggestion-icon">🎯</span>
    <span>Your Topic</span>
</button>
```

## 🔒 Privacy & Security

- **All data is stored locally** - Your conversations never leave your browser
- **API key is stored securely** - Only in your browser's localStorage
- **No tracking** - No analytics or third-party scripts
- **Open source** - Review the code yourself

## 🐛 Troubleshooting

### "Please set your API key" error
- Make sure you've entered a valid Groq API key in settings
- Check that you copied the entire key without spaces

### No response from AI
- Verify your API key is correct
- Check your internet connection
- Try a different AI model
- Check the browser console for errors (F12)

### Chat history not saving
- Make sure your browser allows localStorage
- Check if you're in private/incognito mode (localStorage is disabled)

### Styling looks broken
- Make sure all three files (HTML, CSS, JS) are in the same folder
- Clear your browser cache and reload

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to:
- Report bugs
- Suggest new features
- Improve the code
- Enhance the UI/UX

## 🌟 Credits

- **AI Provider**: [Groq](https://groq.com)
- **Icons**: Custom SVG icons
- **Fonts**: [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)

## 📞 Support

If you encounter any issues or have questions:
1. Check the Troubleshooting section above
2. Review the [Groq API documentation](https://console.groq.com/docs)
3. Check browser console for error messages

---

**Enjoy chatting with your AI assistant! 🚀**
