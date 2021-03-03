  function Register(){

    var formData = {
      name: document.getElementById('nid').value,
      email: document.getElementById('eid').value,
      password: document.getElementById('pid').value,
      username: document.getElementById('uid').value,
      mobile: document.getElementById('mid').value,
      description: document.getElementById('did').value,
    }

    formData = JSON.stringify(formData);

    var url = "https://masai-api-mocker.herokuapp.com/auth/register"

    fetch(url, {
      method: 'POST',
      body : formData,
      headers : {
        'Content-Type': 'application/json'
      }
    }) .then(function(response){
        return response.json();
      })
      .then(function(response){
        console.log(response);
      })
  }

  function Login(){
    var formData = {
      password: document.getElementById('l_pid').value,

      username: document.getElementById('l_uid').value
    }



    formData = JSON.stringify(formData);

    var url = "https://masai-api-mocker.herokuapp.com/auth/login"

    fetch(url, {
      method: 'POST',
      body : formData,
      headers : {
        'Content-Type': 'application/json'
      }
    }) .then(function(response){
        return response.json();
      })
      .then(function(response){
        getMyData(response.token);
      })
  }

  function getMyData(token){
    var url = "https://masai-api-mocker.herokuapp.com/user/neeraj987"
    fetch(url,{
      headers: {
        'Authorization':`Bearer ${token}`
      }
    })
    .then(function(response){
      return response.json();
    })
    .then(function(response){
      localStorage.setItem('data',JSON.stringify(response))  ;
    })
  }