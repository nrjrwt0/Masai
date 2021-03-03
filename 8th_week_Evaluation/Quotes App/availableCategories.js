window.addEventListener('load', () => {

  fetch('https://quotes.rest/qod/categories?language=en&detailed=false')
    .then( (response) => response.text())
    .then( (data) => renderDom(data))
    .catch((err) => console.log(err));
})

function renderDom(data){
  //Showing Meaningful Data
  var div = document.querySelector('div');

  var data = JSON.parse(data);
  console.log(data)
  for(let key in data.contents.categories){
    var p = document.createElement('p');
    p.innerHTML = key + "=" + data.contents.categories[key];
    div.appendChild(p);
  }
}