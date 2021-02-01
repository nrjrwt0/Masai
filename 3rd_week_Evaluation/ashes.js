function runProgram(input) {
  var arr=input.trim().split(" ").map(Number)
  if(arr[0] === arr[1]){
    console.log("Tie");
  } else if(arr[0] > arr[1]){
    console.log("Australia");
  } else {
    console.log("England")
  }

}
if (process.env.USER === "neerajrawat") {
  runProgram(`46 67`);
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