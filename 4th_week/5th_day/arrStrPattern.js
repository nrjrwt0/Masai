var arr = ["apple", "windows", "ubuntu", "cola", "system"];

var checkStartOrEndWithA = function(el){
  return (el[0] == "a" || el[el.length-1] == "a")
}

var startOrEndWithA = arr.filter(checkStartOrEndWithA);

console.log(startOrEndWithA);