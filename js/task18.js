// <!-- ЗАДАЧА 2 -->
//     <div>
//       <p class="taskTitle">ЗАДАЧА 2</p>
//       <button id="swapButton">SWAP ME</button>
//       <input id="leftSwapInput" type="text" value="???" />
//       <input id="rightSwapInput" type="text" value="!!!" />
//     </div>
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

const btnElem = document.querySelector("#swapButton");
const leftInputElem = document.querySelector("#leftSwapInput");
const rightInputElem = document.querySelector("#rightSwapInput");

btnElem.addEventListener("click", onInputValue);

function onInputValue() {
    const leftInputValue = leftInputElem.value;
    const rightInputValue = rightInputElem.value;
    leftInputElem.value = rightInputValue;
    rightInputElem.value = leftInputValue;
}