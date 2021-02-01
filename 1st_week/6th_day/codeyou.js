var num = 131;
var prime = 1;
var div = 2;
while(div <= num/2){
  if(num %  div == 0){
    prime = 0
  }
  div++;
}
if(prime === 1){
  console.log("Prime Number");
} else {
  console.log("Not a Prime Number");
} 






var numbers = 10;
var total_sum = 0;
var total_num = 0;
for(var i = 1; i <= numbers ; i++){
  if(i % 3 == 0){
    total_sum = total_sum + i;
    total_num++;
  }
}
console.log("Average = " + (total_sum / total_num));






var start = 1;
var end = 100;
var even_sum = 0;
var odd_sum = 0;

for(var i = start; i <= end;  i++){
  if(i % 2 == 0){
    even_sum = even_sum + i;
  }else {
    odd_sum = odd_sum + i;
  }
}
console.log("Even Sum = " + even_sum);
console.log("Odd Sum = " + odd_sum);







var scores = [28, 69, 40, 50, 30, 99, 10, 74];
var highest = scores[0];
var lowest = scores[0];

for(var i = 1; i < scores.length; i++){
  if(scores[i] > highest){
    highest = scores[i];
  }
  if(scores[i] < lowest){
    lowest = scores[i];
  }
}
console.log("Lowest Score = " + lowest);
console.log("Highest Score = " + highest);









var num = 49;
var prime = 1;

for(var i = 2; i <= num/2; i++){
  if(num %  i == 0){
    prime = 0
  }
}
if(prime === 1){
  console.log("Prime Number");
} else {
  console.log("Not a Prime Number");
} 








var str_arr = ["neeraj", "masai", "school", "delhi"];
var vowels = 0;
var consonants = 0;

for(var i = 0; i < str_arr.length; i++){
  for(var j = 0; j < str_arr[i].length; j++){
    if (str_arr[i][j] == "a" ||
      str_arr[i][j] == "e" ||
      str_arr[i][j] == "i" ||
      str_arr[i][j] == "o" ||
      str_arr[i][j] == "u"
        ){
          vowels++
        }
        else{
          consonants++
        }
      }
    }

console.log("Vowels = "  + vowels);
console.log("Consonants = "  + consonants);