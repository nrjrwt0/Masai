var arr =  ["Apple", "Windows", "UBUNTU"];


var lowercase = function(el){
  return el.toLowerCase();
}

var hypen = function(ac,el){
  return ac + "-" + el;
}

var makeHypenCase = arr.map(lowercase).reduce(hypen);
console.log(makeHypenCase);