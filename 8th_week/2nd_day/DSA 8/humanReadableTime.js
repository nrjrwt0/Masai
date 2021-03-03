function runProgram(input) {
  input = input.trim().split("\n");
  var arr=input[0].trim().split(" ");
  var time = Number(input[0])

  var mins = time%60; 
  var hrs = (time-mins)/60;
  
  if(hrs == 1){
    hrs = hrs + "hr "
  } else{
    hrs = hrs + "hrs "
  }

  if(mins == 0){
    mins = "00" + "mins";
  } else{
    mins = mins + "mins";
  }
  
  console.log(hrs + mins);
}
if (process.env.USER === "neerajrawat") {
  runProgram(`120`);
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