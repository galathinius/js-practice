describe('sum', () => {
  it('sum of (1)(2) is 3', () => {
    assert.equal(sum(1)(2), 3);
  });

  it('sum of (5)(-1) is 4', () => {
    assert.equal(sum(5)(-1), 4);
  });
});
