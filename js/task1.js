//  Використовуючи функцію if...else,
//   *? напишіть код, який запитуватиме:
//   *? "Яка офіційна назва JavaScript?"
//   *? Якщо користувач вводить "ECMAScript",
//   *? то показати через alert: "Вірно!"
//   *? інакше відобразити:"Не знаєте? ECMAScript!"

const userInput = prompt(`Яка офіційна назва JavaScript?`).trim()
const TRUE_USER_INPUT = "ECMAScript"; //талонне значення
console.log(userInput);
if (userInput === TRUE_USER_INPUT) {
    alert("Вірно!");
} else {
    alert("Не знаєте? ECMAScript!");
}
