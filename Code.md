# Code

## Table of contents

- [Code](#code)
  - [Table of contents](#table-of-contents)
  - [OOP Object Orientated Programming](#oop-object-orientated-programming)
  - [The DOM](#the-dom)
    - [DOM Navigation](#dom-navigation)
    - [Event Listeners](#event-listeners)
    - [Event Listeners](#event-listeners-1)
  - [Types](#types)
  - [Type Conversion](#type-conversion)
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
  - [Array Methods](#array-methods)
  - [Keywords](#keywords)
    - [Static](#static)
  - [Callback Hell](#callback-hell)
  - [Promises](#promises)
    - [Elements](#elements)
    - [Element selectors](#element-selectors)
    - [Element Properties](#element-properties)
  - [Errors](#errors)
    - [Error Types](#error-types)

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

## The DOM

The Document Object Model.
Its a javascript object {} that represents the page you see in the browser.
It provides an API to interact with it. The dom methods. {} = document
Its created when a page loads html.
It structures all the elements in a tree structure.
Going from head, body, so on.

Javascript can access the dom dynamically after the page loads.

```javascript
document.getElementById('#id');

console.dir(document); // log the document as a directory tree .dir  returns things like title
document.title = 'my site';
document.body.style.backgroundColor = 'black'; // change properties
```

### DOM Navigation

The process of navigating throught the structure of a html document using javascript.

.firstElementChild
.lastElementChild
.nextElementSibling
.prevElementSibling
.parentElement
.children

```javascript
<ul id="fruits">
  <li id="apple">apple</li>
  <li id="orange">orange</li>
  <li id="banana">banana</li>
</ul>
<ul id="veg">
  <li id="carrots">carrots</li>
  <li id="onions">onions</li>
  <li id="potatoes">potatoes</li>
</ul>
<ul id="desserts">
  <li id="cake">cake</li>
  <li id="pie">pie</li>
  <li id="icecream">ice cream</li>
</ul>

// FirstElementChild
const element = document.getElementById('fruits');
const firstChild = element.firstElementChild; // apple
firstChild.style.backgroundColor = 'yellow'

const ulElements = document.querySelectorAll('ul') // returna a nodelist
ulElements.forEach(element => {
  const firstChild = element.firstElementChild;
  firstChild.style.backgroundColor = 'blue' // apple, carrots
})

cosnt element2 = document.getElementById('fruits')
const lastChild = element.lastElementChild
lastChild.style.backgroundColor = 'green' // any last element - banana/potoes/ice cream

const ulItems = document.querySelectorAll('ul') // returns a nodelist with built in methods likes foreach
ulitems.forEach(el => {
  const lastChild = el.lastElementChild
  lastChild.style.backgroundColor = ' black' // all last items in list
})

// Next sibling
const element3 = document.getElementById('apple')
const nextSibling = element3.nextSiblingElement // get the next li in the list or null if its the last item already

const element4 = document.getElementById('fruits')
const nextSibling2 = element4.nextSiblingElement // get the next UL element

// Previous Element Sibling
const element5 = document.getElementById('orange')
const prevSibling = element5.previousElementSibling // apple will be selected

// Parent Element
const element6 = document.getELementById('apple')
const parent = element6.parentElement // fruits

// Children
const element7 = document.getElementById('fruits')
const children = element.children // Returns a html collection with the LI elements inside

Array.from(children).forEach(child => {
  child.style.backgroundColor. = 'red' // all li inside frutis are effects
})

children[0].style.backgroundColor = 'green' // get first element

```

### Event Listeners

There are many different event listeners

- onclick
- load
- keydown - the event includes was the shirt or cntrl key pressed as well.
- keyup

// You can find an element and then apply an event listener to it

```javascript
const el = document.getElementById('thing');
el.addEventListener('keydown', () => {
  'code';
});
```

### Event Listeners

There are many different event listeners

- onclick
- load
- keydown - the event includes was the shirt or cntrl key pressed as well.
- keyup

// You can find an element and then apply an event listener to it

```javascript
const el = document.getElementById('thing');
el.addEventListener('keydown', () => {
  'code';
});
```

## Types

Types are data types of elements.

- String
- Number
- Boolean
- Array
- Object

## Type Conversion

You may want to convert a type to clean up user input

x = "21"
age = Number(x)

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

function displayPerson({ firstName, lastName, age, job }) {
  // Destructure a person as an argument into parameters

  console.log('firstName', firstName);
  console.log('lastName', lastName);
  console.log('age', age);
  console.log('job', job);
}
```

### Filter Methods

Creates a new array by filtering out numbers.

```javascript
let numbers = [1, 2, 3, 4, 5];

let eventNums = numbers.filter(isEven);

function isEven(element) {
  return element % 2 === 0; // take any true elements and add to new array
}

// New thing
const ages = [16, 17, 18, 18, 19, 20, 60];

const adults = ages.filter(isAdult);

function isAdult(element) {
  return element >= 18;
}

// Words array
const words = ['apple', 'orange', 'banana', 'kiwi', 'Coconut', 'Mango'];

const shortWords = words.filter(getShortWords);

function getShortWords(element) {
  return element.length <= 6; // return true or false
}
```

### Reduce

Reduce the elements of an array into a single value

```javascript
const prices = [, 30, 10, 25, 15, 20];

const total = prices.reduce(sum); // return total

function sum(accumlator, element) {
  return accumulator + element;
}

// Maxiumun value

const grades = [75, 84, 94, 34, 45, 76];

const maximum = grades.reduce(getMax); // returns 94 as highest number in the array

function getMax(accumulator, element) {
  return Math.Max(accumulator, element);
}
```

## Array Methods

1. `Array.from()` using the class Array create a shallow copy of any array

```javascript
const set = new Set(['foo', 'bar', 'baz', 'foo']);

Array.from(set).where(() => {
  set[0] === 'b';
});
```

## Keywords

### Static

They keyword defines any properties or methods owned by the class not the object

You do not need to create an object in order to access a property or method.

```javascript
class MathUtils {
  static PI = 3.14159;

  static getDiameter(radius) {
    return radius * 2;
  }
  static getCercumference(radius) {
    return 2 * this.PI * radius;
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

## Callback Hell

A situation where callbacks are nested too much causing callback hell.
Thesse days we have promises and async/await to protect us.

Adding `callback()` as a function makes sure all tasks are completed before the code can move on.
These tasks are in order but the delay will make them execute out of order.
If you add the callback function you can make sure this doesnt happen.

```javascript
// Function task1 accepts a callback function as a parameter
function task1(callback) {
  // setTimeout is a built-in function that delays the execution of its callback function
  setTimeout(() => {
    console.log('task1 completed'); // This message is logged after the delay
    callback(); // After task1 is complete, the callback function is invoked
  }, 5000); // Delay of 5000 milliseconds (5 seconds)
}

// Function task2 also accepts a callback function as a parameter
function task2(callback) {
  setTimeout(() => {
    console.log('task2 completed'); // This message is logged after the delay
    callback(); // After task2 is complete, the callback function is invoked
  }, 2000); // Delay of 2000 milliseconds (2 seconds)
}

// Function task3 also accepts a callback function as a parameter
function task3(callback) {
  setTimeout(() => {
    console.log('task3 completed'); // This message is logged after the delay
    callback(); // After task3 is complete, the callback function is invoked
  }, 4000); // Delay of 4000 milliseconds (4 seconds)
}

// Function task4 also accepts a callback function as a parameter
function task4(callback) {
  setTimeout(() => {
    console.log('task4 completed'); // This message is logged after the delay
    callback(); // After task4 is complete, the callback function is invoked
  }, 3000); // Delay of 3000 milliseconds (3 seconds)
}

// The below code would execute tasks in parallel (out of order) because the functions don't wait for each other
// task1()
// task2()
// task3()
// task4()
// console.log('all tasks completed'); // This would run immediately, even before the tasks are complete

// Instead, to ensure tasks run sequentially, callbacks are used. Each task calls the next task in its callback function.
// A callback is a function passed as an argument to another function, to be executed after the first function is done.

task1(() => {
  // task1 starts, and after it completes, it runs the following callback
  task2(() => {
    // task2 starts, and after it completes, it runs the following callback
    task3(() => {
      // task3 starts, and after it completes, it runs the following callback
      task4(() => {
        // task4 starts, and after it completes, it runs the following callback
        console.log('all tasks completed'); // This is logged after all tasks are completed in sequence
      });
    });
  });
});

// In this structure:
// 1. The function `task1` is called and passed an anonymous function `() => { ... }` as a callback.
// 2. After `task1` completes (after 5 seconds), `task2` is called inside the callback.
// 3. This pattern continues until all tasks are complete, ensuring they run sequentially.
```

## Promises

A PROMISE is a OBJECT.
Its an object that manages asyncronous operations.
Such as:

1. Querying a database
2. Fetching files
3. Gathering data
4. Processing images

They can take an indeterminate amount of time.
You can wrap a promise object around Asyncronous code.
The promise object promises to return a value.
The promise will be 'resolved' or 'rejected'

A promise is an object so can be created using `new Promise((resolve, reject) => {async code})`

Do these takes in order
// 1. walk dog
// 2. clean kitchen

```javascript
function walkDog() {
  setTimeout(() => {
    console.log('waled the dog');
  }, 2000)
}

function cleanKitchen() {
  setTimeout(() => {
    console.log('cleaning the kitchen');
  }, 1000)
}

walkDog(() => {
  cleanKitchen(() => {
    console.log('finished');
  });
})

// This code would require callbacks to create the desired output
// Instead we can use Promises which return a promise of resolve or reject

function walkDog() {

  return new Promise((resolve, reject) = {
    setTimeout(() => {
      // console.log('waled the dog'); // This become a resolve condition
      resolve('walked the dog'); // the message is the value of resolving the function
    }, 4000)
  })
}

function cleanKitchen() {

  return new Promise((resolve, reject) = {
    setTimeout(() => {
      resolve('cleaning the kitchen'); // the message is the value of resolving the function
    }, 2000)
  })
}

function takeTrash() {

  return new Promise((resolve, reject) = {
    setTimeout(() => {
      resolve('trash done'); // the message is the value of resolving the function
    }, 1000)
  })
}

// Instead of callback hell we will use message chaining

walkDog().then(value => {
  console.log('value'); /// Prints 'walked the dog'
  return cleanKitchen()
})
.then(value => {
  console.log('value');
  return takeTrash()
})
.then(value => {
  console.log('vlaue');
  console.log('finished');
})
.catch(error => console.error(error)) // for reject


// The task may fail and you dont want to resolve the promise
//

function walkDog() {

  return new Promise((resolve, reject) = {
    setTimeout(() => {
      const walkedDog = true

      if (waledDog) {
        resolve('walked the dog'); // the message is the value of resolving the function
      } else {
        reject('You failed to walk the dog') // this will difplsay instead
      }
    }, 4000)
  })
}

.catch(error => console.error(error)) // for reject
// If the first promise is rejected then no more code will run.
// Then will be pending until the complete with a resolve or reject.
```

### Elements

### Element selectors

1. `document.getElementById()` Returns element or null
2. `document.getElementsClassName()` Return a HTML collection of classes
3. `document.getElementsByTagName()` Returns a HTML collection of tags
4. `document.querySelector()` Returns a element or null
5. `document.querySelectorAll()` Returns a NodeList of all elements

### Element Properties

`.style` - backgorundColour and other style properties
`.textContent`
`.title`
`.role`

## Errors

An Object {} that is created to represent a problem that has occurred.

### Error Types

- TypeError - incorrect type or syntax. Spelling mistakes maybe. 'console.logg('error')'
- Reference Error - A reference does not exist or cannot be accessed. x does not exist because you didnt create it.
