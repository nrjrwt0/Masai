function runProgram(input){
  // Write code here
  var opt = input.split("-");
  var months = ["January", "Feb", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  for(var i = 0; i < months.length; i++){
    if( i == opt[1]-1){
      opt[1] = months[i] + ",";
    }
  }
  var date="";
  for(i = opt.length - 1; i >= 0; i--){
    date = date + opt[i] + " ";
  }
  console.log(date);
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