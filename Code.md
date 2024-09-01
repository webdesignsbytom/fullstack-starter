# Code

## Table of contents

- [Code](#code)
  - [Table of contents](#table-of-contents)
  - [OOP Object Orientated Programming](#oop-object-orientated-programming)
  - [Closures](#closures)
  - [Getters and Setters](#getters-and-setters)
  - [Arrow Functions](#arrow-functions)
  - [Function Currying](#function-currying)
  - [THIS](#this)
  - [Arrays](#arrays)
    - [2D Array](#2d-array)
  - [Spread operator](#spread-operator)
    - [Destucturing](#destucturing)
    - [Filter Methods](#filter-methods)
    - [Reduce](#reduce)
  - [Keywords](#keywords)
    - [Static](#static)

## OOP Object Orientated Programming

Objects

- Object / Superclass / Parent
  - Constructor - initializer of an object
    - this - refers to this object
    - super - refers to the parent - super calls the parents constructor
  - Children
    - class Hawk extends Animal { ... }
    - Has specific values

```javascript
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = ages;
  }

  move(speed) {
    console.log(`The ${this.name} can move at ${speed}mph`);
  }
}

class Hawk extends Animal {
  constructor(name, age, flightSpeed) {
    super(name, age);
    this.flightSpeed = flightSpeed;
  }

  fly() {
    console.log('The Hawk flies');
    super.move(this.flightSpeed);
  }
}

const hawk = new Hawk('hawk', 2, 55);
hawk.fly();
```

## Closures

closure = A function defined inside of another function.
the inner function has access to the variables and scope of the outer function.
Allow for private variables and state maintenance.

It keeps varaiables in a separate scope and encapsulated.

```javascript
function outer() {
  const message = 'Hello there!';

  function inner() {
    console.log('Message: ', message);
  }

  inner(); // Now outer() will call inner()
}

outer(); // This will not call the inner function on its own

// Real example
// Create a counter and keep the state private
// Return the function that increments the counter
// The Closure will maintain the state!
function createCounter() {
  let count = 0;

  function incrementCounter() {
    count++;
    console.log(`Count increased to ${count}`);
  }

  function getCount() {
    return count;
  }

  return { incrementCounter, getCount };
}

const counter = createCounter(); // Create a counter

counter.incrementCounter(); // Increment the counter and return data
counter.getCount(); // Return the number

// This is about scope chain, the return value with return the function AND its scope i.e the counter variable
function outer() {
  let counter = 0;

  function inner() {
    counter++;
    console.log('counter', counter);
  }

  return inner;
}

const fn = outer();
fn(); // 1
fn(); // 2
```

## Getters and Setters

Used to control data in a class or object

```javascript
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  set width(newWidth) {
    if (newWidth > 0 && typeof newWidth === 'number') {
      this._width = newWidth;
    } else {
      console.error('Must be greater than 0');
    }
  }

  set height(newHeight) {
    if (newHeight > 0 && typeof newHeight === 'number') {
      this._height = newHeight;
    } else {
      console.error('Must be greater than 0');
    }
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  get area() {
    return this._width * this._height;
  }
}

const rect = new Rectangle(3, 4);
console.log('rect: ', rect.width); // getter from get
console.log('rect: ', rect.height); // getter from get
console.log('rect: ', rect.area); // Gets a value not from the class constructor
```

## Arrow Functions

A consise way to write a simple single use expression
(parameters) => some code;

const thingy = () => console.log('');
empty paramters then function

```javascript
const thingy = function {
  console.log('hello');
}
thingy()

// becomes

const arrow = () => console.log('hello');


const numbers = [1, 2, 3, 4, 5, 6]

const squares = numbers.map((element) => Math.pow(element, 2))
const cubes = numbers.map((element) => Math.pow(element, 3))
const total = numbers.reduce((accumulator, element) => accumulator + element)
```

## Function Currying

The process in Functional programming. Coverting multiple arguments in to nested functions
function f(a, b, c) will become function f(a)(b)(c)

```javascript
function addUp(a, b, c) {
  return a + b + c;
}

console.log('adding up', addUp());

function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn();
      };
    };
  };
}

const curriedFunction = curry(addup());
console.log('curriedFunction', curriedFunction(5)(4)(3));
```

## THIS

A keyword and reference to an object.
If you are inside the context of a object THIS can refer to it.
It does not work in arrow functions.
i.e

```javascript
const person {
  name: Tom
  sayName: function() console.log("${this.name}")

  person.name = this.name
}
```

## Arrays

```javascript
const fruits = ['apple', 'orange', 'banana'];

let apple = fruits.indexOf('apple');
fruits.push('mango');
fruits.unshift('orange');

fruits.forEach((fruit) => {
  console.log('fruits:', fruit);
});

for (fruit in fruits) {
  console.log('fruits:', fruit);
}
for (let fruit of fruits) {
  console.log('fruits:', fruit);
}

fruits.sort();
fruits.sort().reverse();
```

### 2D Array

A 2D array is a element that stores a matrix of data in rows and columns.
Useful for games and spreadsheets.

```javascript
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let row of matrix) {
  console.log('row', row);
}
```

## Spread operator

Represented by 3 dots ...
Allows and array or string to be unpacked into seperate elements

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(maximum); // = 6

// You can do it with strings
let username = 'tomuscode';
let letters = [...username];

console.log('letters', letters); // ['t', 'o', ...]
```

### Destucturing

Used to break down arrays or objects in to values
[] = to perform array destructuring
{} = to perform object destructuring

```javascript
// Swap variables
let a = 1;
let b = ((2)[(a, b)] = [b, a]);

// Swap elemetns
const colours = (['red', 'green', 'blue', 'black', 'white'][ // index 0 - 4
  (colours[0], colours[4])
] = [colours[4], colours[0]]); // swaps the colours around

const [firstColour, secondColour, thirdColour] = colours;
console.log('firstColour', firstColour); // RED

const [firstColour, secondColour, thirdColour, ...extraColours] = colours;
console.log('extraColours', extraColours); // New array of []"black", "white"]

// With objects

const person1 = {
  firstName: 'spongebob',
  lastName: 'SquarePants',
  age: 30,
  job: 'Fry cook',
};

const person1 = {
  firstName: 'Patric',
  lastName: 'Star',
  age: 60,
};

const { firstName, lastName, age, job } = person1;
console.log('firstName', firstName);
console.log('lastName', lastName);
console.log('age', age);
console.log('job', job);

const { firstName, lastName, age, job = 'Unemployed' } = person2; // Add a default value for missing keys
console.log('firstName', firstName);
console.log('lastName', lastName);
console.log('age', age);
console.log('job', job);

function displayPerson({ firstName, lastName, age, job }) { // Destructure a person as an argument into parameters

  console.log('firstName', firstName);
  console.log('lastName', lastName);
  console.log('age', age);
  console.log('job', job);
}
```

### Filter Methods

Creates a new array by filtering out numbers.

```javascript
let numbers = [1,2,3,4,5]

let eventNums = numbers.filter(isEven)

function isEven(element) {
  return element % 2 === 0; // take any true elements and add to new array
}


// New thing
const ages = [16,17,18,18,19,20,60]

const adults = ages.filter(isAdult);

function isAdult(element) {
  return element >= 18;
}

// Words array
const words = ["apple", "orange", "banana", "kiwi", "Coconut", "Mango"]

const shortWords = words.filter(getShortWords)

function getShortWords(element) {
  return element.length <= 6; // return true or false
}
```

### Reduce

Reduce the elements of an array into a single value

```javascript
const prices = [, 30, 10, 25, 15, 20]

const total = prices.reduce(sum) // return total

function sum(accumlator, element) {
  return accumulator + element
}

// Maxiumun value

const grades = [75, 84, 94, 34, 45, 76]

const maximum = grades.reduce(getMax)  // returns 94 as highest number in the array

function getMax(accumulator, element) {
  return Math.Max(accumulator, element)
}
```

## Keywords

### Static

They keyword defines any properties or methods owned by the class not the object

You do not need to create an object in order to access a property or method.

```javascript
class MathUtils {
  static PI = 3.14159

  static getDiameter(radius) {
    return radius * 2
  }
  static getCercumference(radius) {
    return 2 * this.PI * radius
  }
}

console.log('PI', MathUtils.PI); // 3.14159
console.log('Diameter', MathUtils.getDiameter(10)); // 20
console.log('Cercumference', MathUtils.getCercumference(10)); // 62...

// Tracking user
class User {
  static userCount = 0;

  constructor(username) {
    this.username = username;
    // Increment the user count in the static class variable
    User.userCount++;
  }

  static getUserCount() {
    console.log(`There are ${User.userCount} users`);
  }
}

const user1 = new User('tom');

console.log('name', user1.username);
console.log('count', user1.userCount); // undefined becuase its a class variable not for the object.
console.log('count', User.userCount); // 1

User.getUserCount(); // 1 user
```