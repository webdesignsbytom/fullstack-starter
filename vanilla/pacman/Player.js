export default class Player {
  constructor(name, game) {
    this.name = name;
    this.image = this.#loadImage('pacman.png');
    this.position = {
      row: game.startingRow,
      column: game.startingColumn
    };
  }

  #loadImage(fileName) {
    const img = new Image();
    img.src = `images/${fileName}`;
    return img;
  }
}
