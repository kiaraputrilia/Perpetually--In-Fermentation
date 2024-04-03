const images = document.querySelectorAll('.gallery-image');
let currentIndex = 0; // Starting image index
let isMobile = window.matchMedia("(max-width: 768px)").matches; // Check if it's a mobile device initially
let debounceDelay = 900; // Delay for debouncing in milliseconds
let lastScrollTime = Date.now(); // Timestamp of the last scroll event

window.addEventListener('wheel', function(event) {
    event.preventDefault(); // Prevent default scrolling behavior
    
    const currentTime = Date.now();
    const timeDiff = currentTime - lastScrollTime;

    if (timeDiff < debounceDelay) {
        // If a scroll event occurs within the debounce delay, ignore it
        return;
    }

    lastScrollTime = currentTime; // Update the last scroll time

    if (isMobile) {
        // Mobile devices: Invert scrolling direction
        if (event.deltaY < 0) {
            // Scrolling up (next image)
            currentIndex = (currentIndex - 1 + images.length) % images.length;
        } else {
            // Scrolling down (next image)
            currentIndex = (currentIndex + 1) % images.length;
        }
    } else {
        // Larger screens: Check horizontal scrolling
        if (event.deltaX < 0) {
            // Scrolling left (previous image)
            currentIndex = (currentIndex - 1 + images.length) % images.length;
        } else {
            // Scrolling right (next image)
            currentIndex = (currentIndex + 1) % images.length;
        }
    }

    showImage(currentIndex);
});

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

// Add event listener for window resize to update isMobile variable
window.addEventListener('resize', function() {
    isMobile = window.matchMedia("(max-width: 768px)").matches;
});
