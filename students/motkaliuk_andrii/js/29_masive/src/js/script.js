// Мінімум

// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума.
// Написати кілька функцій для роботи з таким масивом:
// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
// Покупка продукту.Функція приймає назву продукту і відзначає його як придбаний.

//     Норма
// Видалення продукту зі списку(видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
// Додавання покупки в список.Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову.
// При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.

function createPurchase(purchName, quantity, isBought, price) {
    return {
        purchName: purchName,
        quantity: quantity,
        isBought: isBought,
        price: price,
        sum: quantity * price
    }
}

const purchaseList = [
    createPurchase("milk", 2, false, 25),
    createPurchase("bread", 1, true, 15),
    createPurchase("eggs", 12, true, 3),
    createPurchase("fruit", 5, false, 10)
];

function getListbyStatus(list) {
    list.sort((a, b) => a.isBought - b.isBought);
    return list;
}

function setPurchaseStatus(list, productName) {
    const purchase = list.find(item => item.purchName === productName);
    if (purchase) {
        purchase.isBought = true;
        purchase.sum = purchase.quantity * purchase.price;
        console.log('Продукт ' + productName + ' придбано.');
    } else {
        console.log('Продукт ' + productName + ' не знайдено в списку.');
    }
}

function deletePurchaseItem(list, itemName) {
    return list.filter(item => item.purchName !== itemName);
}

function addNewPurchase(list, newPurchName, newQuantity, price) {
    const existingPurchase = list.find(item => item.purchName === newPurchName);

    if (existingPurchase) {
        existingPurchase.quantity += newQuantity;
        existingPurchase.sum = existingPurchase.quantity * existingPurchase.price;
        console.log('Кількість продукту ' + newPurchName + ' збільшено.');
    } else {
        const newPurchase = createPurchase(newPurchName, newQuantity, false, price);
        list.push(newPurchase);
        console.log('Продукт ' + newPurchName + ' додано до списку покупок.');
    }
}

console.log("Список покупок до змін:", purchaseList);
console.log("Список покупок після сортування:", getListbyStatus(purchaseList));

setPurchaseStatus(purchaseList, 'fruit');
setPurchaseStatus(purchaseList, 'fish');
console.log("Список покупок після встановлення статусу куплено:", purchaseList);

const editedPurchaseList = deletePurchaseItem(purchaseList, 'eggs');
console.log("Список покупок після видалення продукту:", editedPurchaseList);

addNewPurchase(purchaseList, 'bread', 2, 15);
addNewPurchase(purchaseList, 'newItem', 3, 7);
console.log("Список покупок після додавання нових продуктів:", purchaseList);

// Максимум

// Підрахунок суми всіх продуктів(враховуючи кількість кожного) в списку.
// Підрахунок суми всіх(не) придбаних продуктів.
// Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)
