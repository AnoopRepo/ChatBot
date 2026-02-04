# AI Chatbot - React Version

A beautiful, intelligent chatbot built with **React** and powered by **Groq AI** for answering questions and having conversations.

## 🎉 React Conversion Complete!

This project has been successfully converted from vanilla HTML/CSS/JavaScript to a modern React application.

## 📁 Project Structure

```
ChatBot/
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx       # Header with logo and action buttons
│   │   ├── SettingsModal.jsx    # Settings modal for API configuration
│   │   ├── ContactModal.jsx     # Contact modal with LinkedIn and email options
│   │   ├── WelcomeScreen.jsx    # Welcome screen with suggestions
│   │   ├── ChatMessages.jsx     # Chat messages display
│   │   └── InputArea.jsx        # Message input area
│   ├── hooks/               # Custom React hooks
│   │   ├── useChatState.js      # State management hook
│   │   └── useAPIService.js     # API service hook
│   ├── App.jsx              # Main App component
│   ├── App.css              # All styles
│   └── main.jsx             # React entry point
├── index.html               # Minimal HTML entry point
├── package.json
└── vite.config.js
```

## 🚀 Features

- ✅ **React Components**: Modular, reusable components
- ✅ **Custom Hooks**: Clean state management with `useChatState` and `useAPIService`
- ✅ **Local Storage**: Persistent chat history and settings
- ✅ **Modern UI**: Beautiful gradient design with smooth animations
- ✅ **Responsive**: Works on all devices
- ✅ **Contact Form**: Integrated email functionality via Web3Forms
- ✅ **Multiple AI Models**: Support for various Groq AI models

## 🛠️ Tech Stack

- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool and dev server
- **Groq AI** - AI model provider
- **Web3Forms** - Contact form backend

## 📦 Installation

The dependencies are already installed. If you need to reinstall:

```bash
npm install
```

## 🏃 Running the App

The dev server is already running! If you need to start it again:

```bash
npm run dev
```

Then open your browser to `http://localhost:5173`

## 🔑 Setup

1. Click the **Settings** button (gear icon)
2. Enter your Groq API key (get it from [console.groq.com](https://console.groq.com))
3. Select your preferred AI model
4. Click **Save Settings**

## 📧 Contact Form Setup

The contact form is already configured with Web3Forms. Messages will be sent to: `anoopyadav5984@gmail.com`

## 🎨 Key React Improvements

### Before (Vanilla JS):
- Single `script.js` file with 600+ lines
- Manual DOM manipulation
- Class-based state management
- Event listeners scattered throughout

### After (React):
- **6 modular components** for better organization
- **2 custom hooks** for clean state management
- Declarative UI with JSX
- Automatic re-rendering on state changes
- Better code reusability and maintainability

## 📝 Component Overview

### `App.jsx`
Main application component that orchestrates all other components and manages global state.

### `Header.jsx`
Navigation header with logo and action buttons (Contact, New Chat, Settings).

### `SettingsModal.jsx`
Modal for configuring API key and selecting AI model.

### `ContactModal.jsx`
Two-step contact modal: choose LinkedIn or Email, then fill out the form.

### `WelcomeScreen.jsx`
Initial screen with suggestion cards for quick questions.

### `ChatMessages.jsx`
Displays the conversation history with typing indicator.

### `InputArea.jsx`
Message input with auto-resize textarea and send button.

## 🔧 Custom Hooks

### `useChatState`
Manages chat state including:
- API key and model selection
- Message history
- LocalStorage persistence
- Version migration

### `useAPIService`
Handles API communication with Groq AI:
- Message sending
- Error handling
- Response processing

## 🎯 Next Steps

You can now:
- Add more features using React's ecosystem
- Implement React Router for multiple pages
- Add state management libraries like Redux or Zustand
- Create more reusable components
- Add unit tests with Jest and React Testing Library

## 📄 License

ISC

## 👨‍💻 Author

Anoop Yadav
- LinkedIn: [anoop-yadav-232808329](https://www.linkedin.com/in/anoop-yadav-232808329/)
- Email: anoopyadav5984@gmail.com

---

**Enjoy your React-powered AI Chatbot! 🚀**
