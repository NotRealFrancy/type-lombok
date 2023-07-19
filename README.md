## Installation

```console
$ npm install type-lombok
```

## Features

  * Getter & Setter
  * Constructor

# Use

- GetterSetter:
```typescript
class MyClass {
    @GetterSetter
    private myVariable: string = "My Variable";
}
```
```typescript
const myclass = new MyClass();
myclass["myVariable"] = "Another Variable";
console.log(myclass["myVariable"]);
```

- Constructor
```typescript
@Constructor
class MyClass {
    private myVariable: string;

    private constructor(/* Insert here all the "constructor variables */) {
        /* Insert here all you want to do after the construction of variables */
    };
}
```