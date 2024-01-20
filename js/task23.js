// <!-- ЗАДАЧА 11 -->

/*
Завдання 11
Наведено список людей. Зроби фільтр на ім'я/прізвище,по події інпут
*/

const input = document.querySelector(".contactsFilter");
const contactsList = document.querySelector(".contacts");

const items = [...contactsList.children];
input.addEventListener("input", search);
function search(event) {
  const inputValue = event.target.value.toLowerCase();
  const filtred = items.filter((item) => {
    return item.textContent.toLowerCase().includes(inputValue);
  });
  contactsList.innerHTML = "";
  contactsList.append(...filtred);
}
