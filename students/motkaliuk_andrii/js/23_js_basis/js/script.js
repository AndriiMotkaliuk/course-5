// Створи HTML - файл, в ньому пропиши всі можливі способи використання JS;
// Тобі потрібно зберігати ім’я та прізвище в змінній, придумай до 4 - х імен змінних, що потрібні тобі для даної задачі.Також напиши до 5 неправильних імен(неправильні імена повинні бути закоментовані);
const firstName = 'Andrii';
const secondName = 'Motkaliuk';
const space = ' ';
const fullName = firstName + space + secondName;
console.log(firstName);
console.log(secondName);
console.log(fullName);

// Вкажи всі можливі способи коментування коду;
//1
/*2*/
/**3 */

// Які стилі написання імен змінних ти знаєш ?
//Camel Case
const thirdName = 'Andrii';
// Snake Case
const third_name = 'Andrii';
// Pascal Case
const ThirdName = 'Andrii';

// Запитай ім’я користувача та виведи у відповідь “Привіт, * ім’я *”;
const firstName2 = prompt('What is your name?');
const helloHero = 'Hello, ' + firstName2;
console.log(helloHero);

// Запитай рік народження користувача, порахуй його / її вік і виведи результат.Поточний рік вкажи в коді як константу;
const bornYear = prompt('What year were you born?',);
console.log(bornYear);
const actualYear = 2023;
const age = actualYear - bornYear;
console.log(age);

// Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата
const sideLenght = prompt('What is the length of the side of the square?',);
console.log(sideLenght);
const p = sideLenght * 4;
console.log(p);

// Запитай у користувача радіус кола і виведи площу такої окружності.
const r = prompt('What is R?',);
console.log(r);
const PI = Math.PI;
console.log(PI);
const S = PI * (r ** 2);
console.log(S);
// Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися.Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.
const lenght = prompt('What is lenght between cities?',);
const time = prompt('How many hours do you want to get there?',);
const speed = lenght / time;
console.log(lenght);
console.log(time);
console.log(speed);

// Реалізуй конвертор валют.Користувач вводить долари, програма переводить їх в євро.Курс валют зберігається в константі.
const dollar = prompt('How many dollars you deposit?',);
const courseDollarEuro = 0.95;
const euro = dollar * courseDollarEuro;
console.log(euro);
