// Configuration
const CONFIG = {
    VERSION: '1.1.0',
    STORAGE_KEYS: {
        API_KEY: 'groq_api_key',
        MODEL: 'groq_model',
        CHAT_HISTORY: 'chat_history',
        VERSION: 'app_version'
    },
    DEFAULT_MODEL: 'llama-3.3-70b-versatile',
    API_ENDPOINT: 'https://api.groq.com/openai/v1/chat/completions',
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

// State Management
class ChatState {
    constructor() {
        // Check version and migrate if needed
        this.checkAndMigrate();

        this.apiKey = localStorage.getItem(CONFIG.STORAGE_KEYS.API_KEY) || '';
        this.model = localStorage.getItem(CONFIG.STORAGE_KEYS.MODEL) || CONFIG.DEFAULT_MODEL;

        // If model is deprecated, reset to default
        if (CONFIG.DEPRECATED_MODELS.includes(this.model)) {
            console.log(`Migrating deprecated model ${this.model} to ${CONFIG.DEFAULT_MODEL}`);
            this.model = CONFIG.DEFAULT_MODEL;
            this.saveModel(this.model);
        }

        this.messages = this.loadChatHistory();
    }

    checkAndMigrate() {
        const savedVersion = localStorage.getItem(CONFIG.STORAGE_KEYS.VERSION);
        if (savedVersion !== CONFIG.VERSION) {
            console.log(`Migrating from version ${savedVersion || 'unknown'} to ${CONFIG.VERSION}`);
            // Update version
            localStorage.setItem(CONFIG.STORAGE_KEYS.VERSION, CONFIG.VERSION);
        }
    }

    saveApiKey(key) {
        this.apiKey = key;
        localStorage.setItem(CONFIG.STORAGE_KEYS.API_KEY, key);
    }

    saveModel(model) {
        this.model = model;
        localStorage.setItem(CONFIG.STORAGE_KEYS.MODEL, model);
    }

    addMessage(role, content) {
        const message = {
            role,
            content,
            timestamp: new Date().toISOString()
        };
        this.messages.push(message);
        this.saveChatHistory();
        return message;
    }

    saveChatHistory() {
        try {
            localStorage.setItem(CONFIG.STORAGE_KEYS.CHAT_HISTORY, JSON.stringify(this.messages));
        } catch (e) {
            console.error('Failed to save chat history:', e);
        }
    }

    loadChatHistory() {
        try {
            const history = localStorage.getItem(CONFIG.STORAGE_KEYS.CHAT_HISTORY);
            return history ? JSON.parse(history) : [];
        } catch (e) {
            console.error('Failed to load chat history:', e);
            return [];
        }
    }

    clearHistory() {
        this.messages = [];
        localStorage.removeItem(CONFIG.STORAGE_KEYS.CHAT_HISTORY);
    }

    getMessagesForAPI() {
        return [
            { role: 'system', content: CONFIG.SYSTEM_PROMPT },
            ...this.messages.map(msg => ({
                role: msg.role,
                content: msg.content
            }))
        ];
    }
}

// UI Controller
class UIController {
    constructor() {
        this.elements = {
            settingsBtn: document.getElementById('settingsBtn'),
            newChatBtn: document.getElementById('newChatBtn'),
            contactBtn: document.getElementById('contactBtn'),
            settingsModal: document.getElementById('settingsModal'),
            contactModal: document.getElementById('contactModal'),
            closeModal: document.getElementById('closeModal'),
            closeContactModal: document.getElementById('closeContactModal'),
            apiKeyInput: document.getElementById('apiKey'),
            modelSelect: document.getElementById('modelSelect'),
            saveSettingsBtn: document.getElementById('saveSettings'),
            contactOptions: document.getElementById('contactOptions'),
            emailFormContainer: document.getElementById('emailFormContainer'),
            linkedinChoice: document.getElementById('linkedinChoice'),
            emailChoice: document.getElementById('emailChoice'),
            backToOptions: document.getElementById('backToOptions'),
            contactForm: document.getElementById('contactForm'),
            welcomeScreen: document.getElementById('welcomeScreen'),
            messagesContainer: document.getElementById('messages'),
            messageInput: document.getElementById('messageInput'),
            sendBtn: document.getElementById('sendBtn'),
            typingIndicator: document.getElementById('typingIndicator')
        };

        this.initializeEventListeners();
        this.autoResizeTextarea();
    }

    initializeEventListeners() {
        // Settings modal
        this.elements.settingsBtn.addEventListener('click', () => this.openSettings());
        this.elements.closeModal.addEventListener('click', () => this.closeSettings());
        this.elements.settingsModal.addEventListener('click', (e) => {
            if (e.target === this.elements.settingsModal) {
                this.closeSettings();
            }
        });

        // Contact modal
        this.elements.contactBtn.addEventListener('click', () => this.openContact());
        this.elements.closeContactModal.addEventListener('click', () => this.closeContact());
        this.elements.contactModal.addEventListener('click', (e) => {
            if (e.target === this.elements.contactModal) {
                this.closeContact();
            }
        });

        // Contact options
        this.elements.linkedinChoice.addEventListener('click', () => {
            window.open('https://www.linkedin.com/in/anoop-yadav-232808329/', '_blank');
            this.closeContact();
        });

        this.elements.emailChoice.addEventListener('click', () => this.showEmailForm());
        this.elements.backToOptions.addEventListener('click', () => this.showContactOptions());

        // Contact form submission
        this.elements.contactForm.addEventListener('submit', (e) => this.handleContactSubmit(e));

        // Suggestion cards
        document.querySelectorAll('.suggestion-card').forEach(card => {
            card.addEventListener('click', () => {
                const question = card.getAttribute('data-question');
                this.elements.messageInput.value = question;
                this.elements.sendBtn.click();
            });
        });

        // Message input
        this.elements.messageInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.elements.sendBtn.click();
            }
        });

        // Auto-resize textarea
        this.elements.messageInput.addEventListener('input', () => {
            this.autoResizeTextarea();
        });
    }

    openSettings() {
        this.elements.settingsModal.classList.add('active');
    }

    closeSettings() {
        this.elements.settingsModal.classList.remove('active');
    }

    openContact() {
        this.elements.contactModal.classList.add('active');
        this.showContactOptions(); // Always start with options
    }

    closeContact() {
        this.elements.contactModal.classList.remove('active');
        this.showContactOptions(); // Reset to options when closing
        this.elements.contactForm.reset(); // Clear form
    }

    showContactOptions() {
        this.elements.contactOptions.classList.remove('hidden');
        this.elements.emailFormContainer.classList.add('hidden');
    }

    showEmailForm() {
        this.elements.contactOptions.classList.add('hidden');
        this.elements.emailFormContainer.classList.remove('hidden');
    }

    async handleContactSubmit(e) {
        e.preventDefault();

        const submitBtn = e.target.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;

        // Disable button and show loading
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 20px; height: 20px; margin-right: 8px; animation: spin 1s linear infinite;">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" stroke-dasharray="60" stroke-dashoffset="0" opacity="0.25"/>
                <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
            </svg>
            Sending...
        `;

        const name = document.getElementById('senderName').value;
        const email = document.getElementById('senderEmail').value;
        const subject = document.getElementById('messageSubject').value;
        const message = document.getElementById('messageBody').value;

        try {
            // Using Web3Forms API (free service)
            const formData = new FormData();
            formData.append('access_key', 'f91cdda4-aae1-4814-b6d9-4b77a84e187a'); // You'll need to get this
            formData.append('name', name);
            formData.append('email', email);
            formData.append('subject', subject);
            formData.append('message', message);
            formData.append('from_name', 'AI Chatbot Contact Form');
            formData.append('to_email', 'anoopyadav5984@gmail.com');

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                this.showNotification('✅ Message sent successfully!', 'success');
                this.elements.contactForm.reset();
                setTimeout(() => {
                    this.closeContact();
                }, 2000);
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            this.showNotification('❌ Failed to send message. Please try again.', 'error');
        } finally {
            // Restore button
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        }
    }

    loadSettings(state) {
        this.elements.apiKeyInput.value = state.apiKey;
        this.elements.modelSelect.value = state.model;
    }

    getSettings() {
        return {
            apiKey: this.elements.apiKeyInput.value.trim(),
            model: this.elements.modelSelect.value
        };
    }

    hideWelcomeScreen() {
        this.elements.welcomeScreen.classList.add('hidden');
        this.elements.messagesContainer.classList.add('active');
    }

    showWelcomeScreen() {
        this.elements.welcomeScreen.classList.remove('hidden');
        this.elements.messagesContainer.classList.remove('active');
    }

    addMessage(role, content) {
        this.hideWelcomeScreen();

        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${role}`;

        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.textContent = role === 'user' ? 'You' : 'AI';

        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';

        // Format content with basic markdown-like support
        const formattedContent = this.formatMessage(content);
        contentDiv.innerHTML = formattedContent;

        const time = document.createElement('div');
        time.className = 'message-time';
        time.textContent = this.formatTime(new Date());

        contentDiv.appendChild(time);
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(contentDiv);

        this.elements.messagesContainer.appendChild(messageDiv);
        this.scrollToBottom();
    }

    formatMessage(content) {
        // Basic formatting for better readability
        let formatted = content
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
            .replace(/\*(.*?)\*/g, '<em>$1</em>') // Italic
            .replace(/`(.*?)`/g, '<code>$1</code>') // Inline code
            .replace(/\n/g, '<br>'); // Line breaks

        return formatted;
    }

    formatTime(date) {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    showTypingIndicator() {
        this.elements.typingIndicator.classList.add('active');
        this.scrollToBottom();
    }

    hideTypingIndicator() {
        this.elements.typingIndicator.classList.remove('active');
    }

    scrollToBottom() {
        const chatContainer = document.querySelector('.chat-container');
        setTimeout(() => {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }, 100);
    }

    autoResizeTextarea() {
        const textarea = this.elements.messageInput;
        textarea.style.height = 'auto';
        textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
    }

    clearInput() {
        this.elements.messageInput.value = '';
        this.autoResizeTextarea();
    }

    setInputEnabled(enabled) {
        this.elements.messageInput.disabled = !enabled;
        this.elements.sendBtn.disabled = !enabled;
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: ${type === 'error' ? '#ef4444' : '#667eea'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 12px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
            z-index: 1001;
            animation: slideIn 0.3s ease;
            max-width: 300px;
        `;
        notification.textContent = message;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    clearMessages() {
        this.elements.messagesContainer.innerHTML = '';
        this.showWelcomeScreen();
    }
}

// API Service
class APIService {
    constructor(state) {
        this.state = state;
    }

    async sendMessage(message) {
        if (!this.state.apiKey) {
            throw new Error('Please set your API key in settings');
        }

        const response = await fetch(CONFIG.API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.state.apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: this.state.model,
                messages: this.state.getMessagesForAPI(),
                temperature: 0.7,
                max_tokens: 1024
            })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error?.message || 'Failed to get response from API');
        }

        const data = await response.json();
        return data.choices[0].message.content;
    }
}

// Main Application
class ChatApp {
    constructor() {
        this.state = new ChatState();
        this.ui = new UIController();
        this.api = new APIService(this.state);

        this.initialize();
    }

    initialize() {
        // Load saved settings
        this.ui.loadSettings(this.state);

        // Load chat history
        this.loadChatHistory();

        // Setup event listeners
        this.ui.elements.saveSettingsBtn.addEventListener('click', () => this.saveSettings());
        this.ui.elements.sendBtn.addEventListener('click', () => this.handleSendMessage());
        this.ui.elements.newChatBtn.addEventListener('click', () => this.handleNewChat());

        // Show welcome message if no API key
        if (!this.state.apiKey) {
            setTimeout(() => {
                this.ui.showNotification('Please set your Groq API key in settings to start chatting!', 'info');
            }, 1000);
        }
    }

    handleNewChat() {
        // Confirm if there are messages
        if (this.state.messages.length > 0) {
            if (confirm('Are you sure you want to start a new chat? This will clear the current conversation.')) {
                this.state.clearHistory();
                this.ui.clearMessages();
                this.ui.showNotification('New chat started!', 'info');
            }
        }
    }

    loadChatHistory() {
        if (this.state.messages.length > 0) {
            this.state.messages.forEach(msg => {
                this.ui.addMessage(msg.role, msg.content);
            });
        }
    }

    saveSettings() {
        const settings = this.ui.getSettings();

        if (!settings.apiKey) {
            this.ui.showNotification('Please enter an API key', 'error');
            return;
        }

        this.state.saveApiKey(settings.apiKey);
        this.state.saveModel(settings.model);

        this.ui.closeSettings();
        this.ui.showNotification('Settings saved successfully!', 'info');
    }

    async handleSendMessage() {
        const message = this.ui.elements.messageInput.value.trim();

        if (!message) return;

        if (!this.state.apiKey) {
            this.ui.showNotification('Please set your API key in settings first', 'error');
            this.ui.openSettings();
            return;
        }

        // Add user message
        this.state.addMessage('user', message);
        this.ui.addMessage('user', message);
        this.ui.clearInput();
        this.ui.setInputEnabled(false);
        this.ui.showTypingIndicator();

        try {
            // Get AI response
            const response = await this.api.sendMessage(message);

            // Add AI message
            this.state.addMessage('assistant', response);
            this.ui.addMessage('ai', response);
        } catch (error) {
            console.error('Error:', error);
            this.ui.showNotification(error.message, 'error');

            // Remove the user message from state if request failed
            this.state.messages.pop();
            this.state.saveChatHistory();
        } finally {
            this.ui.hideTypingIndicator();
            this.ui.setInputEnabled(true);
            this.ui.elements.messageInput.focus();
        }
    }
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    code {
        background: rgba(255, 255, 255, 0.1);
        padding: 2px 6px;
        border-radius: 4px;
        font-family: 'Courier New', monospace;
        font-size: 0.9em;
    }
`;
document.head.appendChild(style);

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ChatApp();
});
