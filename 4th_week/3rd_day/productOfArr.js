function runProgram(input) {
  input = input.trim().split("\n");
  arr=input[1].trim().split(" ").map(Number)
  console.log(productOfArr(arr));

}

function productOfArr(arr){
  var product = 1;
  for(var i = 0; i < arr.length; i++){
    product = product * arr[i];
  }
  return product
}
if (process.env.USER === "neerajrawat") {
  runProgram(`5
  3 5 2 9 4`);
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