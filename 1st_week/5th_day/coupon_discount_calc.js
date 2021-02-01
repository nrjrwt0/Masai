var sp = 2500;
var disc_per = 10 ;



if(sp >= 300){
  var discount = sp * (disc_per/100);
  if(discount > 100){
  console.log("Total discount = 100");
  } else {
  console.log("Total discount = " + discount)
}
} else{
  console.log("Sorry No discount")
}