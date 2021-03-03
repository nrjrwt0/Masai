function runProgram(input) {
   input = input.trim().split(" ").map(Number);
  var n = Number(input[0]);
  var m = Number(input[1]);

  for(let i = 1; i <= n; i++){
    var row = "";
    for(let j = 1; j <= m; j++){
      if(i %2 == 1){
        row = row + "#"
        } else{
          if(j == 1 && i%4 == 0){
            row = row + "#";
          }else if(j == m && i%4 != 0){
            row = row + "#";
          } else {
            row = row + ".";
          }
        }
      }
      console.log(row);
    } 
  }




  // console.log(n);
  // console.log(m);

if (process.env.USER === "neerajrawat") {
  runProgram(`9 9`);
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