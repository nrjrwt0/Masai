var year = 2021;

var months = [31,[29,28],31,30,31,30,31,31,30,31,30,31];

for(var i = 0; i < months.length; i++){
  
  if(i==1 && year % 4 == 0){
    for(var j = 1; j <= months[i][0]; j++){
      console.log(year + "-" + (i+1) + "-" + j);
    }
  } else if(i==1){
    for(var j = 1; j <= months[i][1]; j++){
      console.log(year + "-" + (i+1) + "-" + j);
    }
  } else {
    for(var j = 1; j <= months[i]; j++){
      console.log(year + "-" + (i+1) + "-" + j);
    }
  }
  console.log("")
}
