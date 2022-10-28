let player1 = false,
  player2 = false;
let count = 0;
const img = document.querySelectorAll(".imagesize");
const newgame = document.querySelector(".newgame");
const currentbutton = document.querySelector(".btn");
const check = function (place, count) {
  var p = Number(place);
  switch (p) {
    case 1:
      if (score[0][0] == -1) {
        score[0][0] = 0;
        document.getElementById("1").src = "0.png";
      }
      break;
    case 2:
      console.log("hi");
      break;
    case 3:
      console.log("hi");
      break;
    case 4:
      console.log("hi");
      break;
    case 5:
      console.log("hi");
      break;
    case 6:
      console.log("hi");
      break;
    case 7:
      console.log("hi");
      break;
    case 8:
      console.log("hi");
      break;
    case 9:
      console.log("hi");
      break;
  }
};

for (let i = 0; i < img.length; i++) {
  if (
    img[i].addEventListener("click", function () {
      check(img[i].classList.value.substring(0, 2), count);
    })
  );
}
let score = ([3][3] = [
  [-1, -1, -1],
  [-1, -1, -1],
  [-1, -1, -1],
]);
let chance = 0;

/** start  method**/
let start = function () {
  chance = 0;
  player1 = true;
  player2 = false;
  currentbutton.textContent = "player-1";
  //score=0;
  for (var i = 1; i <= 9; i++) document.getElementById(`${i}`).src = "dot.png";
  score = [3][3] = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1],
  ];
};

newgame.addEventListener("click", function () {
  start();
});
