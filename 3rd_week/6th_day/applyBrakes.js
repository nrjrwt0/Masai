function runProgram(input) {
  // Write code here
  input = input.trim().split(" ");
  var speed = Number(input[0]) / Number(input[1]);
  if(speed > 40){
    console.log("Apply Brake");
  } else {
    console.log("Keep Going")
  }
}
if (process.env.USER === "neerajrawat") {
  runProgram(`100 2`);
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