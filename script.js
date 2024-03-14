let timer = 6;
var hitrn = 0;
let score = 0;

function gethit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#Hit").textContent = hitrn;
}

function mainScore() {
  score += 10;
  document.querySelector("#Score").innerHTML = score;
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
      document.querySelector("#btmcontent").innerHTML = `<h1>Game End</h1>`;
      clearInterval(timerfn);
    }
  }, 1000);
}

document
  .querySelector("#btmcontent")
  .addEventListener("click", function (dets) {
    let clickedVal = dets.target.textContent;
    if (+clickedVal === hitrn) {
      mainScore();
      gethit();
      makebubble();

      console.log("radhe");
    }
  });
runtimer();
makebubble();
gethit();
