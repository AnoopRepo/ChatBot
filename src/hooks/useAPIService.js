const API_ENDPOINT = 'https://api.groq.com/openai/v1/chat/completions';

const SYSTEM_PROMPT = `You are a helpful, friendly, and knowledgeable AI assistant. Your role is to:

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

Tone: Friendly, helpful, and approachable`;

export const useAPIService = (apiKey, model, getMessagesForAPI) => {
    const sendMessage = async (userMessage, currentMessages) => {
        if (!apiKey) {
            throw new Error('Please set your API key in settings');
        }

        // Build the messages array with system prompt, previous messages, and the new user message
        const messagesForAPI = [
            { role: 'system', content: SYSTEM_PROMPT },
            ...currentMessages.map(msg => ({
                role: msg.role,
                content: msg.content
            })),
            { role: 'user', content: userMessage }
        ];

        const response = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: model,
                messages: messagesForAPI,
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
    };

    return { sendMessage };
};
