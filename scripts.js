// Toggle mobile menu
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Simple contact form submission simulation
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    formMessage.style.color = 'red';
    formMessage.textContent = 'Please fill in all fields.';
    return;
  }

  // Simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formMessage.style.color = 'red';
    formMessage.textContent = 'Please enter a valid email address.';
    return;
  }

  // Simulate successful submission
  formMessage.style.color = 'green';
  formMessage.textContent = 'Thank you for your message! I will get back to you soon.';

  form.reset();
});
