function runProgram(input){
  var arr = input.trim().split(/[\r\n]+/);;
  var price = toNumArray(arr[0]);
  var quantity = toNumArray(arr[1]);
  var totalPrice = 0
  for(var i = 0; i < quantity.length; i++){
    totalPrice = totalPrice + (price[i] * quantity[i]);
  }
  if(totalPrice <= 150000){
    console.log("Possible")
  } else {
    console.log("Not Possible")
  }

}
function toNumArray(input){
  var newArr = input.trim().split(" ");
  var numArray = [];
  for(var i = 0; i < newArr.length; i++){
    numArray.push(Number(newArr[i]));
  }
  return numArray;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
   runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});
// input.trim().split(/[\r\n]+/);