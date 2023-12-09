/**
 *? Напишіть функцію updateObject, яка приймає об'єкт та повертає
 *? новий об'єкт без вказаного параметра
 *? Очікуваний результат updateObject({a: 1, b: 2, c: 3}, 'b') => {a: 1}
 */

 const obj = { a: 1, b: 2, c: 3 };
 function updateObject(baseObj, key) {
   
    const newObj = {...baseObj}
    delete newObj[key];
    return newObj;
 }
  const result= updateObject(obj, 'b');
 console.log(result);
 console.log(obj);

 