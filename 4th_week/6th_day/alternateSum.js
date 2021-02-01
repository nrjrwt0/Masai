function runProgram(input) {
  input = input.trim().split("\n");
  var arr=input[1].trim().split(" ").map(Number)
  // console.log(input);
  // console.log(arr);

  var returnSumOfAlternate = function(ac,el,i){
    if(i % 2 == 0){
      return ac + el;
    }
    return ac + 0;
  }

  var sumOfAlternate = arr.reduce(returnSumOfAlternate);
  console.log(sumOfAlternate);

}
if (process.env.USER === "neerajrawat") {
  runProgram(`7
  4 5 5 5 6 6 7`);
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