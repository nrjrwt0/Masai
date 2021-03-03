function runProgram(input) {
  input = input.trim().split("\n");

  var arr = [];
  var subArr;
  for(let i = 0; i < 3; i++){
      subArr = input[i].trim().split(" ");
     arr.push(subArr);
  }
  console.log(result(arr));

  function result(){
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 1; j++){
        if(arr[i][j] == arr[i][j+1] && arr[i] [j+1] == arr[i][j+2]){
          return (arr[i][j]);
        }
      }
    }
    for(let i = 0; i < 1; i++){
      for(let j = 0; j < 3; j++){
        if(arr[i][j] == arr[i+1][j] && arr[i+1][j] == arr[i+2][j]){
          return (arr[i][j]);
        }
      }
    }

    for(let i = 0; i < 1; i++){
      for(let j = 0; j < 1; j++){
        if(arr[i][j] == arr[i+1][j+1] && arr[i+1][j+1] == arr[i+2][j+2]){
          return (arr[i][j]);
        }
      }
    }

    for(let i = 0; i >= 0; i++){
      for(let j = 2; j >= 2; j--){
        if(arr[i][j] == arr[i+1][j-1] && arr[i+1][j-1] == arr[i+2][j-2]){
          return (arr[i][j]);
        }
      }
    }
    return "Tie"
  }
}
if (process.env.USER === "neerajrawat") {
  runProgram(`o o x
o x x
x o o`);
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