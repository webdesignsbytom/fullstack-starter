const arrayContainer = document.getElementsByClassName('array__container');
const letterSpan = document.getElementById('letterData');
console.log('arrayContainer', arrayContainer);
console.log('l', letterSpan);

const lettersArray = [(a = 'A'), (b = 'B'), (c = 'C'), (d = 'D'), (e = 'E')];

const lettersArrayTwo = [
  'A',
  'B',
  'A',
  'C',
  'A',
  'D',
  'E',
  'B',
  'F',
  'C',
  'E',
  'A',
  'C',
  'D',
  'A',
];

const lettersKeyArray = [
    'A',
    'B',
    'A',
    'C',
    'A',
    'D',
    'E',
    'B',
    'F',
    'C',
    'E',
    'A',
    'C',
    'D',
    'A',
  ];

class Level {
  constructor(id, lettersAvailableArray, speed = 1) {
    (this.id = id),
      (this.lettersAvailableArray = lettersAvailableArray),
      (this.timer = 0),
      (this.speed = speed);
  }

  hello() {
    console.log(`Hello ${this.id}`);
  }

  addName(name) {
    this.name = name;
  }
}

const levelTwo = new Level(2, lettersArrayTwo, 5);
console.log(`New level starts here`, levelTwo);
levelTwo.hello();
levelTwo.addName('Tom');
console.log('Testing', levelTwo);

function startGame() {
  console.log('hi');
  letterSpan.style.backgroundColor = 'red';
  const newArray = document.createElement('p');
  newArray.innerText = 'Hello';
  letterSpan.appendChild(newArray);

  const newStuff = document.createElement('div');
  console.log(lettersArrayTwo)

  lettersArrayTwo.forEach((letter, index) => {
    const newLetter = document.createElement('h2');
    newLetter.innerText = letter

    newLetter.addEventListener('onclick', (event) => {
      console.log('event', event);
    })
    letterSpan.appendChild(newLetter)
  })

}

// HISTORY
// const level = new Level(1, lettersArray)
// console.log(`New level starts here`, level)
// level.hello()
// level.addName('Tom')
// console.log('Testing', level)
