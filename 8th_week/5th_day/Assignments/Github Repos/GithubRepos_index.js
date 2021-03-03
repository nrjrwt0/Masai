var btn = document.querySelector('button');
var input = document.querySelector('input')

btn.addEventListener('click',() => {
  let user = input.value;

  let url = "GithubRepos_users.html";

  let params = new URLSearchParams();
  params.append('q',user);

  window.location.assign(url+ "?" + params.toString())
})