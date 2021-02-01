function isOdd(input){
  if(input % 2 !== 0){
    return true;
  }
  return false;
}

var limit = 25;

for (var i = 0; i <= limit; i++) {
  if(isOdd(i)){
    console.log(i);
  }

}