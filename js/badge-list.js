const slider = document.getElementById('badge-slider');

// Ensure badgeList is defined and has data
if (badgeList && badgeList.length > 0) {
  badgeList.forEach((badge, index) => {
    const slide = document.createElement('div');
    slide.classList.add('badge-slide');

    slide.innerHTML = `
      <div class="badge">
        <img src="${badge.imageUrl}" alt="Badge Image" />
        <div class="badge-details">
          <h2 class="typingeffect">${badge.title}</h2>
          <p>Awarded to: <strong>${badge.awardedTo}</strong></p>
          <p>Issued on: <strong>${badge.issuedOn}</strong> at <strong>${badge.issuedAt}</strong></p>
        </div>
        <div class="qr-download-card">
          <a id="download-qr-button-${index}" class="download-button">Download QR Code</a>
          <canvas id="qr-code-canvas-${index}" style="display: none;"></canvas>
        </div>
        <div class="download-card">
          <a download href="${badge.downloadLink}" class="download-button">Download Badge</a>
        </div>
        <div class="share-section">
          <p>Share your badge:</p>
          <a href="https://x.com/intent/tweet?text=I%20earned%20the%20${badge.title}%20Badge!%20Check%20it%20out:%20https://ai.mlsc-amity.tech%20&hashtags=AI,Badge" target="_blank" class="share-button twitter" aria-label="Share on Twitter">
            <i class="fa-brands fa-square-x-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://ai.mlsc-amity.tech&title=${badge.title}&summary=I%20earned%20the%20${badge.title}%20Badge!%20Check%20it%20out:" target="_blank" class="share-button linkedin" aria-label="Share on LinkedIn">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=https://ai.mlsc-amity.tech" target="_blank" class="share-button facebook" aria-label="Share on Facebook">
            <i class="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
    `;

    slider.appendChild(slide);

    // Add event listener for QR code download button
    const qrButton = document.getElementById(`download-qr-button-${index}`);
    qrButton.addEventListener('click', () => {
      // Implement QR code generation and download logic here
      console.log(`Downloading QR Code for ${badge.title}`);
    });
  });
}

let currentIndex = 0;

document.getElementById('next-btn').addEventListener('click', () => {
  if (currentIndex < badgeList.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSliderPosition();
});

document.getElementById('prev-btn').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = badgeList.length - 1;
  }
  updateSliderPosition();
});

function updateSliderPosition() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}
