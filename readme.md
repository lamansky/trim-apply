# trim-apply

Drops undefined arguments from the end of a function call.

Useful if you’re forwarding arguments from one function to another, but the second function has behavior which is affected by the presence of an explicit `undefined` argument.

Accepts an array of arguments, just like [`Function.prototype.apply()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply). If you want to provide an argument list instead, use the [`trim-call`](https://github.com/lamansky/trim-call) module.

## Installation

Requires [Node.js](https://nodejs.org/) 5.0.0 or above.

```bash
npm install trim-apply --save
```

The module exports a single function.

## Usage Example

```javascript
const trimApply = require('trim-apply')

f1('test')

function f1 (a, b) {
  trimApply(f2, this, [a, b])
}

function f2 () {
  arguments.length // 1
}
```

Because of `trimApply()`, the `f2()` function only receives one argument.

Here is the above example repeated _without_ `trimApply()`:

```javascript
f1('test')

function f1 (a, b) {
  f2.apply(this, [a, b])
}

function f2 () {
  arguments.length // 2
}
```

Without `trimApply()`, the undefined `b` argument of `f1()` becomes an explicit second argument for `f2()`.
