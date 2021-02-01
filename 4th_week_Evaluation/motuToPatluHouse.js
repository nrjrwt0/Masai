function runProgram(input) {
  input = Number(input.trim());
  
 console.log(numOfSteps(input));

  function numOfSteps(input){
    var num = 0
    var steps = [1,2,3,4,5];
    for(var i = steps.length - 1; i >= 0; i--){
      // console.log(Math.floor(input / steps[i]));
      num += Math.floor(input / steps[i]);
      input = input % steps[i];
    }
  return(num);
  }
}
if (process.env.USER === "neerajrawat") {
  runProgram(`4`);
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