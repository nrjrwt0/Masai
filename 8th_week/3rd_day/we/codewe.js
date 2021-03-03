/*
  //Step 1 - fetch
  var myFetch = fetch('https://jsonplaceholder.typicode.com/todos/1');

  //Fetch is a promise
  // console.log(myFetch);

  //how do we access a value of a promise
  myFetch.then(function(response){
    var myResponse = response.json();
    // console.log(myResponse);

    return myResponse;

  })
  .then(function(response){
    console.log(response);
  })

*/

async function getData(){
  var data = fetch('https://jsonplaceholder.typicode.com/todos/1');

  var newData = await data; //streams of Packets
  // await == data.then(function(response){ console.log(response)})

  var anotherData = await newData.json();
  console.log(anotherData);
}
getData();