const toggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Apply saved theme on page load
if (currentTheme) {
  document.body.classList.add(currentTheme);
}

// Toggle theme on button click
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  // Save the user's theme preference in localStorage
  const theme = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
  localStorage.setItem('theme', theme);
});
