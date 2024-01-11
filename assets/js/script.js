// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    runGame('addition');
});
/**
 * The main game 'loop' called when the game is first loaded
 * and after the users answer has been processed
 */
function runGame(gameType) {

    // Create two random numbers between 1 and 25
    num1 = Math.floor(Math.random() * 25) + 1;
    num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === 'addition') {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown gametype: ${gameType}`);
        throw `Unknown gametype: ${gameType}, aborting!!`;
    }
}

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert('You got it right! :)');
    } else {
        alert(`Unlucky, you answered ${userAnswer}, the correct answer was ${calculatedAnswer[0]}`);
    }

    runGame(calculatedAnswer[1]);
}
/**
 * This function add operand1 and operand2 (the numbers) together
 * and produces a result of the correct answer
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === '+') {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`unimplemented operator ${operator}`);
        throw `unimplemented operator ${operator}`;
    }
}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}