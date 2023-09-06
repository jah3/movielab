// Get references to the button and select element
const mobileNavButton = document.getElementById("mobileNavButton");
const mobileNavSelect = document.getElementById("mobileNavSelect");

// Toggle the select element's visibility when the button is clicked
mobileNavButton.addEventListener("click", () => {
  mobileNavSelect.classList.toggle("open");
});

// Handle selecting an option from the dropdown (optional)
mobileNavSelect.addEventListener("change", () => {
  // You can add logic here to navigate to the selected category or perform other actions
});
