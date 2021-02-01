var input = "MiXeD";

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";

swap_str = ""
for(var i = 0; i < input.length; i++){
  for(var j = 0; j < 26; j++){
    if(upper[j] == input[i]){
      swap_str = swap_str + lower[j]
    } else if(lower[j] == input[i]){
      swap_str = swap_str + upper[j]
    }
  }
}
console.log(swap_str);