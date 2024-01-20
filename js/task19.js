/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/
// <!-- ЗАДАЧА 3 -->
//     <div>
//       <p class="taskTitle">ЗАДАЧА 3</p>
//       <input id="passwordInput" type="text" />
//       <button id="passwordButton">Приховати</button>
//     </div>

const input = document.querySelector("#passwordInput");
const toggleButton = document.querySelector("#passwordButton");
function toggleInput() {
  if (input.getAttribute("type") === "password") {
    input.setAttribute("type", "text");
    toggleButton.textContent = "Приховати";
  } else {
    input.setAttribute("type", "password");
    toggleButton.textContent = "Розкрити";
  }
}

toggleButton.addEventListener("click", toggleInput);
