// Select the forms and error message elements
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginError = document.getElementById('login-error');
const signupError = document.getElementById('signup-error');

// Define a function to validate the login form
function validateLoginForm(event) {
  event.preventDefault();
  const username = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value.trim();

  // Check if the username and password are not empty
  if (username === '' || password === '') {
    loginError.textContent = 'Please enter both username and password.';
    return;
  }

  // Simulate a successful login (replace with actual login logic)
  console.log('Login successful!');
  loginError.textContent = '';
}

// Define a function to validate the signup form
function validateSignupForm(event) {
  event.preventDefault();
  const username = document.getElementById('signup-username').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const password = document.getElementById('signup-password').value.trim();
  const confirmPassword = document.getElementById('signup-confirm-password').value.trim();

  // Check if all fields are not empty
  if (username === '' || email === '' || password === '' || confirmPassword === '') {
    signupError.textContent = 'Please fill out all fields.';
    return;
  }

  // Check if the password and confirm password match
  if (password !== confirmPassword) {
    signupError.textContent = 'Passwords do not match.';
    return;
  }

  // Simulate a successful signup (replace with actual signup logic)
  console.log('Signup successful!');
  signupError.textContent = '';
}

// Add event listeners to the forms
loginForm.addEventListener('submit', validateLoginForm);
signupForm.addEventListener('submit', validateSignupForm);