function runProgram(input) {

  findNoOfConsonant(input)

  function findNoOfConsonant(input){
    let count = 0;
    let vowel = "aeiouAEIOU";

    for(let i = 0; i < input.length;i++){
      let consot = 1;
      for(let j = 0; j < vowel.length; j++){
        if(input[i] == vowel[j]){
          consot = 0;
        }
      }
      if(consot == 1){
        count++;
      }
    }
    console.log(count);
    
  }
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