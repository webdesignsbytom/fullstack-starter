export default class Player {
  constructor(name) {
    this.name = name;
    this.image = this.#loadImage('pacman.png');
  }

  #loadImage(fileName) {
    const img = new Image();
    img.src = `images/${fileName}`;
    return img;
  }
}
