var url = window.location.search;
var params = new URLSearchParams(url);
var user = params.get('q');
var show = document.getElementById('show');
var span = document.querySelector('span');

span.textContent = user;


async function getData(){
  var giturl = `https://api.github.com/users/${user}`;

  let response = await fetch(giturl);

  let repo = await response.json();

  // console.log(repo);

  for(key in repo){
    var p = document.createElement('p');
    p.innerHTML = `${key}: ${repo[key]}`
    show.appendChild(p);
  }
}
getData()