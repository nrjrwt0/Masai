function runProgram(input) {
  input = Number(input);
  console.log(grade(input));
}
function grade(input){
  if(input == 100){
    return "A";
  } else if ( input >= 90){
    return "B";
  } else if ( input >= 80){
    return "C";
  } else {
    return "F";
  }
}
if (process.env.USER === "neerajrawat") {
  runProgram(`80`);
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