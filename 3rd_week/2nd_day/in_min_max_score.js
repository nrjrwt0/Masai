function runProgram(input){
  var scores = input.split(" ")
  var scores_arr = [];
  for(var i = 0; i < scores.length; i++){
    scores_arr.push(Number(scores[i]));
  }
  var min = scores_arr[0];
  var max = scores_arr[0];
  for( i = 1; i < scores_arr.length; i++){
    if(scores_arr[i] < min){
      min = scores_arr[i];
    }
    if(scores_arr[i] > max){
      max = scores_arr[i];
    }
  }
  console.log("Min - " + min);
  console.log("Max - " + max);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/,"")
 runProgram(read);
});

process.on("SIGINT", function () {
  read = read.replace(/\n$/,"")
  runProgram(read);
  process.exit(0);
});