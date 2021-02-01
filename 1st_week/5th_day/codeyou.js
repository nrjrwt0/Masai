var A = 27;
var B = 270;
if(A>B){
  console.log("A is larger");
} else if(B>A) {
  console.log("B is larger");
} else {
  console.log("Both are Equal")
}


var passw1 = "password";
var passw2 = "Password";
if(passw1 !== passw2){
  console.log("Wrong Password");
}
else{
  console.log("Valid Password");
}



var num = 26;
if(num % 2 == 1){
  console.log("Odd Number");
} else {
  console.log("Even Number");
}


var doy = 2006;
var age = 2021 - doy;
if( age>=13 && age<=19){
  console.log("Teenage");
} else if(age>=20 && age<=29){
  console.log("Twenties");
}


var age_a = 15;
var age_b = 16;
var age_c = 17;
if(age_a > age_b  &&  age_a > age_c){
  if(age_b > age_c){
    console.log("a b c") //done
    console.log("c b a")
  } else{
    console.log ("a c b"); //done
    console.log("b c a");
  }
} else if(age_b > age_c){
    if(age_a > age_c){
      console.log("b a c");
      console.log("c a b"); //done
    } else{
      console.log("b c a");//done
      console.log("a c b"); 
    }
} else {
  if(age_a > age_b){
    console.log("c a b"); //done
    console.log("b a c");
  } else{
    console.log("c b a"); //done
    console.log("a b c");
  }
}


var a1 = 18;
var b1 = 15;
a1 === b1 ? console.log("Equal") : console.log("Different");


var month = "November";
switch (month) {
  case "January":
    console.log("Jan");
    break;
  case "February":
    console.log("Feb");
    break;
  case "March":
    console.log("Mar");
    break;
  case "April":
    console.log("Apr");
    break;
  case "May":
    console.log("May");
    break;
  case "June":
    console.log("June");
    break;
  case "July":
    console.log("July");
    break;    
  case "August":
    console.log("Aug");
    break;
  case "September":
    console.log("Sep");
    break;
  case "October":
    console.log("Oct");
    break;
  case "November":
    console.log("Nov");
    break;
  case "December":
    console.log("Dec");
    break;  
  default:
    console.log("Invalid Month")
    break;
}