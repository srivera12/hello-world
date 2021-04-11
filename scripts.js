let store = 0;
function increment() {
  store = store + 1;
  counter.innerHTML = store;
}
function doAlert() {
  increment();
  alert("you are the 100th visitor. you win! click to claim your prize");
}
function onWindowLoad() {
  // bind click event
  document.querySelector("#clickbait").addEventListener("click", doAlert);

  const counter = document.querySelector("#counter");
  counter.innerHTML = store;

  document.querySelector("#dabutton").addEventListener("click", increment);
}
window.onload = onWindowLoad;
