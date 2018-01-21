'use strict'

const rtrimArray = require('rtrim-array')

module.exports = (fn, thisArg, args) => fn.apply(thisArg, rtrimArray(args))
