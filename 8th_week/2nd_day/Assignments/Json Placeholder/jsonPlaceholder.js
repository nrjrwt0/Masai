  function getPosts(){
    fetch('http://jsonplaceholder.typicode.com/posts')
      .then(function(response){
        return response.json();
      })
      .then(function(response){
        console.log(response);
      })
  }

  function getTodos(){
    fetch('http://jsonplaceholder.typicode.com/todos')
      .then(function(response){
        return response.json();
      })
      .then(function(response){
        console.log(response);
      })
  }

  function getAlbums(){
    fetch('http://jsonplaceholder.typicode.com/albums')
      .then(function(response){
        return response.json();
      })
      .then(function(response){
        console.log(response);
      })
  }


  function getUsers(){
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(function(response){
        return response.json();
      })
      .then(function(response){
        console.log(response);
      })
  }