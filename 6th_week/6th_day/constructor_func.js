// constructor Function which is used to create many objects. it is just a blueprint for those objects.
// In this function constructor it is taking a parameter as a title
//Here 'this' is referring to the window / global object but when we create a object using this constructor Function 'this' will refer to that object.

function Task(title){
  this.title = title;
  this.status = false;
  this.created_date = new Date();
}

// creating 1st task (1st object)
// so here we are initializing task1 with the help of function constructor(Task).  we are giving an argument here 'buy milk' which is the value of title for task1 object and now 'this' keyword refer to the task1 object.
var task1 = new Task('buy milk');

console.log(task1);


// creating 2ndt task (2ndt object)
// same thing is here.. now the value of title is 'drink water' and this is referring to task2 Object.
var task2 = new Task('drink water');

console.log(task2);
//so by using constructor function we can create as many as objects just by one line, we don't have to use object literals again and again