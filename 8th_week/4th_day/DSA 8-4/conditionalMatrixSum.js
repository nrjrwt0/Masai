function runProgram(input) {
  input = input.trim().split("\n");
  var given=input[0].trim().split(" ").map(Number);
  var row = given[0];
  var column = given[1];

  var arr = [];
  var subArr;
  for(let i = 1; i <= row; i++){
      subArr = input[i].trim().split(" ").map(Number);
     arr.push(subArr);
  }
var sum = 0;
for(let i = 0; i < row; i++){
  for(let j = 0; j < column; j++){
    if(arr[i][j]%3 == 0){
      sum+=arr[i][j]
    }
  }
}
console.log(sum);
}
if (process.env.USER === "neerajrawat") {
  runProgram(`2 3
3 1 8
2 6 0`);
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