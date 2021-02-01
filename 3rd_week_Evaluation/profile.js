function runProgram(input) {
  input = input.trim().split("\n");
  var neededDim=input[0].trim().split(" ").map(Number);
  var submitedDim=input[1].trim().split(" ").map(Number);
  // console.log(neededDim);
  // console.log(submitedDim);
  
  for(var i = 0; i < neededDim.length-1; i++){
    if(neededDim[i] < submitedDim[i] && neededDim[i+1] < submitedDim[i+1]){
      console.log("Upload");
    } else if(neededDim[i] >= submitedDim[i]){
      console.log("Increase Length");
    } else{
      console.log("Increase Width")
    }
      
    }
  }
if (process.env.USER === "neerajrawat") {
  runProgram(`12 14
  14 15`);
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