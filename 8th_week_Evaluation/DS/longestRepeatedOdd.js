function runProgram(input) {
  input = input.trim().split("\n");
  var num = +input[0]
  var arr=input[1].trim().split(" ").map(Number)

  var count;
  var max = 0;
  for(let i = 0; i < num; i++){
    count = 0;
    for(let j = i; j < num; j++){
      
      if(arr[j]%2 == 0 || arr[i] != arr[j]){
        break;
      }
      count++;
    }
    if(max < count){
      max = count;
    }
  }
  console.log(max);
}
if (process.env.USER === "neerajrawat") {
  runProgram(`12
  1 1 1 1 2 2 2 2 2 1 1 1`);
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