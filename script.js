document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // You can replace this section with your desired backend logic to handle the form submission, e.g., sending an email, saving to a database, etc.
  // For this example, we'll just display a message indicating the form was submitted successfully.
  const statusMessage = document.getElementById('statusMessage');
  statusMessage.textContent = `Thank you, ${name}! Your message has been sent.`;

  // Optional: Clear the form fields after submission.
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
}
