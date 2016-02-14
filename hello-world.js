
helloWorld  = function() {
  return 'Hello World'
}
if (require.main === module) {
  console.log(helloWorld())
} else {
  module.exports = helloWorld
}