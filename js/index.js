
function loadMore() {
  var myDiv = document.querySelector("div");
  var myImg = document.createElement("img");

  fetch("http://localhost:3000/randomnum")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (myJson) {
      myImg.src = myJson.message;
      myDiv.appendChild(myImg);
    });
}

for (var i = 0; i < 10; i++) {
  loadMore();
}
document.addEventListener("scroll", loadMore);
