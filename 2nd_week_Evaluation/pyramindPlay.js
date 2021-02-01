// function pyramind(level, shape){
//   for(var i = 0; i < level; i++){
//     var one = ""
//     for(var j = level ; j > i; j--){
//       one = one + ".";
//     }
//     for(var j = 0 ; j <= i; j++){
//       one = one + 0 + ".";
//     }
//     for(var j = level ; j > i+1; j--){
//       one = one + ".";
//     }
//     console.log(one);
//   }
// }
// pyramind(level, shape)

function pyramind(level){
  for(var i = 0; i < level; i++){
    var str = "";
    for(var j = i; j < level; j++){
      str = str + "."
    }
    for( j = 0; j <= i ; j++){
      str = str + "O" + ".";
    }
    for(j = i; j < level - 1; j++){
      str = str + ".";
    }
    console.log(str);
  }
}


function inverse_pyramind(level,rom){
    for(var i = 0; i < level; i++){
      var str = "";
      if(rom == 1){
        rom = 0;
        continue;
      }
      for(var j = 0; j <= i; j++){
        str = str + ".";
      }
      for(j = i; j < level; j++){
        str = str + "O" + ".";
      }
      for( j = 0; j < i; j++){
        str = str + ".";
      }
      console.log(str);
    }
  }
  


// function rhombus(level){
//   for(var i = 0; i < level; i++){
//     var str = "";
//     for(var  j = i; j < level; j++){
//       str = str + "."
//     }
//     for(j = 0; j <= i; j++){
//       str = str + "O" + ".";
//     }
//     for(j = i; j < level-1; j++ ){
//       str = str + ".";
//     }
//     console.log(str);
//   }
//   for(i = 0; i < level; i++){
//     str = "";
//     for(j=0; j <=i; j++){
//       str = str + ".";
//     }
//     for(j = i; j < level; j++){
//       str = str +"O" + ".";
//     }
//     for(j = 0; j < i ; j++){
//       str = str + ".";
//     }
//     console.log(str);
//   }
// }


function rhombus(level){
  pyramind(level);
  var rom = 1
  inverse_pyramind(level,rom)
} 
var level = 4;
// pyramind(level);
// inverse_pyramind(level);
rhombus(level);
