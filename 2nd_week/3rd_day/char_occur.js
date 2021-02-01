var str = "kia seltos";
var obj = {};

for(var i = 0; i < str.length; i++){
  if(obj[str[i]] == undefined){
    obj[str[i]] = 1;
  } else {
    obj[str[i]] = obj[str[i]] + 1;
  }
}

for(key in obj){
    if(key != " "){
    console.log(key + "-" + obj[key]);
  }
}