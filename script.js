// Array of image URLs
const imagesWithLinks = [
    { src: 'images/fauna1.webp', link: 'https://virtualyoutuber.fandom.com/wiki/Ceres_Fauna/Gallery' },
    { src: 'images/fauna2.webp', link: 'https://virtualyoutuber.fandom.com/wiki/Ceres_Fauna/Gallery' },
    { src: 'images/fauna3.webp', link: 'https://virtualyoutuber.fandom.com/wiki/Ceres_Fauna/Gallery' },
    { src: 'images/fauna4.webp', link: 'https://virtualyoutuber.fandom.com/wiki/Ceres_Fauna/Gallery' },
    { src: 'images/fauna5.webp', link: 'https://virtualyoutuber.fandom.com/wiki/Ceres_Fauna/Gallery' },
    { src: 'images/fauna6.webp', link: 'https://virtualyoutuber.fandom.com/wiki/Ceres_Fauna/Gallery' }
];


// { src: 'images/fauna.webp', link: 'link' }, 


function displayRandomImage() {
    const randomIndex = Math.floor(Math.random() * imagesWithLinks.length);
    const randomImage = imagesWithLinks[randomIndex];

    const imageElement = document.getElementById('randomImage');
    const imageLink = document.getElementById('imageLink');

    // Set the image source
    imageElement.src = randomImage.src;
    
    // Set the href of the link to match the image's link
    imageLink.href = randomImage.link;
}

// Call the function when the page loads
window.onload = displayRandomImage;
