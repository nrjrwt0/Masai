var product = {
  name: "One Plus 6",
  price: 20000,
  color: "red",
  category: "Mobile",
  screen: "6.3 inch"
}

for(key in product){
  console.log(key + " -- " + product[key]);
}





var item = ["a", "e", "a", "n", "l", "m", "n"];

var item_obj = {};

for(var i = 0; i < item.length; i++){
  var key = item[i];
  if(item_obj[key] == undefined){
    item_obj[key] = 1;
  } else {
    var prev_count = item_obj[key];
    item_obj[key] = prev_count + 1;
  }
}

for(key in item_obj){
  if(item_obj[key] == 1){
    console.log(key);
  }
}







user = {
  name : "Neeraj",
  addresses : [
    {place: "ND", pin: 110003, state:"DLI"},
    {place: "BLR", pin: 560061, state:"KA"},
    {place: "PUNE", pin: 600613, state:"MJ"},
    {place: "HYD", pin: 400001, state:"TG"}
  ]
}


for(var i = 0; i < user.addresses.length; i++){
  console.log(user.addresses[i].pin);
}






var sqr = {
  side : 3,
  perimeter: function(){
    return this.side * 4;
  }
}
console.log(sqr.perimeter());





var student = {
  name: "Neeraj",
  marklist: [
    {subject: "English", marks: 10},
    {subject: "Maths", marks: 5},
    {subject: "Maths", marks: 2}
  ],
  addNewSub: function(sub,marks){
    var newItem = {subject: sub, marks: marks };
    this.marklist.push(newItem)
  },
  lowMarks: function(){
    var least = {};

    for(var i = 0; i < this.marklist.length; i++){
      if(least.marks == undefined || this.marklist[i].marks < least.marks){
        least = this.marklist[i];
      }
    }
    return least;
  }
}

console.log(student.lowMarks());