// Мінімум

// Запитай у користувача його вік і визначи, ким він є: дитиною(0 - 11), підлітком(12 - 17), дорослим(18_59) або пенсіонером(60 ...), передбач можливість введення невірних даних.
const yourAgeString = prompt('Your age?',);
const yourAge = Number(yourAgeString);
if (isNaN(yourAge)) {
    console.log('Enter a Number');
} else {
    if (yourAge <= 11) {
        console.log('child');
    }
    if (yourAge >= 12 && yourAge <= 17) {
        console.log('teen');
    }
    if (yourAge >= 18 && yourAge <= 59) {
        console.log('adalt');
    }
    if (yourAge >= 60) {
        console.log('pensioner')
    }
}

// Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші(1!, 2 @, 3 # і т.д).
const numString = prompt('Enter a Number',);
const num = Number(numString);
switch (num) {
    case 1:
        console.log('!');
        break;
    case 2:
        console.log('@');
        break;
    case 3:
        console.log('#');
        break;
    case 4:
        console.log('$');
        break;
    case 5:
        console.log('%');
        break;
    case 6:
        console.log('^');
        break;
    case 7:
        console.log('&');
        break;
    case 8:
        console.log('*');
        break;
    case 9:
        console.log('(');
        break;
    case 0:
        console.log(')');
        break;
    default:
        console.log('Incorrect data');
}

// Підрахуй суму всіх чисел в заданому користувачем діапазоні.
const a = 2;
const b = 54;
let sum = 0;
for (let i = a; i <= b; i++) {
    sum = sum + i;
}
console.log(sum)

// Запитай у користувача 2 числа і знайди найбільший спільний дільник.
const number1 = +prompt('Enter First Number',);
const number2 = +prompt('Enter Second Number',);
let c, d;
if (number1 > number2) {
    c = number1;
    d = number2;
} else {
    d = number1;
    c = number2;
}

while (d !== 0) {
    const mem = c % d;
    c = d;
    d = mem;
}

// console.log('Найбільший спільний дільник чисел ', c);

// Запитай у користувача число і виведи всі дільники цього числа.
const number = +prompt('Enter First Number',);
let h = number;
for (let i = 1; i <= h; i++) {
    if (h % i === 0) {
        console.log(i);
    }
}

//     Норма

// Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
const inp = prompt('Input 5-dig number');
if (inp.length !== 5) {
    console.log('Rewrite. Incorrect data');
} else {
    const number = parseInt(inp);

    const digit1 = Math.floor(number / 10000);
    const digit2 = Math.floor((number % 10000) / 1000);
    const digit3 = Math.floor((number % 1000) / 100);
    const digit4 = Math.floor((number % 100) / 10);
    const digit5 = number % 10;

    if (digit1 === digit5 && digit2 === digit4) {
        console.log('Polindrom');
    } else {
        console.log('NOT a polindrom!');
    }
}

// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3 %;
// від 300 до 500 - 5 %;
// від 500 і вище - 7 %.
const purch = +prompt('Input purchase value',);
if (purch < 200) {
    console.log(purch, 'No discount');
} else if (purch >= 200 && purch < 300) {
    const purch3 = purch * 0.97;
    const discount3 = purch * 0.03;
    console.log(purch3, '-3% discount; ', 'discount: ', discount3);
} else if (purch >= 300 && purch < 500) {
    const purch5 = purch * 0.95;
    const discount5 = purch * 0.05;
    console.log(purch5, '-5% discount; ', 'discount: ', discount5);
} else {
    const purch7 = purch * 0.93;
    const discount7 = purch * 0.07;
    console.log(purch7, '-7% discount; ', 'discount: ', discount7);
}


// Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів.
// При цьому також порахуй, скільки з них парних і непарних.Виведи статистику на екран.
// Враховуй, що достатньо однієї змінної(не 10) для введення чисел користувачем.
const totalNumbers = 10;
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < totalNumbers; i++) {
    const number = parseFloat(prompt('Введіть число ' + (i + 1)));

    if (isNaN(number)) {
        console.log('Ви ввели не число. Спробуйте ще раз.');
        i--;
    } else {
        if (number > 0) {
            positiveCount++;
        } else if (number < 0) {
            negativeCount++;
        } else {
            zeroCount++;
        }

        if (number % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
}

console.log('Додатні: ' + positiveCount);
console.log('Відємні: ' + negativeCount);
console.log('Нулі: ' + zeroCount);
console.log('Парні: ' + evenCount);
console.log('Непарні: ' + oddCount);

// Зацикли відображення днів тижня таким чином: «День тижня.Хочеш побачити наступний день ?»
//  і так до тих пір, поки користувач натискає OK.
const days = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
let dayOfWeek = 0;
while (true) {
    const userResponse = confirm(`${days[dayOfWeek]}. Хочеш побачити наступний день?`);
    if (!userResponse) {
        break;
    }
    dayOfWeek = (dayOfWeek + 1) % 7;
}


const piramid = 5;
let result = '';
for (let i = 1; i <= piramid; i++) {
    let hash = '';
    for (let j = 1; j <= i; j++) {
        hash += '#';
    }
    result += hash + '\n';
}
console.log(result);

const piramid2 = 5;
let result2 = '';

for (let i = 1; i <= piramid2; i++) {
    let spaces = '';
    let hashes = '';
    for (let j = 1; j <= piramid2 - i; j++) {
        spaces += ' ';
    }
    for (let k = 1; k <= i; k++) {
        hashes += '#';
    }
    result2 += spaces + hashes + '\n';
}

console.log(result2);


//     Максимум

// Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число > N, <N або == N ?». Залежно від того що вказав користувач, зменшуй діапазон.Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. Якщо користувач вказав, що його число > 50, то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач не вибере == N(буде корисним почитати про алгоритм: "бінарний пошук").
// Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.
// Запитай дату(день, місяць, рік) і виведи наступну за нею дату.Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.
