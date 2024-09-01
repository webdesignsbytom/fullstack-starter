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

const fruits = ['apple', 'orange', 'banana']

let apple = fruits.indexOf('apple')
fruits.push('mango')
fruits.unshift('orange')

fruits.forEach(fruit => {
  console.log('fruits:', fruit);
})

for(fruit in fruits) {
  console.log('fruits:', fruit);
}
for(let fruit of fruits) {
  console.log('fruits:', fruit);
}

fruits.sort()
fruits.sort().reverse()
```

## 2D Array

A 2D array is a element that stores a matrix of data in rows and columns.
Useful for games and spreadsheets.

```javascript
const matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

for(let row of matrix) {
  console.log('row', row);

}
```

## Spread operator

Represented by 3 dots ...
Allows and array or string to be unpacked into seperate elements

```javascript
const numbers = [1,2,3,4,5,6]

let maximum = Math.max(...numbers)
let minimum = Math.min(...numbers)

console.log(maximum); // = 6

// You can do it with strings
let username = 'tomuscode'
let letters = [...username]

console.log('letters', letters); // ['t', 'o', ...]
```