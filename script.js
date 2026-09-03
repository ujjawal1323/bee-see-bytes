const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const form = document.getElementById('contactForm');
form?.addEventListener('submit', () => {
  const btn = form.querySelector('button');
  btn.innerHTML = 'Sending...';
  btn.disabled = true;
});

// Keep the contact form usable on a normal static HTML file.
// FormSubmit will ask for a one-time email activation on the first submission.
