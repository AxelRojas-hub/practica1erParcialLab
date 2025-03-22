let numbersArray = generateArray();
let cardsToggled = [];
let attempts = 0;
let correctAnswers = 0;
let matchesPlayed = 0;

// Funciones para preparar el juego
function generateArray() {
    const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
    const shuffledNumbers = numbers.concat(numbers).sort(() => Math.random() - 0.5);
    return shuffledNumbers;
}
function createGrid(numbersArray) {
    //Crea la grilla y asigna ids a cada div
    const grid = document.querySelector('.game-grid');
    for (let i = 0; i < 20; i++) {
        const div = document.createElement('div');
        div.classList.add('game-card');
        div.setAttribute('id', `${i}`);
        grid.appendChild(div);
    }
}
function checkAnswer(i) {
    //Cuando hay dos cartas dadas vuelta, se chequea si son iguales
    //Si no son iguales, se dan vuelta nuevamente tras 1 segundo
    if (cardsToggled.length === 2) {
        attempts++
        document.getElementById('attempts').textContent = `INTENTOS: ${attempts}`;
        setTimeout(() => {
            if (cardsToggled[0].textContent !== cardsToggled[1].textContent) {
                cardsToggled[0].textContent = '';
                cardsToggled[1].textContent = '';
            } else {
                cardsToggled[0].classList.add('correct');
                cardsToggled[1].classList.add('correct');
                correctAnswers++;
                document.getElementById('correct-answers').textContent = `ACIERTOS: ${correctAnswers}`;
            }
            cardsToggled.length = 0;
        }, 500);
    }
};
//Para iniciar y terminar el juego
function setCardsListeners() {
    //Asigna los números a cada div, basado en el array recibido como parámetro
    const gameCards = document.querySelectorAll('.game-card');
    for (let i = 0; i < gameCards.length; i++) {
        gameCards[i].setAttribute('style', 'cursor:pointer');
        gameCards[i].addEventListener('click', function () {
            console.log(i, 'clicked');

            const gameCards = document.querySelectorAll('.game-card');
            gameCards[i].textContent = numbersArray[i];
            cardsToggled.push(gameCards[i]);
            checkAnswer(i);
        });
    }
}
function removeCardListeners() {
    const gameCards = document.querySelectorAll('.game-card');
    for (let i = 0; i < gameCards.length; i++) {
        gameCards[i].setAttribute('style', 'cursor:not-allowed');
        gameCards[i].removeEventListener('click', checkAnswer(i));
    }
}
function resetMatchInfo() {
    attempts = 0;
    correctAnswers = 0;
    document.getElementById('attempts').textContent = `INTENTOS: ${attempts}`;
    document.getElementById('correct-answers').textContent = `ACIERTOS: ${correctAnswers}`;
}
function main() {
    const endButton = document.getElementById('end-btn');
    const startButton = document.getElementById('start-btn');
    startButton.addEventListener('click', function () {
        matchesPlayed++;
        document.getElementById('matches-played').textContent = `Partida Nro.: ${matchesPlayed}`;
        const gameGrid = document.querySelector('.game-grid');
        gameGrid.innerHTML = '';
        numbersArray = generateArray();
        startButton.innerText = 'En curso';
        createGrid(numbersArray);
        setCardsListeners();
    });
    endButton.addEventListener('click', function () {
        startButton.innerText = 'Iniciar Juego';
        const grid = document.querySelector('.game-grid');
        resetMatchInfo();
        grid.innerHTML = '';
        numbersArray = generateArray();
        createGrid(numbersArray);
        removeCardListeners();
    });
}
main();