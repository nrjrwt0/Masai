function runProgram(input) {
  var num=Number(input.trim())
  // console.log(num);

  console.log(returnSumOfOdd(num));

  function returnSumOfOdd (num){
    var sum = 0;
    for(var i = 1; i <= num; i++){
      if(i % 2 == 1){
        sum += i;
      }
    }
    return(sum);
  }
}
if (process.env.USER === "neerajrawat") {
  runProgram(`7`);
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