// Get all buttons with the class "custom-button"
const buttons = document.querySelectorAll('.custom-button');

// Add hover effect to buttons
buttons.forEach((button) => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
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