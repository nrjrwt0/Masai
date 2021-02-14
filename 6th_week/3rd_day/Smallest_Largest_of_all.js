function runProgram(input) {
  input = input.trim().split("\n");
  var arr=input[1].trim().split(" ").map(Number)
  // console.log(input);
  // console.log(arr);
  var min = arr[0];
  var max = arr[0];
  for(var i = 1; i < arr.length; i++){
    if(min > arr[i]){
      min = arr[i];
    } else if(max < arr[i]){
      max = arr[i]
    }
  }
  console.log(min);
  console.log(max);

}
if (process.env.USER === "neerajrawat") {
  runProgram(`4
  -2 0 8 4`);
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