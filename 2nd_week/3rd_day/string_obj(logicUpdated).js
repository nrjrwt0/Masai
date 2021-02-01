var obj = {
  item: "Fire$Fox",
  vowelsCount: function(){
    var vowels = "aeiouAEIOU";
    count = 0;
    for(var i = 0; i < this.item.length; i++){
      for(var j = 0; j < vowels.length; j++){
        if(this.item[i] == vowels[j]){
          count++;
        }
      }
    }
    return count;
  },
  reverseStr: function(){
    var rev_str = "";
    for(var i = this.item.length-1 ; i >= 0 ; i--){
      rev_str = rev_str + this.item[i];
    }
    return rev_str;
  },
  changeCase: function(){
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var change_str = "";
    for(var i = 0; i < this.item.length; i++){
      var other = 1;
      for(var j = 0; j < 26; j++){
        if(this.item[i] == lower[j]){
          change_str = change_str + upper[j];
          other = 0;
        } else  if(this.item[i] == upper[j]){
          change_str = change_str + lower[j];
          other = 0;
        }
      }
      // console.log(other);
      if(other == 1){
        change_str = change_str + this.item[i];
      }
    }
    return change_str;
  }
}
console.log(obj.vowelsCount());
console.log(obj.reverseStr());
console.log(obj.changeCase());






