var obj = {
  arr: [1, 2, 6, 7, 3, 4, 9, 0],
  lessThanItems : function(input){
    var less = [];
    for(var i = 0; i < this.arr.length; i++){
      if(this.arr[i] < input){
        less.push(this.arr[i]);
      }
    }
    return less;
  },
  greaterThanItems : function(input){
    var greater = [];
    for(var i = 0; i < this.arr.length; i++){
      if(this.arr[i] > input){
        greater.push(this.arr[i]);
      }
    }
    return greater;
  }
} 

console.log(obj.lessThanItems(4));
console.log(obj.greaterThanItems(6));
