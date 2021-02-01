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

for (var i = 0; i < word.length; i++) {
  lower_word = lower_word + toLower(word[i]);
}
console.log(lower_word);

var arr =  ["Apple", "Windows", "UBUNTU"];

// var lowercase = function(el){
//   return el.toLowerCase();
// }

var hypen = function(ac,el){
  return ac + "-" + el;
}

var makeHypenCase = arr.reduce(hypen);
console.log(makeHypenCase);