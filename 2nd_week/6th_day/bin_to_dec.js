var input = 1001001;

input = input.toString();

var dec = 0;
for(var i = 0; i < input.length ; i++){
    dec = dec + (input[i] * (2 ** i));
}
console.log(dec);