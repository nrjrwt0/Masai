function runProgram(input) {
  input = input.trim().split("\n");
  console.log(winner(input))

function winner(input){
  team1 = input[0].trim().split(" ").map(Number);
  team2 = input[1].trim().split(" ").map(Number);

  for(var i = 0; i < team1.length; i++){
    if(team1[i] == team2[i]){
      continue;
    } else if(team1[i] > team2[i]){
      return "New Zealand";
    } else {
      return "England";
    }
  }
}
  
}
if (process.env.USER === "neerajrawat") {
  runProgram(`241 16 21
  241 15 26`);
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