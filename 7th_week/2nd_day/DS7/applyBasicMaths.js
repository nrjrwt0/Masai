function runProgram(input) {
  input = input.trim().split("\n");
  var num = Number(input[0]);
  var arr=input[1].trim().split(" ").map(Number)
  // console.log(num);
  // console.log(arr);
  var min = 0;
  var index;
  for(let i = 0; i < num; i++){
    var sum = 0;
    for(let j = 0; j < num; j++){
      if(i==j){
        continue;
      }
      sum += arr[j];
    }
    if(sum % 7 == 0){
      if(min == 0){
        min = arr[i];
        index = i;
      } else if(arr[i] < min){
        min = arr[i];
        index = i;
      }
    } 
  }
  if(index == undefined){
    console.log(-1);
  } else{
    console.log(index);
  }
}
if (process.env.USER === "neerajrawat") {
  runProgram(`10
  0 1 1 0 0 0 0 0 1 1`);
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