window.addEventListener('load', () => {
  var btn = document.querySelector('button');
  btn.addEventListener('click',redirect)
})

function redirect(){
  var val = document.querySelector('input').value;
  var url = `githubUser.html`;
  window.location.assign(url + "?user=" + val)
}