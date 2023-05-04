let randomNum = parseInt((Math.random()*100)+1);

const submit = document.querySelector('#sub');
const userInput = document.querySelector('.guessfield');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const startOver = document.querySelector('.result');
const lowOrhi = document.querySelector('.lowOrhi');

const p = document.createElement('p');

let previousGuesses = [];
let numGuesses = 1;
let playGame = true;

if(playGame)
{
    submit.addEventListener('click',function(e)
    {
        e.preventDefualt();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess)
{
    if (isNaN(guess))
    {
        alert('Please Enter a Valid Number');

    } else if (guess < 1)
    {
        alert('Please Enter a number greater that 1!');
    } else if (guess > 100)
    {
        alert('Please enter a number less than a 100!');

    }
    else
    {
        previousGuesses.push(guess);

        if (numGuesses === 11)
        {
            displayGusses(guess);
            displayMessage(`Game over! Number was ${randomNum}`);
            endGame();
        } else
        {
            displayGusses(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess)
{
    if (guess === randomNum)
    {
        displayMessage(`You Guess correct!`);
        endGame();
      } else if (guess < randomNum)
      {
        displayMessage(`Too low! Try aggain!`);

      } else if(guess > randomNum)
      {
        displayMessage(`Too high! Try again!`);
      }
}

function displayGusses(guess)
{
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuesses++;
    remaining.innerHTML = `${11 - numGuesses}` ;
    
}

function displayMessage(message)
{
    lowOrhi.innerHTML = `<h1>${message}</h1>`
}

function endGame()
{
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h1 id="newGame"> Start New Game</h1>`

    startOver.appendChild(p);
    playGame = false;
    newGame();
}
function newGame()
{
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function()
    {
        randomNum = parseInt((Math.random()*100)+ 1);
        previousGuesses = [];
        numGuesses = 1;
        guessSlot.innerHTML = '';
        lowOrhi.innerHTML = '';
        remaining.innerHTML = `${11 - numGuesses} `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
  }