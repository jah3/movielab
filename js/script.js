// Get a reference to the search input field
const searchInput = document.getElementById('search-input');

// Add an event listener to the search input
searchInput.addEventListener('input', function () {
  // Get the value of the search input
  const searchValue = this.value.toLowerCase();

  // Get references to all card elements
  const cardElements = document.querySelectorAll('.card');

  // Loop through all card elements
  cardElements.forEach(function (card) {
    // Get the title text within each card (you can modify this based on your actual HTML structure)
    const title = card.querySelector('h2').textContent.toLowerCase();

    // Check if the title contains the search value
    if (title.includes(searchValue)) {
      // Show the card if it matches the search
      card.style.display = 'block';
    } else {
      // Hide the card if it doesn't match the search
      card.style.display = 'none';
    }
  });
});


