function runProgram(input) {
  input = input.trim().split("\n");
  var arr=input[2].trim().split(" ").map(Number)
  // console.log(input);
  var t = Number(input[0]);
  // console.log(arr);
  // var count = 0;

  for(var i = 0; i < arr.length; i++){
    for(var j = i+1; j < arr.length; j++){
      var sum = 0;
      sum = arr[i] + arr[j];
      if(arr[i] == 0){
        // count += arr.length -(i+1);
      }
      if(sum % 2 == 0){
        // console.log(sum);
        console.log(arr[i],arr[j])
        t++;
      }
    }
  }
  console.log(t-1);

}
if (process.env.USER === "neerajrawat") {
  runProgram(`1
  5
  1 2 3 4 5`);
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
