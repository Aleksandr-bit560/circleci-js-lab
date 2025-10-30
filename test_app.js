import { describe, it } from 'node:test';
import assert from 'node:assert';
import { add, multiply } from './app.js';

describe('Math functions', () => {
  it('should add two numbers correctly', () => {
    assert.strictEqual(add(2, 3), 5);
    assert.strictEqual(add(-1, 1), 0);
  });

  it('should multiply two numbers correctly', () => {
    assert.strictEqual(multiply(2, 3), 6);
    assert.strictEqual(multiply(-1, 5), -5);
  });
});
