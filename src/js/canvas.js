'use strict';

import backgroundImage from '../assets/background.png';
import platformImage from '../assets/platform.png';
import hillsImage from '../assets/hills.png';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = 1640;
canvas.height = 924;

const gravity = 0.5;
let scrollOffset = 0;

function createImage(imgSrc) {
    const image = new Image();
    image.src = imgSrc;
    return image;
}

let platform = createImage(platformImage);
let hill = createImage(hillsImage);

class Sprite {
    constructor({ position, offset = { x: 0, y: 0 }, image, scale = 1, framesMax = 1 }) {
        this.position = position;
        this.offset = offset;
        this.image = image;
        this.width = image.width;
        this.height = image.height;
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
    }
}

let player = new Player();

let background = new Sprite({
    position: {
        x: -3,
        y: -5
    },
    image: createImage(backgroundImage),
    scale: 1.3
});

let hills = [
    new Sprite({
        position: {
            x: 0,
            y: 225
        },
        image: hill
    }),
];

let platforms = [
    new Sprite({
        position: {
            x: -1, 
            y: 800
        },
        image: platform
    }),
    new Sprite({
        position: {
            x: platform.width - 3, 
            y: 800
        },
        image: platform
    }),
    new Sprite({
        position: {
            x: platform.width * 2 + 300, 
            y: 800
        },
        image: platform
    }),
    new Sprite({
        position: {
            x: platform.width * 4, 
            y: 500
        },
        image: platform
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

function init() {
    player = new Player();

    background = new Sprite({
        position: {
            x: -3,
            y: -5
        },
        image: createImage(backgroundImage),
        scale: 1.3
    });

    hills = [
        new Sprite({
            position: {
                x: 0,
                y: 225
            },
            image: hill
        }),
    ]; 

    platforms = [
        new Sprite({
            position: {
                x: -1, 
                y: 800
            },
            image: platform
        }),
        new Sprite({
            position: {
                x: platform.width - 3, 
                y: 800
            },
            image: platform
        }),
        new Sprite({
            position: {
                x: platform.width * 2 + 300, 
                y: 800
            },
            image: platform
        }),
        new Sprite({
            position: {
                x: platform.width * 4, 
                y: 500
            },
            image: platform
        })
    ];
}

function animate() {
    requestAnimationFrame(animate);
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, canvas.width, canvas.height);
    background.update();
    hills.forEach(hill => {
        hill.draw();
    });
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
            scrollOffset -= 5;
            hills.forEach(hill => {
                hill.position.x += 3;
            });
            platforms.forEach(platform => {
                platform.position.x += 5;
            });
        }
        else if (keys.right.pressed) {
            scrollOffset += 5;
            hills.forEach(hill => {
                hill.position.x -= 3;
            });
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

    //Win Condition
    if (scrollOffset > 10000) {
        console.log('You win!');
    }

    //Lose Condition
    if (player.position.y > canvas.height) {
        console.log('You lose!');
        init();
    }
}

animate();