
//Seleccionamos los elementos del DOM por id/clase
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

// Evitamos que el formulario se envie y mostramos el numero a adivinar por consola 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('numero a adivinar' + number);
    attemptCounter.textContent = `Nro. de Intento: ${attempts}`;
})
// Al rendirse se muestra el numero a adivinar y se limpia el input
ffButton.addEventListener('click', () => {
    if (!number) {
        errMsg.textContent = 'Tenés que presionar el boton de iniciar antes de rendirte.';
        return;
    }
    result.textContent = `El numero era el ${number}. Intentalo nuevamente!!`;
});
// Al iniciar el juego seteamos el numero a adivinar, los intentos a 0 y limpia el input
startButton.addEventListener('click', () => {
    if (number) {
        errMsg.textContent = 'Tenés que presionar el boton de rendirte antes de iniciar un juego nuevo.';
        return;
    }
    input.removeAttribute('disabled');
    guessButton.removeAttribute('disabled');
    ffButton.removeAttribute('disabled');
    number = Math.floor(Math.random() * 100)
    attempts = 0;
    attemptCounter.textContent = `Nro. de Intento: ${attempts}`;
    input.value = '';
});
// Al adivinar el numero, se incrementa el contador de intentos y se compara el numero a adivinar con el ingresado
// Se muestra un mensaje de acuerdo al resultado
guessButton.addEventListener('click', () => {
    if (!number) {
        errMsg.textContent = 'Tenés que presionar el boton de jugar antes de adivinar.';
        return;
    }
    attempts++;
    attemptCounter.textContent = `Nro. de Intento: ${attempts}`;
    if (number === parseInt(input.value)) {
        result.textContent = `Felicidades! Adivinaste el numero en ${attempts} intentos.`;
        input.setAttribute('disabled', '');
        guessButton.setAttribute('disabled', '');
        ffButton.setAttribute('disabled', '');
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
