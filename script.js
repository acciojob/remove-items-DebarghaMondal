window.onload = function() {
    const colorSelect = document.getElementById('colorSelect');
    const removeColorButton = document.getElementById('removeColorButton');

    removeColorButton.addEventListener('click', () => {
  
        const selectedOption = colorSelect.options[colorSelect.selectedIndex];
  
        colorSelect.removeChild(selectedOption);
    });
}