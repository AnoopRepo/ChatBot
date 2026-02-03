# How to Setup Email Sending (Web3Forms)

Your contact form is now configured to send emails directly to your inbox! You just need to get a **FREE API key** from Web3Forms.

## 🚀 Quick Setup (5 minutes)

### Step 1: Get Your Free API Key

1. Go to: **https://web3forms.com/**
2. Click **"Get Started Free"** or **"Create Access Key"**
3. Enter your email: **anoopyadav5984@gmail.com**
4. Click **"Create Access Key"**
5. Check your email inbox for the access key
6. Copy the access key (it looks like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)

### Step 2: Add the Key to Your Code

1. Open `script.js` in your code editor
2. Find line **~247** (search for `YOUR_WEB3FORMS_ACCESS_KEY`)
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key:

**Before:**
```javascript
formData.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY');
```

**After:**
```javascript
formData.append('access_key', 'a1b2c3d4-e5f6-7890-abcd-ef1234567890');
```

### Step 3: Save and Test!

1. Save the file
2. Refresh your chatbot in the browser
3. Click **"Contact"** → **"Send Email"**
4. Fill out the form and click **"Send Message"**
5. Check your email inbox! 📧

---

## ✅ What You Get (100% FREE)

- ✅ **250 submissions per month** (free forever)
- ✅ **No credit card required**
- ✅ **No signup needed** (just email verification)
- ✅ **Instant email delivery**
- ✅ **Spam protection included**
- ✅ **Custom email templates**
- ✅ **Email notifications to you**

---

## 🎯 How It Works

1. User fills out your contact form
2. Form data is sent to Web3Forms API
3. Web3Forms sends you an email with:
   - Sender's name
   - Sender's email
   - Subject
   - Message
4. You receive it in your inbox: **anoopyadav5984@gmail.com**
5. You can reply directly to the sender!

---

## 📧 Email Format You'll Receive

```
From: AI Chatbot Contact Form <noreply@web3forms.com>
Reply-To: sender@example.com
To: anoopyadav5984@gmail.com
Subject: [Their Subject]

Name: John Doe
Email: john@example.com

Message:
[Their message here]
```

---

## 🔧 Troubleshooting

### "Failed to send message" error?

1. **Check your API key** - Make sure you copied it correctly
2. **Check your internet** - API needs internet connection
3. **Check browser console** - Press F12 and look for errors
4. **Verify email** - Make sure you verified your Web3Forms email

### Not receiving emails?

1. **Check spam folder** - Sometimes emails go there first
2. **Wait a minute** - Emails can take 30-60 seconds
3. **Verify API key** - Log into Web3Forms dashboard to check
4. **Check quota** - Make sure you haven't exceeded 250/month

### Want more features?

Web3Forms offers paid plans with:
- More submissions per month
- Custom branding
- File uploads
- Webhooks
- Priority support

But the **free plan is perfect** for most chatbots!

---

## 🎉 That's It!

Once you add your API key, your contact form will send emails directly to your inbox. No backend server needed!

**Need help?** 
- Web3Forms Docs: https://docs.web3forms.com/
- Support: support@web3forms.com

---

## 🔐 Security Note

Your API key is **public** (it's in the frontend code), but that's okay! Web3Forms is designed this way. The key only allows sending emails to YOUR verified email address, so it's safe.

If you want extra security, you can:
1. Add domain restrictions in Web3Forms dashboard
2. Enable reCAPTCHA
3. Set up rate limiting

But for most use cases, the default setup is perfectly secure! ✅
