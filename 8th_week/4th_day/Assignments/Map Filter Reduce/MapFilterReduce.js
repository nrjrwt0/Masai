var start = 25;
var arr = [];
for(let i = 0; i <= 25; i++){
  arr.push(start);
  start++;
}


// Using Normal Function
// 1. Map
var mapArr1 = arr.map(function(el){
  return el*2;
})
// 2. Filter
var filterArr1 = arr.filter(function(el){
  return el>35;
})
// 3. Reduce
var reduceArrSum1 = arr.reduce(function(ac,el){
  return ac+el;
})

console.log(mapArr1);
console.log(filterArr1);
console.log(reduceArrSum1);


// Using Arrow Function
// 1. Map
var mapArr2 = arr.map((el) => {
  return el*2;
})
// 2. Filter
var filterArr2 = arr.filter((el) => {
  return el>35;
})
// 3. Reduce
var reduceArrSum2 = arr.reduce((ac,el) =>{
  return ac+el;
})

console.log(mapArr2);
console.log(filterArr2);
console.log(reduceArrSum2);