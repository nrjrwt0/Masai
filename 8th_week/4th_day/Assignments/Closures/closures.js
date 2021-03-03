var btn = document.querySelector('button');
var inputs = document.querySelectorAll('input');
var show = document.getElementById('show');

avgOf7 = (scoreOf7) => {
  return avgOf7_8 = (scoreOf8) => {
    return avgOf7_8_9 = (scoreOf9) => {
      return avgOf7_8_9_10 = (scoreOf10) => {
        show.innerHTML = `Average is: ${((Number(scoreOf7) + Number(scoreOf8) + Number(scoreOf9) + Number(scoreOf10)) / 4)}`
      }
    }
  }
}

btn.addEventListener('click', () => {
  var scoreOf7 = inputs[0].value;
  var scoreOf8 = inputs[1].value;
  var scoreOf9 = inputs[2].value;
  var scoreOf10 = inputs[3].value;
  
  if(!isNaN(scoreOf7) && !isNaN(scoreOf8) && !isNaN(scoreOf9) && !isNaN(scoreOf10)){
    var avg1 = avgOf7(scoreOf7);
    var avg2 = avg1(scoreOf8);
    var avg3 = avg2(scoreOf9);
    var avgTotal = avg3(scoreOf10);
  }
  else{
    console.log("Enter Numbers")
  }
})

