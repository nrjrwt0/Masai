var arr = ["Quick", "Brown", "Fox"];
var str = arr[0];

for(var i = 1; i < arr.length; i++){
  str = str + "," + arr[i];
}
console.log(str);