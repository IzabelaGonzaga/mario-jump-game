const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500)
}

const gameOver = () => {
    let tryAgainButton = document.createElement('button');
    tryAgainButton.innerHTML = 'TRY AGAIN';
    tryAgainButton.style = 'font-size: 14px; width: fit-content; padding: 12px; border: none; border-radius: 4px;';

    tryAgainButton.addEventListener('click', () => {
        location.reload();
    });

    let gameOverMessage = document.createElement('h2');
    gameOverMessage.innerHTML = 'GAME OVER';
    gameOverMessage.style = 'padding-bottom: 24px;'

    let newDiv = document.createElement('div');
    newDiv.style = 'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); display: flex; flex-wrap: wrap; flex-direction: column; align-items: center;'
    newDiv.appendChild(gameOverMessage);
    newDiv.appendChild(tryAgainButton);

    document.body.appendChild(newDiv);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if(pipePosition<=120 && pipePosition>0 && marioPosition<80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = '../images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        gameOver();

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);