function runProgram(input) {
  input = input.trim().split("\n");
  var num = Number(input[0]);
  var arr=input[1].trim().split(" ").map(Number)
  var sum = 0;
  for(let i =0 ; i < num; i++){
    for(let j =i+1 ; j < num; j++){
      var prime = 1;
      var diff = arr[j] - arr[i];
      if(diff < 0){
        diff = -diff;
      }
      for(let k = 2; k <= (j-i)/2; k++){
        if((j-i)%k == 0){
          prime = 0;
        }
      } 
      if(prime == 1 && (j-i)!=1){
        // console.log(i,j);
        sum+= (diff);
      }
    }
  }
  console.log(sum);
}
if (process.env.USER === "neerajrawat") {
  runProgram(`6
  1 2 3 5 7 12`);
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