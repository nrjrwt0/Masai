var weight = 90; //in Kg
var height = 1.73;  // in meter

var bmi = weight / (height ** 2);

if(bmi >= 30 && bmi <= 39.9){
  console.log("you're in the obese range");
} else if( bmi >= 25 && bmi <= 29.9){
  console.log("you're in the overweight range");
} else if ( bmi >= 18.5 && bmi <= 24.9){
  console.log("you're in the healthy weight range");
} else{
  console.log("you're in the underweight range");
}