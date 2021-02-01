var recObj = {
  length: 12,
  breadth: 8,
  area: function(){
    return this.length * this.breadth;
  },
  perimeter: function(){
    return 2 * (this.length + this.breadth);
  }
}

console.log("Area = " + recObj.area());
console.log("Perimeter = " + recObj.perimeter());