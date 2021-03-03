window.addEventListener('load', () => {
  var div = document.querySelector('div');

  fetch('https://quotes.rest/qod?language=en')
    .then( (response) => response.text())
    .then( (data) => renderDom(data))
    .catch((err) => console.log(err));
})

function renderDom(data){
  //Showing Meaningful
  var div = document.querySelector('div');

  var data = JSON.parse(data);
  var arr = data.contents.quotes;
  div. innerHTML = arr[0].quote
}