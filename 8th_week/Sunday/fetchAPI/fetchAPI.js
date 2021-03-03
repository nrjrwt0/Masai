window.addEventListener('load', () => {
  var getBtns = document.querySelectorAll('#getBtns > button');
  var showBtns = document.querySelectorAll('#showBtns > button')

  getBtns.forEach((btn) => btn.addEventListener('click',getData));

  showBtns.forEach((btn) => btn.addEventListener('click',showPosts));
})

function getData(event){
  var value = event.target.value;

  let url = `https://jsonplaceholder.typicode.com/${value}`

  fetch(url)
    .then((response) => response.json())
    .then((response) => storeInLocalStorage(value,response))
  
}

//Saving Data in Local Storage
function storeInLocalStorage(key,data){
  localStorage.setItem(key,JSON.stringify(data));
}

//show Posts
function showPosts(event){
  var value = event.target.value;
  // console.log(value);

  var url = 'showDataUsingURLSearchParams.html';

  window.location.assign(url + "?" + `data=`+ value);

}






//Another Way(long)
// function getData(event){
//   var target = event.target.innerHTML;


//   if(target == 'Get Posts'){
//     let url = 'https://jsonplaceholder.typicode.com/posts';
//     fetch(url)
//     .then((response) => response.json())
//     .then((response) => storeInLocalStorage('posts',response))
//   }
//   else if(target == 'Get Comments'){
//     let url = 'https://jsonplaceholder.typicode.com/comments';
//     fetch(url)
//     .then((response) => response.json())
//     .then((response) => storeInLocalStorage('comments',response))

//   } else if(target == 'Get Albums'){
//     let url = 'https://jsonplaceholder.typicode.com/albums';
//     fetch(url)
//     .then((response) => response.json())
//     .then((response) => storeInLocalStorage('albums',response));
    
//   } else if(target == 'Get Photos'){
//     let url = 'https://jsonplaceholder.typicode.com/photos';
//     fetch(url)
//     .then((response) => response.json())
//     .then((response) => storeInLocalStorage('photos',response));
//   } else if(target == 'Get Todos'){
//     let url = 'https://jsonplaceholder.typicode.com/todos';
//     fetch(url)
//     .then((response) => response.json())
//     .then((response) => storeInLocalStorage('todos',response))
//   } else if(target == 'Get Users'){
//     let url = 'https://jsonplaceholder.typicode.com/users';
//     fetch(url)
//     .then((response) => response.json())
//     .then((response) => storeInLocalStorage('users',response))
//   }
// }