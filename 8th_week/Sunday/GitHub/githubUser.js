window.addEventListener('load', () => {
  var url = window.location;

  var params = new URLSearchParams(url.search);
  var user = params.get('user');
  fetchUser(user);

})

async function fetchUser(user){
  let response = await fetch(`https://api.github.com/users/${user}`)
  let data = await response.json();
  console.log(data);

  var show = document.getElementById('show')

  for(key in data){
    if(key == 'avatar_url'){
      var img = document.createElement('img');
      img.setAttribute('src', data[key]);
      show.appendChild(img);
      continue;
    } else if(key == 'url'){
      var p = document.createElement('p');
      p.innerHTML = `Github Profile = <a href ="${data[key]}">${data[key]}</a>`;
      show.appendChild(p)
    }
  }
}