---
title: "Contact"
layout: lu-page
wide: true
permalink: /contact/
description: "Tell us what's going on in your Salesforce org. We reply within 1 business day, or you can book a free 30-minute consultation."
---
<!-- NOTE: keep this file free of blank lines. The page is plain HTML inside a Markdown file, and a blank line can make Markdown rewrite the HTML. -->
<section class="page-hero">
  <div class="container">
    <p class="eyebrow">Contact</p>
    <h1>We'd love to hear from you.</h1>
    <p class="lead">Whether you're exploring Salesforce for the first time or improving an org you already have, tell us what's going on. We reply within 1 business day.</p>
  </div>
</section>
<section class="inner">
  <div class="container contact-grid">
    <div class="card form-card">
      <div id="form-intro">
      <h2>Send us a message</h2>
      <p>A few details help us come prepared. Only the first three fields are required.</p>
      </div>
<!-- Begin Embedded Contact Form -->
<form id="custom-form" class="lu-form" action="https://script.google.com/macros/s/AKfycbzEYHSClG8MKxQFfsfRrORD97Fhg2h9is9UMMX5KdnvZCrNCZ-pa_SlzbgN4Cv8-O2t/exec" method="POST">
  <!-- Filled in automatically when a visitor arrives from a service card (contact/?service=...). -->
  <input type="hidden" name="service" id="service" value="">
  <p class="service-note" id="service-note" hidden>You're asking about: <strong id="service-name"></strong></p>
  <div class="row-2">
    <div>
      <label for="name">Your name</label>
      <input type="text" name="name" id="name" autocomplete="name" required>
    </div>
    <div>
      <label for="email">Your email</label>
      <input type="email" name="email" id="email" autocomplete="email" required>
    </div>
  </div>
  <label for="message">How can we help?</label>
  <textarea name="message" id="message" rows="5" required></textarea>
  <div class="row-2">
    <div>
      <label for="edition">Salesforce edition <span class="opt">(optional)</span></label>
      <input type="text" name="edition" id="edition" placeholder="e.g. Enterprise, NPSP">
    </div>
    <div>
      <label for="users">Number of users <span class="opt">(optional)</span></label>
      <input type="number" name="users" id="users" min="0">
    </div>
  </div>
  <label for="needs">Top 3 admin needs <span class="opt">(optional)</span></label>
  <textarea name="needs" id="needs" rows="3"></textarea>
  <div class="g-recaptcha" data-sitekey="6LfP5ncrAAAAAKteCgCl1uFl8CPxX6-jhdIVORVE"></div>
  <button type="submit" class="btn">Send Message</button>
  <p id="response-message" role="status" aria-live="polite"></p>
</form>
<!-- Thank-you card: hidden until a successful submission -->
<div id="form-success" class="form-success" hidden>
  <h3>Thanks! Your message is on its way.</h3>
  <p>We'll get back to you within <strong>1 business day</strong>. A confirmation email is headed to your inbox right now.</p>
  <p>Don't want to wait? <a href="https://app.usemotion.com/meet/devo-perez/30-min-consultation" target="_blank" rel="noopener">Book your free 30-minute consultation</a> and skip the back-and-forth.</p>
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
        var intro = document.getElementById('form-intro');
        if (intro) intro.hidden = true;
        successBox.hidden = false;
        successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Count the lead at the moment it actually exists.
        if (typeof gtag === 'function') {
          gtag('event', 'generate_lead', { method: 'contact_form', service: document.getElementById('service').value || 'none' });
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
<!-- Records the service a visitor chose on the Services page in the hidden "service" field. -->
<script>
  (function () {
    var service = new URLSearchParams(window.location.search).get("service");
    if (!service) return;
    service = service.replace(/[<>]/g, "").slice(0, 80);
    var field = document.getElementById("service");
    if (field) field.value = service;
    var note = document.getElementById("service-note");
    var label = document.getElementById("service-name");
    if (note && label) { label.textContent = service; note.hidden = false; }
    var form = document.getElementById("custom-form");
    if (form) {
      var card = form.closest(".card") || form;
      var top = card.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    }
    var name = document.getElementById("name");
    if (name) {
      setTimeout(function () { name.focus({ preventScroll: true }); }, 700);
    }
  })();
</script>
    </div>
    <aside>
      <div class="card side-card">
        <h3>Get in touch</h3>
        <dl>
          <div><dt>Email</dt><dd><a href="mailto:contact@loveunited.solutions">contact@loveunited.solutions</a></dd></div>
          <div><dt>Phone or text</dt><dd><a href="tel:+13213702301">(321) 370-2301</a></dd></div>
          <div><dt>LinkedIn</dt><dd><a href="https://www.linkedin.com/company/loveunitedsolutions/" target="_blank" rel="noopener">Connect with us</a></dd></div>
          <div><dt>Instagram</dt><dd><a href="https://instagram.com/loveunited.solutions" target="_blank" rel="noopener">@loveunited.solutions</a></dd></div>
        </dl>
      </div>
      <div class="card side-card">
        <h3>Prefer to talk it through?</h3>
        <p>Book a free 30-minute consultation. No prep needed, just bring your questions.</p>
        <a class="btn ghost" href="#book">Pick a time below</a>
      </div>
      <p class="side-note">Proudly minority-owned and values-led.</p>
    </aside>
  </div>
</section>
<section id="book" style="padding-top:0">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Free consultation</p>
      <h2>Schedule your free 30-minute consultation</h2>
      <p>We'll learn your goals, your current Salesforce setup, and what's getting in the way. You don't need to prepare anything formal.</p>
    </div>
    <div class="expect">
      <div class="step"><b class="n">01</b><h3>A clear snapshot</h3><p>Key opportunities and risks in your current org or processes.</p></div>
      <div class="step"><b class="n">02</b><h3>Tailored recommendations</h3><p>Practical, platform-aware suggestions shaped to your business, not generic best practices.</p></div>
      <div class="step"><b class="n">03</b><h3>A roadmap preview</h3><p>Next steps, whether that's quick wins, longer-term strategy, or where to start.</p></div>
    </div>
    <div class="card embed-card">
<!-- Motion embed begin -->
<iframe src="https://app.usemotion.com/meet/devo-perez/30-min-consultation" title="Motion Booking Page" width="100%" height="840" frameborder="0"></iframe>
<!-- Motion embed end -->
    </div>
    <p class="after-embed">Need help right away? <a href="https://balo.expert/profile/devo-pm" target="_blank" rel="noopener">Grab time with us within the next 24 hours.</a></p>
  </div>
</section>
