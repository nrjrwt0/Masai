function runProgram(input) {
  input = input.trim().split("\n");
  // var nums = Number(input[0]);
  var arr=input[1].trim().split(" ").map(Number)
  // console.log(nums);
  // console.log(arr);
 console.log(sumOfNum(arr)) 

  function sumOfNum(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
      if(arr[i] == 1){
        // console.log(i+1);
        sum += (i+1);
      }
    }
    return sum
  }
  }
if (process.env.USER === "neerajrawat") {
  runProgram(`5
  0 1 1 1 1`);
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