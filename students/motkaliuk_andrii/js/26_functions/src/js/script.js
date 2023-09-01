// Мінімум

// Напиши всі можливі варіанти створення функцій.
//Це ті які знаю)
const add = function (x, y)  //Function Expression
function multiply(x, y)  //Function Declaration
const subtract = (x, y) => x - y;  //Arrow Function

// Створи функцію, яка буде виводити кількість переданих їй аргументів
function sumInput() {
    console.log(arguments.length);
}
sumInput(1, 2, 3, 'hello')
sumInput(1, 2, 3, 'hello', 0)

// Напиши функцію, яка приймає 2 числа і повертає:
// -1, якщо перше число менше, ніж друге;
// 1 - якщо перше число більше, ніж друге;
// 0 - якщо числа рівні.
function comparing(aa, bb) {
    if (aa < bb) {
        console.log(-1);
    } else if (aa > bb) {
        console.log(1);
    } else {
        console.log(0);
    }
}
comparing(1, 2);
comparing(3, 2);
comparing(2, 2);

// Напиши функцію, яка обчислює факторіал переданого їй числа.
function factorial(nn) {
    if (nn === 0 || nn === 1) {
        return 1;
    } else {
        return nn * factorial(nn - 1);
    }
}
const hy = factorial(6);
console.log(hy);

// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число.
// Наприклад: цифри 1, 4, 9 перетворяться в число 149.
function together(di1, di2, di3) {
    return Number(di1.toString() + di2.toString() + di3.toString())
}
const res = together(1, 4, 9);
console.log(res);

// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу.
// Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
function area(s1, s2) {
    if (s2 === undefined) {
        return s1 * s1;
    } else {
        return s1 * s2;
    }
}
const res2 = area(5, 4);
const res3 = area(5);
console.log(res2);
console.log(res3);


//     Норма

// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”.
function isPerfectNumber(num) {
    if (num <= 0) {
        return false;
    }

    let sumOfDivisors = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sumOfDivisors = sumOfDivisors + i;
        }
    }
    return sumOfDivisors === num;
}
console.log(isPerfectNumber(28));
console.log(isPerfectNumber(17));

// Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону,
// і виводить тільки ті числа з діапазону, які є досконалими.Використовуй написану раніше функцію,
// щоб дізнатися, чи є це число досконалим.
function findPerfectNumbers(min, max) {
    for (let number = min; number <= max; number++) {
        if (isPerfectNumber(number)) {
            console.log(number);
        }
    }
}
findPerfectNumbers(1, 9000);
