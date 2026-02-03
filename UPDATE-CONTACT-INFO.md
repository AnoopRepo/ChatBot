# How to Update Your Contact Information

## Step 1: Open index.html

Open the file `index.html` in any text editor (Notepad, VS Code, etc.)

## Step 2: Find the Contact Section

Look for this section (around line 75-95):

```html
<!-- Contact Section -->
<div class="contact-section">
  <h3>Need Help or Have Questions?</h3>
  <p>Feel free to reach out to me:</p>
  <div class="contact-links">
    <a href="mailto:your.email@example.com" class="contact-link" target="_blank">
      ...
      <span>Email Me</span>
    </a>
    <a href="https://www.linkedin.com/in/your-profile" class="contact-link" target="_blank">
      ...
      <span>LinkedIn</span>
    </a>
  </div>
</div>
```

## Step 3: Update Your Email

Replace `your.email@example.com` with your actual email address:

**Before:**
```html
<a href="mailto:your.email@example.com" class="contact-link" target="_blank">
```

**After:**
```html
<a href="mailto:anoop@example.com" class="contact-link" target="_blank">
```

## Step 4: Update Your LinkedIn

Replace `your-profile` with your actual LinkedIn username:

**Before:**
```html
<a href="https://www.linkedin.com/in/your-profile" class="contact-link" target="_blank">
```

**After:**
```html
<a href="https://www.linkedin.com/in/anoopkumar" class="contact-link" target="_blank">
```

## Step 5: Save and Test

1. Save the file
2. Refresh your browser
3. Click the settings icon ⚙️
4. Scroll down to see your contact links
5. Click them to test!

## Optional: Customize the Text

You can also change the heading and description:

```html
<h3>Need Help or Have Questions?</h3>
<p>Feel free to reach out to me:</p>
```

Change to whatever you prefer, like:

```html
<h3>Get in Touch</h3>
<p>I'd love to hear from you:</p>
```

---

**That's it! Your contact information is now in the chatbot!** 🎉
