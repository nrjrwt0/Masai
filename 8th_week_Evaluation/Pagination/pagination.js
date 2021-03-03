window.addEventListener('load', ()=>{

  var createBtn = document.getElementById('createBtn');

  createBtn.addEventListener('click', createNewBtns);

})

function createNewBtns(){
  var newBtnsDiv = document.getElementById('newBtnsDiv');
  newBtnsDiv.innerHTML = '';

  var value = document.querySelector('select').value;

  var num = value/20;

  for(let i = 1; i <= num ; i++){
    var newBtns = document.createElement('button');
    newBtns.innerHTML = "Button " + i;
    newBtns.setAttribute('value',i)
    newBtnsDiv.appendChild(newBtns);

    newBtns.addEventListener('click',showData)
  }
}

async function showData(event){

  var btnVal = event.target.value;

  var start = (btnVal-1)*20;
  var end = start + 19;

  var response = await fetch('https://jsonplaceholder.typicode.com/comments');

  var comments = await response.json();
  var show = document.getElementById('show')
  show.innerHTML = '';
  
  for(let i = start; i <= end; i++){
    for(let key in comments[i]){
      var p = document.createElement('p');
      p.innerHTML = key + "=" + comments[i][key];
      show.appendChild(p);
    }
    var hr = document.createElement('hr');
      show.appendChild(hr);
  }

}