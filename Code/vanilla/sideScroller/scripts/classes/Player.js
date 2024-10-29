export default class Player {
    constructor(game) {
        this.game = game;
        this.x = 50;
        this.y = 60;
        this.spriteWidth = 200;
        this.spriteHeight = 200;
        this.width = 200;
        this.height = 200;
        this.speedY = 0;
        this.flapSpeed = 5 * this.game.ratio;
    }

    draw() {
        this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    update() {
        this.y += this.speedY;

        if (!this.#isTouchingBottom()) {
            this.speedY += this.game.gravity
        }
        // Bottom boundart
        if (this.#isTouchingBottom()) {
            this.y = this.game.height - this.height
        }
    }

    resize() {
        this.width = this.spriteWidth * this.game.ratio
        this.height = this.spriteHeight * this.game.ratio

        // Change starting position
        this.y = this.game.height * 0.5 - this.height * 0.5

        // Change rates and speeds
        this.speedY = -8 * this.game.ratio;
        this.flapSpeed = 5 * this.game.ratio
    }

    #isTouchingBottom() {
        return this.y >= this.game.height - this.height
    }

    #isTouchingTop() {
        return this.y <= 0
    }

    flap() {
        if (!this.#isTouchingTop()) {
            this.speedY = -this.flapSpeed;
        }
    }
}