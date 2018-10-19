import assert from 'assert';

describe('Basic Mocha String Test', () => {
  it('should return -1 when "Hello" is missing', () => {
    assert.equal(-1, 'Hallo World'.indexOf('Hello'));
  });
  it('should return number of characters in a string', () => {
    assert.equal('Hello'.length, 5);
  });

  it('should return first character of the string', () => {
    assert.equal('Hello'.charAt(0), 'H');
  });
});
