function runProgram(input) {
  input = input.trim().split("\n");
  var arr=input[1].trim().split(" ").map(Number)
  // console.log(input);
  // console.log(arr);
  console.log(till42(arr)) ;
  
  function till42(arr){
    var sum = 0;
  for(var i = 0; i <arr.length; i++){
    if(arr[i] == 42){
      sum += arr[i];
      break;
    } else {
      sum+=arr[i];
    }
  }
  return sum
  } 
}
if (process.env.USER === "neerajrawat") {
  runProgram(`7
  23 32 1 0 -32 5 42 6 8`);
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