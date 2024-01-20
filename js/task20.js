// <!-- ЗАДАЧА 4 -->
//     <div>
//       <p class="taskTitle">ЗАДАЧА 4</p>
//       <div id="box"></div>
//       <button id="decrease">Зменшити</button>
//       <button id="increase">Збільшити</button>
//     </div>

/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів,  "Збільшити" - більше на 10 пікселів.
*/

const boxElem = document.querySelector("#box");
const decreaseBtn = document.querySelector("#decrease");
const increaseBtn = document.querySelector("#increase");

decreaseBtn.addEventListener("click", onDecreaseBox);
increaseBtn.addEventListener("click", onIncreaseBox);

let boxWidth = parseInt(getComputedStyle(boxElem).width);
console.log(boxWidth);

function onDecreaseBox() {
    boxWidth -= 10;
    boxElem.style.width = boxWidth + "px";
    boxElem.style.height = boxWidth + "px";
};

function onIncreaseBox() {
    boxWidth += 10;
    boxElem.style.width = boxWidth + "px";
    boxElem.style.height = boxWidth + "px";
}