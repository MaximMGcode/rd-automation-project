//  Game paper, rock, scissors simple version
function GetGameResult(userPoint, botPoint) {
    const paper = 0;
    const scissors = 1;
    const rock = 2;

    let gameResult = '';

    if (userPoint === paper && botPoint === rock) {
        gameResult = 'You win!';
    } else if (userPoint === scissors && botPoint === paper) {
        gameResult = 'You win!';
    } else if (userPoint === rock && botPoint === scissors) {
        gameResult = 'You win!';
    } else if (userPoint === botPoint) {
        gameResult = 'Draw =>...<=';
    } else {
        gameResult = 'You lose...';
    }

    return gameResult;
}

// User = paper and  bot = rock, - boot lose
const gameResult1 = GetGameResult(0, 2);
console.log(gameResult1);

// User = scissors and  bot = paper, - boot lose
const gameResult2 = GetGameResult(1, 0);
console.log(gameResult2);

// User = rock and  bot = scissors, - boot lose
const gameResult3 = GetGameResult(2, 1);
console.log(gameResult3);

// User = rock and  bot = paper, - user lose
const gameResult4 = GetGameResult(2, 0);
console.log(gameResult4);

// User = rock and  bot = rock, - Draw
const gameResult5 = GetGameResult(2, 2);
console.log(gameResult5);
