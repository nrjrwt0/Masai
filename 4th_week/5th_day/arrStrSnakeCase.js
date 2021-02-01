var arr = ["apple", "windows", "ubuntu"];

var makeSnakePattern = function(ac,el){
  return ac + "_" + el;
}

var snakePattern = arr.reduce(makeSnakePattern);

console.log(snakePattern);