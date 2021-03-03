window.addEventListener('load', () => {
  var h1 = document.querySelector('h1');

  let url = window.location;
  let params = new URLSearchParams(url.search);
  var key = params.get('data');
  
  h1.innerHTML = key.toUpperCase();

  var data =JSON.parse(localStorage.getItem(key));
  // console.log(data);

  // if(key != 'users'){
    var table = document.querySelector('table')
    for(let i = 0; i < data.length; i++){
      var row = document.createElement('tr');
      for(let key in data[i]){

        if(key == 'address'){
          for(key2 in data[i][key]){
            if(key2 == 'geo'){
              for(key3 in data[i][key][key2]){
                var col = document.createElement('td');
                col.innerHTML = key3 + "=" +data[i][key][key2][key3];
                row.append(col);
              }
              continue;
            }
            // console.log(key2);
            var col = document.createElement('td');
            col.innerHTML = key2 + "=" +data[i][key][key2];
            row.append(col);
          }
          continue;
        }
        
        if(key == 'company'){
          for(key2 in data[i][key]){
            var col = document.createElement('td');
            col.innerHTML = key2 + "=" +data[i][key][key2];
            row.append(col);
          }
          continue;
        }
        var col = document.createElement('td');
        col.innerHTML = key + "=" +data[i][key];
        row.append(col);
      }
      table.appendChild(row);
    }
  // }
  // if(key == 'users'){
  //   var show = document.getElementById('show')
  //   for(let i = 0; i < data.length; i++){
  //     var p = document.createElement('p');
  //     p.innerHTML = `id=${data[i].id} name=${data[i].name} username:${data[i].username} address:${data[i].address.street}`
  //     show.appendChild(p)
  //   }
  // }
})




 