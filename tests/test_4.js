const assert = require("assert");
const resolve = require("../tasks/task_4.js");

arr1 = [2,3,1,3,2,4,6,7,9,2,19];
arr2 = [2,1,4,3,9,6];
result = [2,2,2,1,4,3,3,9,6,7,19]

assert.notStrictEqual(resolve(arr1, arr2), result);
assert.strictEqual(resolve(arr1, arr2), arr1);