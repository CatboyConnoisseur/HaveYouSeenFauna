// Array of image URLs
const images = [
    'images/fauna1.webp',
    'images/fauna2.webp'
];

// Function to display a random image
function displayRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    
    const imageElement = document.getElementById('randomImage');
    imageElement.src = randomImage;
}

// Call the function when the page loads
window.onload = displayRandomImage;
