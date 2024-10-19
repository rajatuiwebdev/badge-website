// Function to generate unique badge URLs
function generateBadgeURL(badgeId) {
    const baseUrl = "https://ai.mlsc-amity.tech/badge/";
    return `${baseUrl}${badgeId}`;
  }
  
  // Function to copy badge URL to clipboard
  function copyLink(badgeId) {
    const badgeUrl = generateBadgeURL(badgeId);
    navigator.clipboard.writeText(badgeUrl).then(() => {
      alert("Badge URL copied to clipboard!");
    }).catch((error) => {
      console.error("Failed to copy: ", error);
    });
  }
  
  // Event listener for dynamically created badge elements
  document.addEventListener("DOMContentLoaded", function () {
    // Loop through all copy link buttons
    const copyButtons = document.querySelectorAll(".copy-link-btn");
    copyButtons.forEach(button => {
      const badgeId = button.dataset.badgeId;  // Get the badge ID from data attribute
      button.addEventListener("click", function () {
        copyLink(badgeId);  // Call the copyLink function with the specific badge ID
      });
    });
  });
  