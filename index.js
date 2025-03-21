const form = document.getElementById('main-form');
const input = document.querySelector('.game-input');
const startButton = document.getElementById('play-btn');
const guessButton = document.getElementById('guess-btn');
const ffButton = document.getElementById('ff-btn');
const result = document.querySelector('.game-result');
const attemptCounter = document.querySelector('.attempt-counter');
const errMsg = document.querySelector('.err-msg');
let number;
let attempts = 0;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(number);
    console.log(e.target.value);
    attemptCounter.textContent = `Nro. de Intento: ${attempts}`;

})

ffButton.addEventListener('click', () => {
    if (!number) {
        errMsg.textContent = 'Tenés que presionar el boton de iniciar antes de rendirte.';
        return;
    }
    result.textContent = `El numero es el ${number}. Intentalo nuevamente!!`;
});
startButton.addEventListener('click', () => {
    if (number) {
        errMsg.textContent = 'Tenés que presionar el boton de rendirte antes de iniciar un juego nuevo.';
        return;
    }
    number = Math.floor(Math.random() * 100)
    attempts = 0;
    attemptCounter.textContent = `Nro. de Intento: ${attempts}`;
    input.value = '';
});
guessButton.addEventListener('click', () => {
    if (!number) {
        errMsg.textContent = 'Tenés que presionar el boton de jugar antes de adivinar.';
        return;
    }
    attempts++;
    attemptCounter.textContent = `Nro. de Intento: ${attempts}`;
    if (number === parseInt(input.value)) {
        result.textContent = `Felicidades! Adivinaste el numero en ${attempts} intentos.`;
        number = null;
        return;
    }
    if (number > parseInt(input.value)) {
        result.textContent = `Resultado: El numero ${input.value} es menor.`;
        return;
    }
    if (number < parseInt(input.value)) {
        result.textContent = `Resultado: El numero ${parseInt(input.value)} es mayor.`;
        return;
    }
});
