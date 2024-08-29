export default class Player {
    constructor(game) {
        this.game = game;
        this.x = 0;
        this.y = 0;
        this.width = 100;
        this.height = 100;
    }

    draw() {
        this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}