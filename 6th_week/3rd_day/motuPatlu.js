function runProgram(input){
  var number= Number(input);
  if(number % 5 == 0){
    console.log(number/5);
  } else {
    console.log(((number-(number%5))/5) + 1);
  }

}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
read += input;
});
process.stdin.on("end", function () {
read = read.replace(/\n$/, "");
runProgram(read);
});
process.on("SIGINT", function () {
read = read.replace(/\n$/, "");
runProgram(read);
process.exit(0);
});

// var namee = undefined;
// var namee;
// console.log(namee)

// console.log(typeof(null));
// console.log(typeof(undefined));

// var  arr1 = [1,2,3];
// var  arr2 = [1,2,3];
// var  arr1 = [];
// var  arr2 = [];

// var obj1 = {};
// var obj2 = {};
// if(obj1 == obj2){
//   console.log("yes")
// } else{
//   console.log("no")
// }