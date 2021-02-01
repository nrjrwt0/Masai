var number = [9,34,56,72];

number.forEach(function(el){
  console.log("square of" + el + "is" + el ** 2);
})


var double = function(el){
  return el * 2;
}

var double_num = number.map(double);
console.log(double_num);

var odd = function(el){
  return el % 2 == 1;
}

var odd_num = number.filter(odd);
console.log(odd_num);


var product = function(ac,el){
  return ac * el;
}
// var product_num = number.reduce(product,1);
// console.log(product_num);

//OR

var product_num = number.reduce(product);
console.log(product_num);


var sum_num = function(ac, el){
  return ac + el;
}

var sum_of_odd = number.filter(odd).reduce(sum_num);
console.log(sum_of_odd);



var divBy3 = function(el){
  return (el % 3 == 0);
}

var cubes = function(el){
  return el ** 3;
}

var sumOfDiv3Cubes = number.filter(divBy3).map(cubes).reduce(sum_num);

console.log(sumOfDiv3Cubes)