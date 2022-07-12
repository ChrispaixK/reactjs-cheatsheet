const capitalizeStr = require('./capitalizeStr');

test('Doest is exist', () => {
  expect(capitalizeStr("Hello")).toBeDefined();
});

test('should return 1st letter capitalized', () => {
  // Arrange
  const str = 'Ethiopia';

  // Act
  const x = capitalizeStr(str);

  // Assert
  expect(x).toBe(str[0].toUpperCase() + str.slice(1));
});