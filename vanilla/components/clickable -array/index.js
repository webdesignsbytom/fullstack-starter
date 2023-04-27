
const arrayContainer = document.getElementById('arrayContainer');
// const letterSpan = document.getElementById('letterData');

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


// function beClicked(event) {
//   console.log('letter click')
// }

function startGame() {
  console.log('hi')
  const lettersContainer = document.createElement('div');
  lettersContainer.id = 'events__container'
  lettersContainer.onkeydown = function(){console.log('hdex')}
  arrayContainer.appendChild(lettersContainer);
  lettersArrayTwo.forEach((letter, index) => {
    console.log('letter', letter, index)
    const newLetter = document.createElement('h2');
    newLetter.innerText = letter
    lettersContainer.appendChild(newLetter);

  })

  //   newLetter.addEventListener('onclick', (event) => {
  //     console.log('event', event);
  //   })
  //   letterSpan.appendChild(newLetter)
  // })

}

// HISTORY
// const level = new Level(1, lettersArray)
// console.log(`New level starts here`, level)
// level.hello()
// level.addName('Tom')
// console.log('Testing', level)
