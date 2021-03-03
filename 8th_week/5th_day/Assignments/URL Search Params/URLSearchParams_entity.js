var url = window.location

var params = new URLSearchParams(url.search);

var no = params.get('no');

var p = document.querySelector('p');
 p.innerHTML = `Page No: ${no}`;