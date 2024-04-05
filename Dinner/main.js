// let imageItems = document.querySelectorAll('.imageItem');
let imageItem = document.getElementById('grid1');
// Function to handle hover for each .one element
function hover() {
    // Access the specific .one element being hovered over
    // let imageItem = event.target;

    // Change the gridTemplateColumns property for the hovered .one element
    imageItem.style.gridTemplateColumns = 'repeat(10, 2fr)';
}

// Add hover event listener to each .one element
// imageItems.forEach(imageItem => {
//     imageItem.addEventListener('mouseenter', hover);
// });

// imageItem.addEventListener('mouseenter', hover);
