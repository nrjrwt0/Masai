var arr = ["apple", "windows", "ubuntu"];

var firChar = function(el){
  return el[0];
}

var firCharArr = arr.map(firChar);
console.log(firCharArr)