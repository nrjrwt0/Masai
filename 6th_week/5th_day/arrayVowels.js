var arr = ["neeraj","masai","schl"];

var vowel = "aeiou";
var present;

for(var i = 0; i < arr.length; i++){
  present = 0;
  for(var j = 0; j < arr[i].length; j++){
    for(var k = 0; k < vowel.length; k++){
      if(arr[i][j] == vowel[k]){
        present = 1;
        break;
      }
    }
    if(present == 1){
      break;
    }
  }
  if(present == 0){
    break;
  }
}

// console.log(present);
if(present == 1){
  console.log('true');
} else {
  console.log('false');
}