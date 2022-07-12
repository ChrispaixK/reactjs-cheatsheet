const Calculator = require('./calculator');

describe('add()', () => {
  test('should return the sum of two numbers', () => {
    // Arrange
    const a = 4;
    const b = 3;

    // Act
    const calculator = new Calculator(a, b);
    const sum = calculator.add();

    // Assert
    expect(sum).toBe(a + b);
  });

  test('should throw error for non-number arguments', () => {
    // Arrange
    const a = 'r';
    const b = 'b';

    // Act
    const calculator = new Calculator(a, b);
    const actual = () => {
      calculator.add();
    };

    // Assert
    expect(actual).toThrowError();
  });
});

describe('subtract()', () => {
  test('should return the difference of two numbers', () => {
    // Arrange
    const a = 4;
    const b = 3;

    // Act
    const calculator = new Calculator(a, b);
    const sum = calculator.subtract();

    // Assert
    expect(sum).toBe(a - b);
  });

  test('should throw error for non-number arguments', () => {
    // Arrange
    const a = 'r';
    const b = 'b';

    // Act
    const calculator = new Calculator(a, b);
    const actual = () => {
      calculator.subtract();
    };

    // Assert
    expect(actual).toThrowError();
  });
});

describe('multiply()', () => {
  test('should return the product of two numbers', () => {
    // Arrange
    const a = 4;
    const b = 3;

    // Act
    const calculator = new Calculator(a, b);
    const sum = calculator.multiply();

    // Assert
    expect(sum).toBe(a * b);
  });

  test('should throw error for non-number arguments', () => {
    // Arrange
    const a = 'r';
    const b = 'b';

    // Act
    const calculator = new Calculator(a, b);
    const actual = () => {
      calculator.multiply();
    };

    // Assert
    expect(actual).toThrowError();
  });
});

describe('divide()', () => {
  test('should return the quotient of two numbers', () => {
    // Arrange
    const a = 4;
    const b = 3;

    // Act
    const calculator = new Calculator(a, b);
    const sum = calculator.divide();

    // Assert
    expect(sum).toBe(a / b);
  });

  test('should throw error for non-number arguments', () => {
    // Arrange
    const a = 'r';
    const b = 'b';

    // Act
    const calculator = new Calculator(a, b);
    const actual = () => {
      calculator.divide();
    };

    // Assert
    expect(actual).toThrowError();
  });

  test('should throw error for divisor 0', () => {
    // Arrange
    const a = 5;
    const b = 0;

    // Act
    const calculator = new Calculator(a, b);
    const actual = () => {
      calculator.divide();
    };

    // Assert
    expect(actual).toThrowError();
  });
});