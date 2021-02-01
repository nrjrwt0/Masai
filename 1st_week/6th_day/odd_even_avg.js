var arr =  [34, -87, 23, 12, 98, -2, 0];

var odd_count = 0;
var even_count = 0;

var odd_sum = 0;
var even_sum = 0;

for(var i = 0; i < arr.length ; i++){
  if(arr[i] % 2 == 0){
    even_sum = even_sum + arr[i];
    even_count++;
  } else{
    odd_sum = odd_sum + arr[i];
    odd_count++;
  }
}

console.log("Odd Average - " + odd_sum/odd_count);
console.log("Even Average - " + even_sum/even_count);