const badgeList = [
    {
      imageUrl: "https://ai.mlsc-amity.tech/dist/imgdb/newcomer.png",
      title: "Season of AI | Beginner AI Learner",
      awardedTo: "hello.rajat.rajput@gmail.com",
      issuedOn: "Jul 28, 2024",
      issuedAt: "1:11 AM",
      downloadLink: "assets/images/badge.png",
    },
    {
      imageUrl: "https://ai.mlsc-amity.tech/dist/imgdb/newcomer.png",
      title: "Season of AI | Intermediate AI Learner",
      awardedTo: "example.user@example.com",
      issuedOn: "Sep 17, 2024",
      issuedAt: "3:55 PM",
      downloadLink: "assets/images/badge.png",
    },
    {
      imageUrl: "https://ai.mlsc-amity.tech/dist/imgdb/newcomer.png",
      title: "Season of AI | Advance AI Learner",
      awardedTo: "example.user@example.com",
      issuedOn: "dec 17, 2024",
      issuedAt: "8:55 PM",
      downloadLink: "assets/images/badge.png",
    }
  ];

  const slider = document.getElementById('badge-slider');

  badgeList.forEach((badge) => {
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
          <a id="download-qr-button" class="download-button">Download QR Code</a>
          <canvas id="qr-code-canvas" style="display: none;"></canvas>
        </div>
        <div class="download-card">
          <a download href="${badge.downloadLink}" class="download-button">Download Badge</a>
        </div>
        <div class="share-section">
          <p>Share your badge:</p>
          <a href="https://x.com/intent/tweet?text=I%20earned%20the%20${badge.title}%20Badge!%20Check%20it%20out:%20https://ai.mlsc-amity.tech%20&hashtags=AI,Badge" target="_blank" class="share-button twitter">
            <i class="fa-brands fa-square-x-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://ai.mlsc-amity.tech&title=${badge.title}&summary=I%20earned%20the%20${badge.title}%20Badge!%20Check%20it%20out:" target="_blank" class="share-button linkedin">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=https://ai.mlsc-amity.tech" target="_blank" class="share-button facebook">
            <i class="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
    `;

    slider.appendChild(slide);
  });

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