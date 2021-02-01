var arr = [2, 4, 5, 3, 6, 8];

var evenIndexArr = function(el,i){
  if((i % 2 == 0) && (el % 2 == 0) ){
    return el;
  }
}

var evenIndexArr = arr.map(evenIndexArr);
console.log(evenIndexArr);

