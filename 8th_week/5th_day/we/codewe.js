// //URLSearchParams

// var url = new URL('https://github.com/search?q=user%3Anrjrwt0+gusto');
// console.log(url);
// let params = new URLSearchParams(url.search);
// console.log(params);
// params.append('msg','Hello')
// params = params.toString();

// console.log(params);


var showbtn = document.querySelector('button');
var btnsDiv = document.getElementById('btnsDiv');
var show = document.getElementById('show');

showbtn.addEventListener('click', () => {


  var val = document.getElementById('items').value;
  let btns = val/25;
  btnsDiv.innerHTML = ""
  for(let i = 1; i <= btns; i++){
    var newBtn = document.createElement('button')
    newBtn.innerHTML = i;

    newBtn.setAttribute('id',`button${i}`);
    newBtn.onclick = showData;
    btnsDiv.appendChild(newBtn);
    
  }
})

async function showData(event){
  show.innerHTML = '';

  var currentBtn = event.target.id
  var postsResponse = await fetch('http://jsonplaceholder.typicode.com/posts');

  var posts = await postsResponse.json();

  var start;
  var end;

  if(currentBtn == 'button1'){
    start = 0;
    end = 24;
  } else if(currentBtn == 'button2'){
    start = 25;
    end = 49;
  } else if(currentBtn == 'button3'){
    start = 50;
    end = 74;
  } else if(currentBtn == 'button4'){
    start = 75;
    end = 99;
  }

  // console.log(currentBtn);

  for(let i = start; i <= end; i++){
    // console.log(posts[i]);
    var p = document.createElement('p');
    p.innerHTML =`userId ${posts[i].userId}  | id:${posts[i].id}  |     Title: ${posts[i].title}  | Body:${posts[i].body}`;

    show.appendChild(p);
  }

}