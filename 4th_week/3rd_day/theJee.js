function runProgram(input) {
  input = input.trim().split("\n");
  stud1 = input[0].trim().split(" ").map(Number);
  stud2 = input[1].trim().split(" ").map(Number);
  var totalMarks = (totalMarksfunc(input));

  // console.log(stud1);
  // console.log(stud2);
  // console.log(totalMarks);

  if(totalMarks[0] === totalMarks[1]){
    if(stud1[2] == stud2[2]){
      if(stud1[0] > stud2[0]){
        console.log("First");
      } else{
        console.log("Second");
      }
    } else if(stud1[2] > stud2[2]){
      console.log("First");
    } else {
      console.log("Second");
    }    
  } else if (totalMarks[0] > totalMarks[1]){
    console.log("First");
  } else {
    console.log("Second");
  }
  
}
function  totalMarksfunc(input){
  var totalMarks = [];
  for(var i = 0; i < input.length; i++){
    stud=input[i].trim().split(" ").map(Number);
    var sum = 0;
    for(var j = 0; j < stud.length; j++){
      sum += stud[j]
    }
    // console.log(sum);
    totalMarks.push(sum); 
  }
  return totalMarks;
}
  


if (process.env.USER === "neerajrawat") {
  runProgram(`120 80 120
  90 100 130`);
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