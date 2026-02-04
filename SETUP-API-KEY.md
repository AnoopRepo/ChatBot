# 🔑 Setting Up Your API Key (Secure Method)

## ✅ Your API Key is Now Secure!

Your API key is stored in a `.env` file which is **NOT committed to GitHub**. This keeps your key safe! 🛡️

## 📝 Quick Setup (3 Steps)

### Step 1: Get Your Groq API Key

1. Go to [console.groq.com](https://console.groq.com)
2. Sign up or log in
3. Navigate to **API Keys** section
4. Click **Create API Key**
5. Copy the key (it looks like: `gsk_...`)

### Step 2: Add Your API Key to .env File

Open the `.env` file in your project root and replace `YOUR_GROQ_API_KEY_HERE` with your actual API key:

```env
VITE_GROQ_API_KEY=gsk_your_actual_api_key_here
```

**Example:**
```env
VITE_GROQ_API_KEY=gsk_abc123xyz456def789ghi012jkl345mno678
```

### Step 3: Restart the Dev Server

**Important:** You must restart the dev server for environment variables to load!

```bash
# Stop the current server (Ctrl+C in terminal)
# Then start it again:
npm run dev
```

**That's it!** ✨ Your chatbot now works for all users using your API key!

---

## 🔒 Security Features

### ✅ What's Protected:

1. **`.env` file is in `.gitignore`** - Won't be pushed to GitHub
2. **API key is hidden** - Not visible in your source code
3. **Safe to share code** - Others can clone your repo without seeing your key

### 📋 Files Created:

- **`.env`** - Your actual API key (NEVER commit this!)
- **`.env.example`** - Template for others (safe to commit)
- **`.gitignore`** - Updated to exclude `.env` files

### 🚨 Important Notes:

⚠️ **Client-Side Limitation:**
- Even with `.env`, the API key is still sent to the browser
- Anyone can see it in browser DevTools → Network tab
- This is a limitation of client-side apps (React, Vue, etc.)

✅ **This Setup is Perfect For:**
- Personal projects
- Portfolio demonstrations
- Small user base
- Quick deployment
- Learning projects

---

## 🎯 How It Works

```
.env file (not in GitHub)
    ↓
VITE_GROQ_API_KEY=your_key
    ↓
Vite loads it as import.meta.env.VITE_GROQ_API_KEY
    ↓
Your app uses it automatically
    ↓
Users can chat immediately! 🎉
```

---

## 📤 Sharing Your Project

### When Pushing to GitHub:

```bash
git add .
git commit -m "Add chatbot"
git push
```

✅ **What Gets Pushed:**
- All your code
- `.env.example` (template)
- `.gitignore` (protection)

❌ **What Doesn't Get Pushed:**
- `.env` (your actual API key)

### For Other Developers:

When someone clones your repo, they should:

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Add their own API key to `.env`

3. Run `npm run dev`

---

## 🔐 Even More Secure: Backend API (Optional)

For **production apps with many users**, consider this architecture:

```
React App (Frontend)
    ↓
Your Backend Server (Node.js/Python)
    ↓
Groq API
```

**Benefits:**
- ✅ API key completely hidden (server-side only)
- ✅ Rate limiting per user
- ✅ Usage tracking
- ✅ Cost control

**This requires:**
- Backend server setup
- API endpoint creation
- Deployment of both frontend & backend

---

## 📊 Monitoring Your API Usage

Keep an eye on your Groq dashboard:
- Daily/Monthly request counts
- Token usage
- Rate limit status
- Billing (if applicable)

**Dashboard:** [console.groq.com](https://console.groq.com)

---

## ❓ Troubleshooting

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

3. **Check console for errors:**
   - Open browser DevTools (F12)
   - Look for API errors

### Still Not Working?

- Verify API key is valid at [console.groq.com](https://console.groq.com)
- Check if you have API credits/quota
- Make sure `.env` is in project root (same level as `package.json`)

---

## ✅ Checklist

- [ ] Created `.env` file
- [ ] Added `VITE_GROQ_API_KEY=your_key` to `.env`
- [ ] Restarted dev server
- [ ] Tested chatbot (should work immediately!)
- [ ] Verified `.env` is in `.gitignore`
- [ ] Ready to push to GitHub safely! 🚀

---

## 🎉 You're All Set!

Your API key is now:
- ✅ Secure (not in GitHub)
- ✅ Easy to manage (one file)
- ✅ Working automatically
- ✅ Safe to share your code

**Happy coding! 🚀**
