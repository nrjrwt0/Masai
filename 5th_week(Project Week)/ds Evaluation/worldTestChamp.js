function runProgram(input) {
  input = input.trim().split("\n");
  var IndPts=Number(input[0]);
  var AusPts=Number(input[1]);
  var IndMtchs=Number(input[2]);
  var AusMtchs=Number(input[3]);
  // console.log(input);
  // console.log(IndPts,AusPts,IndMtchs,AusMtchs);

  if(IndPts > AusPts){
    console.log('India');
  } else if(AusPts > IndPts){
    console.log('Australia');
  } else {
    if(IndMtchs < AusMtchs){
      console.log('India');
    } else if(AusMtchs < IndMtchs){
      console.log('Australia');
    } else {
      console.log('Play another game!');
    }
  }

}
if (process.env.USER === "neerajrawat") {
  runProgram(`500
  500
  12 
  12`);
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