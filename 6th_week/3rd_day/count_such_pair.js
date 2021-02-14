function runProgram(input) {
  input = input.trim().split("\n");
  var arr0=input[0].trim().split(" ").map(Number);
  var target = arr0[1];
  var arr=input[1].trim().split(" ").map(Number);
  // console.log(target);
  // console.log(arr);
  
  var count = 0;

  for(var i = 0; i < arr.length; i++){
    for(var j = i+1; j < arr.length; j++){
      if(arr[i]+arr[j] == target){
        count++;
        // console.log(arr[i]);
        // console.log(arr[j]);
      }
    }
  }
  console.log(count);
}
if (process.env.USER === "neerajrawat") {
  runProgram(`5 9
  3 0 6 2 7`);
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