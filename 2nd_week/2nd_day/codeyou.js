function divOf7(input) {
  if(input % 7 == 0){
    return true;
  }
  return false;
}

console.log(divOf7(21));




var limit = 100;
var sum = 0;
var count = 0;

for(var i = 1; i <= limit; i++ ){
  if(divOf7(i)){
    sum = sum + i;
    count++;
  }
}
console.log("Average = " + (sum/count));







var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";

function toLower(input){
  for (var i = 0; i < upper.length; i++) {
    if(input == upper[i]){
      return(lower[i]);
    }
  }
  return input;
}

var word = "NeeRaj RaWaT";
var new_word = "";
for (var i = 0; i < word.length; i++) {
  new_word = new_word + toLower(word[i]);
}
console.log(new_word);






var arr = [2, 3, 5, 7, 10, 4, 8, 11, 15, 6];

function isEven(input){
 if(input % 2 == 0){
   return true;
 }
 return false; 
}

var new_arr = [];

for (var i = 0; i < arr.length; i++) {
  if(! isEven(arr[i])){
    new_arr.push(arr[i]);
  }
}

console.log(new_arr);







var arr1 = [3, 2, 7, 10, 2, 3, 2, 10, 7, 10, 6, 10];

function findMax(input){
  var max = arr1[0];

  for (var i = 0; i < arr1.length; i++) {
    if(input[i] > max){
      max = input[i];
    }
  }
  return max;
}

function findMin(input){
  var min = arr1[0];
  for (var i = 0; i < arr1.length; i++) {
    if(input[i] < min){
      min = input[i];
    }
  }
  return min;
}

function countMatch(input, match){
  var count_num =0 
  for (var i = 0; i < input.length; i++) {
    if(match == arr1[i]){
      count_num++;
    }
  }
  return count_num;
}

console.log("Maximum number " + findMax(arr1) + " occurs = " + countMatch(arr1, findMax(arr1)));

console.log("Minimum number " + findMin(arr1) + " occurs = " + countMatch(arr1, findMin(arr1)));






function remChar(input, match){
  var new_str = "";
  for (var i = 0; i < input.length; i++) {
    if(input[i] !== match){
      new_str = new_str + input[i];
    }
  }
  return new_str;
}

var str = "Neeraj Rawat";
var rem = "w";

console.log(remChar(str,rem));

