class Sprite {
    constructor({ position, imageSrc }) {
        this.position = position;
        this.image = new Image();
        this.image.onload = () => {
            this.loaded = true;
        }
        this.image.src = './images/backgroundLevel1.png'
        this.loaded = false
    }

    draw(context) {
        if (!this.loaded) return;
        context.drawImage(this.image, this.position.x, this.position.y)
    }
}