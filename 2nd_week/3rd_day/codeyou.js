var company = {
  founder : "Neeraj Rawat",
  headquarter: "New Delhi",
  established: 2021,
  email: "neerajrawat@email.com",
  contactNo: 1234567890
}

for(key in company){
  console.log(key + "---->" + company[key]);
}





var arr = ["n","e","e","r","a","j","r","a","w","a","t"];
var obj = {};
for(var i = 0; i < arr.length; i++){
  if(obj[arr[i]] == undefined){
    obj[arr[i]] = 1;
  } else {
    obj[arr[i]] = obj[arr[i]]+1
  }
}

for(key in obj){
  if(obj[key] > 1){
    console.log(key)
  }
}




var user_obj = {
  name: "Neeraj Rawat",
  addresses: [
    {city: "ND", pincode: 110003, state:"DLI"},
    {city: "BLR", pincode: 560061, state:"KA"},
    {city: "PUNE", pincode: 600613, state:"MJ"},
    {city: "HYD", pincode: 400001, state:"TG"}
  ]
}

for(var i = 0; i < user_obj.addresses.length; i++){
  console.log("City: " + user_obj.addresses[i].city + " ,Pincode: " + user_obj.addresses[i].pincode)
}







var sqrObj = {
  side: 6,
  perimeter: function(){
    return this.side * 4;
  },
  area: function(){
    return this.side ** 2;
  }
}

console.log("Perimeter: " + sqrObj.perimeter() + ", Area: " + sqrObj.area());







var user = {
  markslist: [
    {subject:"Maths", marks:8},
    {subject:"English", marks:5},
    {subject:"Science", marks:2}
  ],

  addSubMarks: function(sub,marks){
    this.markslist.push({subject: sub, marks: marks})
  },
  lowestMarks: function(){
    lowestMarksVar = {};
    for(var i = 0; i < this.markslist.length; i++){
      if(lowestMarksVar.marks == undefined || this.markslist[i].marks < lowestMarksVar.marks){
        lowestMarksVar = this.markslist[i];
      }
    }
    return lowestMarksVar;
  },
  highestMarks: function(){
    highestMarksVar = {};
    for(var i = 0; i < this.markslist.length; i++){
      if(highestMarksVar.marks == undefined || this.markslist[i].marks > highestMarksVar.marks){
        highestMarksVar = this.markslist[i];
      }
    }
    return highestMarksVar;
  },
  totalMarks: function(){
    total = 0;
    for(var i = 0; i < this.markslist.length; i++){
      total = total + this.markslist[i].marks;
    }
    return total;
  }
}
user.addSubMarks("sst",1);
console.log(user.lowestMarks());
console.log(user.highestMarks());
console.log(user.totalMarks());