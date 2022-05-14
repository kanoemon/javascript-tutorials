let calculator = {
  a: 0,
  b: 0,
  read: function() {
    this.a = Number(prompt("a?"));
    this.b = Number(prompt("b?"));
  },
  sum: function() {
    return this.a + this.b;
  },
  mul: function() {    
    return this.a * this.b;
  }
};

calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );
