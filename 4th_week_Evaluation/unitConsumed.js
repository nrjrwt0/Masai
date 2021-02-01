function runProgram(input) {
  input = Number(input.trim());
  
  var fixedCharge = 80;
  input = input - fixedCharge;
  var unit = 0;

  if(input >= 150){
    unit += 50;
    input = input - 150;
    if(input >= 500){
      unit += 100;
      input = input - 500;
      if(input >=0 ){
        unit += input / 10;
      }
    } else{
      unit += input/5;
    }
  } else {
    unit += input/3;
  }
console.log(unit);
}
if (process.env.USER === "neerajrawat") {
  runProgram(`930`);
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