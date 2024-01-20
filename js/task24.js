/*
Завдання 13
Коло має зникати при наведенні на нього.
При цьому позиція сусідніх кіл має залишатися незмінною.
*/

// <!-- ЗАДАЧА 13 -->
//     <p class="taskTitle">ЗАДАЧА 13</p>
//     <ul class="grid">
//       <li class="gridItem"></li>
//       <li class="gridItem"></li>
//       <li class="gridItem"></li>
//       <li class="gridItem"></li>
//       <li class="gridItem"></li>
//       <li class="gridItem"></li>
//       <li class="gridItem"></li>
//       <li class="gridItem"></li>
//       <li class="gridItem"></li>
//     </ul>

const ulElem = document.querySelector(".grid");

ulElem.addEventListener("mouseover", onLiElem);

function onLiElem(e) {
    if (e.target.classList.contains("gridItem")) {
        e.target.style.opacity = "0";
    };
};

ulElem.addEventListener("mouseout", outLiElem);

function outLiElem(e) {
  if (e.target.classList.contains("gridItem")) {
    e.target.style.opacity = "1";
  }
}

