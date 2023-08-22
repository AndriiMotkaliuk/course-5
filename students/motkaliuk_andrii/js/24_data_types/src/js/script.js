

// Мінімум

// Виконай додавання 0, 1 і 0, 2 добийся математично правильної відповіді.
const x = 0.1;
const y = 0.2;
const sum = x + y;
const z = +sum.toFixed(2)
console.log(z)

// Виконай додавання рядка "1" і цифри 2(обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
const a = "1";
const b = 2;
const c = Number(a) + b;
console.log(c)

// Користувач вказує обсяг флешки в Гб.Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
const p = +prompt('Обєм сховища в Гб?',);
const f = 1024;
const d = 820;
const resalt = (p * f) / 820;
const roundResalt = resalt.toFixed(0);
console.log(roundResalt)

//     Норма

// Користувач вводить суму грошей в гаманці і ціну однієї шоколадки.Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
const money = +prompt('Кількість грошей, грн?',);
const price = +prompt('Вартість шоколадки, грн?',);
const amount = (money / price).toFixed(0);
const extra = money % price;
console.log(amount, extra);
alert(amount + " шоколадок; " + extra + ' грн здачі');

// Запитай у користувача тризначне число і виведи його задом наперед.Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).
const num = +prompt('Введіть тризначне число',);
const num1 = ~~(num % 10);
const num2 = ~~(num / 10) % 10;
const num3 = ~~(num / 100);
console.log(num1, num2, num3);
const reverseNamber = (num1 * 100) + (num2 * 10) + num3;
console.log(reverseNamber);
alert(reverseNamber);

// Максимум

// Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5 % річних.Вивести суму нарахованих відсотків.
const gros = +prompt('Введіть суму депозиту на 2 місяці під 5% річних',);
const stavka = (0.05 / 12) * 2;
const pers = gros * stavka;
console.log(pers.toFixed(2));
alert(pers.toFixed(2));

// Що повернуть вирази:
// 2 && 0 && 3
//поверне false оскільки 2 і 3 дадуть true, а 0 - false. Потрібно щоб всі операнди були true, щоб отримати true.

// 2 || 0 || 3
//поверне true оскільки 2 і 3 дадуть true, а 0 - false. Потрібно щоб хоча б одна з операнд була true, щоб отримати true.

// 2 && 0 || 3
//поверне true оскільки умова "2 і 0" дадуть false, бо 0 - false. А 3 - дає true. Потрібно щоб хоча б одна умова була true(тут  це 3), щоб отримати true.
