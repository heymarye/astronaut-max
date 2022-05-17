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

const player = new Player();

function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, canvas.width, canvas.height);
    player.update();
}

animate();