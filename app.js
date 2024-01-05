let start = document.getElementById("start");
let stop = document.getElementById("stop");
const randomColor = function () {
  let hexRange = "0123456789ABCDEF";
  let hexCode = "#";
  for (i = 0; i < 6; i++) {
    hexCode += hexRange[Math.floor(Math.random() * 16)];
  }
  return hexCode;
};
console.log(randomColor());
let intervalId;
start.addEventListener("click", () => {
  if (!intervalId) {
    intervalId = setInterval(bgColor, 1000);
  }
  function bgColor() {
    document.body.style.background = randomColor();
    console.log(randomColor());
  }
});
stop.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});

alert("click on the start button ");
