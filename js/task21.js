/*
Завдання 5
Додайте слухач кліку на window і визначте чи клікнув користувач у дів з id="place".
*/
const place = document.querySelector("#place");
window.addEventListener("click", (event) => {
  console.log(event.target === place ? true : false);
});
