function runProgram(input){
  var arr = input.split(/[\r\n]+/); 
  var new_str = [];
  new_str.push(arr[0]);
  for(var i = 1; i < arr.length; i++){
    var one = arr[i].split(" ");
    if(one[1] == new_str){
      console.log(one[0]);
    }
  }
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
