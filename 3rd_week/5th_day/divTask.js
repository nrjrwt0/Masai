function runProgram(input){
  if(input == 0){
    console.log("-1");
  } else {
    var x = (32 / input);
    var arr = x.toString().split(".");
    if(arr[0] == 0){
      console.log("Too Low");
    } else {
      console.log(arr[0]);
    }
  }
  
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
   runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});