// Fireworks effect
const fireworksContainer = document.getElementById('fireworks');

function createFirework() {
    const firework = document.createElement('div');
    firework.className = 'firework';
    fireworksContainer.appendChild(firework);

    setTimeout(() => {
        firework.remove();
    }, 2000);
}

setInterval(createFirework, 200);

// Falling flowers effect
const flowersContainer = document.getElementById('flowers');

function createFlower() {
    const flower = document.createElement('div');
    flower.className = 'flower';
    flowersContainer.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 5000);
}

setInterval(createFlower, 500);
