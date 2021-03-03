  var orderNo = document.getElementById('orderNo');
  var img = document.getElementById('img');
  var food = ['https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60','https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60','https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60','https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60'];
  var index = 0;

  var num = 0;
  function orderFood(){
  var mypromise = new Promise(function(resolve,reject){

    setTimeout(function(){
        num++;
        resolve(num);
    }, 5000);
  })

  mypromise.then(function(num){
    orderNo.innerHTML = `Token No: ${Number(num)}`;
    if(index > 3){
          index = 0;
        }
    img.innerHTML = `<img src="${food[index]}">`
    index++;
  })


  }
