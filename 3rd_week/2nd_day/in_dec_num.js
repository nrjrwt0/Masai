function runProgram(input){
  // Write code here
  var opt = input.split(".");
  var count = 0;
  if(opt.length != 1){
    for(var i = 0; i < opt[1].length; i++){
      count ++;
    }
  }
  console.log(count);
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