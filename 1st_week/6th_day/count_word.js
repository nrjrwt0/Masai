var word = "There is a smallest natural number";
count = 1; 

for(var i = 0; i < word.length; i++){
  if(word[i] == " "){
    count++;
  }
}

console.log(count);