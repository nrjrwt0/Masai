var input = 678601;

input = input.toString();
var output = [];
for(var i = 0 ; i < input.length; i++){
  var elem = (input[i] * (10 ** ((input.length-1)-i)));
  if(elem != 0){
    output.push(elem);
  }
}
console.log(output);