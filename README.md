# Node Hello World

## Objectives

1. Implement Hello World in Node
1. Run the script from the terminal


## Introduction

In this lab, you'll practice how to run Node scripts from command line. In addition, you'll develop your first Node application—Hello World, the traditional first app in any language.

## Instructions

1. Create file `hello-world.js` and open it in your favorite editor
2. Implement an expression (function with `return`) which returns "Hello World"
3. Export your expression (function with `return`) with `module.exports = ...`
5. Install testing dependencies with `$ npm install` (`$` is a symbol which tells you that this is a command line command). You need to do it just once for each lab.
6. Run tests with `$ npm test`.

Tip: Don't overthink it.

### Extra Info

* [Console in Node official documentation](https://nodejs.org/api/console.html)

## Solution

This is the content of `hello-world.js` which will pass the tests:

```js
var helloWorld  = function() {
  return 'Hello World'
}
module.exports = helloWorld // for require('./hello-world.js')
```

Bonus (this works as a stand alone application as well):

```js
var helloWorld  = function() {
  return 'Hello World'
}
if (require.main === module) { // this is true when you run this file with node hello-world.js and false when you import it
  console.log(helloWorld()) // for node hello-world.js
} else {
  module.exports = helloWorld // for require('./hello-world.js')
}
```
