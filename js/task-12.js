/**
  *? Записати масив, const arr = ['BEST', 'the', 'foo', 'is', 'JS' ]
  *? розгорнути масив,
  *? вирізати foo,
  *? перевести його в рядок розділений пробілами
  */
 
const arr = ["BEST", "the", "foo", "is", "JS"];
const newArr = arr.reverse();
const spliceFoo = newArr.splice(newArr.indexOf("foo"), 1);
const strinfArr = newArr.join(" ");
console.log(strinfArr);

const str = [];
if (str.length === 0) {
  console.log("Масив порожній");
}
