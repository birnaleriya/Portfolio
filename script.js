document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.nav-link');
    const currentLocation = location.href;

    links.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add('active');
        }
    });
});
// Add a random background color to each text box on hover
const textBoxes = document.querySelectorAll('.text-box');

textBoxes.forEach((textBox) => {
    textBox.addEventListener('mouseover', () => {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        textBox.style.backgroundColor = randomColor;
    });

    textBox.addEventListener('mouseout', () => {
        textBox.style.backgroundColor = '#fff';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const logo = document.getElementById('logo');
    // You can add any JavaScript functionality for the logo here.
    console.log('Logo loaded:', logo.src);
});