---
title: "Let's Chat"
layout: splash
permalink: /contact/
author_profile: false
---


# Contact Us

We'd love to hear from you.

Whether you're exploring Salesforce for the first time or looking to improve an existing setup, we’re here to help.

---

## 📬 Get in Touch

**Email:** [contact@loveunited.solutions](mailto:contact@loveunited.solutions)  
**Phone/Text:** (321) 370-2301
**Instagram:** [@loveunited.solutions](https://instagram.com/loveunited.solutions)  
**LinkedIn:** [Connect with us](https://linkedin.com/company/loveunitedsolutions)

---

## 💬 Send Us a Message

Fill out the form below and we'll get back to you within 1 business day.

<!-- Begin Embedded Contact Form -->
<form id="custom-form" action="https://script.google.com/macros/s/AKfycbx3P58SxkfdcEQmer7Siy-AeRuVtbXFmqpUUgJMyBjhsr9F4c9nVjAZVKtxAy4silWK/exec" method="POST">
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

  <!-- reCAPTCHA -->
  <div class="g-recaptcha" data-sitekey="6LfP5ncrAAAAAKteCgCl1uFl8CPxX6-jhdIVORVE"></div><br>

  <button type="submit">Send Message</button>
  <p id="response-message"></p>
</form>

<script src="https://www.google.com/recaptcha/api.js" async defer></script>

<script>
  const form = document.getElementById('custom-form');
  const responseMessage = document.getElementById('response-message');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validate reCAPTCHA
    const token = grecaptcha.getResponse();
    if (!token) {
      responseMessage.textContent = "Please complete the reCAPTCHA.";
      return;
    }

    const formData = new FormData(form);
    formData.append("g-recaptcha-response", token);

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: formData
      });
      if (res.ok) {
        responseMessage.textContent = "Thanks! We'll be in touch soon.";
        form.reset();
        grecaptcha.reset();
      } else {
        responseMessage.textContent = "Oops! Something went wrong.";
      }
    } catch {
      responseMessage.textContent = "Network error. Please try again.";
    }
  });
</script>
<!-- End Embedded Contact Form -->

---

## 🤝 Let’s Collaborate

Love unITed Solutions brings experience across small businesses and enterprise sectors—including manufacturing, healthcare, life sciences, and media.  

Need help right away? [Grab time with us within the next 24 hours.](https://balo.expert/profile/devo-pm)

> Let's make Salesforce work *for* your business—not the other way around.
> Love unITed Solutions is proudly minority-owned and committed to building systems that support equity and impact.

---
