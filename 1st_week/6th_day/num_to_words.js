var num = 7;

var str = num.toString();
var str_opt = "";

for(var i = 0 ; i <= str.length; i++){
  switch(str[i]){
    case "1":
      str_opt = str_opt + "One ";
      break;
    case "2":
      str_opt = str_opt + "Two ";
      break;
    case "3":
      str_opt = str_opt + "Three ";
      break;
    case "4":
      str_opt = str_opt + "Four ";
      break;
    case "5":
      str_opt = str_opt + "Five ";
      break;
    case "6":
      str_opt = str_opt + "Six ";
      break;
    case "7":
      str_opt = str_opt + "Seven ";
      break;
    case "8":
      str_opt = str_opt + "Eight ";
      break;
    case "9":
      str_opt = str_opt + "Nine ";
      break;
    case "0":
      str_opt = str_opt + "Zero ";
      break; 
  }
}

console.log(str_opt);