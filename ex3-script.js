window.addEventListener("load", start);

function start() {
  document.querySelector("#orange_container").addEventListener(move);
}

function move() {
  console.log("move");
  document.querySelector("#orange_container").classList.add(move);
}
