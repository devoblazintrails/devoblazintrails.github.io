---
title: "Let's Chat"
layout: splash
permalink: /contact/
author_profile: false
---


<h1 class="centered"> Contact Us</h1>

<h3 class="centered"> We'd love to hear from you.</h3>
  <br>
<p class="centered">Whether you're exploring Salesforce for the first time or looking to improve an existing setup, we’re here to help.</p>

<h4 class="centered"> 📬 Get in Touch</h4>

<p class="centered"> <strong>Email:</strong> <a href="mailto:contact@loveunited.solutions">contact@loveunited.solutions</a><br>
<strong>Phone/Text:</strong> (321) 370-2301<br>
<strong>Instagram:</strong> <a href="https://instagram.com/loveunited.solutions">@loveunited.solutions</a><br> 
<strong>LinkedIn:</strong> <a href="https://linkedin.com/company/loveunitedsolutions">Connect with us</a><br>
</p>

---

## 💬 Send Us a Message

Fill out the form below and we'll get back to you within 1 business day.

<!-- Begin Embedded Contact Form -->
<form id="custom-form" action="https://script.google.com/macros/s/AKfycbzEYHSClG8MKxQFfsfRrORD97Fhg2h9is9UMMX5KdnvZCrNCZ-pa_SlzbgN4Cv8-O2t/exec" method="POST">
  <label for="name">Your Name:</label><br>
  <input type="text" name="name" id="name" required><br><br>
  <label for="email">Your Email:</label><br>
  <input type="email" name="email" id="email" required><br><br>
 
  <label for="message">Your Message:</label><br>
  <textarea name="message" id="message" rows="4" required></textarea><br><br>
 
  <label for="edition">What edition of Salesforce are you using?</label><br>
  <input type="text" name="edition" id="edition"><br><br>
 
  <label for="users">How many users?</label><br>
  <input type="number" name="users" id="users"><br><br>
 
  <label for="needs">What are your top 3 admin needs?</label><br>
  <textarea name="needs" id="needs" rows="3"></textarea><br><br>
 
  <!-- ⚠️ REPLACE the placeholder below with YOUR real site key
       (copy it from your current live file before saving) -->
  <div class="g-recaptcha" data-sitekey="6LfP5ncrAAAAAKteCgCl1uFl8CPxX6-jhdIVORVE"></div><br>
  <button type="submit">Send Message</button>
  <p id="response-message" role="status" aria-live="polite"></p>
</form>
<!-- Thank-you card: hidden until a successful submission -->
<div id="form-success" hidden style="text-align:center; padding:2.5rem 1.5rem; border:1px solid #d9d9d9; border-radius:10px; margin:1.5rem 0; background:#fafafa;">
  <h3 style="margin-top:0;">🎉 Thanks! Your message is on its way.</h3>
  <p>We'll get back to you within <strong>1 business day</strong>.<br>
     A confirmation email is headed to your inbox right now.</p>
  <p style="margin-bottom:0;">Don't want to wait? You can
     <a href="https://app.usemotion.com/meet/devo-perez/30-min-consultation">book your free 30-minute consultation</a>
     below and skip the back-and-forth.</p>
</div>
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
 
<script>
  const contactForm = document.getElementById('custom-form');
  const responseMsg = document.getElementById('response-message');
  const successBox = document.getElementById('form-success');
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const token = grecaptcha.getResponse();
    if (!token) {
      responseMsg.textContent = "Please complete the reCAPTCHA.";
      return;
    }
    submitBtn.disabled = true;
    responseMsg.textContent = "Sending...";
    try {
      const body = new URLSearchParams(new FormData(contactForm));
      const res = await fetch(contactForm.action, { method: 'POST', body: body });
      const text = (await res.text()).trim();
      if (res.ok && text === "Success") {
        // The swap: form disappears, thank-you card takes its place.
        contactForm.hidden = true;
        successBox.hidden = false;
        successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Count the lead at the moment it actually exists.
        if (typeof gtag === 'function') {
          gtag('event', 'generate_lead', { method: 'contact_form' });
        }
      } else {
        // Failure: keep the form on screen so they can retry.
        responseMsg.textContent = "Something went wrong: " + (text || ("HTTP " + res.status));
        grecaptcha.reset();
        submitBtn.disabled = false;
      }
    } catch (err) {
      responseMsg.textContent = "Network error. Please try again.";
      submitBtn.disabled = false;
    }
  });
</script>
<!-- End Embedded Contact Form -->

---

## 🗓️ Schedule Your Free Salesforce Consultation

We’re here to help you get the most out of Salesforce—whether you’re planning a new implementation, struggling with adoption, or looking to clean up your data.

Our free 30-minute consultation is designed to give you immediate clarity and value, no strings attached.

#### 🤝 What to Expect

During our conversation, we’ll take time to understand your business goals, current Salesforce setup, and any roadblocks you’re facing. You don’t need to prepare anything formal—just bring your questions, pain points, or ideas.

### ✅ You’ll Walk Away With:

1. **A Clear Snapshot of Where You Are**
We’ll identify key opportunities and risks in your current Salesforce environment or processes.

2. **Tailored Recommendations**
You’ll receive practical, platform-aware suggestions that are aligned with your business needs, not generic best practices.

3. **A Roadmap Preview**
We’ll outline next steps for enhancing your Salesforce setup—whether that’s quick wins, longer-term strategy, or where to get started.

<!-- Motion embed begin -->
<iframe src="https://app.usemotion.com/meet/devo-perez/30-min-consultation" title="Motion Booking Page" width="100%" height="840px" frameborder="0"></iframe>
<!-- Motion embed end -->

Need help right away? [Grab time with us within the next 24 hours.](https://balo.expert/profile/devo-pm)

## 🤝 Let’s Collaborate

Love unITed Solutions brings experience across small businesses and enterprise sectors—including manufacturing, healthcare, life sciences, and media.  

> Let's make Salesforce work *for* your business—not the other way around.
> Love unITed Solutions is proudly minority-owned and committed to building systems that support equity and impact.

---
