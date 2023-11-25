/**
 *? Напишіть через свіч пошук автора мови програмування.
 *? Пишемо назву мови у шаблонному рядку отримує відповідь
 *? мова та автор
 *? PHP Расмус Лердорф
 *? C# група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота
 *? Swift Кріс Латтнер
 *? JS Брендан Ейх
 *? Java Джеймс Гослінг
 *? Python Гвідо ван Россум
 */

const userInput = prompt("Введіть мову програмування").trim();
let author;

switch (userInput) {
  case "PHP":
    author = "Расмус Лердорф";
    break;
  case "C#":
    author =
      "група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота";
    break;
  case "Swift":
    author = "Кріс Латтнер";
    break;
  case "JS":
    author = "Брендан Ейх";
    break;
  case "Java":
    author = "Джеймс Гослінг";
    break;
  case "Python":
    author = "Гвідо ван Россум";
    break;

    default:
        author = "такого немає";
    break;
}

console.log(author);
