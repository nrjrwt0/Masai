function runProgram(input) {
  input=input.trim().split(" ").map(Number)

  var n = input[0];
  var m = input[1];

  var max = 0;
  if(n>m){
    max = n;
  }else {
    max = m;
  }

  var count = 0;
  for(let i = 0; i <= max; i++){
    for(let j = 0; j <= max; j++){
      if(i**2 + j == n && j**2 + i == m){
        // console.log(i,j);
        count++;
      }
    }
  }
  console.log(count);
  
}
if (process.env.USER === "neerajrawat") {
  runProgram(`9 3`);
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