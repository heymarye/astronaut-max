'use strict';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = 1640;
canvas.height = 924;

const gravity = 0.5;

const player = new Player();

const background = new Sprite({
    position: {
        x: -3,
        y: -5
    },
    imgSrc: './assets/background.png',
    scale: 1.3
});

const platforms = [
    new Sprite({
        position: {
            x: -1, 
            y: 800,
        },
        imgSrc: './assets/platform.png'
    }),
    new Sprite({
        position: {
            x: 1000, 
            y: 350
        },
        imgSrc: './assets/platform.png'
    }),
    new Sprite({
        position: {
            x: 2100, 
            y: 500
        },
        imgSrc: './assets/platform.png'
    })
];

const keys = {
    left: {
        pressed: false
    },
    right: {
        pressed: false
    }
};

window.addEventListener('keydown', ({ keyCode }) => {
    switch(keyCode) {
        case 65: 
            keys.left.pressed = true;
            break;
        case 68: 
            keys.right.pressed = true;
            break;
        case 87: 
            console.log('up');
            if (event.repeat) { 
                return; 
            }
            player.velocity.y -= 20;
            break;
        case 83: 
            console.log('down');
            break;
    }
});

window.addEventListener('keyup', ({ keyCode }) => {
    switch(keyCode) {
        case 65: 
            keys.left.pressed = false;
            break;
        case 68: 
            keys.right.pressed = false;
            break;
    }
});

function animate() {
    requestAnimationFrame(animate);
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, canvas.width, canvas.height);
    background.update();
    platforms.forEach(platform => {
        platform.draw();
    });
    player.update();

    if (keys.left.pressed && player.position.x > 100) {
        player.velocity.x = -5;
    }
    else if (keys.right.pressed && player.position.x < 400) {
        player.velocity.x = 5;
    }
    else {
        player.velocity.x = 0;

        if (keys.left.pressed) {
            platforms.forEach(platform => {
                platform.position.x += 5;
            });
        }
        else if (keys.right.pressed) {
            platforms.forEach(platform => {
                platform.position.x -= 5;
            });
        }
    }

    //Platform Collision Detection
    platforms.forEach(platform => {
        if (player.position.y + player.heigth <= platform.position.y && 
            player.position.y + player.heigth + player.velocity.y >= platform.position.y &&
            player.position.x + player.width >= platform.position.x && 
            player.position.x <= platform.position.x + platform.width) {
                player.velocity.y = 0;
        }
    });
}

animate();