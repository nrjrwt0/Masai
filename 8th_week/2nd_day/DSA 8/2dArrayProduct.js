function runProgram(input) {
  input = input.trim().split("\n");
  var given=input[0].trim().split(" ").map(Number);
  var row = given[0];
  var column = given[1];
  var givenProduct = given[2];

  var arr = [];
  var subArr;
  for(let i = 1; i <= row; i++){
      subArr = input[i].trim().split(" ").map(Number);
     arr.push(subArr);
  }
// console.log(arr);

  //Horizontally
  var count = 0;
  for(let i = 0; i < row; i++){
    for(let j = 0; j < column-2; j++){
      if(arr[i][j]* arr[i][j+1] * arr[i][j+2] == givenProduct){
        
        count++;
      }
    }
  }
  //Vertically
  for(let i = 0; i < column; i++){
    for(let j = 0; j < row-2; j++){
      if(arr[j][i] * arr[j+1][i] * arr[j+2][i] == givenProduct){
        count++;
      }
    }
  }
  //Diagonal
  for(let i = 0; i < row-2; i++){
    for(let j = 0; j < column-2; j++){
      if(arr[i][j] * arr[i+1][j+1] * arr[i+2][j+2] == givenProduct){
        count++;
      }
    }
  }
  for(let i = 0; i < row-2; i++){
    for(let j = column-1; j >= 2; j--){
      if(arr[i][j] * arr[i+1][j-1] * arr[i+2][j-2] == givenProduct){
        count++;
      }
    }
  }
console.log(count);

}
if (process.env.USER === "neerajrawat") {
  runProgram(`3 3 6
3 2 1
2 2 2
1 5 1`);
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