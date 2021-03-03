window.addEventListener('load', () => {
  var div = document.querySelector('div');
  fetch('https://quotes.rest/qod/languages')
    .then( (response) => response.text())
    .then( (data) => renderDom(data))
    .catch((err) => console.log(err));
})

function renderDom(data){
  //Showing Meaningful Data
  var div = document.querySelector('div');

  var data = JSON.parse(data);
  console.log(data)
  for(let key in data.contents.languages){
    var p = document.createElement('p');
    p.innerHTML = data.contents.languages[key];
    div.appendChild(p);
  }
}