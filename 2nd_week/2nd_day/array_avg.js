function arrayAverage(input){
  var total_sum = 0;
  if(input.length == 0){
    return 0;
  } else {
    for (var i = 0; i < input.length; i++) {
      total_sum = total_sum + input[i];
    }
    return total_sum/i;
  }
}

var arr = [-12, -39, 12, 41, 22, 44]

console.log(arrayAverage(arr));