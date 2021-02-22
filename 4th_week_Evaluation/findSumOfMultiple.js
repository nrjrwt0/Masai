function runProgram(input) {
  input=input.trim().split(" ").map(Number)

  var n = input[0];
  var k = input[1];
  var y = input[2];
  var sum = 0;
  for(let i = 1; i <= k; i++){
    var mult = i*n;
    if(mult % y == 0){
      sum+=mult;
    }
  }
  console.log(sum);
}
if (process.env.USER === "neerajrawat") {
  runProgram(`3 10 5`);
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