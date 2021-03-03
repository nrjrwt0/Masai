  function byUsingFetch(){

    //first we write fetch keyword to initilize request. fetch(url,{method,body});

      fetch('https://reqres.in/api/users?page=2')

      //Then it gives a promise and if promise is completed then it returns a response

        .then(function(response){
          //here .json() is collecting streams.stream is a continious sending of data packets
          return response.json();
        })

        //Then it gives a promise and if promise is completed then it returns a response
        
        .then(function(response){
          //And it automatically convert it into the Object.
          console.log(response);
        })
    }

    function byUsingXHR(){
    //creating xhr object
    var xhr = new XMLHttpRequest();

    //opening our request by telling method name and url of API
    xhr.open('GET','https://reqres.in/api/users?page=2');

    //Sending our request
    xhr.send();

    //On load we are getting response
    xhr.onload= function(){
      console.log(xhr.response);
    }
  }