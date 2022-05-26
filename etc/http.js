// !: 순수 XMLHttpRequest

function reqListener(e) {
  console.log(e.currentTarget.response);
  console.log(e);
}

var request = new XMLHttpRequest();
var address = "http://localhost:3001/test";

request.addEventListener("load", reqListener);
request.open("GET", address);
request.send();
