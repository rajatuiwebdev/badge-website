const badgeTitle = document.getElementById('typingeffect');
const badgeTitleText = badgeTitle.innerText; 
badgeTitle.innerText = '';  
let index = 0;
let typingSpeed = 100; 
let isTyping = true; 

function typeEffect() {
    if (isTyping) {
        if (index < badgeTitleText.length) {
            badgeTitle.innerText = badgeTitleText.substring(0, index + 1);
            index++;
            setTimeout(typeEffect, typingSpeed);
        } else {
            isTyping = false;
            setTimeout(typeEffect, 2000); 
        }
    } else {
        if (index > 0) {
            badgeTitle.innerText = badgeTitleText.substring(0, index - 1);
            index--;
            setTimeout(typeEffect, typingSpeed); 
        } else {
            isTyping = true;
            setTimeout(typeEffect, 500);
        }
    }
}

window.onload = typeEffect; 

function createConfetti() {
    const totalDuration = 5000; // 5 seconds in milliseconds
    const intervalTime = 100; // Time in milliseconds to create a new confetti
    const totalConfetti = (totalDuration / intervalTime) * 3; // Total confetti to be created in 5 seconds

    let count = 0;
    const intervalId = setInterval(() => {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.left = `${Math.random() * 100}vw`;

        // Random fall duration for each confetti piece
        const fallDuration = Math.random() * 3 + 1;
        confetti.style.animationDuration = `${fallDuration}s, ${fallDuration * 0.5}s`; // Match fade-out duration

        document.body.appendChild(confetti);

        // Remove confetti after animation ends
        confetti.addEventListener('animationend', () => {
            confetti.remove();
        });

        count++;
        if (count >= totalConfetti) {
            clearInterval(intervalId); // Stop after creating confetti for 5 seconds
        }
    }, intervalTime);
}

function getRandomColor() {
    // Blue color palette
    const colorsBlu = [
        '#0d6efd',
        '#0a58ca',
        '#007bff',
        '#6cb2eb',
        '#81d4fa',
    ];

    return colorsBlu[Math.floor(Math.random() * colorsBlu.length)];
}

window.addEventListener('load', () => {
    createConfetti();
});

// Theme toggle functionality
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Initialize theme toggle button state
const isDarkTheme = body.classList.contains('dark-theme');
themeToggleButton.innerHTML = isDarkTheme 
    ? '<i class="fas fa-moon"></i>' 
    : '<i class="fas fa-sun"></i>';

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
