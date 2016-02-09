var expect = require('chai').expect,
  cp = require('child_process')

describe('node hello-world', function () {
  it('must be 2.14.15 or greater', function(done){
    child = cp.exec('node hello-world',
    function (error, stdout, stderr) {
      expect(stderr).to.equal('')
      if (error !== null) {
        console.log('exec error: ' + error)
      }
      stdout = stdout.replace('\n','')
      expect(stdout).to.equal('Hello World')
      done()
    })
  })
})