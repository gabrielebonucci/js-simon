// costanti

const numbersCount = 5;
const secondsToMemorize =5;

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
    const newNumber = getRandomNumber(1,50);
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
countdownElement.textContent = `Hai ${secondsToMemorize} secondi per memorizzare!`;

// FASE 2: TIMER

setTimeout(() => {
    //nascondo i numeri
    numbersListElement.classList.add('d-none');
    //mostro il form
    formElement.classList.remove('d-none');
    countdownElement.textContent = 'Inserisci i numeri che ricordi';

},  secondsToMemorize * 1000); // Converti i secondi in millisecondi

 // verifica e risultato
formElement.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); // Evita che la pagina si ricarichi

  // Leggo gli input dell'utente
  const inputElements = formElement.querySelectorAll('input[type="number"]');
  const userNumbers = [];
  for (let input of inputElements) {
    userNumbers.push(parseInt(input.value));
  }

  const correctGuesses = [];
  for (let userNum of userNumbers) {
    if (randomNumbers.includes(userNum) && !correctGuesses.includes(userNum)) {
      correctGuesses.push(userNum);
    }

  }

  //mostra risultato finale

  const score = correctGuesses.length;

  if (score === 0) {
        messageElement.textContent = 'Nessun numero indovinato.';
  } else {
        messageElement.textContent = `Hai indovinato ${score} numeri: ${correctGuesses.join(', ')}.`;

  }
  // Nascondi il pulsante dopo l'invio
  formElement.querySelector('button').style.display = 'none';
  console.log("Ciao! Lo script è stato caricato correttamente.");

}