var expect = require('chai').expect

describe('hello-world method in hello-world.js', function () {
  it('must match Hello World', function(done){
    var helloWorld = require('../hello-world')()
    helloWorld = helloWorld.replace('\n', '')
    expect(helloWorld).to.equal('Hello World')
    done()
  })
})