function runProgram(input) {
  input = input.trim().split("\n");
  var test = input[0]
  var col = 2;
  while(test > 0){
    var arr = input[col].trim().split(" ").map(Number);
    checkConsecutiveEven(arr);
    col=col+2;
    test--
  }
  function checkConsecutiveEven(arr){
      isPresent = 0;
      for(let i = 0; i < arr.length-2; i++){
        if(arr[i]%2 == 0 && arr[i+1]%2 == 0 && arr[i+2]%2 == 0){
          isPresent = 1;
          break;
        }
      }
      if(isPresent == 1){
        console.log('Yes');
      } else {
        console.log('No');
      }
  }

}
if (process.env.USER === "neerajrawat") {
  runProgram(`2
3
1 2 3
5
1 2 4 6 8`);
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