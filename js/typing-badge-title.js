document.addEventListener("DOMContentLoaded", function() {
    const badgeTitles = document.querySelectorAll('.typingeffect'); 
    let typingSpeed = 100; // Speed of typing
    let pauseBetweenBadges = 2000; // Pause between badges when typing completes

    badgeTitles.forEach((badgeTitle, index) => {
      const badgeTitleText = badgeTitle.innerText;
      badgeTitle.innerText = ''; 
      let charIndex = 0;
      let typingDirection = 1; 

      // Start typing effect for each badge
      function typeEffect() {
        if (typingDirection === 1 && charIndex < badgeTitleText.length) {
          badgeTitle.innerText = badgeTitleText.substring(0, charIndex + 1);
          charIndex++;
          setTimeout(typeEffect, typingSpeed);
        } else if (typingDirection === -1 && charIndex > 0) {
          badgeTitle.innerText = badgeTitleText.substring(0, charIndex - 1);
          charIndex--;
          setTimeout(typeEffect, typingSpeed);
        } else {
          // Reverse typing direction once the typing/deleting is done
          typingDirection *= -1;

          // Pause before switching direction
          setTimeout(typeEffect, typingDirection === 1 ? pauseBetweenBadges : 500);
        }
      }

      // Delay starting the typing effect for each badge to create sequential typing
      setTimeout(typeEffect, index * (badgeTitleText.length * typingSpeed + pauseBetweenBadges));
    });
  });

  // QR Code Generation
  const qrCodeCanvas = document.getElementById('qr-code-canvas');

  // Badge details
  const recipientEmail = 'hello.rajat.rajput@gmail.com';
  const issuedDate = 'Jul 28, 2024';
  const badgeLink = `https://ai.mlsc-amity.tech?badge=${recipientEmail}&issued=${issuedDate}`;

  // Create QR code
  const qrCode = new QRious({
    element: qrCodeCanvas,
    size: 200,
    value: `Badge awarded to: ${recipientEmail}\nIssued on: ${issuedDate}\nLink: ${badgeLink}`,
  });

  // Download QR button functionality
  document.getElementById('download-qr-button').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = qrCodeCanvas.toDataURL();
    link.download = 'badge-qr.png';
    link.click();
  });

  function createConfetti() {
    const totalConfetti = 100; // Total number of confetti pieces
    const confettiColors = ['#0d6efd', '#0a58ca', '#007bff', '#6cb2eb', '#81d4fa']; // Blue color palette

    for (let i = 0; i < totalConfetti; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');

      // Assign random sizes, colors, and positions for confetti pieces
      const size = Math.random() * 10 + 5 + 'px';
      const leftPosition = Math.random() * 100 + 'vw';
      const animationDuration = Math.random() * 3 + 2 + 's';
      const animationDelay = Math.random() * 2 + 's';
      const color = confettiColors[Math.floor(Math.random() * confettiColors.length)];

      confetti.style.width = size;
      confetti.style.height = size;
      confetti.style.left = leftPosition;
      confetti.style.backgroundColor = color;
      confetti.style.animationDuration = animationDuration;
      confetti.style.animationDelay = animationDelay;

      document.body.appendChild(confetti);

      // Remove confetti from DOM after it falls
      setTimeout(() => {
        confetti.remove();
      }, parseFloat(animationDuration) * 1000); // Convert animation duration from seconds to milliseconds
    }
  }

  function getRandomColor() {
    // Blue color palette for confetti
    const colorsBlu = ['#0d6efd', '#0a58ca', '#007bff', '#6cb2eb', '#81d4fa'];
    return colorsBlu[Math.floor(Math.random() * colorsBlu.length)];
  }

  // Trigger the confetti on page load
  window.addEventListener('load', () => {
    createConfetti();
  });

  // Search bar functionality
  const searchInput = document.getElementById('badge-search');
  const searchButton = document.getElementById('search-button');
  const badges = document.querySelectorAll('.badge-item');

  function filterBadges() {
    const searchQuery = searchInput.value.toLowerCase();

  badges.forEach(badge => {
    const badgeTitle = badge.querySelector('.badge-details h2').innerText.toLowerCase();
    
    if (badgeTitle.includes(searchQuery)) {
      badge.style.display = 'block';  // Show the badge if it matches
    } else {
      badge.style.display = 'none';   // Hide the badge if it doesn't match
    }
  });
}

  // Add event listener for search button click
  searchButton.addEventListener('click', function () {
    filterBadges();  
  });

  searchInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      filterBadges();
    }
  });