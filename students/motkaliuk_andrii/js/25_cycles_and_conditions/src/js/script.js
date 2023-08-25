// Мінімум

// Запитай у користувача його вік і визначи, ким він є: дитиною(0 - 11), підлітком(12 - 17), дорослим(18_59) або пенсіонером(60 ...), передбач можливість введення невірних даних.
const yourAgeString = prompt('Your age?',);
const yourAge = Number(yourAgeString);
if (isNaN(yourAge)) {
    console.log('Enter a Number');
} else {
    if (yourAge <= 11) {
        console.log('child');
    } else if (12 <= yourAge && yourAge <= 17) {
        console.log('teen');
    } else if (18 <= yourAge && yourAge <= 59) {
        console.log('adalt');
    } else if (60 <= yourAge) {
        console.log('pensioner')
    }
}

// Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші(1!, 2 @, 3 # і т.д).
const numString = prompt('Enter a Number',);
const num = Number(numString);
switch (num) {
    case 1:
        alert('!');
        break;
    case 2:
        alert('@');
        break;
    case 3:
        alert('#');
        break;
    case 4:
        alert('$');
        break;
    case 5:
        alert('%');
        break;
    case 6:
        alert('^');
        break;
    case 7:
        alert('&');
        break;
    case 8:
        alert('*');
        break;
    case 9:
        alert('(');
        break;
    case 0:
        alert(')');
        break;
    default:
        alert('Incorrect data');
}

// Підрахуй суму всіх чисел в заданому користувачем діапазоні.
const a = +prompt('Enter First Number',);;
const b = +prompt('Enter Second Number',);;
const n = (b - a) + 1;
console.log(n);
const sum = (n / 2) * (a + b);
console.log(sum);

// Запитай у користувача 2 числа і знайди найбільший спільний дільник.
const number1 = prompt('Enter First Number',);
const number2 = prompt('Enter Second Number',);
let c = number1;
let d = number2;
while (d !== 0) {
    const mem = c % d;
    c = d;
    d = mem;
}
const divider = c;
console.log('Найбільший спільний дільник чисел ', divider);

// Запитай у користувача число і виведи всі дільники цього числа.
const number = prompt('Enter First Number',);
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
    let dig = inp.split("");
    let reversedInp = dig.slice().reverse();
    let polidrom = true;
    for (let i = 0; i < dig.length; i++) {
        if (dig[i] !== reversedInp[i]) {
            polidrom = false;
            break;
        }
    }
    if (polidrom) {
        console.log('Polindrom!');
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
    console.log(purch3, '3% discount');
} else if (purch >= 300 && purch < 500) {
    const purch5 = purch * 0.95;
    console.log(purch5, '5% discount');
} else {
    const purch7 = purch * 0.93;
    console.log(purch7, '7% discount');
}


// Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів.
// При цьому також порахуй, скільки з них парних і непарних.Виведи статистику на екран.
// Враховуй, що достатньо однієї змінної(не 10) для введення чисел користувачем.
const totalNumbers = 10;
let positiveCount = 0, negativeCount = 0, zeroCount = 0;
let evenCount = 0, oddCount = 0;
const input = prompt(`Введіть 10 чисел, розділених комами:`);
const numbers = input.split(/[,]+/).map(Number);

for (const number of numbers) {
    if (number > 0) {
        positiveCount++;
        if (number % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    } else if (number < 0) {
        negativeCount++;
        if (number % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    } else {
        zeroCount++;
    }
}
console.log(input)
console.log(`Додатні: ${positiveCount}`);
console.log(`Від’ємні: ${negativeCount}`);
console.log(`Нулі: ${zeroCount}`);
console.log(`Парні: ${evenCount}`);
console.log(`Непарні: ${oddCount}`);

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


piramid = 5;
for (let i = 1; i <= piramid; i++) {
    let hash = '';
    for (let j = 1; j <= i; j++) {
        hash += '#';
    }
    console.log(hash);
}

const piramid2 = 5;
for (let i = 1; i <= piramid2; i++) {
    let spaces = '';
    let hashes = '';
    for (let j = 1; j <= piramid2 - i; j++) {
        spaces += ' ';
    }
    for (let k = 1; k <= i; k++) {
        hashes += '#';
    }

    console.log(spaces + hashes);
}


//     Максимум

// Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число > N, <N або == N ?». Залежно від того що вказав користувач, зменшуй діапазон.Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. Якщо користувач вказав, що його число > 50, то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач не вибере == N(буде корисним почитати про алгоритм: "бінарний пошук").
// Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.
// Запитай дату(день, місяць, рік) і виведи наступну за нею дату.Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.
