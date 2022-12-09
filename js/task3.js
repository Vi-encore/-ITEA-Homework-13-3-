//3. Створити багатовимірний масив, розмір масиву отримати від користувача.
//    Кожен непарний елемент масиву заповнити підмасивом зі значенням 'odd', а парний - 'even'.
//    Розмір кожного вкладеного масиву – 3.
//
//    Для массива размером 3
//    ['odd', 'odd', 'odd']       // 1й елемент
//    ['even', 'even', 'even']    // 2й елемент
//    ['odd', 'odd', 'odd']       // 3й елемент
//
//    let arr = [
//        ['odd', 'odd', 'odd'],
//        ['even', 'even', 'even'],
//        ['odd', 'odd', 'odd']
//    ]

function oddOrEven() {
  let askNumber = +prompt("Enter some number:");

  const odd = ["odd", "odd", "odd"];
  const even = ["even", "even", "even"];
  let result = [];

  for (let i = 1; i <= askNumber; i++) {
    if (i === 0) {
      continue;
    } else if (i % 2 === 0) {
      result.push(even);
    } else {
      result.push(odd);
    }
  }

  //Я подумала, що можна трохи ускладнити собі задачу і спробувати заповнити підмасиви стрінгами у тій кількості,
  //яка дорівнює введеному користувачем числу. Ось таке рішення в мене вийшло.
  //Воно поки сире, яле працює.

  const oddChange = [];
  const evenChange = [];
  let resultChange = [];
  for (let z = 1; z <= askNumber; z++) {
    oddChange.push(0);
    evenChange.push(0);
  }

  for (let i = 0; i <= askNumber; i++) {
    if (i === 0) {
      continue;
    } else if (i % 2 === 0) {
      for (let q = 1; q <= askNumber; q++) {
        evenChange.fill("even");
      }
      resultChange.push(evenChange);
    } else {
      for (let q = 1; q <= askNumber; q++) {
        oddChange.fill("odd");
      }

      resultChange.push(oddChange);
    }
  }

  console.log(result);
  console.log(resultChange);
}

oddOrEven();
