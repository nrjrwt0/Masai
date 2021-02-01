function runProgram(input) {
  input = input.trim().split(" ");
  console.log(masaiDiv(input));
}

function masaiDiv(input){
  var left = Number(input[0]);
  var right = Number(input[1]);
  var k = Number(input[2]);
  count = 0;
  for(var i = left ; i <= right;  i++){
    if(i % k == 0){
      count++
    }
  }
  return count;
}
if (process.env.USER === "neerajrawat") {
  runProgram(`1 10 1`);
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
