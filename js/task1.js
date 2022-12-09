// 1. Зробити власні приклади методів для масивів.

let arr = [1, "coin", true, "alphabet", "pillow"];

console.log(arr.join("-"));
console.log(arr.reverse());
console.log(arr.sort());
console.log(arr.slice(0, 4));
console.log(arr.concat(["diamond", 34, false]));
let removed = arr.splice(2, 1, "something");
console.log(removed);
console.log(arr);
arr.pop();
console.log(arr);
arr.push(134);
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift("yupp");
console.log(arr);
