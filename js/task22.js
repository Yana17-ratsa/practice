/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/
// <!-- ЗАДАЧА 7 -->
//     <div>
//       <p class="taskTitle">ЗАДАЧА 7</p>
//       <div class="outerCircle">
//         <div class="innerCircle"></div>
//       </div>
//     </div>

const divElem = document.querySelector(".outerCircle");
divElem.addEventListener("click", onOuterCircle);

function onOuterCircle() {
  if ((divElem.style.position === "absolute")) {
    divElem.style.position = "static";
  } else {
    divElem.style.position = "absolute";
  }
  window.addEventListener("mousemove", onWindowMove);
}

function onWindowMove(e) {
  let x = e.pageX;
  let y = e.pageY;
  divElem.style.top = (y-15) + "px";
  divElem.style.left = (x-15) + "px";
}
