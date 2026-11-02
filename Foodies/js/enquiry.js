document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('enquiryForm');
  if (!form) return;
  const result = document.getElementById('enquiryResult');
  const button = form.querySelector('button[type="submit"]');
  const replies = {
    recipe: 'Thank you for your recipe enquiry. Browse our Recipes page for current ideas. If you need help with a particular dish, our team can follow up using the contact details you supplied.',
    service: 'Thank you for your interest in Foodies. We are a recipe-inspiration website and do not currently offer paid catering or cooking services. Our team can follow up about your question.',
    sponsor: 'Thank you for considering a partnership with Foodies. Your proposal has been submitted for the team to review.',
    volunteer: 'Thank you for your interest in volunteering. Foodies does not currently have a formal volunteer programme, but the team can review your suggestion.'
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) {
      result.textContent = 'Please correct the highlighted fields and try again.';
      return;
    }
    const values = new FormData(form);
    const name = String(values.get('name') || '').trim();
    const type = String(values.get('type') || '');
    if (name.length < 2 || String(values.get('details') || '').trim().length < 10) {
      result.textContent = 'Please provide your name and at least 10 characters of detail.';
      return;
    }
    if (values.get('bot-field')) return;

    button.disabled = true;
    button.textContent = 'Submitting…';
    result.textContent = 'Submitting your enquiry…';
    try {
      // Netlify detects this form at deploy time. The URL-encoded POST is the
      // documented Netlify Forms AJAX pattern for static sites.
      const body = new URLSearchParams();
      for (const [key, value] of values.entries()) body.append(key, value);
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString()
      });
      if (!response.ok) throw new Error('Form endpoint unavailable');
      result.textContent = `Thank you, ${name}. ${replies[type] || 'Your enquiry has been received.'} Your enquiry has been submitted.`;
      form.reset();
    } catch (error) {
      result.textContent = 'Your details passed browser validation, but the form service did not accept the submission. Please deploy this site on Netlify with Forms enabled, or email foodies_2026@gmail.com through the Contact page.';
    } finally {
      button.disabled = false;
      button.textContent = 'Check enquiry';
      result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
});
