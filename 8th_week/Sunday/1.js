function runProgram(input) {
  input = input.trim().split("\n");

  var [row,col] = input[0].trim().split(' ').map(Number);
  
  var arr = [];
  for(var i = 1; i <= row; i++){
    arr.push(input[i].trim().split(' ').map(Number));
  }
  var start = 0
  for(let i = 0; i< col; i++){
    console.log(arr[start][i]);
  }
  start++;
  for(let j = col; i< col; i++){
    console.log(arr[start][i]);
  }

}
if (process.env.USER === "neerajrawat") {
  runProgram(`5 4
  1 1 1 1
  2 2 2 2
  3 3 3 3
  4 4 4 4
  5 5 5 5`);
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