window.addEventListener ('load', ()=> {

  var btn = document.querySelector('button');
  btn.addEventListener('click',fetchData)

})


async function fetchData(){
  var show = document.querySelector('#show');
  var countryName = document.querySelector('input').value;

  var response = await fetch(`https://coronavirus-19-api.herokuapp.com/countries/${countryName}`);

  var data = await response.json();

  console.log(data);
  show.innerHTML = JSON.stringify(data)
}