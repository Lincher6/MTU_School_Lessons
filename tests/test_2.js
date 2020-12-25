const assert = require("assert");
const resolve = require("../tasks/task_2.js");

assert.strictEqual(resolve(121), true);
assert.strictEqual(resolve(-121), false);
assert.strictEqual(resolve(10), false);
assert.strictEqual(resolve(-101), false);
assert.strictEqual(resolve(0), true);