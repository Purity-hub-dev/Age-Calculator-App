const Images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg",
    "images/image6.jpg",
    "images/image7.jpg"
];
const imageContainer = document.getElementById('random-image');

function getRandomImage(){
    const randomIndex = Math.floor(Math.random() * Images.length);
    const randomImage = Images[randomIndex];
    imageContainer.src = randomImage
}
getRandomImage()

setInterval(getRandomImage, 2000);
