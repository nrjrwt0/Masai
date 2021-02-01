var num = 5;

var div = 2;
var prime = 1
while( div <= num/2){
  if(num % div == 0){
    prime = 0;
  }
  div++
}
if(prime == 1){
  console.log("Prime Number");
} else {
  console.log("Not Prime Number");
}