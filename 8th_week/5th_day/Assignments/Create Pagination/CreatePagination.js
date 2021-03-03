var showbtn = document.querySelector('button');
var btnsDiv = document.getElementById('btnsDiv');
var show = document.getElementById('show');

showbtn.addEventListener('click', () => {


  var val = document.getElementById('items').value;
  let btns = val/50;
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
  var commentsResponse = await fetch('https://jsonplaceholder.typicode.com/comments');

  var comments = await commentsResponse.json();

  var start;
  var end;

  if(currentBtn == 'button1'){
    start = 0;
    end = 49;
  } else if(currentBtn == 'button2'){
    start = 50;
    end = 99;
  } else if(currentBtn == 'button3'){
    start = 100;
    end = 149;
  } else if(currentBtn == 'button4'){
    start = 150;
    end = 199;
  } else if(currentBtn == 'button5'){
    start = 200;
    end = 249;
  } else if(currentBtn == 'button6'){
    start = 250;
    end = 299;
  } else if(currentBtn == 'button7'){
    start = 300;
    end = 349;
  } else if(currentBtn == 'button8'){
    start = 350;
    end = 399;
  } else if(currentBtn == 'button9'){
    start = 400;
    end = 449;
  } else if(currentBtn == 'button10'){
    start = 450;
    end = 499;
  }

  // console.log(currentBtn);
  // console.log(comments);

  for(let i = start; i <= end; i++){
    // console.log(comments[i]);
    var p = document.createElement('p');
    p.innerHTML =`postId ${comments[i].postId} | id:${comments[i].id}  | Name: ${comments[i].name}  | Email:${comments[i].email} | Body: ${comments[i].body}`;

    show.appendChild(p);
  }

}