// Создать произвольную кнопку. Создать массив произвольный больше 10 элементов и при нажатии на кнопку возвращать 5 элемент этого массива с выводом на странице

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; //создаем массив

function getting() {
  document.getElementById("2").innerHTML = a[5]; //выводим 5 элемент массива в наш div
}

// Создать еще одну кнопку и массив из которого нужно вывести все четные числа (для перебора используйте массив)

function evendigit() {
  let even = a.filter((item) => item % 2 == 0);
  document.getElementById("2").innerHTML = even;
}

// Аналогично 2 задаче, только уже наоборот вывести все нечетные числа

function odddigit() {
  let odd = a.filter((item) => item % 2 != 0);
  document.getElementById("2").innerHTML = odd;
}

// Создать двумерный массив, создать кнопку, чтобы по клику вывести все элементы вложенного массива в обратном порядке

function reversing() {
  let c = []; // Пустой массив в который будем реверсить данные
  let b = []; //Исходный массив
  let input = 3;
  let count = 1;

  // Заполняем массив цифрами
  for (i = 0; i <= input - 1; i++) {
    let childArray = [];

    for (y = 0; y <= input - 1; y++) {
      childArray.push(count);
      count += 1;
    }
    b.push(childArray);
  }

  // Проверяем
  console.log(JSON.parse(JSON.stringify(b)));

  //Переворачиваем
  for (i = b.length - 1; i >= 0; i--) {
    c.push(b[i].reverse());
  }
  // Любуемся результатом
  console.log(c);
}
