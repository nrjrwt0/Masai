function runProgram(input) {

  reversal(input)

  function reversal(input){
    var rev = "";
    for(let i =input.length-1 ; i >= 0; i--){
      rev += input[i]; 
    }
    console.log(rev);
  }
  
}
if (process.env.USER === "neerajrawat") {
  runProgram(`masaischool`);
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