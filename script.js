const startGame = prompt("Enter '1' to start the game !!");
const grid = document.querySelector(".grid");
let score = 0;
const randomNum = Math.floor(Math.random() * 16) + 1;

const onClick = (event) => {
  console.log(event.srcElement.id);
};
const glow = setTimeout(() => {
  randomNum.style.backgroundColor = "#2a9d8f";
}, 1000);
const disappearGlow = setTimeout(() => {
  randomNum.style.backgroundColor = "#000000";
}, 2000);
// window.addEventListener("click", onClick);
document.getElementById("1").onclick = onClick;
document.getElementById("2").onclick = onClick;
document.getElementById("3").onclick = onClick;
document.getElementById("4").onclick = onClick;
document.getElementById("5").onclick = onClick;
document.getElementById("6").onclick = onClick;
document.getElementById("7").onclick = onClick;
document.getElementById("8").onclick = onClick;
document.getElementById("9").onclick = onClick;
document.getElementById("10").onclick = onClick;
document.getElementById("11").onclick = onClick;
document.getElementById("12").onclick = onClick;
document.getElementById("13").onclick = onClick;
document.getElementById("14").onclick = onClick;
document.getElementById("15").onclick = onClick;
document.getElementById("16").onclick = onClick;

if (startGame == 1) {
  glow;
} else {
  prompt("please Enter '1' to start the game !!");
}
