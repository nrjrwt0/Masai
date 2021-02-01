function runProgram(input) {
  input = input.trim().split("\n");
  var arr=input[1].trim().split(" ").map(Number)
  // console.log(input);
  // console.log(arr);
  
  var addArr = function(ac,el){
    return ac+el;
  }
  function isGreaterThan100(sum){
    if(sum > 100){
      return "Greater";
    }
    else{
      return "Lesser";
    }
  }
  var sumOfArr = arr.reduce(addArr);
  // console.log(sumOfArr);
  console.log(isGreaterThan100(sumOfArr));

}
if (process.env.USER === "neerajrawat") {
  runProgram(`5
  21 24 1 54 0`);
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