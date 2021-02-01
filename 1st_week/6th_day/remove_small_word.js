var arr = ["A", "Quick", "Brown", "Fox", "Jumps", "Over", "A", "Lazy", "Dog"];
var rev_arr = [];

for(var i = 0; i < arr.length; i++){
  if(arr[i].length >= 4){
    rev_arr.push(arr[i]);
  }
}
console.log(rev_arr);