var img = "abcdefghijklmnopqrstuvwxyz";
var mirImg = "zyxwvutsrqponmlkjihgfedcba"
function mirrorImg(char){
  for (var i = 0; i < img.length; i++) {
    if(char == img[i]){
      return mirImg[i];

    }
  }
  return char;
}


var str = "zebra";
var str_img = "";

for (var i = 0; i < str.length; i++) {
  str_img = str_img + mirrorImg(str[i])
}

console.log(str_img)