// Get all claim buttons and popup elements
const claimButtons = document.querySelectorAll('.claim-btn');
const popupOverlay = document.querySelector('.popup-overlay');
const closeBtn = document.querySelector('.close-btn');

// Add click event to each claim button
claimButtons.forEach(button => {
  button.addEventListener('click', () => {
    popupOverlay.style.display = 'flex';
  });
});

// Close popup when close button is clicked


// Close popup when clicking outside the popup content
popupOverlay.addEventListener('click', (e) => {
  if (e.target === popupOverlay) {
    popupOverlay.style.display = 'none';
  }
});