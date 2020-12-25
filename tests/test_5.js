const assert = require("assert");
const resolve = require("../tasks/task_5.js");

assert.strictEqual(resolve([1,3,5,6], 5), 2);
assert.strictEqual(resolve([1,3,5,6], 2), 1);
assert.strictEqual(resolve([1,3,5,6], 7), 4);
assert.strictEqual(resolve([1,3,5,6], 0), 0);
assert.strictEqual(resolve([1], 0), 0);
assert.strictEqual(resolve([], 0), 0);