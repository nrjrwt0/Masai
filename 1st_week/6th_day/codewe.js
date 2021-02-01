var limit = 5;
for(var i = 1; i <= limit; i++){
  console.log("Masai School");
}




num = 100;
sum = 0
for(var i = 0; i <= num; i++){
  if( i % 3 == 0){
    sum = sum + i;
  }
}
console.log(sum);






num=3
for(i = 1; i<=num ; i++){
  for(j = 1; j <= i ; j++){
    console.log( i + "." + j)
  }
}






var scores = [45, 33, 6, 57, 99, 12, 10, 22];
var lowest = scores[0];
for(var i = 1; i < scores.length ; i++){
  if(scores[i] < lowest){
    lowest = scores[i];
  }
}

console.log(lowest);






var str_arr = ["neeraj", "masai", "school", "delhi"];
var consonants = 0;
 
for(var i = 0; i < str_arr.length; i++){
  for(var j = 0; j < str_arr[i].length; j++){
    if(str_arr[i][j] != "a" &&
      str_arr[i][j] != "e" &&
      str_arr[i][j] != "i" &&
      str_arr[i][j] != "o" &&
      str_arr[i][j] != "u" ){
        consonants++;
      }
  }
}

console.log(consonants);

