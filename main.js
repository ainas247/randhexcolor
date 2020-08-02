let hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let btn = document.getElementById("btn");
let display = document.getElementById("hexnumber");

btn.addEventListener("click", getColor);
function getColor() {
  let hexNum = "#";
  for (let i = 0; i < 6; i++) {
    let randomNum = Math.floor(Math.random() * hexCode.length);
    hexNum += hexCode[randomNum];
    console.log(hexNum);
  }
  document.body.style.backgroundColor = hexNum;
  display.innerHTML = hexNum;
}
