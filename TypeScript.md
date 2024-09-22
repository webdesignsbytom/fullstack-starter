# Typescript

## Data Types

- Number
- String
- Boolean
- Null
- Undefined
- Object
- Any
- Unknown
- Never
- Enum
- Tuple

```ts
// Number
let age: number = 25;

// String
let name: string = "Alice";

// Boolean
let isActive: boolean = true;

// Null
let nullableValue: null = null;

// Undefined
let uninitializedValue: undefined;

// Object
let person: { name: string; age: number } = {
  name: "Bob",
  age: 30,
};

// Any
let randomValue: any = 42; // can be any type
randomValue = "Now I'm a string"; // still valid

// Unknown
let unknownValue: unknown = "This could be anything";
if (typeof unknownValue === "string") {
  console.log(unknownValue.length); // type-check before using
}

// Never
function throwError(message: string): never {
  throw new Error(message);
}

// Enum
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
let direction: Direction = Direction.Up;

// Tuple
let point: [number, number] = [10, 20];
```

### Arrays

Arrays will need a data type but can be set to any or have no data type.

```ts
let array: number[] = [1, 2, 3]
let array2 = []
array2[0] = 1 // Will go in
array2[1] = '2' // wont go in now is set to number only
```

### Tuples


```ts
let user: [string, number] = ['Tom', 23]
```



## Generics

