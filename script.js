let canvas = document.getElementById("snake"); //elemento que roda o jogo
let context = canvas.getContext("2d");
let box = 36;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = 'right';

function criarBG() {
    context.fillStyle = '#242424';
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarcobrinha() {
    for(i = 0; i < snake.length; i++){
        context.fillStyle = "darkgray";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function StartGame() {
    criarBG();
    criarcobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == 'right') snakeX += box;
    if(direction == 'left') snakeY -= box;
    if(direction == 'up') snakeY += box;
    if(direction == 'down') snakeX -= box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(StartGame, 100);