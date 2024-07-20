//your JS code here. If required.
// Get references to the select element and the remove button
const colorSelect = document.getElementById('colorSelect');
const removeColorButton = document.getElementById('removeColorButton');

// Add a click event listener to the remove button
removeColorButton.addEventListener('click', () => {
  // Get the selected option from the select element
  const selectedOption = colorSelect.options[colorSelect.selectedIndex];
  
  // Remove the selected option from the select element
  colorSelect.removeChild(selectedOption);
});