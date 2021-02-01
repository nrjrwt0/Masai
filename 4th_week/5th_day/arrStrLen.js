var arr = ["apple", "windows", "ubuntu"];

var count = function(el){
  console.log(el.length);
}

// var lenarr = arr.map(count)

// lenarr.forEach(function(el){
//   console.log(el);
// })
arr.forEach(count);