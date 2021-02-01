var str_1 = "google";
var str_2 =  "ogl";

// var find = 0;
// for(var i = 0; i <= str_1.length - str_2.length; i++){
//   var opt = str_1.substring(i,str_2.length+i);
//   if(opt == str_2){
//     find = 1
//   }
// }
for(var i = 0; i <= str_1.length - str_2.length; i++){
  var opt = str_1.substring(i,str_2.length+i);
  if(opt == str_2){
    var find = 1
  }
}

if(find == 1){
  console.log("TRUE");
} else{
  console.log("FALSE");
}