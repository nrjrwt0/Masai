window.addEventListener('load', () => {
  var selBtn = document.getElementById('selBtn');
  selBtn.addEventListener('click', createButtons);
})

function createButtons(){
  var val = document.querySelector('select').value;
  console.log(val);
  var newBtnsDiv = document.getElementById('newBtnsDiv')
  newBtnsDiv.innerHTML = "";
  var numOfBtns = val/25;

  for(let i = 1; i <= numOfBtns; i++){
    let newBtn = document.createElement('button');
    newBtn.innerHTML = `Button ${i}`;
    newBtnsDiv.append(newBtn);

    newBtn.addEventListener('click',showData)
  }
}

async function showData(event){
  var currentBtn = event.target.innerHTML;

  var response = await fetch('https://jsonplaceholder.typicode.com/todos');

  var todos = await response.json();

  var start;
  var end;

  if(currentBtn == 'Button 1'){
    start = 0;
    end = 24;
  } else if(currentBtn == 'Button 2'){
    start = 25;
    end = 49;
     
  } else if(currentBtn == 'Button 3'){
    start = 50;
    end = 74;
 
  } else if(currentBtn == 'Button 4'){
    start = 75;
    end = 99;

  } else if(currentBtn == 'Button 5'){
    start = 100;
    end = 124;

  } else if(currentBtn == 'Button 6'){
    start = 125;
    end = 149;

  } else if(currentBtn == 'Button 7'){
    start = 150;
    end = 174;

  } else if(currentBtn == 'Button 8'){
    start = 175;
    end = 199;
  }

  randerDom(todos,start,end);
  
}
function randerDom(todos,start,end){
  var table = document.querySelector('table');
  table.innerHTML = '';

  for(let i = start; i <= end; i++){
    var row = document.createElement('tr');
    for(key in todos[i]){
      var col = document.createElement('td');
      col.innerHTML = key + "=" + todos[i][key];
      row.appendChild(col);
    }
    table.appendChild(row);
  }
}