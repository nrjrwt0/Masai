function runProgram(input){
  // Write code here
  var opt = input.split(" ");
  var volume = 1;
  for(var i = 0; i < opt.length; i++){
    volume = volume * opt[i];
  }
  console.log(volume)
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