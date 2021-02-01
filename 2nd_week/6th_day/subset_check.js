var arr1 = ["A","F", "C"];
var arr2 = ["D", "C", "A", "M"];

for(var i = 0; i < arr1.length; i++){
  var subset = 1;
  for(var j = 0; j < arr2.length; j++){
    if(arr1[i] == arr2[j]){
       subset = 1;    
       break;
     } else {
      subset = 0;
     }
   }
   if(subset == 0){
     break;
   }
} 
 
if(subset == 0){
    console.log("FALSE")
  } else{
    console.log("TRUE")
  }

