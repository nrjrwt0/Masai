function runProgram(input) {
  input = input.trim().split("\n");
  var a = Number(input[0]);
  var b = Number(input[1]);
  var arr=input[2].trim().split(" ").map(Number)
  // console.log(a,b);
  // console.log(arr);
  console.log(swaparr(a,b, arr));

  function swaparr(a,b,arr){
    var c = arr[a];
    arr[a] = arr[b];
    arr[b] = c;
    return arr;
  }

}
if (process.env.USER === "neerajrawat") {
  runProgram(`0
  1
  1 2 3`);
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