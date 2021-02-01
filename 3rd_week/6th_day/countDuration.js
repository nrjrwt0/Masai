function runProgram(input) {
  input = input.trim().split("\n");
  var noOfCases = Number(input[0]);
  var times = []
  for(var i =1; i <= noOfCases; i++){
    var arr = (input[i].trim().split("\n"));
     times.push(arr[0].trim().split(" ").map(Number));
    } 
  for(i = 0; i < noOfCases; i++){
    var timeDiff = 0
    for(var j = 0; j < times[0].length; j++){
      if(j % 2 == 0 && timeDiff == 0){
        timeDiff = (times[i][j]*60 + times[i][j+1]);
      } else if(j % 2 == 0){
        timeDiff = (times[i][j]*60 + times[i][j+1]) - timeDiff;
      }
    }
    var hour = Math.floor(timeDiff/60);
    var min = timeDiff % 60;
    console.log(hour + " " + min);
  }  
}
if (process.env.USER === "neerajrawat") {
  runProgram(`2
  1 44 2 14
  2 42 8 23`);
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