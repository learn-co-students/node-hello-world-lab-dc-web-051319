# Node Hello World

## Objectives

1. Implement Hello World in Node
1. Run the script from the terminal


## Introduction

In this lab, you'll practice how to run Node scripts from command line. In addition, you'll develop your first Node application—Hello World, the traditional first app in any language.

## Instructions

1. Create file `hello-world.js` and open it in your favorite editor
2. Implement an expression (function with `return`) which returns "Hello World". Be very meticulous about the function output. Having a name for a function or the name of the function don't really matter, because of the next step.
3. Export your expression (function with `return`) with `module.exports = ...` to allow other programs, modules and especially our wonderful Learn lab tests to verify your solution. In other words,  you need to export this expression/function so that our specs have access to this function to test the return value.
5. Install testing dependencies with `npm install` (sometimes you would see `$` which is a symbol that tells you that this is a CLI command, not code). You need to run `npm install` just once for each lab. It will download Mocha, Chai and other dependencies for the tests.
6. Run tests with `npm test`.

Tip: Don't overthink it.

### Extra Info

* [Console in Node official documentation](https://nodejs.org/api/console.html)
