function runProgram(input) {
  input = input.trim().split("\n");
  var test = input[0];
  var index = 1;
  while(test > 0){
    console.log(vowelPriorit(input[index]));
    index++;
    test--;
  }
  function vowelPriorit(word){
    var vowels = "aeiou";
    var vowelStr = "";
    var consonantStr = "";
    for(let i = 0; i < word.length; i++){
      
      var isVowel = 0;
      for(let j = 0; j < vowels.length; j++){
        if(word[i] == vowels[j]){
          isVowel = 1;
          //Adding All the vowels in VowelString
          vowelStr+=word[i];
          break;
        }
      }
      //checking its vowel or not if not then we will add this in consonant String
      if(isVowel == 0){
        consonantStr+=word[i];
      }
    }
    return vowelStr+consonantStr;
  }
}
if (process.env.USER === "neerajrawat") {
  runProgram(`4
eio
masaischool
ubcdefghioel
rhythm`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}