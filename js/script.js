// costanti

const numbersCount = 5;
const secondsToMemorize = 30;

let randomNumbers = [];

const numbersListElement = document.getElementById('numbers-list');
const countdownElement = document.getElementById('countdown');
const formElement = document.getElementById('answers-form');
const messageElement = document.getElementById('message');

// --- Funzione per Numeri Casuali ---
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

while (randomNumbers.length < numbersCount) {
    const newNumber = getRandomNumber(1,100);
    if (!randomNumbers.includes(newNumber)) {
        randomNumbers.push(newNumber);
    }
}

console.log('numeri da indovinare',randomNumbers);

// mostra i numeri nell'html

for (let number of randomNumbers) {
    const li = document.createElement('li');
    li.textContent = number;
    numbersListElement.appendChild(li);
}
countdownElement.textContent = `Hai ${SECONDS_TO_MEMORIZE} secondi per memorizzare!`;
