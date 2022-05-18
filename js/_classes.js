'use strict';

class Sprite {
    constructor({ position, offset = { x: 0, y: 0 }, imgSrc, scale = 1, framesMax = 1 }) {
        this.position = position;
        this.offset = offset;
        this.image = new Image();
        this.image.src = imgSrc;
        this.width = this.image.width;
        this.height = this.image.height;
        this.scale = scale;
        this.framesMax = framesMax;
        this.framesCurrent = 0;
        this.framesElapsed = 0;
        this.framesHold = 17;
    }

    draw() {
        context.drawImage(
            this.image, 
            //Crop Image by Frames
            this.framesCurrent * (this.image.width / this.framesMax),
            0,
            this.image.width / this.framesMax,
            this.image.height,

            this.position.x - this.offset.x, 
            this.position.y - this.offset.y, 
            (this.image.width / this.framesMax) * this.scale, 
            this.image.height * this.scale
        );
    }

    animateFrames() {
        this.framesElapsed++; 
        if (this.framesElapsed % this.framesHold === 0) {
            if (this.framesCurrent < this.framesMax - 1) {
                this.framesCurrent++;
            }
            else {
                this.framesCurrent = 0;
            }
        }
    }

    update() {
        this.draw();
        this.animateFrames();
    }
}

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