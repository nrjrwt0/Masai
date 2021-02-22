function runProgram(input) {
  var arr=input.trim().split(" ");
  
  // console.log(arr)
  var revStr = "";
  for(let i = arr.length - 1; i >= 0; i--){
    revStr+= arr[i];
    if(i > 0){
      revStr+= " ";
    }
  }
  console.log(revStr);
}
if (process.env.USER === "neerajrawat") {
  runProgram(`A Transformation in education`);
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