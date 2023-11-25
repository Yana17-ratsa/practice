// *? Дано рядок, що складається із символів, наприклад, 'abcde'.
//   *? Перевірте, що першим символом цього рядка є буква 'a'.
//   *? Якщо це так - виведіть 'так', інакше виведіть 'ні'.
const str = 'abcde';
function checkLet (str, firstLet) {
 console.log(str[0]);
 console.log(firstLet);   
 if(str.charAt(0) === firstLet) {
return 'так!'
 } 
 return 'ні'
}

console.log(checkLet(str, 'a'));