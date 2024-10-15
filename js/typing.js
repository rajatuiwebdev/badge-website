const badgeTitle = document.getElementById('typingeffect');
const badgeTitleText = badgeTitle.innerText; 
badgeTitle.innerText = '';  
let index = 0;
let typingSpeed = 100; 
let start = true; 

function typeEffect() {
    if (start) {
        if (index < badgeTitleText.length) {
            badgeTitle.innerText = badgeTitleText.substring(0, index+1);
            index++;
            setTimeout(typeEffect, typingSpeed);
        } else {
            start = false;
            setTimeout(typeEffect, 2000); 
        }
    } else {
        if (index > 0) {
            badgeTitle.innerText = badgeTitleText.substring(0, index - 1);
            index--;
            setTimeout(typeEffect, typingSpeed); 
        } else {
            start = true;
            setTimeout(typeEffect, 500);
        }
    }
}

window.onload = typeEffect; 

function createConfetti() {
    const confettiContainer = document.createDocumentFragment();
    const totalDuration = 5000; // 10 seconds in milliseconds
    const intervalTime = 100; // Time in milliseconds to create a new confetti
    const totalConfetti = (totalDuration / intervalTime) * 3; // Total confetti to be created in 10 seconds

    let count = 0;
    const intervalId = setInterval(() => {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.left = `${Math.random() * 100}vw`;

        // Random fall duration for each confetti piece
        const fallDuration = Math.random() * 3 + 1;
        confetti.style.animationDuration = `${fallDuration}s, ${fallDuration * 0.5}s`; // Match fade-out duration

        confettiContainer.appendChild(confetti);
        document.body.appendChild(confetti);

        count++;
        if (count >= totalConfetti) {
            clearInterval(intervalId); // Stop after creating confetti for 10 seconds
        }
    }, intervalTime);
}

function getRandomColor() {
    // Red color palette
    const colorsRed = [
        '#ff0a54',
        '#ff477e',
        '#ff7096',
        '#ff85a1',
        '#fbb1bd',
    ];
    // Blue color palette
    const colorsBlu = [
        '#0d6efd',
        '#0a58ca',
        '#007bff',
        '#6cb2eb',
        '#81d4fa',
    ];

    // populating confetti with blue color
    return colorsBlu[Math.floor(Math.random() * colorsBlu.length)];
}

window.addEventListener('load', () => {
    createConfetti();
});

// Theme toggle functionality
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const isDarkTheme = body.classList.contains('dark-theme');
    themeToggleButton.innerHTML = isDarkTheme 
        ? '<i class="fas fa-moon"></i>' 
        : '<i class="fas fa-sun"></i>';
});

document.addEventListener("DOMContentLoaded", function() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
});

function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex'; // Show the sidebar
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none'; // Hide the sidebar
}

