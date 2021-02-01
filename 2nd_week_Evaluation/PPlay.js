function level_line(level,depth){
  var dots ="";
  for(var i = 0; i < level - depth; i++){
    dots += "."
  }
  return dots;
}
function zeros(depth){
  var zero = "0";
  for(var i = 0; i < depth; i++){
    zero += ".0";
  }
  return zero
}

function pyramind(level,depth){
  for(var i = 0; i < depth; i++){
    var line = "";
    line += level_line(level,i) + zeros(i) + level_line(level,i);
    console.log(line);
  }
}

function inverse_pyramind(level,depth){
  for(var i = depth - 1; i >= 0 ; i--){
    var line = "";
    line += level_line(level,i) + zeros(i) + level_line(level,i);
    console.log(line);
  } 
}

function rombus(level,depth){
  pyramind(level,depth);
  inverse_pyramind(level,depth-1);
}

// pyramind(4,4)
rombus(4,4)