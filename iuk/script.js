document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'img/backdrop1.png',
        'img/backdrop2.png',
        'img/backdrop3.png',
        'img/backdrop4.png',
        'img/backdrop5.png'
        // add more images as needed
    ];
    
    let currentIndex = 0;
    const backdrop = document.querySelector('.backdrop');

    function changeBackgroundImage() {
        backdrop.style.backgroundImage = `url(${images[currentIndex]})`;
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(changeBackgroundImage, 5000); // Change image every 5 seconds
});
