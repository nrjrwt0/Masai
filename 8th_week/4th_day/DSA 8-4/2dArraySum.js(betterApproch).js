function runProgram(input) {
  input = input.trim().split('\n');
  var given = input[0].trim().split(' ').map(Number);
  var row = given[0];
  var column = given[1];
  var givenSum = given[2];

  var arr = [];
  var subArr;
  for (let i = 1; i <= row; i++) {
    subArr = input[i].trim().split(' ').map(Number);
    arr.push(subArr);
  }
  // console.log(arr);
  var count = 0;
  for (var i = 0; i < row; i++) {
    for (var j = 0; j < column; j++) {
      //horizontal
      if (j < column - 2) {
        if (arr[i][j] + arr[i][j + 1] + arr[i][j + 2] == givenSum) {
          count++;
        }
      }

      //Vertical
      // //Only works if rows and columns are equal
      // if (j < row - 2) {
      //   if (arr[j][i] + arr[j + 1][i] + arr[j + 2][i] == givenSum) {
      //     count++;
      //   }
      // }

      // works for all conditions
      if (i < row - 2) {
        if (arr[i][j] + arr[i + 1][j] + arr[i + 2][j] == givenSum) {
          count++;
        }
      }

      //Diagonal right to left(top to down)
      if (j < row - 2) {
        if (arr[j][i] + arr[j + 1][i] + arr[j + 2][i] == givenSum) {
          count++;
        }
      }

      //Diagonal left to right(top to down)
      if (i < row - 2 && j < column - 2) {
        if (arr[i][j] + arr[i + 1][j + 1] + arr[i + 2][j + 2] == givenSum) {
          count++;
        }
      }

      //Diagonal right to left
      if (i < row - 2 && j >= 2) {
        if (arr[i][j] + arr[i + 1][j - 1] + arr[i + 2][j - 2] == givenSum) {
          count++;
        }
      }
    }
  }
  console.log(count);
}
if (process.env.USER === 'neerajrawat') {
  runProgram(`4 4 11
  1 2 1 8
  2 2 8 6
  8 1 2 5
  2 5 8 6`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding('ascii');
  let read = '';
  process.stdin.on('data', function (input) {
    read += input;
  });
  process.stdin.on('end', function () {
    read = read.replace(/\n$/, '');
    read = read.replace(/\n$/, '');
    runProgram(read);
  });
  process.on('SIGINT', function () {
    read = read.replace(/\n$/, '');
    runProgram(read);
    process.exit(0);
  });
}
