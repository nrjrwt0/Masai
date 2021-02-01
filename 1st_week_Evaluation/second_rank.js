var arr = [5, 4, 3, 2, 1];

var max = arr[0];

for(var i = 1; i < arr.length; i++){
  if(arr[i] > max){
    max = arr[i];
  } else{
    var sec_max = arr[i];
  }
}
for(var i = 0; i < arr.length; i++){
  if(arr[i] > sec_max && arr[i] != max ){
    sec_max = arr[i];
  }
}
console.log(sec_max);