// This is the content of `hello-world.js` which will pass the tests:

// var helloWorld  = function() {
  // return 'Hello World'
// }
// module.exports = helloWorld // for require('./hello-world.js')

// Bonus (this works as a stand alone application as well):

var helloWorld  = function() {
  return 'Hello World'
}
if (require.main === module) { // this is true when you run this file with node hello-world.js and false when you import it
  console.log(helloWorld()) // for node hello-world.js
} else {
  module.exports = helloWorld // for require('./hello-world.js')
}
