class Calculator {
  first;
  second;
  constructor(a, b) {
    this.first = a;
    this.second = b;
  }
  add() {
    if (isNaN(this.first) || isNaN(this.second)) throw new Error('Argument not a number');
    return this.first + this.second;
  }
  subtract() {
    if (!isFinite(this.first) || !isFinite(this.second)) throw new Error('Argument not a number');
    return this.first - this.second;
  }
  divide() {
    if (!isFinite(this.first) || !isFinite(this.second)) throw new Error('Argument not a number');
    if (this.second === 0) throw new Error('Division by zero at this level is insane');
    return this.first / this.second;
  }
  multiply() {
    if (!isFinite(this.first) || !isFinite(this.second)) throw new Error('Entries not a number');
    return this.first * this.second;
  }
}

module.exports = Calculator;