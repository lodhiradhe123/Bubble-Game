let timer = 60;

function gethit() {
  var rn = Math.floor(Math.random() * 10);
  document.querySelector("#Hit").textContent = rn;
}
function makebubble() {
  let clutter = "";
  for (let i = 1; i <= 120; i++) {
    let unq = Math.floor(Math.random() * 10);
    clutter += `<div id="bubble">${unq}</div>`;
  }
  const bubble = document.querySelector("#btmcontent");
  bubble.innerHTML = clutter;
}

function runtimer() {
  var timerfn = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#Timer").innerHTML = timer;
    } else {
      clearInterval(timerfn);
    }
  }, 1000);
}
runtimer();
makebubble();
gethit();
