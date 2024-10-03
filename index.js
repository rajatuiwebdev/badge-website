// Share on Twitter
document.getElementById("share-twitter").addEventListener("click", function () {
    const text = encodeURIComponent("Check out this awesome badge I earned!");
    const url = encodeURIComponent(window.location.href); // Share page URL
    const imageUrl = encodeURIComponent("https://ai.mlsc-amity.tech/dist/imgdb/newcomer.png"); 
    const twitterUrl = `https://twitter.com/intent/tweet?text=${text}&url=${imageUrl}`;
    
    window.open(twitterUrl, "_blank"); // Open in new tab
  });
  
  // Share on LinkedIn
  document.getElementById("share-linkedin").addEventListener("click", function () {
    const url = encodeURIComponent(window.location.href);
    const imageUrl = encodeURIComponent("https://ai.mlsc-amity.tech/dist/imgdb/newcomer.png"); 
    const linkedInUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${imageUrl}&title=Check out this badge!&summary=Earned a badge in the Season of AI!`;
    
    window.open(linkedInUrl, "_blank"); // Open in new tab
  });
  
  // Share on WhatsApp
  document.getElementById("share-whatsapp").addEventListener("click", function () {
    const msg = encodeURIComponent("Hey, I earned this awesome badge!");
    const imageUrl = encodeURIComponent("https://ai.mlsc-amity.tech/dist/imgdb/newcomer.png"); // Badge image URL
    const WhatsAppUrl = `https://api.whatsapp.com/send?text=${msg}%20${imageUrl}`;
    
    window.open(WhatsAppUrl, "_blank"); // Open in new tab
  });
  
  