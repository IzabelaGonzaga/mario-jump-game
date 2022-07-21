const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500)
}

const createButton = () => {
    let tryAgain = document.createElement('button');
    tryAgain.innerHTML = 'TRY AGAIN';
    tryAgain.style = 'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 14px; font-weight: bold; width: fit-content; padding: 4px 8px; border: none; border-radius: 4px;';

    tryAgain.addEventListener('click', () => {
        location.reload();
    })

    document.body.appendChild(tryAgain);
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

        createButton();

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);