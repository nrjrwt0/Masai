function divBy5(input){
  if(input % 5 == 0){
    return true;
  }
  return false;
}

console.log(divBy5(259));



var limit = 100;
var sum = 0

for (var i = 1; i <= limit; i++){
  if(divBy5(i)){
    sum =sum + i;
  }
}

console.log(sum);



var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function toLower(char){
  for(var i = 0; i < upper.length; i++){
    if(upper[i] == char){
      return lower[i];

    }
  }
  return char;
}

console.log(toLower("l"));






function isNotPrime(input){
  var factors = 0;
  for(var i = 1; i <= input; i++){
    if(input % i == 0){
      factors++
    }
  }
  if(factors > 2){
    return true;
  } else {
    return false;
  }
}

console.log(isNotPrime(4));







var nums = [4,5,6,7,9,10,4,5,4];

function lowElement(input){
  var low = input[0];
  for(var i = 1; i < input.length; i++){
    if(input[i] < low){
      low = input[i];
    }
  }
  return low;
}


function findOccurances(input, match){
  var count = 0;
  for(var i = 0; i < input.length; i++){
    if(input[i] == match){
      count ++
    }
  }
  return count;
}

console.log(findOccurances(nums, lowElement(nums)));





var vowels = 'aeiouAEIOU';

function isVowel(input){
  for(var i = 0; i < vowels.length; i++){
    if(vowels[i] == input){
      return true;
    }
  }
  return false;
}

var str = "MasAi SchoOl";
var new_str = "";

for(var i = 0; i < str.length; i++){
  if(isVowel(str[i]) || str[i] == " "){
    new_str = new_str + str[i];
  }
}

console.log(new_str);