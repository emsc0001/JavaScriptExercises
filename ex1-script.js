window.addEventListener("load", start);

function start() {
  document.querySelector("#orange_sprite").addEventListener("click", jumping);
}

function jumping() {
  console.log("jump");
  document.querySelector("#orange_sprite").addEventListener("click", jumping);
  document.querySelector("#orange_sprite").classList.add("jump");
}
