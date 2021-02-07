function runProgram(input) {
  input = input.trim().split("\n");
  var arr=input[1].trim().split(" ").map(Number)
  var k = Number(input[2]);
  // console.log(input);
  // console.log(arr);
  // console.log(k);
  var count = 0;
  for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
      count++;
    }
  }
  if(count > k){
    console.log('Nice Array');
  } else{
    console.log('Bad Array');
  }



}
if (process.env.USER === "neerajrawat") {
  runProgram(`5
  1 2 3 4 5
  1`);
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