function runProgram(input){
  var arr = input.trim().split(/[\r\n]+/);
  var ticketClassRate =toNumArray(arr[0]);
  var numOfTicket =toNumArray(arr[1]);
  var total_amount = 0;
  for(var i = 0; i < ticketClassRate.length; i++){
    total_amount = total_amount + ticketClassRate[i] * numOfTicket[i];
  }
  console.log(total_amount);
}
function toNumArray(input){
  var newArr = input.trim().split(" ");
  var numArr = [];
  for(var i = 0; i < newArr.length; i++){
    numArr.push(Number(newArr[i]))
  }
  return numArr;
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
