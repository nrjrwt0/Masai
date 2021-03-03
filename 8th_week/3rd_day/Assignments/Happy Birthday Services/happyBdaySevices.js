var btns = document.querySelectorAll('button');
btns.forEach(function(el){
  el.addEventListener('click',wish);
});

var h2 = document.querySelector('h2');
var div = document.getElementById('img');
function wish(event){
  var val = event.target.value;
  console.log(val);

  var myPromise = new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve();
    }, (val-20)*1000);

  })
  
  myPromise.then(function(response){
    h2.innerHTML = "Happy Birthday!";
    div.innerHTML = "<img src='https://images.unsplash.com/photo-1531956531700-dc0ee0f1f9a5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8aGFwcHklMjBiaXJ0aGRheXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60'>"
  })

}