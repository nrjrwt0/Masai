// var url = 'https://reqres.in/api/users?page=2';
// fetch(url)
// .then(function(response){
//   return response.json();
// })
// .then(function(response){
//   console.log(response.data);
// })


//     {
//   "name": "MASAI School",
//   "email": "hello@masai.com"
//   "password": "secret",
//   "username": "masai-school",
//   "mobile": "9876543210",
//   "description": "A Transformation in education!" 
// }

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
      //Token: 4737d6d001d7b11e5562ceec0af2e775
  }

  function getMyData(token){
    var url = "https://masai-api-mocker.herokuapp.com/user/neeraj1234"
    fetch(url,{
      headers: {
        'Authorization':`Bearer ${token}`
      }
    })
    .then(function(response){
      return response.json();
    })
    .then(function(response){
      console.log(response);
    })
  }