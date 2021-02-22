function runProgram(input) {
  input = input.trim();
  console.log(input);

  // masaischool

  var vowel = "aeiouAEIOU";
  var count = 0;
  for(var i = 0; i < input.length; i++){
    var flag = 0;
    for(var j = 0; j < vowel.length; j++){

      if(input[i] == vowel[j]){
        flag = 1;
        break;
      }
    }
    if(flag == 0){
      count++;
    }
  }
  console.log(count);
}
if (process.env.USER === "neerajrawat") {
  runProgram(`masaischool`);
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