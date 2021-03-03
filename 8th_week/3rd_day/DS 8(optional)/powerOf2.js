function runProgram(input) {
  input = input.trim().split("\n");
  var test = input[0];
  
  //intializing index = 1 to get input
  var index = 1;

  //intializing num To take input in this variable
  var num;
  var istrue;
  while(test > 0){
    
    //Taking input one by one
    var num = input[index];

    //Invoking Function to check is num power of 2 or not
    istrue = isPowerOf2(num);
    if(istrue == true){
      console.log("True");
    } else {
      console.log("False");
    }

    //increasing n counter so we can get all the inputs
    index++;
    //Decreasing test so we will only get number of test cases which are given
    test--;
  }


  function isPowerOf2(num){

    istrue = true;

    //If any number is negative it will become false
    if(num < 0){
      return false;
    }

    //if num is greater than 2 then this loop will run becuase 1 and 2 are already power of 2. 2^0 = 1 and 2 
    while(num > 2){

    // for power of 2... let take 8 = 2*2*2;
    //Means when we divide any no which is power of 2 we will get always get again a power of 2 and this no is also even expect 1
      num = num/2;
      if(num == 1){
        break;
      }
      if (num % 2 != 0){
        istrue = false;
        break;
      }
    }
    return istrue
  }
}
if (process.env.USER === "neerajrawat") {
  runProgram(`2
6701
1`);
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