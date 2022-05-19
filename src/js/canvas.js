'use strict';

import platform from '../assets/platform.png';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = 1640;
canvas.height = 924;

const gravity = 0.5;

class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        };
        this.velocity = {
            x: 0,
            y: 0
        };
        this.width = 30;
        this.heigth = 30;
    }

    draw() {
        context.fillStyle = '#6181ed';
        context.fillRect(this.position.x, this.position.y, this.width, this.heigth);
    }

    update() {
        this.draw();

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        //Gravity
        if (this.position.y + this.heigth + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity;
        }
        else {
            this.velocity.y = 0;
        }
    }
}

class Platform {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y
        };
        this.image = image;
        this.width = image.width;
        this.height = image.height;
    }

    draw() {
        context.drawImage(this.image, this.position.x, this.position.y);
    }
}

const image = new Image();
image.src = platform;

const player = new Player();

const platforms = [
    new Platform({
        x: -1, 
        y: 800,
        image
    }),
    new Platform({
        x: image.width - 3, 
        y: 800,
        image
    }),
    new Platform({
        x: 2100, 
        y: 500,
        image
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
            if (event.repeat) { 
                return; 
            }
            player.velocity.y -= 20;
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