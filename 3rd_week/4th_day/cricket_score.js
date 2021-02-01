function runProgram(input){
 var arr = input.trim().split(" ")
 var num_arr = [];
 for(var i = 0; i < arr.length; i++){
   num_arr.push(Number(arr[i]));
 }
 var score = 0;
 for(var i = 0; i < num_arr.length; i++){
   if(i == 4){
     score = score + num_arr[4] * 6
   } else {
      score = score + (num_arr[i]* (i + 1))
    }
 }
 console.log(score);
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
