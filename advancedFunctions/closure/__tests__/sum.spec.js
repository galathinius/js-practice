const sum = require('../sum');

describe('sum of two numbers', () => {
  test('calculate sum of two numbers', () => {
    expect(sum(2)(3)).toEqual(5);
    expect(sum(-1)(5)).toEqual(4);
  });
});
