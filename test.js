import mocha from 'mocha'
import { assert } from 'chai'
import { calculate } from './index'

describe('Calculator', () => {
  it('adds 2 numbers', () => {
    const entries = ['1', '+', '2']
    const result = calculate(entries)
    assert.equal(result, 3);
  });

  it('adds 4 numbers', () => {
    const entries = ['1', '+', '2', '+', '3', '+', '4']
    const result = calculate(entries)
    assert.equal(result, 10);
  });

  it('multiplies and adds', () => {
    const entries = ['1', '+', '2', '*', '3']
    const result = calculate(entries)
    assert.equal(result, 7);
  });
});