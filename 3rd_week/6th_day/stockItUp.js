function runProgram(input) {
  // Write code here
  var quant = [5, 2, 2, 3, 2, 5, 2]
  var priceOne = [110, 120, 42, 53, 40, 32, 126];
  var price = [];
  for(var i = 0; i < quant.length; i++){
    price.push(quant[i]*priceOne[i]);
  }

  input = input.trim().split("\n");
  var weeks = Number(input[0]);
  var items = input[1].trim().split(" ").map(Number);
  var Amount = 0
  for(var i = 0; i < items.length; i++){
    Amount += items[i]*price[i];
  }
  console.log(weeks*Amount);
}
if (process.env.USER === "neerajrawat") {
  runProgram(`4
  0 1 1 1 0 0 1`);
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