var a = 5;
var b = 6;
if ( a < b){
  console.log("a is smaller");
}else if(b < a){
  console.log("b is smaller");
}else{
  console.log(" a equals to b")
}


var p1 = "Neeraj";
var p2 = "Rawat";
if (p1 !== p2){
  console.log("Wrong Password");
}

var num = 31;
if (num % 2 == 1){
  console.log("This is a Odd Number");
}

var year = 1999;
var age = 2021 - year;
if ( age>=20 && age <=29 ){
  console.log("Twenties");
}

var A = 15;
var B = 13;
var C = 14;

if ( A>B && A>C){
  if(B > C){
    console.log(" C B A"); //done
  } else{
    console.log(" B C A"); //done
  }
} else if(B > C){
  if(A > C ){
    console.log("C A B"); //done
  } else{
    console.log("A C B"); //done
  }
}else{
  if( B > A){
    console.log("A B C"); //done
  } else{
    console.log("B A C"); //done
  }
}

var l = 12;
var m = 14;
 l > m ? console.log(" l is greater") : console.log(" m is greater");

 var day = "SS";
 switch (day) {
    case "Monday":
      console.log("Mon");
      break;
    case "Tuesday":
      console.log("Tue");
      break;
    case "Wednesday":
      console.log("Wed");
      break;
    case "Thursday":
      console.log("Thur");
      break;
    case "Friday":
      console.log("Fri");
      break;
    case "Saturday":
      console.log("Sat");
      break;
    default :
       console.log("Wrong Day");
 }