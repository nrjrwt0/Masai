var arr = ["Apple", "Windows", "Linux", "Kindle", "Quiz"];

var odd = function(el){
  return el.length % 2 == 1;
}
var lenght = function(el){
  return el.length;
}
var sum = function(ac,el){
  return ac + el;
}

var sumOfOddStr = arr.filter(odd).map(lenght).reduce(sum);
console.log(sumOfOddStr);