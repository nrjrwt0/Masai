var limit = 100;
for(var i = 2; i <= limit; i++){
  var prime = 1;
  for(var j= 2; j <= i/2; j++){
    if(i % j == 0){
      prime = 0;
      break;
    }
  }
  if(prime == 1){
    console.log(i);
  }
}