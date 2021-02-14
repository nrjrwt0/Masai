//object
var obj = {
  id: 1,
  age: 22,
  nameOfStu: "Neeraj"
}
createCopyOfObj(obj);
function createCopyOfObj(obj){
  var newObj = {}
  for(key in obj){
    newObj[key] = obj[key]
  }
  console.log(newObj);
  }


// Array
var arr = [1,2,3,4,5];

console.log(createCopyOfArr(arr))

function createCopyOfArr(arr){
  var newarr = [];
  for(var i = 0; i < arr.length; i++){
    newarr.push(arr[i]);
  }
  return newarr;
}