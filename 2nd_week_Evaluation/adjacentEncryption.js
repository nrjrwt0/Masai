var current = "abcdefghijklmnopqrstuvwxyz";
var next = "bcdefghijklmnopqrstuvwxyza";

var input = "zyfqwxaeiou";
var output = "";

for(var i = 0; i < input.length; i++){
  for(var j = 0; j < current.length; j++){
    if(input[i] == current[j]){
      output = output + next[j];
    }
  }
}
console.log(output) ;