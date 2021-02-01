var height = 5;
var bricks = 4;

var full_brick = "___";
var half_brick = ["__"];

for (var i = 1; i <= height; i++) {
  var one_layer = "";
  if (i % 2 == 0) {
    for (var j = 1; j <= bricks + 1; j++) {
      // if (j == 1) {
      //   one_layer = one_layer + half_brick + "|";
      // } else 
      if (j == bricks + 1) {
        one_layer = one_layer + half_brick;
      } else {
        one_layer = one_layer + full_brick + "|";
      }
    }
  } else {
    for (var j = 1; j <= bricks; j++) {
      one_layer = one_layer + "|" + full_brick;
    }
    one_layer = one_layer + "|";
  }
  console.log(one_layer);
}
