const API_ENDPOINT = 'https://api.groq.com/openai/v1/chat/completions';

export const useAPIService = (apiKey, model, getMessagesForAPI) => {
    const sendMessage = async (message) => {
        if (!apiKey) {
            throw new Error('Please set your API key in settings');
        }

        const response = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: model,
                messages: getMessagesForAPI(),
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
