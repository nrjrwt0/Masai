var arr =['ab', 'cd', 'ef', 'gh'];

var vowels = 0;
var consonants = 0;

for(var i = 0; i < arr.length; i++){
  for(var j = 0; j < arr[i].length; j++){
    if(arr[i][j] === "a" ||
    arr[i][j] === "e" ||
    arr[i][j] === "i" ||
    arr[i][j] === "o" ||
    arr[i][j] === "u")
  {
    vowels ++;
  } else {
    consonants ++;
  }
  }
}
console.log("Vowels:" + vowels);
console.log("Cononants:" + consonants);