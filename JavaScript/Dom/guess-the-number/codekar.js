
let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = []
let numGuess = 1

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    // checks if value lies between 1 and 100 and check validation of guess value
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }
    else if(guess < 1){
        alert('Please enter a number more than 1');
    }
    else if(guess > 100){
        alert('Please enter a number less than 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 10){
            displayGuess(guess)
            displayMessage(`Game Over, Random Number was ${randomNum}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    // check guess value that it's matches to random value or not
    if(guess === randomNum){
        displayMessage("You guessed it right")
        endGame();
    }else if (guess < randomNum){
        displayMessage("number is too low");
    }
    else if (guess > randomNum){
        displayMessage("number is too high");
    }
}

function displayGuess(guess){
    // cleanup method
    // clean guess, update guess
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `; 
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
// Interact with DOM
    lowOrHi.innerHTML = `<h2>${message}<h2/>`
}

function endGame(guess){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame"><button>Start new Game</button></h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame();
}

function newGame(guess){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNum = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame(true)
        
    })
}