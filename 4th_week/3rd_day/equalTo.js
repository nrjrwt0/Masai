function runProgram(input) {
  input = input.trim().split("\n");
  arr = input[1].trim().split(" ").map(Number);
  console.log(presentOrNot(arr));

}
function presentOrNot(arr){
  for(var i = 0 ; i < arr.length; i++){
    if(arr[i] === 42){
      return "Yes";
    } else {
      return "No"
    }
  }
}
if (process.env.USER === "neerajrawat") {
  runProgram(`5
  3 7 0 9 8`);
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