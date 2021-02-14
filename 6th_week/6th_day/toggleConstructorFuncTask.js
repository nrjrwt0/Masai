function Task(title){
  this.title = title;
  this.status = false;
  // this.created_date = new Date();
  this.toggle = function(){
    if(this.status){
      this.status = false;
    } else {
      this.status = true;
    }
  }
  
}
var task1 = new Task('hi');

// here we are invoking the toggle function when we invoke this the value of status will become opposite to its previous value
task1.toggle()
console.log(task1);

//here also
task1.toggle()
console.log(task1);