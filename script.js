const dino = document.getElementById('dino');
const rock = document.getElementById('rock');
const score = document.getElementById('score');
const startGameButton = document.getElementById('start-game-button');

function jump() {
    dino.classList.add('jump-animation');
    setTimeout(() => {
        dino.classList.remove('jump-animation')
    }, 500);
}

document.addEventListener('keypress', () => {
    if(!dino.classList.contains('jump-animation')) {
        jump();
    }
});

document.addEventListener('click', () => {
    if(!dino.classList.contains('jump-animation')) {
        jump();
    }
});

setInterval(() => {
    score.innerText++;
    const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    const rockLeft = parseInt(window.getComputedStyle(rock).getPropertyValue('left'));

    if(rockLeft < 0) {
        rock.style.display = 'none'; 
    } else {
        rock.style.display = '';
    }

    if(rockLeft < 50 && rockLeft > 0 && dinoTop > 150) {
        alert('You got a score of: ' + score.innerText + '\n\nPlay again?');
        startGameButton.style.display = '';
        location.reload();
    }
    // else {
    //     startGameButton.style.display = 'none';
        
    // }

}, 50);