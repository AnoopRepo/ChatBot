# Quick Fix for Model Error

If you're seeing an error about a decommissioned model, follow these steps:

## Method 1: Automatic Fix (Recommended)
1. **Close your browser completely** (all windows and tabs)
2. **Reopen the chatbot** by double-clicking `open-chatbot.bat` or `index.html`
3. The app will automatically detect and fix the deprecated model
4. Try sending a message again

## Method 2: Manual Cache Clear
If Method 1 doesn't work:

1. Open the chatbot in your browser
2. Press **F12** to open Developer Tools
3. Go to the **Console** tab
4. Type this command and press Enter:
   ```javascript
   localStorage.clear(); location.reload();
   ```
5. The page will refresh with clean settings
6. Go to Settings ⚙️ and re-enter your API key
7. Select "Llama 3.3 70B Versatile (Recommended)"
8. Click "Save Settings"

## Method 3: Browser Settings
1. In your browser, go to Settings
2. Find "Privacy and Security" or "Clear Browsing Data"
3. Select "Cookies and site data" or "Local Storage"
4. Clear data for the chatbot page
5. Refresh the page
6. Re-enter your API key in settings

## Current Supported Models (Feb 2026)
✅ **llama-3.3-70b-versatile** (Recommended)
✅ **llama-3.1-8b-instant** (Fastest)
✅ **gemma2-9b-it**
✅ **qwen/qwen3-32b**

## Deprecated Models (Don't Use)
❌ mixtral-8x7b-32768
❌ llama2-70b-4096
❌ gemma-7b-it
❌ llama-3.2-90b-vision-preview

---

**After following any method above, your chatbot should work perfectly!**
