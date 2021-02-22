function runProgram(input) {
  
  var magical = ismagicalNo(input);

  if(magical == 1){
    console.log('YES')
  } else{
    console.log('NO')
  }

  function ismagicalNo(input){
    if(input%4 == 0 || input%7 == 0){
      return 1;
    }
  
    for(var i = 0; i < input.length; i++){
      var magicalNo = 0;
      
      if(input[i] == 4  || input[i] == 7){
        magicalNo = 1;
      } else{
        break;
      }
    }
    return magicalNo;
  }

}
if (process.env.USER === "neerajrawat") {
  runProgram(`74`);
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