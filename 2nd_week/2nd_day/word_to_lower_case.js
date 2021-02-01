var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";

function toLower(char){
  for (var i = 0; i < upper.length; i++) {
    if(char === upper[i]){
      return lower[i];
    }
  }
  return char;
}

var word = "MiXeD";
var lower_word = ""

for (var i = 0; i < word.length; i++) {
  lower_word = lower_word + toLower(word[i]);
}
console.log(lower_word);