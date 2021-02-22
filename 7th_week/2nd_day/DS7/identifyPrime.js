function runProgram(input) {
  input = Number(input);

  isPrime(input)

  function isPrime(input){
    var prime = 1;
    for(let i = 2; i <= input/2; i++){
      if(input%i == 0){
        prime = 0;
      }
    }

    if(prime == 1){
      console.log("Yes")
    } else {
      console.log("No")
    }
  }
}
if (process.env.USER === "neerajrawat") {
  runProgram(`2`);
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