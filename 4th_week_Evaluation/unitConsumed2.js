function runProgram(input) {
  input = Number(input.trim());
  
  var fixedCharge = 80;
  input = input - fixedCharge;
  var unit = 0;

  var unitPerPrice = [3,5,10];
  var unitLimit = [50,100];

  var price1 = unitPerPrice[0]*unitLimit[0];
  var price2 = unitPerPrice[1]*unitLimit[1];
  var unit1 = unitLimit[0]
  var unit2 = unitLimit[1]
  // var unit3 = unitLimit[2]

  console.log(unit1);
  console.log(unit2);
  console.log(unit3);
  
  if(input >= price1){
    unit += unit1;
    input = input - price1;
    if(input >= price2){
      unit += unit2;
      input = input - price2;
      if(input >=0 ){
        unit += input / unit3;
      }
    } else{
      unit += unit2;
    }
  } else {
    unit += unit1;
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