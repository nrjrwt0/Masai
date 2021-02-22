function runProgram(input) {
  var max = 0;
  for(var i = 0; i < input.length; i++){
    for(var j = 0; j <= input.length; j++){
      var sub = input.substring(i,j);
      var check = isPalindrome(sub);

      if(check == 1){
        if(sub.length > max){
          max = sub.length;
        }
      }

      function isPalindrome(sub){
        var rev = "";
        for(let i = sub.length-1; i >= 0; i--){
           rev += sub[i];
        }
        if(rev == sub){
          return 1;
        } else{
          return 0;
        }
        
      }
    }
  }
  console.log(max);
}
if (process.env.USER === "neerajrawat") {
  runProgram(`xaaaax`);
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