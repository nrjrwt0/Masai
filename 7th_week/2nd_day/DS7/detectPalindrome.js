
// function runProgram(input) {
//   var len = input.length;
//   input = Number(input);
//   var check = input;
//   // console.log(len);
//   isPalindrome(input)

//   function isPalindrome(input){
//     var rev = "";
//     for(let i = len; i > 0; i--){
//       let rem = (input%10)
//       input = Math.floor(input / 10);
//       rev += rem 
//     }
//     if(check == rev){
//       console.log("Yes");
//     } else {
//       console.log("No");
//     }
//   }
  
// }

function runProgram(input) {

  isPalindrome(input)

  function isPalindrome(input){
    var rev = "";
    for(let i =input.length-1 ; i >= 0; i--){
      rev += input[i]; 
    }
    if(input == rev){
      console.log("Yes");
    } else {
      console.log("No");
    }
  }
  
}
if (process.env.USER === "neerajrawat") {
  runProgram(`12212`);
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