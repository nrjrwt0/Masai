function runProgram(input) {
  input = input.trim().split("\n");
  var given=input[0].trim().split(" ").map(Number);
  var row = given[0];
  var column = given[1];

  var arr = [];
  var subArr;
  for(let i = 1; i <= row; i++){
      subArr = input[i].trim().split(" ").map(Number);
     arr.push(subArr);
  }


for(let i = 0; i < column; i++){
  var newRow = ""
  for(let j = 0; j < row; j++){
    newRow+=(arr[j][i]);
    if(j < row-1){
      newRow+=" "
    }
  }
  console.log(newRow);
}


}
if (process.env.USER === "neerajrawat") {
  runProgram(`5 4
  0 0 0 0
  1 1 1 1
  2 2 2 2
  3 3 3 3
  4 4 4 4`);
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