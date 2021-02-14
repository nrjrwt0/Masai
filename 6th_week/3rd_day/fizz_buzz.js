function runProgram(input) {
  input = input.trim().split("\n");
  var t = Number(input[0]);
  // console.log(input);
  for(var i = 1; i <= t; i++){
    var num = Number(input[i]);
    
    for(var j = 1; j <= num ; j++){
      if ( j % 15 == 0){
        console.log("FizzBuzz");
      } else if(j % 3 == 0){
        console.log("Fizz");
      } else if(j % 5 == 0){
        console.log("Buzz");
      } else {
        console.log(j);
      }
    }
  }
}
if (process.env.USER === "neerajrawat") {
  runProgram(`3
  1
  3
  9`);
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