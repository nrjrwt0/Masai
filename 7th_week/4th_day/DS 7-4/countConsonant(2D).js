function runProgram(input) {
  input = input.trim().split("\n");
  var test = input[0].trim();
  var data = [];
  for (let i = 1; i < input.length; i++) {
    var arr = input[i].trim().split(" ");
    data.push(arr);
  }
  var newArr = [];
  var index = 0;
  for (let t = 0; t < test; t++) {
    var subArr = [];
    var f = Number(data[index][0]); //3
    for (let j = index + 1; j <= index + f; j++) {
      subArr.push(data[j]);
    }
    newArr.push(subArr);
    index = index + 1 + f;
  }
  // console.log(newArr);

  for (var k = 0; k < newArr.length; k++) {
    checkAndCount(newArr[k]);
  }

  function checkAndCount(newArr) {
    var vowel = "aeiouAEIOU";
    var count = 0;
    var row = newArr.length;
    var column = newArr[0].length;
    var half = Math.floor(newArr.length / 2);
    var v = 1;

    for (var i = 0; i < newArr.length; i++) {
      for (var j = newArr[i].length - 1; j >= 0; j--) {
        var consonant = 1;
        if (i <= half) {
          var diff = newArr[i].length - 1 - i;
          if (diff == j) {
            for (var k = 0; k < vowel.length; k++) {
              if (newArr[i][j] == vowel[k]) {
                consonant = 0;
              }
            }
            if (consonant == 1) {
              // console.log(newArr[i][j])
              count++;
            }

            // if (i == newArr.length - 1 && j == newArr[0].length - 1) {
            //   v = 0;
            // }
          }
        } else {
          var sum = 1;
          if (sum == j) {
            // console.log(newArr[i][sum])
            for (var k = 0; k < vowel.length; k++) {
              if (newArr[i][j] == vowel[k]) {
                consonant = 0;
              }
            }
            if (consonant == 1) {
              // console.log(newArr[i][j])
              count++;
            }
          }
          sum++;

          if (i == newArr.length - 1 && j == newArr[0].length - 1) {
            v = 0;
          }
        }
      }
    }
    if (v == 0) {
      console.log(count);
    } else {
      console.log("-1");
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
  read = read.replace(/\n$/, "");
  read = read.replace(/\n$/, "");
  runProgram(read);
});
process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});
