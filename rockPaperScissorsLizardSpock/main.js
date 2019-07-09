const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
    player: 0,
    computer: 0
}

// play game
function play(e) {
    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, computerChoice);
    console.log(playerChoice, computerChoice);
    console.log(winner);
}

// computer choice

function getComputerChoice() {
    const rand = Math.random();
    if (rand < 0.2) {
        return 'rock';
    } else if (rand <= 0.4) {
        return 'spock';
    } else if (rand <= 0.6) {
        return 'paper';
    } else if (rand <= 0.8) {
        return 'lizard';
    } else {
        return 'scissors';
    }
}

// get winner
function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'draw';
    } else if (playerChoice === 'rock') {
        if (computerChoice === 'scissors' || computerChoice === 'lizard') {
            return 'player';
        } else {
            return 'computer';
        }
    } else if (playerChoice === 'spock') {
        if (computerChoice === 'scissors' || computerChoice === 'rock') {
            return 'player';
        } else {
            return 'computer';
        }
    } else if (playerChoice === 'paper') {
        if (computerChoice === 'rock' || computerChoice === 'spock') {
            return 'player';
        } else {
            return 'computer';
        }
    } else if (playerChoice === 'lizard') {
        if (computerChoice === 'spock' || computerChoice === 'paper') {
            return 'player';
        } else {
            return 'computer';
        }
    } else if (playerChoice === 'scissors') {
        if (computerChoice === 'lizard' || computerChoice === 'paper') {
            return 'player';
        } else {
            return 'computer';
        }
    }
}

function showWinner(winner, computerChoice) {
    if (winner === 'player') {
        scoreboard.player++;
        result.innerHTML = `<h1 class="text-win">You Win!</h1>
            <i class="far fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer chose ${computerChoice}</p>`;
    } else if (winner === 'computer') {
        scoreboard.computer++;
        result.innerHTML = `<h1 class="text-lose">You Lose!</h1>
            <i class="far fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer chose ${computerChoice}</p>`;
    } else {
        result.innerHTML = `<h1>It's a Draw</h1>
            <i class="far fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer chose ${computerChoice}</p>`;
    }

    score.innerHTML = `<p>Player: ${scoreboard.player}</p>
        <p>Computer: ${scoreboard.computer}</p>`;

    modal.style.display = 'block';
}

// restart game

function restartGame() {
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `<p>Player: 0</p>
        <p>Computer: 0</p>`
}
// clear modal

function clearModal(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}
// event listeners
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);