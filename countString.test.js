const countLeters= require('./countString.js')

test('Count letters in a string',() => {
  expect(countLeters('Hello')).toBeDefined();
})

test('Count letters in a string',() => {
  expect(countLeters('Hello')).toBe(5);
})