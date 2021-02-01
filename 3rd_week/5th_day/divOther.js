function runProgram(input){
  if(input == 0){
    console.log("-1");
  } else {
    var x =Math.floor(32 / input);
    if(x === 0){
      console.log("Two Low");
    } else {
      console.log(x);
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