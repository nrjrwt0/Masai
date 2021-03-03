function runProgram(input) {
  input = input.trim().split(`\n`);

  var line = 1;
  for(let i = 0; i < tests; i++){
    var [row,col] = input[line++].trim().split(' ').map(Number);

    var mat = [];
    for(let j = 0; j < row; j++){
      mat.push(input[line++].trim().split(' ').map(Number));
    }
    check(mat,row,col);
  }
function check(mat,row,col){

}
}
if (process.env.USER === "neerajrawat") {
  runProgram(`4 4 11
1 2 1 8
2 2 8 6
8 1 2 5
2 5 8 6`);
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