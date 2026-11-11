'use strict';

const form = document.querySelector('#contact-form');
if (form) {
  // Keep native validation as a fallback if this script cannot load.
  form.noValidate = true;
  const reviewButton = document.querySelector('#review-message');
  reviewButton.disabled = false;
  const summary = document.querySelector('#error-summary');
  const preview = document.querySelector('#draft-preview');
  const emailDraft = document.querySelector('#email-draft');
  const fields = [
    { input: form.elements.name, error: 'name-error', label: 'Full name', message: 'Enter your full name.' },
    { input: form.elements.email, error: 'email-error', label: 'Email address', message: 'Enter your email address.' },
    { input: form.elements.subject, error: 'subject-error', label: 'Subject', message: 'Enter a subject.' },
    { input: form.elements.message, error: 'message-error', label: 'Message', message: 'Enter a message.' }
  ];
  let attempted = false;

  function validate(field) {
    const input = field.input;
    let message = input.value.trim() ? '' : field.message;
    if (!message && input.validity.typeMismatch) {
      message = 'Enter an email address in the format name@example.com.';
    }
    if (!message && input.validity.tooLong) {
      message = `Keep this field within ${input.maxLength} characters.`;
    }
    const error = document.getElementById(field.error);
    error.textContent = message ? `Error: ${message}` : '';
    error.hidden = !message;
    if (message) input.setAttribute('aria-invalid', 'true');
    else input.removeAttribute('aria-invalid');
    return message;
  }

  function showErrors(errors) {
    summary.replaceChildren();
    summary.hidden = !errors.length;
    if (!errors.length) return;

    const heading = document.createElement('h3');
    heading.textContent = `Please correct ${errors.length} ${errors.length === 1 ? 'field' : 'fields'}`;
    const list = document.createElement('ul');
    errors.forEach(({ field, message }) => {
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.href = `#${field.input.id}`;
      link.textContent = `${field.label}: ${message}`;
      link.addEventListener('click', (event) => {
        event.preventDefault();
        field.input.focus();
      });
      item.append(link);
      list.append(item);
    });
    summary.append(heading, list);
  }

  function errorsNow() {
    return fields
      .map(field => ({ field, message: validate(field) }))
      .filter(error => error.message);
  }

  fields.forEach(field => field.input.addEventListener('input', () => {
    // Any edit invalidates the old draft so stale content can never be sent.
    preview.hidden = true;
    emailDraft.removeAttribute('href');
    if (attempted) showErrors(errorsNow());
  }));

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    attempted = true;
    preview.hidden = true;
    const errors = errorsNow();
    showErrors(errors);
    if (errors.length) {
      summary.focus();
      return;
    }

    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const subject = form.elements.subject.value.trim();
    const message = form.elements.message.value.trim();
    const body = `From: ${name}\nReply email: ${email}\n\n${message}`;
    document.querySelector('#draft-text').textContent = `Subject: ${subject}\n\n${body}`;
    emailDraft.href = `mailto:balgassimu@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    preview.hidden = false;
    preview.focus();
  });
}
