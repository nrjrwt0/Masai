function runProgram(input) {
  input = input.trim().split("\n");
  arr=input[1].trim().split(" ").map(Number)
  console.log(countNeg(arr));

}
function countNeg(arr){
  var count = 0;
  for(var i = 0; i< arr.length; i++){
    if(arr[i] < 0){
      count++ ;
    }
  }
  return count
}
if (process.env.USER === "neerajrawat") {
  runProgram(`5
  -3 0 -5 9 8`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}