import { useState, useEffect } from 'react';

const CONFIG = {
    VERSION: '1.1.0',
    // 🔑 DEFAULT API KEY - Loaded from .env file (VITE_GROQ_API_KEY)
    // This keeps your API key secure and out of GitHub
    // Users can still override this by entering their own key in Settings
    DEFAULT_API_KEY: import.meta.env.VITE_GROQ_API_KEY || '',
    STORAGE_KEYS: {
        API_KEY: 'groq_api_key',
        MODEL: 'groq_model',
        CHAT_HISTORY: 'chat_history',
        VERSION: 'app_version'
    },
    DEFAULT_MODEL: 'llama-3.3-70b-versatile',
    DEPRECATED_MODELS: [
        'mixtral-8x7b-32768',
        'llama2-70b-4096',
        'gemma-7b-it',
        'llama-3.2-90b-vision-preview'
    ],
    SYSTEM_PROMPT: `You are a helpful, friendly, and knowledgeable AI assistant. Your role is to:

- Provide accurate and helpful information on a wide range of topics
- Be conversational and engaging while maintaining professionalism
- Ask clarifying questions when the user's request is unclear
- Admit when you don't know something rather than making up information
- Break down complex topics into easy-to-understand explanations
- Be concise but thorough in your responses
- Show empathy and understanding in your interactions

Response Guidelines:
- Keep responses clear and well-structured
- Use examples when explaining concepts
- If asked about sensitive topics, respond thoughtfully and respectfully
- Avoid being preachy or overly formal
- End with a follow-up question if appropriate to keep the conversation flowing

Tone: Friendly, helpful, and approachable`
};

export const useChatState = () => {
    const [apiKey, setApiKey] = useState('');
    const [model, setModel] = useState(CONFIG.DEFAULT_MODEL);
    const [messages, setMessages] = useState([]);

    // Initialize state from localStorage
    useEffect(() => {
        checkAndMigrate();

        // Use saved API key, or fall back to default API key
        const savedApiKey = localStorage.getItem(CONFIG.STORAGE_KEYS.API_KEY) || CONFIG.DEFAULT_API_KEY;
        const savedModel = localStorage.getItem(CONFIG.STORAGE_KEYS.MODEL) || CONFIG.DEFAULT_MODEL;

        // If model is deprecated, reset to default
        const finalModel = CONFIG.DEPRECATED_MODELS.includes(savedModel)
            ? CONFIG.DEFAULT_MODEL
            : savedModel;

        setApiKey(savedApiKey);
        setModel(finalModel);

        if (finalModel !== savedModel) {
            localStorage.setItem(CONFIG.STORAGE_KEYS.MODEL, finalModel);
        }

        // Load chat history
        const savedHistory = loadChatHistory();
        setMessages(savedHistory);
    }, []);

    // Save messages to localStorage whenever they change
    useEffect(() => {
        if (messages.length > 0) {
            saveChatHistory(messages);
        }
    }, [messages]);

    const checkAndMigrate = () => {
        const savedVersion = localStorage.getItem(CONFIG.STORAGE_KEYS.VERSION);
        if (savedVersion !== CONFIG.VERSION) {
            console.log(`Migrating from version ${savedVersion || 'unknown'} to ${CONFIG.VERSION}`);
            localStorage.setItem(CONFIG.STORAGE_KEYS.VERSION, CONFIG.VERSION);
        }
    };

    const loadChatHistory = () => {
        try {
            const history = localStorage.getItem(CONFIG.STORAGE_KEYS.CHAT_HISTORY);
            return history ? JSON.parse(history) : [];
        } catch (e) {
            console.error('Failed to load chat history:', e);
            return [];
        }
    };

    const saveChatHistory = (msgs) => {
        try {
            localStorage.setItem(CONFIG.STORAGE_KEYS.CHAT_HISTORY, JSON.stringify(msgs));
        } catch (e) {
            console.error('Failed to save chat history:', e);
        }
    };

    const saveApiKey = (key) => {
        setApiKey(key);
        localStorage.setItem(CONFIG.STORAGE_KEYS.API_KEY, key);
    };

    const saveModel = (mdl) => {
        setModel(mdl);
        localStorage.setItem(CONFIG.STORAGE_KEYS.MODEL, mdl);
    };

    const addMessage = (role, content) => {
        const message = {
            role,
            content,
            timestamp: new Date().toISOString()
        };
        setMessages(prev => [...prev, message]);
    };

    const clearHistory = () => {
        setMessages([]);
        localStorage.removeItem(CONFIG.STORAGE_KEYS.CHAT_HISTORY);
    };

    const getMessagesForAPI = () => {
        return [
            { role: 'system', content: CONFIG.SYSTEM_PROMPT },
            ...messages.map(msg => ({
                role: msg.role,
                content: msg.content
            }))
        ];
    };

    return {
        apiKey,
        model,
        messages,
        saveApiKey,
        saveModel,
        addMessage,
        clearHistory,
        getMessagesForAPI
    };
};
