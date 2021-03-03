var btns = document.querySelectorAll('button');

btns.forEach((btn) => {
  btn.addEventListener('click', reDirect)
})

function reDirect(event){
  let no = event.target.value;
  
  // let params = new URLSearchParams();
  // params.append('no',no);
  let url = "URLSearchParams_entity.html";

  // console.log(params.toString());
  window.location.assign(url+ "?" + 'no='+no)

  
}