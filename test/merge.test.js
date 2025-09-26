const test = require('node:test');
const assert = require('node:assert/strict');
const { merge } = require('../dist/src/merge.js');

// normal mixed arrays
test('merge three arrays with normal values', () => {
  const c1 = [9, 7, 5, 2, 1];
  const c2 = [0, 1, 3, 4, 10];
  const c3 = [0, 2, 2, 6, 8];
  const result = merge(c1, c2, c3);
  assert.deepEqual(result, [0,0,1,1,2,2,2,3,4,5,6,7,8,9,10]);
});

// include negatives
test('merge arrays with negative numbers', () => {
  const c1 = [3, 0, -5];
  const c2 = [-10, -2, 1];
  const c3 = [-3, 2, 4];
  const result = merge(c1, c2, c3);
  assert.deepEqual(result, [-10, -5, -3, -2, 0, 1, 2, 3, 4]);
});

// some empty arrays
test('merge when one array is empty', () => {
  const c1 = [5, 1];
  const c2 = [];
  const c3 = [0, 2, 3];
  const result = merge(c1, c2, c3);
  assert.deepEqual(result, [0,1,2,3,5]);
});
