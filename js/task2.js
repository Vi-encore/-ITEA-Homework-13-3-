//2. Створити програму, яка виконує вставку елемента масив після елемента, значення якого вкаже користувач.
//    Опис:
//        п.1 Створіть довільний масив і заповніть його даними, наприклад:
//        var cars = ["Mitsubishi", "Honda", "Toyota", "Suzuki", "Audi", "BMW", "Honda", "Mercedes"];
//
//        п.2 Запитайте у користувача назву елемента масиву
//
//        п.3.1 Якщо в масиві такий елемент є - необхідно після нього вставити новий елемент, який користувач введе далі
//
//        п.3.2 Якщо в масиві такого елемента немає - додати до кінця масиву
//
//        п.4 Якщо в масиві є однакові елементи (п.2), програма повинна додавати тільки після першого знайденого елемента
//
//        п.5 Запитайте у користувача новий елемент для масиву лише у випадку, якщо попередній елемент був знайдений і
//        вставте його після знайденого елемента.

const cars = [
  "Mitsubishi",
  "Honda",
  "Toyota",
  "Suzuki",
  "Audi",
  "BMW",
  "Honda",
  "Mercedes",
];

function askUser() {
  const lower = [];
  cars.forEach((element) => {
    lower.push(element.toLowerCase());
  });

  let askMark = prompt("What car do you use?");
  askMark = askMark.trim().toLowerCase();

  if (lower.includes(askMark)) {
    let askMark2 = prompt("What car do you want to use?");
    askMark2 = askMark2.trim().toLowerCase();
    if (askMark2.length <= 3) {
      cars.splice(lower.indexOf(askMark) + 1, 0, askMark2.toUpperCase());
    } else {
      cars.splice(
        lower.indexOf(askMark) + 1,
        0,
        askMark2.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
          letter.toUpperCase()
        )
      );
    }

    console.log(cars);
  } else {
    if (askMark.length <= 3) {
      cars.push(askMark.toUpperCase());
    } else {
      cars.push(
        askMark.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
          letter.toUpperCase()
        )
      );
    }
    console.log(cars);
  }
}

askUser();
