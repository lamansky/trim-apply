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

  it('should give no arguments to a function if all arguments are undefined', function (done) {
    function f () {
      assert.strictEqual(arguments.length, 0)
      done()
    }
    trimApply(f, null, [undefined]) // eslint-disable-line no-undefined
  })

  describe('#new()', function () {
    it('should remove undefined arguments from the end of a constructor call', function () {
      class Cls {
        constructor () {
          assert.strictEqual(arguments.length, 1)
          assert.strictEqual(arguments[0], 'test')
          this.didRun = true
        }
      }
      const cls = trimApply.new(Cls, ['test', undefined]) // eslint-disable-line no-undefined
      assert(cls instanceof Cls)
      assert.strictEqual(cls.didRun, true)
    })

    it('should give no arguments to a constructor if all arguments are undefined', function () {
      class Cls {
        constructor () {
          assert.strictEqual(arguments.length, 0)
          this.didRun = true
        }
      }
      const cls = trimApply.new(Cls, [undefined]) // eslint-disable-line no-undefined
      assert(cls instanceof Cls)
      assert.strictEqual(cls.didRun, true)
    })
  })
})
