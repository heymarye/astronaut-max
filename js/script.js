'use strict';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

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
    constructor({ x, y }) {
        this.position = {
            x,
            y
        };
        this.width = 200;
        this.height = 20;
    }

    draw() {
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}

const player = new Player();

const platforms = [
    new Platform({
        x: 500, 
        y: 700
    }),
    new Platform({
        x: 1300, 
        y: 350
    }),
    new Platform({
        x: 2100, 
        y: 500
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
    context.clearRect(0, 0, canvas.width, canvas.height);
    player.update();
    platforms.forEach(platform => {
        platform.draw();
    });

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