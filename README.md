# AI Assistant Chatbot (React)

A beautiful, intelligent chatbot built with **React** and powered by **Groq AI** for answering questions and having conversations.

![AI Assistant](https://img.shields.io/badge/AI-Powered-blue)
![React](https://img.shields.io/badge/React-19.2.0-61dafb)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646cff)
![License](https://img.shields.io/badge/license-ISC-green)

## ✨ Features

- 🎨 **Modern, Premium UI** - Beautiful dark theme with smooth animations and gradients
- ⚛️ **React Powered** - Modern component-based architecture
- 🤖 **AI-Powered** - Uses Groq's fast and free AI API
- 💬 **Natural Conversations** - Friendly, helpful responses to your questions
- 💾 **Chat History** - Automatically saves your conversations locally
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- ⚡ **Fast Responses** - Powered by Groq's ultra-fast inference
- 🔒 **Secure API Key** - Stored in `.env` file (not committed to GitHub)
- 📧 **Contact Form** - Integrated email functionality

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd ChatBot
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Your API Key

**Option A: Use Your Own API Key (Recommended)**

1. Get your free API key from [console.groq.com](https://console.groq.com)
2. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
3. Open `.env` and add your API key:
   ```env
   VITE_GROQ_API_KEY=gsk_your_actual_api_key_here
   ```

**Option B: Let Users Enter Their Own Key**

Leave the `.env` file empty or don't create it. Users will need to enter their API key in the Settings modal.

📖 **Detailed Setup Guide:** See [SETUP-API-KEY.md](SETUP-API-KEY.md)

### 4. Start the Development Server

```bash
npm run dev
```

Open your browser to `http://localhost:5173`

### 5. Start Chatting! 🎉

- Type your question in the input box
- Press Enter or click the send button
- Get intelligent, helpful responses instantly

## 📁 Project Structure

```
ChatBot/
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx       # Header with logo and actions
│   │   ├── SettingsModal.jsx    # API key configuration
│   │   ├── ContactModal.jsx     # Contact form
│   │   ├── WelcomeScreen.jsx    # Welcome screen
│   │   ├── ChatMessages.jsx     # Chat display
│   │   └── InputArea.jsx        # Message input
│   ├── hooks/               # Custom React hooks
│   │   ├── useChatState.js      # State management
│   │   └── useAPIService.js     # API service
│   ├── App.jsx              # Main App component
│   ├── App.css              # All styles
│   └── main.jsx             # React entry point
├── .env                     # Your API key (NOT in git)
├── .env.example             # Template for .env
├── .gitignore               # Git ignore rules
├── index.html               # HTML entry point
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
└── README.md                # This file
```

## 🎯 What Can You Ask?

The chatbot can help with:

- **General Knowledge** - "What is artificial intelligence?"
- **Science & Nature** - "How does photosynthesis work?"
- **Technology** - "Explain quantum computing simply"
- **Cooking & Recipes** - "What are some healthy breakfast ideas?"
- **Learning & Education** - "Teach me about the solar system"
- **Creative Writing** - "Help me brainstorm story ideas"
- **And much more!**

## 🛠️ Technical Details

### Tech Stack

- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool and dev server
- **Groq API** - AI model provider
- **Web3Forms** - Contact form backend
- **LocalStorage** - Persistent storage

### Available AI Models

- **Llama 3.3 70B Versatile** (Recommended) - Best balance of speed and quality
- **Llama 3.1 8B Instant** - Fastest responses
- **Gemma 2 9B** - Efficient and accurate
- **Qwen 3 32B** - Advanced reasoning

### React Architecture

#### Components
- **Header** - Navigation and action buttons
- **SettingsModal** - API key and model configuration
- **ContactModal** - Two-step contact form (LinkedIn/Email)
- **WelcomeScreen** - Initial screen with suggestions
- **ChatMessages** - Message display with typing indicator
- **InputArea** - Auto-resizing textarea with send button

#### Custom Hooks
- **useChatState** - Manages chat state, localStorage, API key
- **useAPIService** - Handles Groq API communication

## 🎨 Customization

### Change Color Scheme

Edit CSS variables in `src/App.css`:

```css
:root {
    --primary-color: #667eea;  /* Main accent color */
    --secondary-color: #764ba2; /* Secondary accent */
    --bg-primary: #0f0f1e;     /* Main background */
    --bg-secondary: #1a1a2e;   /* Card backgrounds */
}
```

### Modify AI Personality

Edit the `SYSTEM_PROMPT` in `src/hooks/useChatState.js`:

```javascript
SYSTEM_PROMPT: `You are a helpful, friendly assistant...`
```

### Add More Suggestion Cards

Edit the `suggestions` array in `src/components/WelcomeScreen.jsx`:

```javascript
const suggestions = [
  { icon: '🎯', text: 'Your Topic', question: 'Your question here' },
  // Add more...
];
```

## 🔒 Security & Privacy

### API Key Security

✅ **What's Protected:**
- `.env` file is in `.gitignore` - Won't be pushed to GitHub
- API key not visible in source code
- Safe to share your repository

⚠️ **Important Note:**
- This is a client-side app, so the API key is still sent to the browser
- Anyone can see it in browser DevTools → Network tab
- Perfect for personal projects, portfolios, and demos
- For production with many users, consider a backend API

### Privacy

- **All data is stored locally** - Conversations never leave your browser
- **No tracking** - No analytics or third-party scripts
- **Open source** - Review the code yourself

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Deploy

You can deploy to:
- **Vercel**: `vercel deploy`
- **Netlify**: Drag & drop `dist/` folder
- **GitHub Pages**: Use `gh-pages` package
- **Any static hosting**: Upload `dist/` folder

**Important:** Make sure to set the `VITE_GROQ_API_KEY` environment variable in your hosting platform's settings!

## 🐛 Troubleshooting

### API Key Not Working?

1. **Check .env file format:**
   ```env
   VITE_GROQ_API_KEY=gsk_your_key_here
   ```
   - No spaces around `=`
   - No quotes needed
   - Must start with `VITE_`

2. **Restart dev server:**
   ```bash
   # Stop server (Ctrl+C)
   npm run dev
   ```

3. **Check browser console** (F12) for errors

### Chat History Not Saving?

- Check if browser allows localStorage
- Not in private/incognito mode

### Styling Looks Broken?

- Clear browser cache
- Run `npm install` again
- Delete `node_modules` and reinstall

## 📚 Documentation

- **[SETUP-API-KEY.md](SETUP-API-KEY.md)** - Detailed API key setup guide
- **[REACT-CONVERSION.md](REACT-CONVERSION.md)** - React conversion details
- **[Groq API Docs](https://console.groq.com/docs)** - Official API documentation

## 🤝 Contributing

Feel free to:
- Report bugs
- Suggest new features
- Improve the code
- Enhance the UI/UX

## 🌟 Credits

- **AI Provider**: [Groq](https://groq.com)
- **Contact Form**: [Web3Forms](https://web3forms.com)
- **Icons**: Custom SVG icons
- **Fonts**: [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)

## 📄 License

ISC

## 👨‍💻 Author

Anoop Yadav
- LinkedIn: [anoop-yadav-232808329](https://www.linkedin.com/in/anoop-yadav-232808329/)
- Email: anoopyadav5984@gmail.com

---

**Enjoy chatting with your AI assistant! 🚀**
