var test = require('tape'),
  cp = require('child_process')

test('node hello-world', function (t) {
  t.plan(2)
  child = cp.exec('node hello-world',
  function (error, stdout, stderr) {
    console.log('stdout: ' + stdout)
    console.log('stderr: ' + stderr)
    t.equal(stderr, '')
    if (error !== null) {
      console.log('exec error: ' + error)
    }
    stdout = stdout.replace('\n','')
    t.equal(stdout, 'Hello World')
  })
})
