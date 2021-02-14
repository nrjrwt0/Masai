var str = "apple";

function alp(){
  function a(){
    b()
    console.log("a");
  }
  function b(){
    c()
    console.log("b");
  }
  a();
  function c(){
    console.log("c");
  }
}

alp();
console.log(str);