# Code

## Table of contents

- [Code](#code)
  - [Table of contents](#table-of-contents)
  - [OOP Object Orientated Programming](#oop-object-orientated-programming)
  - [Closures](#closures)

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

  inner() // Now outer() will call inner()
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

const counter = createCounter() // Create a counter

counter.incrementCounter() // Increment the counter and return data
counter.getCount() // Return the number
```
