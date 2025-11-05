const inputElement = document.getElementById('myInput');
const outputElement = document.getElementById('output');
const buttonElement = document.getElementById('myButton');

buttonElement.addEventListener('click', () => {
    const inputValue = inputElement.value;
    outputElement.textContent = inputValue;
});
