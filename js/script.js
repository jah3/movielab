// Get a reference to the search input field
const searchInput = document.getElementById("search-input");

// Add an event listener to the search input
searchInput.addEventListener("input", function () {
  // Get the value of the search input
  const searchValue = this.value.toLowerCase();

  // Get references to all card elements
  const cardElements = document.querySelectorAll(".card");

  // Loop through all card elements
  cardElements.forEach(function (card) {
    // Get the title text within each card (you can modify this based on your actual HTML structure)
    const title = card.querySelector("h2").textContent.toLowerCase();

    // Check if the title contains the search value
    if (title.includes(searchValue)) {
      // Show the card if it matches the search
      card.style.display = "block";
    } else {
      // Hide the card if it doesn't match the search
      card.style.display = "none";
    }
  });
});

// Get references to the button and the pop-up
const loginBtn = document.getElementById("loginBtn");
const loginPopup = document.getElementById("loginPopup");
const closePopup = document.getElementById("closePopup");
const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage"); // Error message element

// Open the pop-up when the button is clicked
loginBtn.addEventListener("click", () => {
  loginPopup.style.display = "block";
});

// Close the pop-up when the close button is clicked
closePopup.addEventListener("click", () => {
  loginPopup.style.display = "none";
});

// Close the pop-up if the user clicks outside of it
window.addEventListener("click", (event) => {
  if (event.target === loginPopup) {
    loginPopup.style.display = "none";
  }
});

// Add an event listener to the login form
loginForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the default form submission

  // Get the values entered in the username and password fields
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Check if the entered username and password are "admin"
  if (username === "admin" && password === "admin") {
    // Redirect to movie.html
    window.location.href = "movie-page.html";
  } else {
    // Display an error message in red
    errorMessage.textContent =
      "Invalid username or password. Please try again.";
  }
});
