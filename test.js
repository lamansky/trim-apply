'use strict'

const assert = require('assert')
const trimApply = require('.')

describe('trimApply()', function () {
  it('should remove undefined arguments from the end of a function call', function (done) {
    function f () {
      assert.strictEqual(arguments.length, 1)
      done()
    }
    trimApply(f, null, ['test', undefined]) // eslint-disable-line no-undefined
  })

  it('should apply no arguments to a function if all arguments are undefined', function (done) {
    function f () {
      assert.strictEqual(arguments.length, 0)
      done()
    }
    trimApply(f, null, [undefined]) // eslint-disable-line no-undefined
  })
})
