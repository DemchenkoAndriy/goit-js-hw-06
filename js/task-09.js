// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const btnChangeColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");
const body = document.querySelector("body");


btnChangeColor.addEventListener('click',
  e => {
    const newColor = getRandomHexColor();
    spanColor.textContent = "-" + newColor;
    body.style.backgroundColor = newColor;
  });


