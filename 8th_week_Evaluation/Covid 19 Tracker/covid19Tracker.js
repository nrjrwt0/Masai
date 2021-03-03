window.addEventListener ('load', ()=> {
  fetchData();
})

async function fetchData(){
  var show = document.querySelector('#show');

  var response = await fetch('https://coronavirus-19-api.herokuapp.com/all');

  var data = await response.json();

  // console.log(data);
  show.innerHTML = JSON.stringify(data)
}