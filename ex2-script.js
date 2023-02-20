window.addEventListener("load", start);

function start() {
  document.querySelector("#blue_container").addEventListener("click", fallover);
}

function fallover() {
  console.log("fall");
  document.querySelector("#blue_container").addEventListener("click", fallover);
  document.querySelector("#blue_container").classList.add("fallover");
}
