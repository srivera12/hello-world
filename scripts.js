function onWindowLoad() {
  let store = 0;

  function increment(counter) {
    store = store + 1;
    counter.innerHTML = store;
  }

  function doAlert(counter) {
    increment(counter);
    alert("you are the 100th visitor. you win! click to claim your prize");
  }

  function click() {
    doAlert(counter);
  }

  // bind click event
  document.querySelector("#clickbait").addEventListener("click", click);

  const counter = document.querySelector("#counter");
  counter.innerHTML = store;

  document.querySelector("#dabutton").addEventListener("click", increment);
}
window.onload = null;
window.onload = onWindowLoad;
