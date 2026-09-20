const assert = require('node:assert');
const test = require('node:test');
const { sum, multiply } = require('../math');

test('sum adds numbers correctly', () => {
  assert.strictEqual(sum(1, 2), 3);
});

test('multiply multiplies numbers correctly', () => {
  assert.strictEqual(multiply(2, 3), 6);
});
