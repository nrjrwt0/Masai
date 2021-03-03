var getPostsBtn = document.getElementById('posts');
var getTodosBtn = document.getElementById('todos');
var getAlbumsBtn = document.getElementById('albums'); 
var getUsersBtn = document.getElementById('users');

getPostsBtn.addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
      })  
})

getTodosBtn.addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
      })  
})

getAlbumsBtn.addEventListener('click', () => {
  fetch('http://jsonplaceholder.typicode.com/albums')
  .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
      })  
})

getUsersBtn.addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
      })  
})