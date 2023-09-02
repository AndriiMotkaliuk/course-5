// Мінімум
console.log('================Task1=======================');
// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
const carInfo = {
    brand: "Audi",
    model: "A6",
    year: 2006,
    avaregeSpeed: 120,
    fuelSpace: 60,
    avaregeFuelCons: 8.2,
    drivers: 'Andrii',
};

console.log('==================1=======================');
// Метод, який виводить на екран інформацію про автомобіль.
function getCarInfo() {
    const info = 'brand';
    for (let info in carInfo) {
        console.log(info, carInfo[info])
    }
    console.log(info, carInfo[info])
};
getCarInfo()

console.log('==================2=======================');
// Додавання ім’я водія у список
function addNewDriver(newDriver) {
    carInfo.drivers = carInfo.drivers + ', ' + newDriver;
};
addNewDriver('Viktor');
addNewDriver('Oleh');
console.log(carInfo.drivers);

console.log('==================3=======================');
// Перевірка водія на наявність його ім’я у списку
function isDriver(driver) {
    if (carInfo.drivers.includes(driver)) {
        console.log('present');
    } else {
        console.log('missing')
    }
}
isDriver('Viktor');
isDriver('Taras');

console.log('==================4=======================');
// Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю.
// Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.
function getFuelAndTimeAmountNeeded(distance) {
    const travelTimeWithoutBreaks = distance / carInfo.avaregeSpeed;
    const numberOfBreaks = Math.floor(travelTimeWithoutBreaks / 4);
    const breaksDuration = numberOfBreaks * 1;
    const totalTimeWithBreaks = travelTimeWithoutBreaks + breaksDuration;

    const fuelAmountNeeded = distance / 100 * carInfo.avaregeFuelCons;
    console.log(totalTimeWithBreaks.toFixed(2) + ' hours,', fuelAmountNeeded.toFixed(2) + ' liters');
}
getFuelAndTimeAmountNeeded(858);


//     Норма
console.log('================Task2=======================');
// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// Створення об'єкту для представлення часу
function createTime(hours, minutes, seconds) {
    return {
        hours: hours || 0,
        minutes: minutes || 0,
        seconds: seconds || 0,
        toString: function () {
            return (
                this.hours.toString().padStart(2, '0') +
                ':' +
                this.minutes.toString().padStart(2, '0') +
                ':' +
                this.seconds.toString().padStart(2, '0')
            );
        },
        addSeconds: function (seconds) {
            this.seconds = this.seconds + seconds;
            this.normalize();
        },
        addMinutes: function (minutes) {
            this.minutes = this.minutes + minutes;
            this.normalize();
        },
        addHours: function (hours) {
            this.hours = this.hours + hours;
            this.normalize();
        },
        normalize: function () {
            while (this.seconds >= 60) {
                this.seconds = this.seconds - 60;
                this.minutes = this.minutes + 1;
            }
            while (this.minutes >= 60) {
                this.minutes = this.minutes - 60;
                this.hours = this.hours + 1;
            }
            while (this.hours >= 24) {
                this.hours = this.hours - 24;
            }
        },
    };
}

console.log('==================1=======================');
// Для виведення часу на екран.
const currentTime = createTime(12, 23, 45);
console.log('Поточний час:', currentTime.toString());

console.log('==================2=======================');
// Зміни часу на передану кількість секунд.
currentTime.addSeconds(15);
console.log('Час після додавання 15 секунд:', currentTime.toString());

console.log('==================3=======================');
// Зміни часу на передану кількість хвилин.
currentTime.addMinutes(30);
console.log('Час після додавання 30 хвилин:', currentTime.toString());

console.log('==================4=======================');
// Зміни часу на передану кількість годин.
currentTime.addHours(4);
console.log('Час після додавання 4 годин:', currentTime.toString());

// Враховуйте, що в останніх 3 - х функціях, при зміні однієї частини часу, може змінитися і інша.
// Наприклад: якщо до часу «20: 59: 45» додати 30 секунд, то повинно вийти «21: 00: 15», а не «20: 59: 75».
// Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.


//         Максимум

// Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
// Складання 2 - х об'єктів-дробів.
// Віднімання 2 - х об'єктів-дробів.
// Множення 2 - х об'єктів-дробів.
// Ділення 2 - х об'єктів-дробів.
// Скорочення об'єкта-дробу.
