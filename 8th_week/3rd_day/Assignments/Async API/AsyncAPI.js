var showData = document.getElementById('showData');

async function getPosts(){
  var postsResponse = await fetch('http://jsonplaceholder.typicode.com/posts');

  var posts = await postsResponse.json();
  console.log(posts)
  saveInLocalStorage('posts',posts);
}

//Async functions to get Data
async function getAlbums(){
  var postsResponse = await fetch('http://jsonplaceholder.typicode.com/albums');

  var albums = await postsResponse.json();
  console.log(albums)
  saveInLocalStorage('albums',albums);
}

async function getTodos(){
  var postsResponse = await fetch('http://jsonplaceholder.typicode.com/todos');

  var todos = await postsResponse.json();
  console.log(todos)
  saveInLocalStorage('todos',todos);
}

async function getUsers(){
  var postsResponse = await fetch('http://jsonplaceholder.typicode.com/users');

  var users = await postsResponse.json();
  console.log(users)
  saveInLocalStorage('users',users);
}


//Saving Data in LocalStorage
function saveInLocalStorage(key,data){
  localStorage.setItem(key,JSON.stringify(data));
}



//Normal Fuctions to retrieve the data from local storage and showing it on webpage

function showPosts(){
  var data = localStorage.getItem('posts');
  data = JSON.parse(data);
  console.log(data)

  for(var i = 0; i < data.length; i++){ 
    var p = document.createElement('p');
    p.innerHTML =`userId ${data[i].userId}  | id:${data[i].id}  |     Title: ${data[i].title}  | Body:${data[i].body}`;

    showData.appendChild(p);

  }
}

function showAlbums(){
  var data = localStorage.getItem('albums');
  data = JSON.parse(data);
  console.log(data)

  for(var i = 0; i < data.length; i++){ 
    var p = document.createElement('p');
    p.innerHTML =`userId ${data[i].userId}  | id:${data[i].id}  |     Title: ${data[i].title}`;

    showData.appendChild(p);

  }
}

function showTodos(){
  var data = localStorage.getItem('todos');
  data = JSON.parse(data);
  console.log(data)

  for(var i = 0; i < data.length; i++){ 
    var p = document.createElement('p');
    p.innerHTML =`userId ${data[i].userId}  | id:${data[i].id}|     Title: ${data[i].title}  |     Completed: ${data[i].completed}`;

    showData.appendChild(p);

  }
}

function showUsers(){
  var data = localStorage.getItem('users');
  data = JSON.parse(data);
  console.log(data)

  for(var i = 0; i < data.length; i++){ 
    var p = document.createElement('p');
    p.innerHTML =`id:${data[i].id}  |   Name: ${data[i].name} |   Username: ${data[i].username} |   Email: ${data[i].email} |   Phone: ${data[i].phone} |   Website: ${data[i].website} |   Company: ${data[i].company.name} ${data[i].company.catchPhrase} ${data[i].company.bs}| Address: ${data[i].address.street} ${data[i].address.suite} ${data[i].address.city} ${data[i].address.zipcode} ${data[i].address.geo.lat} ${data[i].address.geo.lng}`;

    showData.appendChild(p);

  }
}
