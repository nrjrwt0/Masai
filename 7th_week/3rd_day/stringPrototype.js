String.prototype.reverse = function(){
  var rev = "";
  for(let i = this.length - 1; i >= 0; i--){
    rev+= this[i];
  }
  return rev;
}
var newStr = 'masai';
var revStr = newStr.reverse();

console.log(revStr);
 